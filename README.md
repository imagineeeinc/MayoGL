<p align="center">
	<img src="./mayogl.png" width="30%">
</p>
<h1 align="center">MayoGL</h1>
<h3 align="center">A <i>light weight</i> <b>web</b> <u>2D graphics library</u></h3>

MayoGL (**Mayo**nnaise **G**raphics **L**ibrary) is a light weight grphics library at only *720 bytes*(es module, non minified, non gzipped)!

Based on the simple princple of being as bare bones as posible the intentions of this grphics libray is not make grphics directly with it (though possible) but to wrap it in a graphics engine that abstracts the api.

Here you get a refrence to the display and a few drawing and helper functions and thats it.

## Instalation
### Import in browser
```js
//In your js code
import { MayoGL } from 'https://unpkg.com/mayo-gl@0.1.0/dist/MayoGL.es.js'
```
### In npm
```shell
npm i mayo-gl
```
and import using
```js
//in your node js code
var { MayoGL } = require("mayo-gl")
```
## Usage
Documentation found [here](https://imagineee.gitbook.io/mayo-gl/)
## Example
### Initating a display
```js
var disp = new MayoGL(document.getElementById("screen"),{width: 800, height: 600, alpha: true, clearColor: '#222', antiAlias: true})
```
### Drawing rectangles
```js
disp.rect({x:10,y:10,w:10,h:10,color:disp.color(255,0,0)})
```
### Drawing Individual pixels
```js
disp.setPixel({x:10,y:15,color:disp.color(255,0,0)})
```
### Drawing polygons
```js
disp.polygon({x:50,y:50,points:[{x:0,y:0},{x:0,y:50},{x:35,y:35},{x:50,y:0},{x:0,y:0}],color:disp.color(255,0,0)})
```
