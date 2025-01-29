import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import TitleBar from "./components/TitleBar"
import Live2DModel from "./components/Live2DModel"
import Parameters from "./components/Parameters"
import {Live2DCubismModel} from "../live2dcubism"
import "./demo.less"

require.context("../assets", true)

export const ModelContext = React.createContext<{model: string; setModel: React.Dispatch<React.SetStateAction<string>>}>({model: "", setModel: () => null})
export const Live2DContext = React.createContext<{live2D: Live2DCubismModel | null; setLive2D: React.Dispatch<React.SetStateAction<Live2DCubismModel | null>>}>({live2D: null, setLive2D: () => null})
export const DefaultOpacitiesContext = React.createContext<{defaultOpacities: Float32Array; setDefaultOpacities: React.Dispatch<React.SetStateAction<Float32Array>>}>({defaultOpacities: new Float32Array(), setDefaultOpacities: () => null})

const App: React.FunctionComponent = (props) => {
    const [model, setModel] = useState("assets/Hiyori.zip")
    const [live2D, setLive2D] = useState(null as Live2DCubismModel | null)
    const [defaultOpacities, setDefaultOpacities] = useState(new Float32Array())

    return (
        <div className="app">
            <ModelContext.Provider value={{model, setModel}}>
            <Live2DContext.Provider value={{live2D, setLive2D}}>
            <DefaultOpacitiesContext.Provider value={{defaultOpacities, setDefaultOpacities}}>
                <TitleBar/>
                <Parameters/>
                <Live2DModel/>
            </DefaultOpacitiesContext.Provider>
            </Live2DContext.Provider>
            </ModelContext.Provider>
        </div>
    )
}

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"))