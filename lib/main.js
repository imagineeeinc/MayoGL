class MayoGLRender {
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
        this.clear()
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
    setPixel(o){
        let x = o.x || 0
        let y = o.y || 0
        let color = o.color || o.c || o.fill || o.colour || '#000'
        this.ctx.fillStyle = color
        this.ctx.fillRect(x*this.pixelSize,y*this.pixelSize,1*this.pixelSize,1*this.pixelSize)
        return this
    }
}

export const MayoGL = class MayoGLCanvas extends MayoGLRender {
    setWidth(w){
        this.width = w
        this.canvas.width = w
        return this
    }
    setHeight(h){
        this.height = h
        this.canvas.height = h
        return this
    }
    setPixelSize(s){
        this.pixelSize = s
        return this
    }
    setAlpha(a){
        this.alpha = a
        this.ctx.alpha = a
        return this
    }
}