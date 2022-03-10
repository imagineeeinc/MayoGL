const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
	root: "./lib/example",
	dest: "./dist",
  build: {
		outDir: "../dist",
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'MayoGL',
      fileName: (format) => `MayoGL.${format}.js`
    }
  }
})