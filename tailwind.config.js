module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // 👈 Agrega esta línea
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // 👈 Agrega el plugin
  ],
}