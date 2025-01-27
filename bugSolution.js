The solution involves correctly configuring Tailwind CSS within your framework's build process.  This usually involves ensuring the necessary plugins are set up and that the build process includes a step to purge or optimize the CSS.

For Next.js, you typically need to use the `@tailwindcss/next` plugin and configure Tailwind to generate the CSS file appropriately.   Make sure that you've followed the official Next.js + Tailwind integration guide thoroughly.

Example (Next.js `tailwind.config.js`):
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Example (Next.js `postcss.config.js`):
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Make sure `tailwind.config.js` includes the correct paths to your components. Also, verify your PostCSS setup.  If the problem persists, ensure that your framework's build process is correctly incorporating the generated Tailwind CSS file.