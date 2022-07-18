const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
	root: "./lib",
	dest: "./examples",
  build: {
		outDir: "../examples",
  },
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, 'lib/example/index.html'),
      drag: path.resolve(__dirname, 'lib/example/drag.html'),
    }
}
})