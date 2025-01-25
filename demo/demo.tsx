import React, {useEffect, useRef} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {Live2DCubismModel} from "../live2dcubism"
import "./demo.less"

const App: React.FunctionComponent = (props) => {
    const rendererRef = useRef<HTMLCanvasElement>(null)

    const load = async () => {
        const model = new Live2DCubismModel(rendererRef.current!, {autoAnimate: true})
        await model.load("models/Sigewinne.zip")
        console.log({width: model.width, height: model.height, size: model.size})
        const screenshot = await model.takeScreenshot()
        console.log(screenshot)
    }

    useEffect(()=> {
        load()
    }, [])

    return <canvas ref={rendererRef} width={1000} height={1000}></canvas>
}

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"))