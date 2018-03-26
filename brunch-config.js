module.exports = {
  npm: {
    styles: {
      'element-ui': ['lib/theme-chalk/index.css']
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    templates: {
      joinTo: 'app.js'
    },
  },
  plugins: {
    babel: {
      presets: ['es2015', 'stage-3']
    }
  }
}
