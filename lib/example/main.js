import './style.css'
import '../main.js'
import { MayoGL } from '../main.js'

var disp = new MayoGL(document.getElementById("screen"),{width: 800, height: 600, alpha: true, clearColor: '#222', pixelSize: 2, antiAlias: true})
disp.loadInCache(disp.image('https://raw.githubusercontent.com/imagineeeinc/orbs-js/main/orbs.png'), 'orbs')
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

disp.circle({x:100,y:100,r:20,color:disp.color(255,128,0)})
disp.texture({x:200,y:200,w:100,h:100,image:disp.loadFromCache('orbs')})
disp.line({x:0,y:0,x2:disp.height,y2:disp.width,color:disp.color(255,0,128), w: 4})	

disp.text({x:200,y:100,text:'Hello World',color:disp.color(255,255,255), font:'20px Arial'})
disp.polygon({x:50,y:50,points:[{x:0,y:0},{x:0,y:50},{x:35,y:35},{x:50,y:0},{x:0,y:0}],color:disp.color(255,0,0)})
