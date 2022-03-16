import './style.css'
import '../main.js'
import { MayoGL } from '../main.js'

var disp = new MayoGL(document.getElementById("screen"),{width: 800, height: 600, alpha: true, clearColor: '#000', pixelSize: 1})
disp.clear()
disp.rect({x:disp.width/2,y:disp.height,w:disp.width,h:disp.height,color:disp.color(0,255,255)})
function handleOrientation(event) {
  var x = event.beta/180;
  var y = event.gamma*2; 
	var z = event.alpha;
	disp.clear()
	disp.rect({x:(disp.width/2+y),y:(disp.height*1.5)*x,w:disp.width,h:disp.height,color:disp.color(0,255,255)})
}

window.addEventListener('deviceorientation', handleOrientation);
