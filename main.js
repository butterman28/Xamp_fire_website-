// website/main.js - Main application logic (ES Module)
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
import { SECTION_SUMMARIES, PROJECTS } from './data.js';

// DOM-READY INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Expose functions to window for inline HTML handlers
    window.showDownloadModal = showDownloadModal;
    window.closeDownloadModal = closeDownloadModal;
    window.togglePlatform = togglePlatform;
    window.handleDownload = handleDownload;
    window.showFeedbackModal = showFeedbackModal;
    window.closeFeedbackModal = closeFeedbackModal;

    // Setup global event listeners
    document.addEventListener('click', (e) => {
        if (e.target.id === 'downloadModal') closeDownloadModal();
        if (e.target.id === 'feedbackModal') closeFeedbackModal();
    });

    // Setup feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Render projects
    renderProjectsBySection();
});

// RENDER PROJECTS BY SECTION
function renderProjectsBySection() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // Group projects by section
    const sections = {};
    PROJECTS.forEach(project => {
        if (!sections[project.section]) {
            sections[project.section] = {
                name: project.sectionName,
                projects: []
            };
        }
        sections[project.section].projects.push(project);
    });

    // Render sections in order
    const sectionOrder = ['officeautos', 'devsection'];
    let html = '';

    sectionOrder.forEach(sectionKey => {
        if (sections[sectionKey]) {
            const section = sections[sectionKey];
            const summary = SECTION_SUMMARIES[sectionKey];
            
            // Section header with summary
            html += `
                <div class="col-span-full">
                    <div class="mb-8">
                        <div class="flex items-center gap-3 mb-4">
                            <h3 class="text-2xl font-bold text-gray-900">${summary.title || section.name}</h3>
                            <span class="text-2xl">${summary.emoji || '✨'}</span>
                        </div>
                        <div class="h-1 w-20 bg-purple-600 rounded-full mb-4"></div>
                        <p class="text-gray-700 leading-relaxed max-w-3xl">
                            ${summary.summary || ''}
                        </p>
                    </div>
                </div>
            `;

            // Section projects
            section.projects.forEach(project => {
                html += createProjectCard(project);
            });
        }
    });

    container.innerHTML = html;

    // Attach event listeners to download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.currentTarget.getAttribute('data-project-id');
            showDownloadModal(parseInt(projectId));
        });
    });
}

// CREATE PROJECT CARD HTML
function createProjectCard(project) {
    return `
        <div class="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div class="relative">
                <img src="${project.imageUrl}" alt="${project.name}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/400x200/667eea/ffffff?text=${encodeURIComponent(project.name)}'">
                <span class="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    ${project.category}
                </span>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold text-gray-900">${project.name}</h3>
                    <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                        ${project.version}
                    </span>
                </div>
                <p class="text-gray-600 mb-4">${project.description}</p>
                
                <div class="mb-4">
                    <p class="text-sm font-semibold text-gray-700 mb-2">Features:</p>
                    <ul class="space-y-1">
                        ${project.features.map(feature => `
                            <li class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-check text-green-500 mr-2 text-xs"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div class="text-sm text-gray-500">
                        <i class="fas fa-download mr-1"></i> ${project.size}
                    </div>
                    <button data-project-id="${project.id}" class="download-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition inline-flex items-center">
                        <i class="fas fa-download mr-2"></i> Download
                    </button>
                </div>
            </div>
        </div>
    `;
}

// DOWNLOAD MODAL
function showDownloadModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    let modal = document.getElementById('downloadModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'downloadModal';
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden';
        modal.innerHTML = `
            <div class="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center p-6 border-b">
                    <h3 class="font-bold text-xl">${project.name} - Download</h3>
                    <button class="close-download-modal text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div id="downloadContent" class="p-6">
                    <!-- Content injected below -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close-download-modal').addEventListener('click', closeDownloadModal);
    }
    
    modal.classList.remove('hidden');

    const userOS = detectOS();
    const downloadContent = document.getElementById('downloadContent');
    
    downloadContent.innerHTML = `
        <div class="space-y-6">
            ${userOS ? `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p class="text-blue-800 font-medium">Detected your OS: <span class="capitalize">${userOS}</span></p>
                    <p class="text-blue-700 text-sm mt-1">Recommended downloads for your system:</p>
                </div>
            ` : ''}

            <!-- Windows Downloads -->
            ${renderPlatformSection('windows', 'fab fa-windows text-blue-600', 'Windows', project.downloads.windows)}

            <!-- macOS Downloads -->
            ${renderPlatformSection('mac', 'fab fa-apple text-gray-800', 'macOS', project.downloads.mac)}

            <!-- Linux Downloads -->
            ${renderPlatformSection('linux', 'fab fa-linux text-gray-800', 'Linux', project.downloads.linux, project.name)}

            <div class="text-center text-sm text-gray-500 pt-4 border-t">
                <p>Having trouble? <a href="#contact" class="text-purple-600 hover:text-purple-700">Contact us</a></p>
            </div>
        </div>
    `;

    // Setup platform toggle listeners
    document.querySelectorAll('.toggle-platform').forEach(el => {
        el.addEventListener('click', (e) => {
            const platform = e.currentTarget.getAttribute('data-platform');
            togglePlatform(platform);
        });
    });

    // Setup download button listeners
    document.querySelectorAll('.download-file').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const url = e.currentTarget.getAttribute('data-url');
            const name = e.currentTarget.getAttribute('data-name');
            const isPackage = e.currentTarget.getAttribute('data-package') === 'true';
            handleDownload(url, name, isPackage);
        });
    });

    // Auto-expand detected OS
    if (userOS && ['windows', 'mac', 'linux'].includes(userOS)) {
        togglePlatform(userOS, true);
    }
}

// Helper: Render a platform section with downloads
function renderPlatformSection(platform, iconClass, label, downloads, projectName = '') {
    const isBranchLinux = projectName === 'Branch' && platform === 'linux';
    
    return `
        <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-50 px-4 py-3 flex items-center justify-between cursor-pointer toggle-platform" data-platform="${platform}">
                <div class="flex items-center space-x-3">
                    <i class="${iconClass} text-2xl"></i>
                    <span class="font-semibold">${label}</span>
                </div>
                <i class="fas fa-chevron-down transition-transform" id="${platform}-icon"></i>
            </div>
            <div id="${platform}-downloads" class="p-4 space-y-3 hidden">
                ${downloads.map(download => {
                    // Special handling for AUR package manager option
                    // Inside the renderPlatformSection function, where we render the AUR option:
                if (download.isPackage && isBranchLinux) {
                    return `
                        <div class="border rounded-lg p-4 bg-slate-50">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-medium text-slate-800">${download.name}</span>
                                        ${download.autoUpdates ? `
                                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800" 
                                                title="${download.updateInfo || 'Auto-updates with package manager'}">
                                                <i class="fas fa-sync-alt mr-1"></i>
                                                Auto-updates
                                            </span>
                                        ` : ''}
                                    </div>
                                    <div class="text-sm text-slate-600">${download.description}</div>
                                </div>
                            </div>
                            <div class="mt-3 space-y-2">
                                <div class="flex items-center gap-2">
                                    <code class="bg-slate-200 px-2 py-1 rounded text-sm flex-1">yay -S branch</code>
                                    <button class="copy-btn bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs" data-copy="yay -S branch">Copy</button>
                                </div>
                                <div class="flex items-center gap-2">
                                    <code class="bg-slate-200 px-2 py-1 rounded text-sm flex-1">paru -S branch</code>
                                    <button class="copy-btn bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs" data-copy="paru -S branch">Copy</button>
                                </div>
                                <details class="mt-2 text-xs text-slate-600">
                                    <summary class="cursor-pointer hover:text-slate-800 flex items-center gap-1">
                                        <i class="fas fa-info-circle"></i>
                                        How updates work
                                    </summary>
                                    <div class="mt-2 p-3 bg-slate-100 rounded text-xs space-y-2">
                                        <p class="font-medium text-slate-700">✅ With AUR helper (yay/paru):</p>
                                        <code class="block bg-white px-2 py-1 rounded">yay -Syu  # or paru -Syu</code>
                                        <p class="text-slate-600 mt-1">Your AUR packages (including <code>branch</code>) will automatically check for and install updates alongside your system packages.</p>
                                        
                                        <p class="font-medium text-slate-700 mt-3">🔧 How it works:</p>
                                        <ul class="list-disc list-inside text-slate-600 space-y-1">
                                            <li>The PKGBUILD uses <code>pkgver()</code> to fetch the latest version from GitHub</li>
                                            <li>When you run <code>yay -Syu</code>, it detects new versions automatically</li>
                                            <li>No manual intervention needed — just update your system as usual!</li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    `;
                }
                                    
                                    // Regular download item
                                    return `
                                        <div class="border rounded-lg p-3 hover:bg-gray-50 transition">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <div class="font-medium">${download.name}</div>
                                                    <div class="text-sm text-gray-600 mt-1">${download.size}${download.description ? ` • ${download.description}` : ''}</div>
                                                </div>
                                                <button class="download-file bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition" 
                                                        data-url="${download.url}" 
                                                        data-name="${projectName}"
                                                        data-package="${download.isPackage || false}">
                                                    ${download.isPackage ? 'Copy Command' : 'Download'}
                                                </button>
                                            </div>
                                            ${download.sha256 ? `
                                                <div class="mt-2 text-xs text-gray-500">
                                                    SHA256: <code class="bg-gray-100 px-1 py-0.5 rounded">${download.sha256.substring(0, 16)}...</code>
                                                </div>
                                            ` : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }

// Close download modal
function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) modal.classList.add('hidden');
}

// Toggle platform section
function togglePlatform(platform, forceExpand = false) {
    const content = document.getElementById(`${platform}-downloads`);
    const icon = document.getElementById(`${platform}-icon`);
    
    if (!content || !icon) return;

    if (forceExpand || content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// Detect user's operating system
function detectOS() {
    const ua = navigator.userAgent;
    if (/Win/.test(ua)) return 'windows';
    if (/Mac/.test(ua)) return 'mac';
    if (/Linux/.test(ua)) return 'linux';
    return null;
}

// DOWNLOAD HANDLER
function handleDownload(url, projectName, isPackage = false) {
    if (isPackage) {
        // For package manager commands, copy to clipboard instead of downloading
        navigator.clipboard.writeText(url).then(() => {
            showSnackbar(`Command copied: ${url}`, 'success');
        }).catch(() => {
            showSnackbar(`Select and copy: ${url}`, 'info');
        });
        return;
    }
    
    const cleanUrl = url.trim();
    
    if (!cleanUrl || cleanUrl === '#' || cleanUrl.startsWith('git clone')) {
        showSnackbar(`Install via terminal (see instructions above)`, 'info');
        return;
    }

    showSnackbar(`Starting download for ${projectName}...`, 'info');
    
    setTimeout(() => {
        window.open(cleanUrl, '_blank');
        showSnackbar(`Download started! Check your browser's download folder`, 'success');
    }, 500);
}

// FEEDBACK MODAL HANDLERS
function showFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) modal.classList.remove('hidden');
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.classList.add('hidden');
        const form = document.getElementById('feedbackForm');
        if (form) form.reset();
    }
}

// FORM SUBMISSION
function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const type = document.getElementById('feedbackType').value;
    const message = document.getElementById('feedbackMessage').value;
    
    if (!message.trim()) {
        showSnackbar('Please enter a message', 'error');
        return;
    }
    
    console.log('Feedback submitted:', { type, message });
    showSnackbar('Thank you for your feedback!', 'success');
    closeFeedbackModal();
}

// SNACKBAR NOTIFICATION
function showSnackbar(message, type = 'info') {
    const existing = document.getElementById('snackbar');
    if (existing) existing.remove();
    
    const snackbar = document.createElement('div');
    snackbar.id = 'snackbar';
    snackbar.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium z-50 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-purple-600'
    } animate-fade-in`;
    
    snackbar.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'
            } mr-2"></i>
            ${message}
        </div>
    `;
    
    document.body.appendChild(snackbar);
    
    setTimeout(() => {
        snackbar.classList.add('animate-fade-out');
        setTimeout(() => snackbar.remove(), 300);
    }, 3000);
}

// Add copy button listeners dynamically
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const text = e.target.getAttribute('data-copy');
        navigator.clipboard.writeText(text).then(() => {
            const original = e.target.textContent;
            e.target.textContent = 'Copied!';
            setTimeout(() => e.target.textContent = original, 2000);
            showSnackbar('Command copied to clipboard!', 'success');
        });
    }
});

// Add animations/styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
    .animate-fade-in {
        animation: fadeIn 0.3s ease-out;
    }
    .animate-fade-out {
        animation: fadeOut 0.3s ease-out;
    }
    .rotate-180 {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }
    details summary {
        list-style: none;
    }
    details summary::-webkit-details-marker {
        display: none;
    }
`;
document.head.appendChild(style);