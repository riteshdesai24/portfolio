# Ritesh Desai - Portfolio Website

A modern Angular 17 portfolio website built for Ritesh Rajendra Desai.

## ✨ Features
- **Animated Hero** with typewriter effect and floating particles
- **Interactive Skills** section with animated progress bars
- **Timeline Experience** with hover effects
- **Projects Grid** with glow effects on hover
- **Contact Form** with social links
- Fully **Responsive** design
- **Dark theme** with teal + blue accent palette
- Smooth CSS animations throughout

## 🚀 Setup

### Prerequisites
- Node.js 18+ 
- npm 9+
- Angular CLI 17+

### Install Angular CLI
```bash
npm install -g @angular/cli@17
```

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
ng serve
# or
npm start
```
Open http://localhost:4200

### Build for Production
```bash
ng build
```
Output in `dist/ritesh-portfolio/`

## 🎨 Tech Stack
- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- Google Fonts (Syne + DM Sans + JetBrains Mono)
- CSS animations (no external animation libraries needed)

## 📂 Structure
```
src/
├── app/
│   ├── components/
│   │   ├── nav/         Navigation
│   │   ├── hero/        Hero section with typewriter
│   │   ├── about/       About with orbital animation
│   │   ├── skills/      Skills with progress bars
│   │   ├── experience/  Timeline experience
│   │   ├── projects/    Projects grid
│   │   └── contact/     Contact form + info
│   └── app.component.ts
├── styles/
│   └── global.scss      Global design tokens & animations
└── index.html
```

## 🎨 Customization
Edit `src/styles/global.scss` CSS variables to change the color scheme:
```css
--accent: #00d4b8;    /* Teal accent */
--accent2: #4f8ef7;   /* Blue accent */
--bg-primary: #050a14; /* Background */
```
