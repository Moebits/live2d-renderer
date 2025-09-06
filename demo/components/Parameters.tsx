import React, {useContext, useReducer, useEffect, useState} from "react"
import {Live2DContext} from "../demo"
import type {MotionPriority} from "../../live2dcubism"
import parametersIcon from "../../assets/parameters.png"
import partsIcon from "../../assets/parts.png"
import expressionIcon from "../../assets/expression.png"
import motionIcon from "../../assets/motion.png"
import play from "../../assets/play.png"
import pause from "../../assets/pause.png"
import Slider from "react-slider"
import "./styles/parameters.less"

const Parameters: React.FunctionComponent = (props) => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    const {live2D, setLive2D} = useContext(Live2DContext)
    const [defaultOpacities, setDefaultOpacities] = useState(new Float32Array())
    const [motionValues, setMotionValues] = useState([] as boolean[])
    const [motionButtonHover, setMotionButtonHover] = useState(false)
    const [motionMode, setMotionMode] = useState("auto")

    useEffect(() => {
        if (live2D) {
            setDefaultOpacities(structuredClone(live2D.parts.opacities))
            const loop = () => {
                forceUpdate()
                setTimeout(() => {
                    loop()
                }, 5)
            }
            loop()
        }
    }, [live2D])

    const toggleMotionMode = () => {
        if (motionMode === "auto") {
            setMotionMode("manual")
        } else {
            setMotionMode("auto")
        }
    }

    useEffect(() => {
        if (!live2D) return
        live2D.enableMotion = motionMode === "auto"
    }, [motionMode])

    const getParameterDialogJSX = () => {
        if (!live2D) return null
        let jsx = [] as React.ReactElement[]

        let parameters = live2D.parameters
        let parameterNames = live2D.getParameterNames()
        const resetParameters = () => {
            live2D.resetParameters()
            forceUpdate()
        }

        for (let i = 0; i < parameters.ids.length; i++) {
            const name = parameterNames[i]
            const id = parameters.ids[i]
            const value = parameters.values[i]
            const defaultValue = parameters.defaultValues[i]
            const min = parameters.minimumValues[i]
            const max = parameters.maximumValues[i]
            const keys = parameters.keyValues[i]
            const step = (Math.abs(max - min) / 100) || 0.01
            const updateParameter = (value: number) => {
                live2D.setParameter(id, value)
                forceUpdate()
            }
            jsx.push(
                <div className="parameters-dialog-row">
                    <span className="parameters-dialog-text">{name}</span>
                    <Slider className="parameters-slider" trackClassName="parameters-slider-track" thumbClassName="parameters-slider-thumb" 
                    onChange={(value: number) => updateParameter(value)} min={min} max={max} step={step} value={value}/>
                </div>
            )
        }
        return (
            <div className="parameters-dialog-box">
                <div className="parameters-dialog-row-center">
                    <img draggable={false} className="parameters-dialog-icon" src={parametersIcon}/>
                    <span className="parameters-dialog-title">Parameters</span>
                </div>
                {jsx}
                <div className="parameters-dialog-row-center">
                    <button className="parameters-button" onClick={() => resetParameters()}>Reset</button>
                </div>
            </div>
        )
    }

    const getPartsDialogJSX = () => {
        if (!live2D) return null
        let jsx = [] as React.ReactElement[]

        let parts = live2D.parts
        let partNames = live2D.getPartNames()
        const resetParts = () => {
            live2D.resetPartOpacities()
            forceUpdate()
        }

        for (let i = 0; i < parts.ids.length; i++) {
            const name = partNames[i]
            const id = parts.ids[i]
            const opacity = parts.opacities[i]
            const updateOpacity = (opacity: number) => {
                live2D.setPartOpacity(id, opacity)
                forceUpdate()
            }
            jsx.push(
                <div className="parameters-dialog-row">
                    <span className="parameters-dialog-text">{name}</span>
                    <Slider className="parameters-slider" trackClassName="parameters-slider-track" thumbClassName="parameters-slider-thumb" 
                    onChange={(opacity: number) => updateOpacity(opacity)} min={0} max={1} step={0.01} value={opacity}/>
                </div>
            )
        }
        return (
            <div className="parts-dialog-box">
                <div className="parameters-dialog-row-center">
                    <img draggable={false} className="parameters-dialog-icon" src={partsIcon}/>
                    <span className="parameters-dialog-title">Parts</span>
                </div>
                {jsx}
                <div className="parameters-dialog-row-center">
                    <button className="parameters-button" onClick={() => resetParts()}>Reset</button>
                </div>
            </div>
        )
    }

    const getExpressionsDialogJSX = () => {
        if (!live2D) return null
        let jsx = [] as React.ReactElement[]

        let expressions = live2D.getExpressions()

        for (const id of expressions) {
            const setExpression = () => {
                live2D.setExpression(id)
            }
            jsx.push(
                <div className="parameters-dialog-row">
                    <span className="parameters-dialog-text" onClick={setExpression}>{id}</span>
                </div>
            )
        }

        return (
            <div className="parts-dialog-box">
                <div className="parameters-dialog-row-center">
                    <img draggable={false} className="parameters-dialog-icon" src={expressionIcon}/>
                    <span className="parameters-dialog-title">Expressions</span>
                </div>
                {jsx}
            </div>
        )
    }

    const getMotionsDialogJSX = () => {
        if (!live2D) return null
        let jsx = [] as React.ReactElement[]

        let motions = live2D.getMotions()

        for (let i = 0; i < motions.length; i++) {
            const name = motions[i]
            const onStartMotion = () => {
                motionValues.fill(false)
                motionValues[i] = true
            }
            const onEndMotion = () => {
                motionValues[i] = false
            }
            const startMotion = () => {
                const [group, idx] = name.split("_")
                live2D.stopMotions()
                live2D.startMotion(group, Number(idx), MotionPriority.Force, onStartMotion, onEndMotion)
            }
            jsx.push(
                <div className="parameters-dialog-row">
                    <span className="parameters-dialog-text">{name}</span>
                    <img draggable={false} className="parameters-dialog-icon" src={motionValues[i] ? pause : play} onClick={startMotion}/>
                </div>
            )
        }

        return (
            <div className="parts-dialog-box">
                <div className="parameters-dialog-row-center">
                    <img draggable={false} className="parameters-dialog-icon" src={motionIcon}/>
                    <span className="parameters-dialog-title">Motions</span>
                </div>
                <div className="parameters-dialog-row" style={{width: "max-content", marginLeft: "5px"}}>
                    <button className="parameters-button" onClick={() => toggleMotionMode()}>{motionMode === "auto" ? "Auto" : "Manual"}</button>
                </div>
                {jsx}
            </div>
        )
    }

    return (
        <>
        <div className="parameters-container">
            {getParameterDialogJSX()}
            {getPartsDialogJSX()}
        </div>
        <div className="parameters-container-right">
            {getExpressionsDialogJSX()}
            {getMotionsDialogJSX()}
        </div>
        </>
    )
}

export default Parameters