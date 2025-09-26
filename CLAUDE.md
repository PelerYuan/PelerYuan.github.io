# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Builds the project and starts a live-reload server on port 3000
- **Build for production**: `npm run build` - Compiles and optimizes all assets to the `dist/` directory
- **Pre-development**: `npm run predev` - Runs automatically before dev, builds assets once

## Project Architecture

This is a personal homepage built with Gulp-based tooling that compiles Pug templates, Less stylesheets, and ES6+ JavaScript.

### Build System
- **Gulp** is the primary build tool with tasks defined in `gulpfile.js`
- **Pug** templates are compiled to HTML with configuration data injection
- **Less** stylesheets are processed with autoprefixer, minification, and CSS nano
- **JavaScript** is transpiled with Babel and minified with Uglify
- **Assets** are copied from `src/assets/` to `dist/assets/`

### Project Structure
```
src/
├── index.pug              # Main entry template
├── components/            # Pug component templates
│   ├── head.pug          # HTML head section
│   ├── intro.pug         # Landing page intro section
│   ├── main.pug          # Main content section
│   └── scripts.pug       # JavaScript includes
├── css/                  # Less stylesheets organized by section
│   ├── style.less        # Main stylesheet entry point
│   ├── common/           # Shared styles (variables, icons, common)
│   ├── intro/            # Intro section styles
│   ├── layout/           # Layout styles
│   └── main/             # Main section styles
├── js/                   # JavaScript modules
│   ├── background.js     # WebGL fluid simulation background
│   └── main.js           # Main application logic
└── assets/               # Static assets (images, fonts, etc.)
```

### Configuration System
The entire site is configured through `config.json` which contains:
- **head**: Page metadata (title, description, favicon)
- **intro**: Landing page settings (title, subtitle, background options)
- **main**: Main content (name, avatar, navigation links)

Configuration data is injected into Pug templates during compilation.

### Key Features
- **WebGL Background**: Uses WebGL-Fluid-Simulation for animated background (can be disabled via `intro.background: false`)
- **Two-Screen Design**: 
  - `intro` - Landing page with fluid background
  - `main` - Main content with navigation cards
- **Font Awesome Icons**: Uses Font Awesome 6.4.0 for icons (configured in CSS and config.json)
- **Responsive Design**: Mobile-optimized with CSS media queries

### Development Workflow
1. Modify source files in `src/`
2. Run `npm run dev` for live development with hot reload
3. Configuration changes require editing `config.json`
4. Build output goes to `dist/` directory for deployment

### Icon System
Icons are configured in `config.json` under `main.ul.*.icon` and styled with Font Awesome classes in `src/css/common/icon.less`.