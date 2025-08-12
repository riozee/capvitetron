# CapViteTron

A streamlined template for creating cross-platform applications using **React + Capacitor + Electron**.

## 🎯 What is CapViteTron?

CapViteTron is a clean, generalized template that allows you to:

- Write **one React codebase**
- Build for **multiple platforms**: Web, Desktop (Windows/macOS/Linux), and Mobile (Android/iOS)
- Use modern development tools: TypeScript, Vite, ESLint
- Deploy easily with automated build scripts

## � Used by

- YomiHelper — https://github.com/riozee/yomihelper

## �🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for all platforms
npm run build:clean
```

## 🌱 Creating a New Project from the Template

This repository includes a PowerShell script to help you scaffold a new project from this template. The `new-project.ps1` script will copy the template files, update the project name, app ID, and author in the configuration files.

### Usage

To create a new project, run the following command in your terminal:

```powershell
.\scripts\new-project.ps1 -ProjectName "MyNewApp" -AppId "com.example.mynewapp"
```

**Parameters:**

- `-ProjectName` (Required): The name of your new project.
- `-AppId` (Required): The application ID for your project (e.g., `com.company.appname`).
- `-Author` (Optional): The author's name. Defaults to "riozee".
- `-Destination` (Optional): The directory where the new project will be created. Defaults to the current directory.

## 📋 Prerequisites

### Basic Development

- **Node.js** 18+
- **npm** or **yarn**

### Android Development (optional)

- **Java JDK 21** ([Download](https://adoptium.net/)) - **Required for Android builds**
- **Android Studio** with Android SDK

⚠️ **Important**: Android builds specifically require **Java 21**, not earlier versions!

### Desktop Development

- No additional requirements (Electron handles this)

## 🛠 Available Scripts

| Command                         | Description                         |
| ------------------------------- | ----------------------------------- |
| `npm run dev`                   | Start development server            |
| `npm run build`                 | Build React app only                |
| `npm run build:all`             | Build for all platforms             |
| `npm run build:android`         | Build Android APK                   |
| `npm run build:desktop`         | Build desktop app                   |
| `npm run clean`                 | Clean all build artifacts           |
| `npm run sync`                  | Sync Capacitor platforms            |
| `.\scripts\build.ps1`           | Cross-platform build script         |
| `.\scripts\organize-output.ps1` | Organize builds in output/ folder   |
| `.\scripts\find-java.ps1`       | Check Java installation for Android |

## 🏗 Project Structure

```
capvitetron/
├── src/                    # React source code
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # React entry point
│   └── ...
├── electron/              # Electron main process
│   └── main.js           # Electron configuration
├── scripts/               # Build and utility scripts
│   ├── build.ps1         # Cross-platform build script
│   ├── find-java.ps1     # Java detection for Android
│   └── setup.js          # Post-install setup
├── public/                # Static assets
├── output/                # Built applications (created after build)
└── android/               # Android platform (created by Capacitor)
```

## 📱 Platform Features

### Web Browser

- Progressive Web App capabilities
- Hot module replacement during development
- Modern browser features

### Desktop (Electron)

- Native desktop application
- Cross-platform (Windows, macOS, Linux)
- Native OS integration

### Android (Capacitor)

- Native Android APK
- Access to device APIs
- App store distribution ready

## 🔧 Customization

### App Configuration

Edit `capacitor.config.ts` to change:

- App ID and name
- Platform-specific settings
- Plugin configurations

### Electron Settings

Edit `electron/main.js` to modify:

- Window properties
- Security settings
- Native integrations

### Build Configuration

Edit `package.json` build section for:

- Output formats
- Signing certificates
- Distribution settings

## 🐛 Troubleshooting

### Java Issues (Android builds)

```bash
# Check Java version and installation
.\scripts\find-java.ps1

# Install Java 21 if missing
choco install temurin21

# Manually set Java 21 if multiple versions exist
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.x"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
```

### Build Failures

```bash
# Clean all builds and retry
npm run clean
.\scripts\build.ps1

# Organize existing builds
.\scripts\organize-output.ps1
```

### Development Server Issues

```bash
# Check if port 5173 is available
npm run dev
```

## 📦 Distribution

After building, find your apps in the `output/` folder:

- **Desktop**: `*.exe` (Windows), `*.AppImage` (Linux), `*.dmg` (macOS)
- **Android**: `app-debug.apk` or `app-release.apk`

## 🤝 Contributing

This is a template project. To customize for your needs:

1. Fork or clone this template
2. Update app name, ID, and branding
3. Add your application logic
4. Customize build configurations
5. Add platform-specific features

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

**Happy coding!** 🎉
