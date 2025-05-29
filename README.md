# Aero Shipping Extension

A Chrome extension that provides a user-friendly interface for car shipping services, built with modern web technologies.
Install build/chrome-mv3-prod

## Project Overview

This extension offers a streamlined interface for users to select and manage car shipping services, featuring three different shipping plans with varying levels of service and insurance coverage.

## Technical Stack

- **Framework**: React 18.2.0
- **Language**: TypeScript
- **Build Tool**: Plasmo (Chrome Extension Framework)
- **Styling**: TailwindCSS
- **Package Manager**: npm
- **Development Tools**: Vite

## Features

### Shipping Plans
1. **Better Plan** ($1,800)
   - Most Popular option
   - Covers Delays & Damage
   - Original price: $2,100

2. **Good Plan** ($1,500)
   - Basic Transport service
   - Original price: $1,800

3. **Best Plan** ($2,100)
   - Full Insurance coverage
   - White Glove service
   - Original price: $2,400

### UI Components
- Clean, modern interface with dark theme
- Interactive plan selection
- Price comparison with original prices
- Car details display
- Responsive design (350px width)

## Project Structure

```
├── src/
│   ├── popup.tsx        # Main UI component
│   ├── popup.css        # Styles
│   └── 1.png           # Logo
├── assets/
│   └── 1.png           # Extension assets
├── build/              # Production build
├── node_modules/       # Dependencies
└── Configuration Files
    ├── package.json
    ├── tsconfig.json
    ├── plasmo.manifest.json
    ├── tailwind.config.js
    └── vite.config.ts
```

## Development

### Prerequisites
- Node.js
- npm

### Installation
```bash
npm install
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run preview` - Preview production build

## Build Configuration

### Manifest Details
- Manifest Version: 3
- Extension Name: Chrome extension
- Version: 1.0.0
- Permissions: None required
- Web Accessible Resources: assets/*

### Asset Management
- Images are stored in the assets directory
- Assets are accessible via chrome.runtime.getURL()
- Icons are provided in multiple sizes (16px to 128px)

## UI/UX Features

### Design Elements
- Dark theme (bg-gray-800)
- Rounded corners (rounded-2xl)
- Interactive buttons with hover states
- Clear price comparison
- Popular plan highlighting
- Close button functionality

### Responsive Design
- Fixed width of 350px
- Mobile-friendly interface
- Flexible layout for different screen sizes

## Future Improvements

Potential areas for enhancement:
1. Add more shipping options
2. Implement user authentication
3. Add order tracking functionality
4. Include real-time price updates
5. Add support for multiple vehicles

## License

Private project - All rights reserved 
![123](https://github.com/user-attachments/assets/57565b4e-7550-4730-9796-73484fbe8d57)
