# Vite JavaScript Template

A minimal, production-ready Vite + React template with modern tooling and best practices.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with concurrent features
- 🎨 **Tailwind CSS v3** - Utility-first CSS framework
- 📏 **ESLint** - Modern flat config with React rules
- 💅 **Prettier** - Code formatting
- 🔧 **VS Code** - Optimized settings and extensions

## Quick Start

```bash
# Clone the template
git clone https://github.com/neohbz/vite-javascript-template.git my-app
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## Project Structure

```
├── src/
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── public/              # Static assets
├── index.html           # HTML template
└── vite.config.js       # Vite configuration
```

## Customization

### Tailwind CSS
Modify [`tailwind.config.js`](tailwind.config.js) to customize your design system.

### ESLint Rules
Update [`eslint.config.js`](eslint.config.js) to adjust linting rules.

### Prettier
Configure code formatting in [`.prettierrc`](.prettierrc).

## License

MIT © [NeoHBz](https://neohbz.com)
