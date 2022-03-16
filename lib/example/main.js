import './style.css'
import '../main.js'
import { MayoGL } from '../main.js'

var disp = new MayoGL(document.getElementById("screen"),{width: 800, height: 600, alpha: true, clearColor: '#222', pixelSize: 4})
disp.rect({x:10,y:10,w:10,h:10,color:disp.color(255,0,0)})
disp.rect({x:20,y:10,w:10,h:10,color:disp.color(255,255,0)})
disp.rect({x:30,y:10,w:10,h:10,color:disp.color(0,255,0)})
disp.rect({x:40,y:10,w:10,h:10,color:disp.color(0,255,255)})
disp.rect({x:50,y:10,w:10,h:10,color:disp.color(0,0,255)})
disp.rect({x:60,y:10,w:10,h:10,color:disp.color(255,0,255)})

disp.setPixel({x:10,y:15,color:disp.color(255,0,0)})
disp.setPixel({x:20,y:15,color:disp.color(255,255,0)})
disp.setPixel({x:30,y:15,color:disp.color(0,255,0)})
disp.setPixel({x:40,y:15,color:disp.color(0,255,255)})
disp.setPixel({x:50,y:15,color:disp.color(0,0,255)})
disp.setPixel({x:60,y:15,color:disp.color(255,0,255)})
