import {Live2DCubismModel} from "./Live2DCubismModel"

export class CameraController {
    public model: Live2DCubismModel
    public x: number
    public y: number
    public scale: number
    public minScale: number
    public maxScale: number
    public zoomStep: number
    public panSpeed: number
    public isPanning: boolean
    public lastPosition: {x: number, y: number}
    public zoomEnabled: boolean
    public enablePan: boolean

    constructor(model: Live2DCubismModel) {
        this.model = model
        this.x = 0
        this.y = 0
        this.scale = 1
        this.minScale = 0.1
        this.maxScale = 10
        this.isPanning = false
        this.lastPosition = {x: 0, y: 0}
        this.zoomStep = 0.005
        this.panSpeed = 1.5
        this.addListeners()
    }

    public zoomIn = (factor = 0.1) => {
        if (!this.zoomEnabled) return
        const zoomFactor = 1 + factor
        const newScale = Math.min(this.scale * zoomFactor, this.maxScale)
        const offsetX = this.x / this.scale
        const offsetY = this.x / this.scale
        this.scale = newScale
        this.x = this.x - offsetX * newScale
        this.y = this.y - offsetY * newScale
    }

    public zoomOut = (factor = 0.1) => {
        if (!this.zoomEnabled) return
        const zoomFactor = 1 - factor
        const newScale = Math.max(this.scale * zoomFactor, this.minScale)
        const offsetX = this.x / this.scale
        const offsetY = this.x / this.scale
        this.scale = newScale
        this.x = this.x - offsetX * newScale
        this.y = this.y - offsetY * newScale
    }

    public handleMouseDown = (event: MouseEvent) => {
        if (!this.enablePan) return
        this.isPanning = true
        this.lastPosition = {x: event.clientX, y: event.clientY}
    }

    public handleMouseMove = (event: MouseEvent) => {
        if (!this.enablePan) return
        if (this.isPanning) {
            const dx = event.clientX - this.lastPosition.x
            const dy = event.clientY - this.lastPosition.y

            this.x -= dx * this.panSpeed / this.model.canvas.width
            this.y += dy * this.panSpeed / this.model.canvas.height

            this.lastPosition = {x: event.clientX, y: event.clientY}
        }
    }

    public handleMouseUp = () => {
        if (!this.enablePan) return
        this.isPanning = false
    }

    public handleWheel = (event: WheelEvent) => {
        if (!this.zoomEnabled) return
        event.preventDefault()
        const delta = event.deltaY
        const scaleFactor = Math.pow(2, -delta * this.zoomStep)
        this.scale *= scaleFactor
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, this.scale))
    }

    public handleDoubleClick = () => {
        if (this.enablePan) {
            this.x = 0
            this.y = 0
            this.isPanning = false
            this.lastPosition = {x: 0, y: 0}
            this.model.centerModel()
        }
        if (this.zoomEnabled) {
            this.scale = 1
        }
    }

    public addListeners = () => {
        this.model.canvas.addEventListener("wheel", this.handleWheel)
        this.model.canvas.addEventListener("mousedown", this.handleMouseDown)
        window.addEventListener("mousemove", this.handleMouseMove)
        window.addEventListener("mouseup", this.handleMouseUp)
        this.model.canvas.addEventListener("dblclick", this.handleDoubleClick)
        this.model.canvas.addEventListener("contextmenu", (event) => event.preventDefault())
    }

    public removeListeners = () => {
        this.model.canvas.removeEventListener("wheel", this.handleWheel)
        this.model.canvas.removeEventListener("mousedown", this.handleMouseDown)
        window.removeEventListener("mousemove", this.handleMouseMove)
        window.removeEventListener("mouseup", this.handleMouseUp)
        this.model.canvas.removeEventListener("dblclick", this.handleDoubleClick)
        this.model.canvas.removeEventListener("contextmenu", (event) => event.preventDefault())
    }
}