module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  plugins: {
    postcss: {
      processors: [
        require('tailwindcss')('./tailwind.js'),
        require('autoprefixer'),
      ]
    }
  }
}
