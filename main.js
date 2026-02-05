// main.js - Xamp Fire Projects (ES Module Compatible)
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';

// PROJECT DATA with cross-platform downloads
const PROJECTS = [
    {
        id: 1,
        name: "Templator X",
        description: "DOCX Batch Generator - Create multiple documents from templates and CSV data instantly",
        category: "Productivity",
        features: ["Batch document generation", "CSV/Excel data integration", "Quick templates", "Preview support"],
        downloads: {
            windows: [
                { name: "Setup (EXE)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x_0.1.0_x64-setup.exe", size: "3.15 MB", sha256: "b4c69401c241bcacd8923b33e9036916b8eabc1ca64d15b42307efc1505d8aa7" },
                { name: "Installer (MSI)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x_0.1.0_x64_en-US.msi", size: "4.55 MB", sha256: "f8cf27babb00ef1a80b58d2cb26e76ea8d86e81e9baa3b86b7080cc40c946d1e" }
            ],
            mac: [
                { name: "Universal DMG", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x_0.1.0_universal.dmg", size: "9.19 MB", sha256: "a0d40169bf3fe2a8148e441fa634395cc6f8ea636a93004271344f7e8f9660c5" },
                { name: "App Bundle (tar.gz)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x_universal.app.tar.gz", size: "9.11 MB", sha256: "ba9e282b004468a5521d1b2fc8af4e39156bdd6187f95cca62885b805cd7b0e0" }
            ],
            linux: [
                { name: "Debian/Ubuntu (.deb)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x_0.1.0_amd64.deb", size: "4.87 MB", sha256: "6fba19ac3fdb5ec2c0555146a5411badbb3c1fbfff4c586c5cc92098a39593c4" },
                { name: "Fedora/RHEL (.rpm)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x-0.1.0-1.x86_64.rpm", size: "4.87 MB", sha256: "7769fcfdf3cd7648a5051322abc911da7152852815f6d08eee4013d3a3b816b2" },
                { name: "AppImage", url: "https://github.com/butterman28/Offiice_Autos/releases/download/tx-v1.0.0/templator-x_0.1.0_amd64.AppImage", size: "76.1 MB", sha256: "5b6860f1731332dfdf91913fe2fbbd1ac783c08a849a36ef9d1a66183a3153ae" }
            ]
        },
        imageUrl: "./assets/images/templator.png",
        version: "v1.2.0",
        size: "Varies by platform"
    },
    {
        id: 2,
        name: "FileCanvas",
        description: "Advanced file management with visual canvas interface and powerful organization tools",
        category: "File Management",
        features: ["Visual file organization", "Drag & drop interface", "File preview", "Smart sorting"],
        downloads: {
            windows: [
                { name: "Setup (EXE)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas_0.1.0_x64-setup.exe", size: "2.56 MB", sha256: "b4c69401c241bcacd8923b33e9036916b8eabc1ca64d15b42307efc1505d8aa7" },
                { name: "Installer (MSI)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas_0.1.0_x64_en-US.msi", size: "3.92 MB", sha256: "f8cf27babb00ef1a80b58d2cb26e76ea8d86e81e9baa3b86b7080cc40c946d1e" }
            ],
            mac: [
                { name: "Universal DMG", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas_0.1.0_universal.dmg", size: "7.98 MB", sha256: "a0d40169bf3fe2a8148e441fa634395cc6f8ea636a93004271344f7e8f9660c5" },
                { name: "App Bundle (tar.gz)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas_universal.app.tar.gz", size: "7.91 MB", sha256: "ba9e282b004468a5521d1b2fc8af4e39156bdd6187f95cca62885b805cd7b0e0" }
            ],
            linux: [
                { name: "Debian/Ubuntu (.deb)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas_0.1.0_amd64.deb", size: "4.1 MB", sha256: "6fba19ac3fdb5ec2c0555146a5411badbb3c1fbfff4c586c5cc92098a39593c4" },
                { name: "Fedora/RHEL (.rpm)", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas-0.1.0-1.x86_64.rpm", size: "4.1 MB", sha256: "7769fcfdf3cd7648a5051322abc911da7152852815f6d08eee4013d3a3b816b2" },
                { name: "AppImage", url: "https://github.com/butterman28/Offiice_Autos/releases/download/v0.2.0/filecanvas_0.1.0_amd64.AppImage", size: "73.3 MB", sha256: "5b6860f1731332dfdf91913fe2fbbd1ac783c08a849a36ef9d1a66183a3153ae" }
            ]
        },
        imageUrl: "./assets/images/filecanvas.png",
        version: "v1.0.0",
        size: "Varies by platform"
    },
    {
        id: 3,
        name: "Branch",
        description: "Code tree visualization and management tool for developers",
        category: "Development",
        features: ["Code tree visualization", "File search", "Syntax highlighting", "Project navigation"],
        downloads: {
            windows: [
                { name: "Windows BInary", url: "https://github.com/butterman28/Dev-Section/releases/download/v1.0.0/branch-windows-x86_64.exe", size: "16.7  MB", sha256: "" }
            ],
            mac: [
                { name: "Mac Binary", url: "https://github.com/butterman28/Dev-Section/releases/download/v1.0.0/branch-macos-x86_64", size: "16.3 MB", sha256: "" }
            ],
            linux: [
                { name: "Linux binary", url: "https://github.com/butterman28/Dev-Section/releases/download/v1.0.0/branch-linux-x86_64", size: "18.2 MB", sha256: "" }
            ]
        },
            imageUrl: "./assets/images/branch.png",
        version: "v1.0.0",
        size: "Varies by platform"
    }
];

// DOM-READY INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Add global functions to window for inline handlers
    window.showDownloadModal = showDownloadModal;
    window.closeDownloadModal = closeDownloadModal;
    window.togglePlatform = togglePlatform;
    window.handleDownload = handleDownload;
    window.showFeedbackModal = showFeedbackModal;
    window.closeFeedbackModal = closeFeedbackModal;

    // Setup event listeners (better than inline handlers)
    document.addEventListener('click', (e) => {
        // Close modals when clicking outside
        if (e.target.id === 'downloadModal') closeDownloadModal();
        if (e.target.id === 'feedbackModal') closeFeedbackModal();
    });

    // Setup feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Render projects
    renderProjects();
});

// RENDER PROJECTS GRID
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = PROJECTS.map(project => `
        <div class="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div class="relative">
                <img src="${project.imageUrl}" alt="${project.name}" class="w-full h-48 object-cover">
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
    `).join('');
    
    // Attach event listeners to download buttons (avoids inline handlers)
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.currentTarget.getAttribute('data-project-id');
            showDownloadModal(parseInt(projectId));
        });
    });
}

// DOWNLOAD MODAL
function showDownloadModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    let modal = document.getElementById('downloadModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'downloadModal';
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
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
        
        // Setup close button listener
        modal.querySelector('.close-download-modal').addEventListener('click', closeDownloadModal);
    } else {
        modal.classList.remove('hidden');
    }

    // Detect user's OS
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
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 px-4 py-3 flex items-center justify-between cursor-pointer toggle-platform" data-platform="windows">
                    <div class="flex items-center space-x-3">
                        <i class="fab fa-windows text-blue-600 text-2xl"></i>
                        <span class="font-semibold">Windows</span>
                    </div>
                    <i class="fas fa-chevron-down transition-transform" id="windows-icon"></i>
                </div>
                <div id="windows-downloads" class="p-4 space-y-3 hidden">
                    ${project.downloads.windows.map(download => `
                        <div class="border rounded-lg p-3 hover:bg-gray-50 transition">
                            <div class="flex justify-between items-start">
                                <div>
                                    <div class="font-medium">${download.name}</div>
                                    <div class="text-sm text-gray-600 mt-1">${download.size}</div>
                                </div>
                                <button class="download-file bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition" 
                                        data-url="${download.url}" 
                                        data-name="${project.name}">
                                    Download
                                </button>
                            </div>
                            ${download.sha256 ? `
                                <div class="mt-2 text-xs text-gray-500">
                                    SHA256: <code class="bg-gray-100 px-1 py-0.5 rounded">${download.sha256.substring(0, 16)}...</code>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- macOS Downloads -->
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 px-4 py-3 flex items-center justify-between cursor-pointer toggle-platform" data-platform="mac">
                    <div class="flex items-center space-x-3">
                        <i class="fab fa-apple text-gray-800 text-2xl"></i>
                        <span class="font-semibold">macOS</span>
                    </div>
                    <i class="fas fa-chevron-down transition-transform" id="mac-icon"></i>
                </div>
                <div id="mac-downloads" class="p-4 space-y-3 hidden">
                    ${project.downloads.mac.map(download => `
                        <div class="border rounded-lg p-3 hover:bg-gray-50 transition">
                            <div class="flex justify-between items-start">
                                <div>
                                    <div class="font-medium">${download.name}</div>
                                    <div class="text-sm text-gray-600 mt-1">${download.size}</div>
                                </div>
                                <button class="download-file bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition" 
                                        data-url="${download.url}" 
                                        data-name="${project.name}">
                                    Download
                                </button>
                            </div>
                            ${download.sha256 ? `
                                <div class="mt-2 text-xs text-gray-500">
                                    SHA256: <code class="bg-gray-100 px-1 py-0.5 rounded">${download.sha256.substring(0, 16)}...</code>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Linux Downloads -->
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 px-4 py-3 flex items-center justify-between cursor-pointer toggle-platform" data-platform="linux">
                    <div class="flex items-center space-x-3">
                        <i class="fab fa-linux text-gray-800 text-2xl"></i>
                        <span class="font-semibold">Linux</span>
                    </div>
                    <i class="fas fa-chevron-down transition-transform" id="linux-icon"></i>
                </div>
                <div id="linux-downloads" class="p-4 space-y-3 hidden">
                    ${project.downloads.linux.map(download => `
                        <div class="border rounded-lg p-3 hover:bg-gray-50 transition">
                            <div class="flex justify-between items-start">
                                <div>
                                    <div class="font-medium">${download.name}</div>
                                    <div class="text-sm text-gray-600 mt-1">${download.size}</div>
                                </div>
                                <button class="download-file bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition" 
                                        data-url="${download.url}" 
                                        data-name="${project.name}">
                                    Download
                                </button>
                            </div>
                            ${download.sha256 ? `
                                <div class="mt-2 text-xs text-gray-500">
                                    SHA256: <code class="bg-gray-100 px-1 py-0.5 rounded">${download.sha256.substring(0, 16)}...</code>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

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
            handleDownload(url, name);
        });
    });

    // Auto-expand detected OS
    if (userOS && ['windows', 'mac', 'linux'].includes(userOS)) {
        togglePlatform(userOS, true);
    }
}

// Close download modal
function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) modal.remove();
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
function handleDownload(url, projectName) {
    // Trim URL to fix trailing space issue in your data
    const cleanUrl = url.trim();
    
    if (!cleanUrl || cleanUrl === '#') {
        showSnackbar(`Download link not available yet for ${projectName}`, 'info');
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
`;
document.head.appendChild(style);