// website/data.js - Project data and section summaries (ES Module)

// SECTION SUMMARIES
export const SECTION_SUMMARIES = {
    officeautos: {
        title: "🏢 OfficeAutos",
        summary: "Automated office workflows for everyday heroes. We use familiar tech (JavaScript/HTML/CSS + Rust) wrapped in Tauri for cross-platform magic. No Swift trauma here — just practical tools that actually work for secretaries, admins, and everyday office heroes. Why disturb A.I everyday with the same queries when you can just automate? It's eco-friendly and reduces prompt cost!",
        emoji: "✨"
    },
    devsection: {
        title: "👨‍💻 Dev Section",
        summary: "Developer tools that make coding less painful. Visual code exploration, file management, and project navigation tools built with the same philosophy — familiar tech, cross-platform, and actually useful. Perfect for understanding legacy codebases or teaching Git concepts visually.",
        emoji: "🚀"
    }
};

// PROJECT DATA with cross-platform downloads and sections
export const PROJECTS = [
    {
        id: 1,
        name: "Templator X",
        description: "DOCX Batch Generator - Create multiple documents from templates and CSV data instantly",
        category: "Productivity",
        section: "officeautos",
        sectionName: "OfficeAutos",
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
        section: "officeautos",
        sectionName: "OfficeAutos",
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
        section: "devsection",
        sectionName: "Dev Section",
        features: ["Code tree visualization", "File search", "Syntax highlighting", "Project navigation", "AUR package support"],
        downloads: {
            windows: [
                { name: "Windows Binary", url: "https://github.com/butterman28/Dev-Section/releases/download/v1.0.0/branch-windows-x86_64.exe", size: "16.7 MB", sha256: "" }
            ],
            mac: [
                { name: "Mac Binary", url: "https://github.com/butterman28/Dev-Section/releases/download/v1.0.0/branch-macos-x86_64", size: "16.3 MB", sha256: "" }
            ],
            linux: [
                // 🎯 Arch Linux - AUR (Package Manager)
                { 
                    name: "Arch Linux (AUR)", 
                    url: "#", 
                    size: "Package Manager", 
                    sha256: "",
                    isPackage: true,
                    packageManager: {
                        yay: "yay -S branch",
                        paru: "paru -S branch",
                        manual: "git clone https://aur.archlinux.org/branch.git && cd branch && makepkg -si"
                    },
                    description: "Install via AUR helper (recommended)"
                },
                // Fallback: Direct binary download
                { 
                    name: "Linux Binary (Direct)", 
                    url: "https://github.com/butterman28/Dev-Section/releases/download/v1.2.0/branch-linux-x86_64", 
                    size: "18.2 MB", 
                    sha256: "",
                    description: "Standalone binary for any Linux distro"
                }
            ]
        },
        imageUrl: "./assets/images/branch.png",
        version: "v1.2.0",
        size: "Varies by platform"
    }
];