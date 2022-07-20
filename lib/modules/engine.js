export class MayoGLRender {
	constructor(canvas,options){
			this.canvas = canvas
			this.width = options.width || canvas.width
			this.height = options.height || canvas.height
			this.canvas.width = this.width
			this.canvas.height = this.height
			this.alpha = options.alpha || false
			this.clearColor = options.clearColor || '#000000'
			this.ctx = this.canvas.getContext('2d', {alpha: this.alpha})
			this.pixelSize = options.pixelSize || 1
			this.antiAlias = options.antiAlias || false
			this.ctx.imageSmoothingEnabled =this.antiAlias
			this.cache = {}
			this.clear()
			this.loopFunc = () => {}
			this.loopStarted = false
			this.delta = 0
			this.lastTime = Date.now()
			this.mouse = {
					x: 0,
					y: 0,
					down: false,
					up: true,
			}
			this.canvas.addEventListener('mousedown', (e) => {
					this.mouse.down = true
					this.mouse.up = false
					this.mouse.x =  e.clientX
					this.mouse.y = e.clientY
			})
			this.canvas.addEventListener('mousemove', (e) => {
					this.mouse.x = e.clientX
					this.mouse.y = e.clientY
			})
			this.canvas.addEventListener('mouseup', (e) => {
					this.mouse.down = false
					this.mouse.up = true
			})
	}
	loop(f) {
			this.loopFunc = f
			if (!this.loopStarted) {
				this._loop()
			}
			return this
	}
	_loop() {
			this.delta = (Date.now() - this.lastTime)/1000
			this.loopFunc(this, this.delta, this.canvas)
			this.lastTime = Date.now()
			requestAnimationFrame(this._loop.bind(this))
	}
	color(...o){
			return "#"+o.map(c => {
					let hex = c.toString(16)
					return hex.length == 1 ? '0' + hex : hex
			}
			).join('')
	}
	clear(){
			this.ctx.fillStyle = this.clearColor
			this.ctx.clearRect(0, 0, this.width, this.height)
			this.ctx.fillRect(0, 0, this.width, this.height)
			return this
	}
	draw(n,o) {
			return this[n](o)
	}
	//TODO: Implemetn stroke
	rect(o){
			let x = o.x || 0
			let y = o.y || 0
			let w = o.w || o.width || 0
			let h = o.h || o.height || 0
			let s = o.s || o.scale || o.size || 1
			let color = o.color || o.c || o.fill || o.colour || '#000'
			this.ctx.fillStyle = color
			this.ctx.fillRect(x*this.pixelSize - (w * s) / 2,y*this.pixelSize - (h * s) / 2,w*this.pixelSize*s,h*this.pixelSize*s)
			return this
	}
	circle(o){
			let x = o.x || 0
			let y = o.y || 0
			let r = o.r || o.radius || o.rad || o.radii || o.radii || 0
			let s = o.s || o.scale || o.size || 1
			let color = o.color || o.c || o.fill || o.colour || '#000'
			this.ctx.fillStyle = color
			this.ctx.beginPath()
			this.ctx.arc(x*this.pixelSize,y*this.pixelSize,r*this.pixelSize*s,0,2*Math.PI)
			this.ctx.fill()
			return this
	}
	setPixel(o){
			let x = o.x || 0
			let y = o.y || 0
			let color = o.color || o.c || o.fill || o.colour || '#000'
			this.ctx.fillStyle = color
			this.ctx.fillRect(x*this.pixelSize,y*this.pixelSize,1*this.pixelSize,1*this.pixelSize)
			return this
	}
	texture(o){
			let x = o.x || 0
			let y = o.y || 0
			let w = o.w || o.width || 0
			let h = o.h || o.height || 0
			let s = o.s || o.scale || o.size || 1
			let i = o.i || o.img || o.image || o.texture || o.sprite || null
			if (i == null) {
					throw new Error('No image provided')
			}
			this.ctx.drawImage(i,x*this.pixelSize - (w * s) / 2,y*this.pixelSize - (h * s) / 2,w*this.pixelSize*s,h*this.pixelSize*s)
	}
	line(o){
			let x1 = o.x1 || o.x || 0
			let y1 = o.y1 || o.y || 0
			let x2 = o.x2 || 0
			let y2 = o.y2 || 0
			let s = o.s || o.scale || o.size || 1
			let w = o.w || o.width || 1
			let color = o.color || o.c || o.fill || o.colour || '#000'
			this.ctx.strokeStyle = color
			this.ctx.lineWidth = w*this.pixelSize*s
			this.ctx.beginPath()
			this.ctx.moveTo(x1*this.pixelSize,y1*this.pixelSize)
			this.ctx.lineTo(x2*this.pixelSize,y2*this.pixelSize)
			this.ctx.stroke()
			return this
	}
	text(o){
			let x = o.x || 0
			let y = o.y || 0
			let s = o.s || o.scale || o.size || 1
			let t = o.t || o.text || o.string || o.str || o.str || ''
			let color = o.color || o.c || o.fill || o.colour || '#000'
			let font = o.font || '12px sans-serif'
			this.ctx.fillStyle = color
			this.ctx.font = font
			this.ctx.fillText(t,x*this.pixelSize,y*this.pixelSize)
			return this
	}
	polygon(o){
			let x = o.x || 0
			let y = o.y || 0
			let s = o.s || o.scale || o.size || 1
			let points = o.points || o.p || o.vertices || o.vert || o.vertices || o.p || []
			let color = o.color || o.c || o.fill || o.colour || '#000'
			this.ctx.fillStyle = color
			this.ctx.beginPath()
			this.ctx.moveTo(x*this.pixelSize + points[0].x*this.pixelSize*s,y*this.pixelSize + points[0].y*this.pixelSize*s)
			for (let i = 1; i < points.length; i++) {
					this.ctx.lineTo(x*this.pixelSize + points[i].x*this.pixelSize*s,y*this.pixelSize + points[i].y*this.pixelSize*s)
			}
			this.ctx.closePath()
			this.ctx.fill()
			return this
	}
}