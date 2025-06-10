module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",  // Add Flowbite support
  ],
  plugins: [
    require("flowbite/plugin"),  // Enable Flowbite
  ],
};