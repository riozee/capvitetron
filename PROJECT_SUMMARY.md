# CapViteTron - Streamlined Cross-Platform Template

## 🎯 What I've Created

I've analyzed your existing `--lang-assist` project and created a much cleaner, generalized version called **CapViteTron** in the `/capvitetron` folder. This new template removes all the scattered scripts and device-specific code, providing a clean foundation for cross-platform app development.

## 📁 Clean Structure

```
capvitetron/
├── 📱 Core App
│   ├── src/App.tsx              # Clean React app with platform detection
│   ├── src/main.tsx             # Entry point
│   ├── src/App.css              # Modern styling
│   └── src/index.css            # Base styles
│
├── 🖥️ Desktop (Electron)
│   └── electron/main.js         # Secure Electron setup
│
├── 🛠️ Build System
│   ├── scripts/build.ps1        # ONE script for all platforms
│   ├── scripts/find-java.ps1    # Java detection utility
│   ├── scripts/setup.js         # Post-install setup
│   └── build.bat                # Windows batch wrapper
│
├── ⚙️ Configuration
│   ├── package.json             # Clean dependencies
│   ├── capacitor.config.ts      # Mobile platform config
│   ├── vite.config.ts           # Build configuration
│   ├── tsconfig.json            # TypeScript settings
│   └── eslint.config.js         # Code quality
│
└── 📖 Documentation
    ├── README.md                # Complete usage guide
    └── .gitignore               # Proper exclusions
```

## ✨ Key Improvements

### 🧹 **Simplified Scripts**

- **Before**: 8+ scattered scripts (build-all.ps1, build-android.bat, install-android-deps.ps1, etc.)
- **After**: 4 focused scripts that handle everything intelligently

### 🎯 **Generalized Configuration**

- Removed device-specific hardcoded paths
- Clean, customizable app configuration
- Template-ready for any project

### ☕ **Java 21 Support**

- Intelligent Java 21 detection for Android builds
- Clear error messages when Java 21 is missing
- Automatic fallback to manual Java discovery

### 🔒 **Modern Security**

- Proper Electron security settings
- No `nodeIntegration` or unsafe practices
- Content Security Policy ready

### 📱 **Smart Platform Detection**

- Runtime detection of Web/Desktop/Mobile
- Conditional feature loading
- Platform-specific UI adaptations

### 🚀 **Better Developer Experience**

- Single command builds: `.\scripts\build.ps1`
- Hot reload development: `npm run dev`
- Automatic output organization in `output/` folder
- Clear error messages and guidance

### 🏗️ **Robust Build Process**

- Builds portable Windows EXE (no signing issues)
- Builds debug Android APK (no signing required)
- Proper error handling and recovery
- Build verification and output organization

## 🎮 Usage

### Quick Start

```bash
cd capvitetron
npm install
npm run dev
```

### Build All Platforms

```bash
.\scripts\build.ps1
# or
.\build.bat
```

### Individual Platforms

```bash
npm run build:desktop    # Windows/macOS/Linux
npm run build:android    # Android APK
```

### Organize Outputs

```bash
.\scripts\organize-output.ps1
```

## 🔧 Customization Points

### App Identity

- Edit `capacitor.config.ts` - change app ID, name
- Edit `package.json` - update metadata
- Replace icons in `/public/`

### Features

- Modify `src/App.tsx` - add your app logic
- Update `electron/main.js` - desktop-specific features
- Add Capacitor plugins for mobile features

### Build Settings

- `package.json` build section - signing, distribution
- `vite.config.ts` - bundling options
- `scripts/build.ps1` - custom build steps

## 🔄 Migration from Your Old Project

1. **Copy your app logic** from old `src/App.tsx` to new one
2. **Copy assets** from `public/` folder
3. **Copy any custom dependencies** from `package.json`
4. **Update app identity** in config files
5. **Test and build**

## 🎉 Benefits

✅ **Single source of truth** - One clean codebase  
✅ **Platform agnostic** - No hardcoded paths  
✅ **Modern tooling** - Latest React, TypeScript, Vite  
✅ **Secure by default** - Proper security practices  
✅ **Easy maintenance** - Clear structure and documentation  
✅ **Template ready** - Use for any future project

---

Your new CapViteTron template is ready! It's a much cleaner, more maintainable foundation for cross-platform development. 🚀
