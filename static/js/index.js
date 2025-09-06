(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
781: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ut: () => (/* binding */ demo_AudioContext),
  tk: () => (/* binding */ ModelContext),
  i8: () => (/* binding */ Live2DContext)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(961);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 2 modules
var react_router_dom = __webpack_require__(866);
;// CONCATENATED MODULE: ./assets/live2d.png
const live2d_namespaceObject = __webpack_require__.p + "static/image/live2d.png";
;// CONCATENATED MODULE: ./assets/uparrow.png
const uparrow_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABSCAYAAAAsGziYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuZGJhM2RhM2I1LCAyMDIzLzEyLzE1LTEwOjQyOjM3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuNyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDEtMjhUMTU6MzA6MDEtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTAxLTI4VDE2OjAxOjIzLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTAxLTI4VDE2OjAxOjIzLTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ZDk4YTY0OC02YWEzLTQ2ZDUtODg4Yi1mOGRlNDcxMjYwYWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N2Q5OGE2NDgtNmFhMy00NmQ1LTg4OGItZjhkZTQ3MTI2MGFmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Q5OGE2NDgtNmFhMy00NmQ1LTg4OGItZjhkZTQ3MTI2MGFmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZDk4YTY0OC02YWEzLTQ2ZDUtODg4Yi1mOGRlNDcxMjYwYWYiIHN0RXZ0OndoZW49IjIwMjUtMDEtMjhUMTU6MzA6MDEtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS43IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtlKXtYAAAD8SURBVHja7dqxFQIxEENBGqI1+s8MBRDKvt31BD/Xm1ivtdarXJ/3+lvFrb/6ABaG7AVYFLIfYEHInoDFIPsCFoLsDVgEsj9gAcgZgA9DzgF8EHIW4EOQ8wAfgJwJeBhyLuBByNmAhyDnAx6AvANwM+Q9gBsh7wLcBHkf4AbIOwHDkPcCBiHvBgxBAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAAgxAQgwEEWIVRDcSXxyIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSILRC/TEqOp+t/Ul0AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./demo/components/styles/titlebar.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./demo/components/TitleBar.tsx






const TitleBar = (props)=>{
    const { model, setModel } = (0,react.useContext)(ModelContext);
    const { audio, setAudio } = (0,react.useContext)(demo_AudioContext);
    const [buttonHover, setButtonHover] = (0,react.useState)(false);
    const [audioButtonHover, setAudioButtonHover] = (0,react.useState)(false);
    const uploadModel = async (event)=>{
        var _event_target_files;
        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setModel(url);
    };
    const uploadAudio = async (event)=>{
        var _event_target_files;
        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setAudio(url);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "titlebar-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                draggable: false,
                className: "titlebar-logo",
                src: live2d_namespaceObject
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                htmlFor: "file-upload",
                className: `upload-button ${buttonHover ? "upload-button-hover" : ""}`,
                onMouseEnter: ()=>setButtonHover(true),
                onMouseLeave: ()=>setButtonHover(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "upload-button-img",
                        src: uparrow_namespaceObject
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "upload-button-text",
                        children: "Upload Model"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                id: "file-upload",
                type: "file",
                accept: ".zip",
                onChange: (event)=>uploadModel(event)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                htmlFor: "audio-upload",
                className: `upload-button ${audioButtonHover ? "upload-button-hover" : ""}`,
                onMouseEnter: ()=>setAudioButtonHover(true),
                onMouseLeave: ()=>setAudioButtonHover(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "upload-button-img",
                        src: uparrow_namespaceObject
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "upload-button-text",
                        children: "Upload Audio"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                id: "audio-upload",
                type: "file",
                accept: ".wav,.mp3",
                onChange: (event)=>uploadAudio(event)
            })
        ]
    });
};
/* ESM default export */ const components_TitleBar = (TitleBar);

;// CONCATENATED MODULE: ./assets/zoomlock.png
const zoomlock_namespaceObject = __webpack_require__.p + "static/image/zoomlock.png";
;// CONCATENATED MODULE: ./assets/zoomlocked.png
const zoomlocked_namespaceObject = __webpack_require__.p + "static/image/zoomlocked.png";
;// CONCATENATED MODULE: ./assets/zoomin.png
const zoomin_namespaceObject = __webpack_require__.p + "static/image/zoomin.png";
;// CONCATENATED MODULE: ./assets/zoomout.png
const zoomout_namespaceObject = __webpack_require__.p + "static/image/zoomout.png";
;// CONCATENATED MODULE: ./assets/0.5x.png
const _0_5x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuZGJhM2RhM2I1LCAyMDIzLzEyLzE1LTEwOjQyOjM3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuNyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDEtMjhUMTY6MTg6NDctMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTAxLTI4VDE2OjI1OjAzLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTAxLTI4VDE2OjI1OjAzLTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NGE2OWRmMi1hMTg4LTQxZDctYjk4Zi05ZWVhMDc1MWU2ZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRhNjlkZjItYTE4OC00MWQ3LWI5OGYtOWVlYTA3NTFlNmQ2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjRhNjlkZjItYTE4OC00MWQ3LWI5OGYtOWVlYTA3NTFlNmQ2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NGE2OWRmMi1hMTg4LTQxZDctYjk4Zi05ZWVhMDc1MWU2ZDYiIHN0RXZ0OndoZW49IjIwMjUtMDEtMjhUMTY6MTg6NDctMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS43IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrPAjdgAAAOISURBVHja7d1JbsMwEEVBXShX8/13zDqAhwCJyN/dtXh7qq2CPIm61lqXpOcZggSIBIgEiASIBIgEiASIBIgEiCRAJEAkQCRAJEAkQCRAJEAkQCRADEECRAJEAkQCRAJEAkQCRAJEAkQSIBIgEiASIBIgEiASIBIgEiASIJIAkQCRAJEAkQCRAJEAkQCRAJEEiASI9H9AHl/VWsO7dGOAACJAABEggAgQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEAECiAABRIAA4iQGBBBAAAEEEEAAAQQQQAABZAYQJwgggAAiQAARIIAIEEAECCACBJBuX4P3Oy5ARlxBuiHZdyyAjHmL1QXI3uMAZNRnkA5I9q4fEEAKzW4BAoirSNK6ARn5NW9FJGfWCwggBWZ4bp2AjP2hsAqQBQggkCRePQBxQ1P4HM6vC5DxaFKPeQHiltsUMGnHmbMeQEAJRJIza0BACTsxs+YLCChBV5EFCCCQvD6uvHkCAkrIiZo5Q0AgCUCSOztAIAl4qwUIIJCUnBcgkDSfr11NADHf22YECCSNZwwIIOZ862wAgaThrO2sCAggW+YBCCRuUAOk4m2g/q+VMIcBQKacNNOR2N39ly/U1Ld8k4F4/IHPRpE3WQEijx0Y/dYSEEgKA/GEKUhcRQCBxK4oqccKCCCulIBMQeIKAgggPoP4DAIIIL7mBcTXvICoMxC/pAuQ0f/HAgQQ/+YFBBD3gwACiDsKAYEDkMObNnhqrKuHXU0KA6kIrsPVw75YBYF41PKeGdhZsTiQZCgLkF6bV1cGkgYFDkAigUz7+zccG58P0gnIlB/RKn9uyp7RICAdTqhuV4+SzyicAOSv6+r+HyRPuQXEptVhX0lnzgwQQIJO0ry5AQJH2NscQAAZe/Wo99sRIHAErjtnPYDAEbrujHUB4nNH6LoBAcTnjngkgMARvu6z6wRk7BNsq6z97KwBgaPA2gEBpN1f2HusGxA4fNv2Zv1FdzUBw73xgLjjzdXj+HE02xcLjP6PRtv7+jTeOA6Mvk/Y3fdaDdt6dAII2Zs3Go6TqjUQST8yBAkQCRAJEAkQCRAJEAkQCRAJEEmASIBIgEiASIBIgEiASIBIgEiAGIIEiASIBIgEiASIBIgEiASIBIgkQCRAJEAkQCRAJEAkQCRAJEAkQCQBIgEiASIBIgEiASIBIgEiASIJEOlj31Hdia9tuJsBAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./assets/1x.png
const _1x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAKQElEQVR4nO3de9CnYx3H8fee7AGlJURmC9GMUtIMYjoZJaNlCzkmopKQSpMmQ02nSWnksGmQaaQmNSUaZYwhE00ylZGdWioqKSXlsLvYffrj22J3n+d6Dntf3/u+f7/36y+zzz7X9xp8fr/7vo7TRkZGkDS66W13QOoyAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQpmVmn1lJ2rNAvMBR4BZlRq/xTgK5XaVpZz72isqb59g0yjXjgA5lRsWz3Ut4CMACsrtr+8Ytvqob4FZFnbHdBw6VtATiUes6QUdV7Sm7cxcBRwTtsd0XDpyzfIJsAFbXdCw6cPAZkF7NZ2JzScuh6Q2cDbgSvb7oiGU1ffQeYSj1VvBC5vtysaZl0KyGye6c978IVcHdClgJwPHPv/f3YoV53QVkD+CGy61p/NpfvvRBoytQLyl3F+vnWlulKjagXEAGgg+EgjFRgQqcCASAUGRCowIFKBAZEKDIhUYECkAgMiFXRpseKw2hHYgDixJcMq4K6kWqttAOyQVGsG8JumGjMg7bsE2DO55gJivdyqhFqzgUXAtxJqrdbYanAfsdq3F/AD4KnEmvcCGyXUmQUcQl44Hgfe0WSDBqQbFhEhyXrMgpw9N0cC30ioA/Hv7gjgO002akC640jgssR69wPzK9dYUbn9Z9sPuLrpRg1Id6wgXmazzAOWAC+t1P5RwIWV2h7Nk1Q4lrbWS/qODbe3ALiu4Ta76MPEh9ZhSfU2B/5bod1TgDOA51ZoezQHAbfWaLhWQH7fcHvDcibv34mQPAScmFTzJ8C+wF8bbHMe626pruVg4CoqDXL05RFrdtsdSPQ34B+J9V5G/A+2e0PtHQ0c11Bb4zkE+C4VRwD7EpBhcyVwRWK9XWnm/ecDwKeBbRtoayIafylfmwHppiXA6eQemvcx1n+2ey/ghQ30ZSJOzihiQLrrPuA04NKkem8hzibbY4q/fyjxuFbb48SHx3kkXHhkQLrtAWBxYr19gFdP4fcOIu523KnZ7oxqDvD5hDqAAemDx4BrE+vtzuSG6RcR33LPr9OddaReg2FAum8Jsb7ohqR6hxPnIr98gn//YuKCo9qeIiYeU949VjMg/fAI8CbgZ0n19iMm+8azB/Bo5b4A/Bu4iLy5oae53L0/VhKjRFkLGucRI1JjHSO7M3BLUl9uJ4aQ0/kN0i/ziaXqGQ4jFk9uMcbPG9uUNI7l5E6crsGA9MtDwIuIJSkZ9mb0CcvNiOHW2p4AvkksY2+FAemnLYmQZDxuLWfNR/H5wIPEI1hNq4Cvk7dsZVQGpL8WEJOJte1LLGiEOLX//oSaEPMqJyXVGpMB6a8V5GybnQ68DrieWPGbtXB0JrHHo1UGpN92Jed9ZAbweuDuhFoQqwc+mVSryID0273AG4hh0NpmANsl1DkXOBP4Z0KtcTkP0n9LiNNDBsGniEWInQgH+A0yKE4C/tB2JxpwJx0KBxiQQfFT4N3Et0lfXUjOo+KkGJDBcSOxHOPmlvsxFRcBH6eD34IGZLDcAPyy7U5M0teADwL/abkfozIgg+dW4Ldtd2ISPkrCzsCpMiCD50riE7kPIfkRMLftTpQYkMF0PXAC3Q7JTcD+xLbizjIgg+tm4vGla1YCvyBm5jvPgAy26cRBdF3yOLBb252YKAMy2K4BDiC2rHbBCHl7WRphQAbfbcTGp7aNAEuBl7TdkckwIMMh81qFsdxJzrlZjTIgw+F2mjuceqrmkXvNXCMMyHB4injUmuqxouvrd8BrW6q9XgzI8FgF/Jw4eT3jdtvVfkyMWmVt1W2UARk+i8m5wHO1XYhLgXrJgAyPrYjDF95MbkC2AD4CnJ1YszEGZHgsI44vbcNc4FTgiy3VnzIDMhzmAl9quQ8zgONb7sOkGZDBty2xz/uYtjtCDA58qO1OTIYBGXzbENtxu2AT4pvsffTkwBADMtg2o733jpLF9GTS0IAMrs2BTxB7vbtmFfDWtjsxEQZkMG0FnMHELsFpw3Tgh8S5v5lDzpNmQAbTCbR04cwkXUvMy8xpuyNjMSCDZ2P6ddLitcRtVZ3Ui5EETdhs4AvEKFGfzCbmSVa23ZG1+Q0yWBYD7227E1NwEx3do25ABscVwJF0/KV3DNN45qW9UwzI4NiAfr17rG0eLd9HOBoDMhi+CuzTdicaML/tDqzNgPTfRcDRwHPa7khDzgIWtt2J1QxIv10MHEv9eYRfE+83GbYHvkw3FlcakJ47gJyh+pnE+0HWzsBtgR2TahX1JSBZh4118gj+MXyGnON8HiCuRgM4h7zjTPchPgBaVevT56yG28t6eTsUeHHDbf4JuKzhNs8gZxHiHUQ4vvesPzubmIys7VXE0vgRYgi4FbUCcmaldmvbl+bH4u+kuYDMBd7PM5/otd3FmuGAmPU+j7gXsbbtgPOJWfbvJ9RbR18esfqsyUspR8jb130fMcO9thXAycQAwbKEfmxDLNtvhQHpl0VJdZYCpxPzK2M5nghLhhm0dOidAemHWcBhxHKSDJdMsNbN5BxC9wriNqpdEmqtwYB034bAweSF40Hg0Qn+3YXA1eQ8aj0PuAXYIaHW0wxI972GmIPI8DDxfnHBJH7nQOBXNTozijnEwEEaA9JtM8m7umAZcBzw7Sn87nLy9nI8DGyUVMuAdNg04tP5mqR6h7DukO5E7Q1cR4yy1bYp8BBJ23QNSHe9C7g8sd6M9fz9txFXUGeYRQyfb1i7kAHprieISbkMBxEHW6+P5eTeZLUhcA+woGYR96R306HkTQguJO7weLKBtk4kvomyzrzagngnqcZvkO55J7EGacukevfQTDggLsk5Ebi0ofYm4kbiSNMqDEi3nAx8ljj4LcMxxJKSJv0Z+FfDbZa8kopHBxmQbtkJ2Dqp1nHEIsqJTgpOxuXAVRXaHcvuVDqswoB0xxHAnon1LqnY9h3AaeSOwp1FLGxslAHphsOJfRZZ94ifSf0RsqXEo0+WA4ml8ds32agBad8RxH/YFyTUegz4HLGfJGMl7lJyH7UWEvvZG2NA6tt4nJ+fTyzEyzBC7nUItwHnJtYD2L/JxgxIfY+M8/O7U3oRxutLDb0+jmjayEjG8hmpn/wGkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKjAgUoEBkQoMiFRgQKQCAyIVGBCpwIBIBQZEKvgf7u1J9Xj1u+EAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./assets/2x.png
const _2x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAN3klEQVR4nO3deZTVZR3H8fc4IwgoCJgoGJpraqAoeioztzTNtSzTNFIzl3LJo6lpuXBS3Iqkg7lkZiUd9ZgLuXA8KCbHtFDAJc2lFKw0xQVRAZHpj++9ZxZmnrlz7/N8n9+983mdM8eZy8zv+zhzP/f+fs/vWZpaW1sRka6tlrsBIkWmgIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEKCAiAQqISIACIhKggIgEtEQ/4iljYx1pfODfbgVG13j8g4EFnR57AXi7xuNKEVzxRJTDxA9IdQYCG7T7eiNgRuKat3bx2MXA9e2+fgd4LXE7pMByBWQwMKjd118HJmdqS3tnlT7K7gWOBpYBb2ZpkWTlGZBBQHPp86nAEY61q7U38B9gDrAHsBJYkrVF4ip1QJrbfT4D2ClxvVTGY6db/wI2Kz32Ub7miJfUAXkRGFH6vF/iWh42wt5B3gXWzdsU8ZAyIAvpeOHdCJqANUofi0qPrQ8sz9YiSSrlfZB1Eh67CIaVPl6kY4eDNJCUAekr5+gbAHOxsEiD0Z30ODYDHgDWy90QiUsBiWcsMB27kJcGoYDENR6YRv12Z0snCkh8n0HXIw1DAUnjOGDL3I2Q2ikgaewLTMHeTaSOKSDpfAH4XO5GSG0UkLS2A8blboRUTwFJ61BsuLzUKQUkvTdyN0CqV5QZhZV6ClhawfcNAzZO3JZKjS59dJ7eK3Wg6AF5ttPXOwIfVPBz47AbdmUtwKaxGtVLR5fqfytTfalB0QKygrY54G8A21Z5nLl0vA/Rgr2Cr191y2rzbqa6UqMiBORD2t4V/gzsn6DGCmAkNisQbE68SI9yXqSvxIbEXw0MKX2kCEd75TqvJq7TWRPqEKlLOf9oE7Hlfk7NUHtD4BXHescB1zrWk0hyBOR7wHDgEmyq6ooMbVgOfAp42qleM7C6Uy2JyPMa5HBgNvA6lfVEpfYOsJZjvVbHWhJJyoB0Xhjudoq3uMFuwC3YkJCcmrFetsXYtZmHy+m4iqSHefi8kw4h0oIhKQOyI23rYs0hz6lUT/5JMRaCWwkcBjzoWHMSsDZ+K1o+CmzjVOvKWAdKGZC/JTx2TCN6/pbkWrEu7t2wue0eRgCjHOqsA9yMvWB6uAy7vo1CXY9wPPBY7kaUzMKWO/UalnIgcGTiGm9jwfcwEbiItjXLaqaA2JNyYe5GtDMDv1UoNwUuxHoWU2gCfpfo2F2ZSeTtKxQQU7Qu2DPxuzYaCeyT4LijgRuwIf8ergRein1QBaSYfguciK3a6GFjrKcxpkHANyMfszvXAKeR4NRUASmuG/A79dsSewU+LNLxBgPfiXSsnvwKG6lQyTSIXlNAim06fhOuhgE/iXCcDUvH8RpCdELKgysgfgZU8TM/A87Hbxu4VmD3Go8xDjgpQlsqcReJR2YrID4WYjdLqzEVOBd4OV5zurUJcA+wc5U/P5zq5/D0xkqsx2o/Em+Np4CY1MM7/gBcWsPPX4Nfd2k/4P4qfm44tr/jeXGb06XVsGWVXAr1daNJP4Eqxv4hi/HbSHQRbVvNVWId4MfA6Wmas4oncRpoq4DYhfAuiWvE+D1fhr1CL45wrJ6MAJ7D7pE0VfD9pwOnJG2RaQX+jq2k7zK2TwFJ/4RbCrwX6VjXYk/E9yMdryf/pudX6jU8GoLNPn0a2NqpHqCAtFDZK2QtLgN+EPF4vwGOjXi8kA8JjzJoxgYGnunQlmeBMQ51OujrAXkE+GziGil+x15DY1YH3gLW7Obfp5JuHFdnWXZJ7usB8XgH6Z/gmNPwW2erHzZ/f2Q3/97czeMxPQ1s71BnFUVY9ieX2cBWiWtciJ1ixbYcuAnrnvbo/h1C25JJZb8AjnCo/QSwJ5nWFuvL7yCjSH+qspRVn1ixLMOmCx+S6PidzcWCAjb+6WjSb399H3Yz8H+J63SrrwbkHtKvsngJcF3iGsuwacMeNgMeKn0+FFuyKbUmMs/V6asB2Yk01wbtvQL8N3ENgOfxGzk7Bjs19dgY6FFsCHtWffEa5EbS94hMBu5OXKNsMXbK04QNSUnNYwff2cB3sTvmWfWld5D+2CnPN0j/7vEIfqc+ZTc510vlTmyyWPZwQN8KyDJ8dnu6GpjvUKezlcDZGerG9gR5fn9d6ksBudCpzjTgH0612luCrXU1MUPtWB7ChrEXRl+5BjkPn1fXP5KxS7LkPGxy1kn4jZOKYTZwMrb6YmE0+jtIC3AONisvtTuwU7jOu2LlcAbFW6kl5AHsonxe5nasopEDMgAbJBhjnnUlTiDdTcFq/D53A3phEgW5KO+sUU+x1sIG0V3kVO9hqptzntKR2Avg4RT7hXA+iVYkiaERAzIcWwbG66J8LjaH22tV9t6YUPrvl+l+RG5OzwBfwb9LvGJFfmWp1gH4heNZbOuEIoajbALFPH15ERuEWNhwQOMFZCC+m+Js2fO3FMLrFG9vll2wGYuF1kgB6Y91E17hVO9N6qcb9UCsl+3D3A0pWUwxT/lW0SgBacYWNJjkVG8Rdq1T2IvLLhyC3afJbTk2MjjHzdRea5SL9AuAHzrVWgSs51QrtiLcGxmF33KqNWuEd5BJ2LIzHv8vr2GrDxZxO7lKTCD/oMa6+t3Ve0Aux647Uo/OBZu4sy3FuhnYW+9hO2rdmKn+Jvis6xVNPQfkCuyP7TGz7XnsXserDrVSexv4Nn7Xa2AvKkOxLt0id4mvol4DMgU4hvRzosFW8tsPn8WjvRyKzYvxMgi41bFeNPV2kf5r4OPYlE+PLtbHseV1nnOo5eVUbDCjZ0dDC7atwkxgD8e6Naund5DrgKOwVb09wvEXbHTuUw61PG1Ovl643YE/YV3kdaFeAvJLfGYDlj2EDb8uzMy2SI6i9g1yarUvdXShXg8BmYxdjHuZhS0QPc+xpofjsQvzzXM3BNsPsR6ee4Vv5EXA9x3r3V+qN9exppcjsG0NiuAYLCSjcjekJ0UOyPn43R0Hu4A8kcY7rQL4KrbJTZEcB6yduxE9KWJAytNkPbbyKpuFnYI841jTywFY798WuRvShcPwHX3da0Xr5h2AneJ4TZMFWyzgSBrrPkfZPtj6vVm2DqjAOdj4sIuxbRYKpygBGQrsAIzHb7IT2PKWB5N/JZJUbqO44Sg7AxuNPZkCzg8pQkCGYYsrnOVY83Fs2PUXqaMux17aHhtWUpQL85DTgBeAq3I3pLPcARmKXYh77Y4KNk02y2Ysjj5J9fuy5/Ixut6HJKucF+mDgXPxDccC6meabDVWAzakPjsbJmIvloW6aM/1DjIQuzA7wbHmQuzJ08jWBF7K3YganIkNIzobv518g7wD0oK9yk3Bhlx7aMX26hjtVC+nol+QV+IU7Dlycu6GgH9AbsaGjnts/Fj2MjYHutGNwF4IGkFRFpdwvQaZDuyP9Xt71H0cu+gbQ51N86zCSGxSV+5Ol1hOxLp9s/MKyN3A3vj9AR+hrQt3iVPNXLbBxo55XNxuhc/w/37YUBSPHbOCPAJyN7AXfuG4GZtQVTcrZ9RoCbCuU60VwJewWZapDcB6OrNK+aR9AOut2gHbP8/LrsCDFGOJm5AFwNdqPMYnsAXhPByE3el+v/T5VaSfW7IX8FMybuaZKiAzsSdqDuvi94pai1q3od4Ce7fcOkJbenIQHYP4PD6LLwylbS5QlpCkOMW6g/yz1urBBzX87K7Y0j1j4zSlR/d28diPsI6Q1AZiW1l4LSnbQYqAHJDgmNLRcPyGyxzbzeOPYhfSMxza0J9Mz6sizgeRsG2xJ2ZqS7Hu1muxHYK7Mge/FV8G4ztHCFBA6s122CiEPR1qrQFMreD7puMzMHIYNsvUc9S3AlJHPo+dh+/sVK/S7evuw4aHzErXlA4m0TYcJTkFpH4cjN3f8XAxNtuvUg9jPWpefo7TEqYKSH0Yg93zSO0tbEHwahbLWIDfghcrsPnsySkgxbcNNuRif4daL2OzO6txF7acz7xoreleCzANW60lKQWk+C4FPu1QZym1P7nn4HtD7xbsJmayLbgVkGLzmsOyGLgeW5q0Vk3Y6ZaX20j4e1JAimsEcDs2Him1GdhaxDHMxOb8eO6lMopEw6YUkGIagj3RxjnUWk78zUifxFbh91LeViH6AFUFpJj+is8gxI+wU6sJCY49AN+92e8Fdot9UAWkmLyeWFcS79Sqs8ewO/+eos8cVUCKZz42c8/D6qS74daKLT/k9f8CcCeRh+EoIMUyH7sp6PF3uZr045pWAu8mrtHeIGyb631jHVAByaf9NmTNWK/PWHxmX07B7pZ7rGL4KrCjQ52yodg2b1E0tba2xjqWSMPRO4hIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIBCohIgAIiEqCAiAQoICIB/wdkevAW6VnR+gAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./assets/pause.png
const pause_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFKklEQVR4nO3dsYpdVRTH4TVJDFb6EoKK4BMoCLbprKxSW4g2gmIngogi6FMIioUINla+gQo2VoIvIHaa8VrMBMIk+Utk3dnLPd8HA1PMZO997vmde8mczTk5HA4FPNi11ROAyQQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBDcWD2Bdm88X1X1SlXdqqrHwk+m5z6c3PP1IH/f8/VtVX1x/v0E16vq1ap6qapu1tlrnC6Ep3U294cdj2vn/+a9x+Jw/vVnVX1VVV9XVdWnP/73WQ+1XyBV71bV+5c43u2qeqGqXr/EMZOPq+rNSxzvdlW9U1Uf1VlsW9nxI9ZbC8Z8raqeWzDuRc/WmlDfqaoXF4x7dDsG8uSCMa9X1VMLxr3o6Tqby2V7oqqeWTDu0e0YyCoTjuXKOUxYf7stF7XIhIc9rpzDhPW3EwgEAoFAIBAIBAKBQCCQPhNuNVk5h+3+il4lkE4TTpA7C8eecIFoJ5C9+DtIM4FAIBAIBAKBQCAQCAQC6fOw7bmXaeUcJqy/nUD6TDiWK7dQr9iodXQTXtRdTLiC2jDVbMtFQReBQCAQCAQCgUAgEEifCXezupu3mUD6TNgPsXJPyoT1txNInwlX0JUn6YT1txMIXQQCV41AIBAIBAKBQCAQCKTPVb/dfcL62wmkz4QNQ+mhpccmEKItT5BHMOEC0U4gEAhkL1f9XaydQCAQyF62vB9qJYHQZcs4BdJnwgliw1QzgfTxAJ0NCaTPhCuoDVPNBLKXLU/SlQSyF4E0EwgEAoFAIBAIZC/uxWomkD4TjqXngzTbclGLTNgPsfIJU1u+ewlkLytP0i3PpS0XBV0EAoFAIBAIBAKBQCB9JuwHWTmHCetvJ5A+E+6kXblhasL62wmkz4QTxIapZgKBQCAQCAQCgUAgEAgE0mfC7d4T5rAVgfSZcCxvLhx7wvrbbbmoRSYcSzsKm225KJbY8uOdQCAQCAQCgUAgdHGzIlw1AukzYcPQyjl4gA7RhBPEE6aaCQQCgUAgEAgEAoFAIBAIBALpM+Fu1pVzmLD+dgLpM+EBOivnsOW5tOWiFplwBfUO0kwgdBEIXDUCgUAgEAgEAoH0mXC798o5TFh/O4H0mXCCrNz2asst0YQTZOUcJlwg2gkEAoFAIBAIBAKBQCAQCAQC6TPhWK6cg7t5iWyY2tCWi2KJLc+lLRcFXQQCgUAgEAhdJtys2U4gEAikz4TbvVfOwTsI0VUPZML62wmkz4QrqB2FzQQCgUAgEAgEAoFAIBAIBAKB9LEfZENbLmqRCcfSA3SaTXhR2YNAIBAIXDUCgUAgEAikz4S7Wd3N20wgfSbsh7AfpJlA+ky4gnoHaSaQPhNOEFtumwkEAoFAIJA+W37EeASnqydwDDsG8vuCMU+r6rcF4170a605Uf84H3s7OwbywYIxP6uqnxaMe9HPVfXJgnHfq6rvF4x7dDdWT+AIPqyqX6rqVlU9XvdfBA5Vdace/j8+d3/+5Pz7k7r/RrzT89//q6q+q6rPa85HrLer6oeqernO9ofcXUPyb3N/0O+f1Nn6v6mqLx9xjv8bJ4fDlNcV5tnxIxa0EQgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCP4Bg+GN47alDy8AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./assets/play.png
const play_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAIbElEQVR4nO3dW6xdVRWA4b9SxIIQFIRExFA1SjTlQVHU6INo01C1MSl4iWKMqHgJFkTrBSm13DyKULTgBRBFow1UCWJBaqFQaa0o3iJIwMSg1YiKCVSgoanHh9HGY+mZPXuftfZYl/9LCKS8jJe/c6+955xrxvj4OJJ270nZA0hNZiBSgYFIBQYiFRiIVGAgUoGBSAUGIhUYiFRgIFKBgUgFBiIVGIhUYCBSgYFIBQYiFRiIVGAgUoGBSAUGIhUYiFRgIFKBgUgFBiIVGIhUYCBSgYFIBQYiFRiIVDAze4CBLTpqDPgIT5z9B8AngbtHPpOm7uLfZk8wkDauIIvZfdgLgNuBRcBTRjqROquNgQD8Z5I/fxqwnFhNjhnZNOqstgYyYw//fy5wG3ABcFD946iruhoIwD7A6cTHroX1jqOuamsggzgSWAV8F3hO8ixqmT4EstNbgZ8BJwN7J8+iluhTIAAHA18BrgdenDyLWqBvgew0D1gPLAMOzB1FTdbXQAD2A84kvu16Y/Isaqg+B7LTUcTvJpcBz0qeRQ1jIP/zHmDDjn9LgIHs6tnESrIamJM8ixrAQHZvPvED4xnArORZlMhAJncAcA7xbddrkmdREgPZs6OBG4EvAIcmz6IRM5Cp2Yc4g3IrcGLuKBolAxnMkcBVwNU7/lsdZyDDOYFYTRYBe+WOojoZyPAOJQ5n3QS8JHcU1cVApu+1wFpgKfHNlzrEQKpxIHAWsBF4Q+4oqpKBVOtFxFb6y4EjckdRFQykHicRPzCelD2IpsdA6nM4sZKsJnYMq4UMpH7ziWeT84hridQiBjIa+xG3Pq4BXpc8iwZgIKN1NPGRazlwSO4omgoDGb0nE7/AbyJuWlGDGUie2cRdXauA5yXPokkYSL6FxFHfU4jVRQ1iIM1wCPBF4tzJK5Nn0QQG0izHAj8mTjLunzyLMJAm2pc4C78BeFPuKDKQ5poDXEsc0PIhPomBNN+JxO2PJzO11z6oQgbSDs8kLt2+EXhZ8iy9YiDtMo846vsZfIgfCQNpn1nAEuBm3NdVOwNpr5cSH7lWAIclz9JZBtJuM4EPAbcAb0+epZMMpBueD3wbuA54YfIsnWIg3bKA2CW8GHhq8iydYCDdsz8wRmxZ8SF+mgyku14O/Ai4CA9nDc1Aum0v4FTiY5cP8UMwkH6YTTzEXwM8N3mWVjGQfjmeWE1OxcNZU2Ig/XMw8VyyFjgmeZbGM5D+ejWwDjgfeHryLI1lIP02C/gEcThrYfIsjWQggnhb1irgCuKBXjsYiCZ6N/AT4AN4OAswED3RYcCl+OYswEA0ubnELuGlxN3CvWQgKjmAeHPWT4HjkmdJYSCaijnADcCX6dnhLAPRIN4P3A68K3mOkTEQDeoI4ErgauKdjJ1mIBrWCcQv8afR4X1dBqLpeAZwIXHDyiuSZ6mFgagKryJuf1wOHJQ7SrUMRFXZm3hz1s+BdyTPUhkDUdVmA98CVgIvSJ5l2gxEdXkL8frrDxJHf1vJQFSXceKcySXENUStZCCqy8TdwJ8mzsK37jy8gWgU9gXm7/inVWZmD6DemJU9wDAMRKOyLXuAYRiIRuEx4lUNrWMgGoUx4J7sIYZhIKrTFmAZsQWllQxEdbke+BTwu+xBpsOveVW1zcTBqgW0PA5wBVF1thP3ap1NRNIJBqIq/Ab4MLA+e5CqGYimYwtxYOrzwCPJs9TCQDSsHxIfp+7IHqROBqJBbQbOI64A6jwD0SCuJFaNP2YPMioGoqm4h3hNwnXZg4yagajkceBLxKrxUPIsKQxEk9lInATckD1IJgPRrh4ALgAupqVb1KtkIJro+8Tx2N9nD9IUBiKIb6XOBb5OXLagHQyk37YTD+HnAv9MnqWRDKS/7iS+ul2bPUiTGUj/PEw8hC8n9lKpwED6ZQ1wOh04pzEqHpjqh83A+4B5GMdAXEG672vE5sL7swdpIwPprl8DS4iz4RqSgXTPVuAi4kH8X8mztJ6BdMta4OPAL7MH6QoD6Ya/ED/2XY77pyplIO33HeAs4A/Zg3SRgbTXXcCZwLXZg3SZgbTPNuAyYtVw/1TNDKRdNgFnALdkD9IXBtIODwHnE4eYtibP0isG0nyriY9Td2YP0kcG0lz3EmGszB6kzwykeR4HLsVDTI1gIM1yB7F/6qbsQRQMpBm2EHunLgT+nTyLJjCQfDcDHyV236phPDCV5wHiTUzzMI7GcgXJ8U3iWeNP2YOozEBG617ixZbfyx5EU2Mgo/EY8dXt54C/J8+iARhI/dYR9091+k1MXWUg9XkQ+CxeAt1qBlKPlcAyvAS69QykWvcB5wBXZQ+iahhINbYRl0CP4UN4pxjI9G0ibhJZnz2Iqmcgw3uYuH9qjPgaVx1kIMNZQ3x1+6vsQVQv92IN5s/Ae4n9U8bRA64gU7MN+AZxiMlLoHvEQPbsbuLjlJdA95CBTO4R4KvAUnwTU28ZyO7dCnwM+EXyHErmQ/r/+wdwCjAX4xCuIBNdQ9xaeF/2IGoOV5AI4m3AmzEO7aLPK8hWYAWxJf3B5FnUUH0NZAOwGNiYPYiarW+BbAHOBi4BHk2eRS3Qp0BuIFaNu7IHUXv04SH9fuCdwOsxDg2oyyvIdmL/1BLgr7mjqK26GsgG4v1967IHUbt1LZBHicsSVhB7qaRpaeMzyPJJ/nwNcCxxws84VIk2riCnEd9IHQccDvwNuI24znM8cS51UBtXEGlkZoyP+5euNBlXEKnAQKQCA5EKDEQqMBCpwECkAgORCgxEKjAQqcBApAIDkQoMRCowEKnAQKQCA5EKDEQqMBCpwECkAgORCgxEKjAQqcBApAIDkQoMRCowEKnAQKQCA5EKDEQqMBCpwECkgv8C4D0dKUy7zhwAAAAASUVORK5CYII=";
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var esm_define_property = __webpack_require__(851);
;// CONCATENATED MODULE: ./framework/src/icubismmodelsetting.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * モデル設定情報を取り扱う関数を宣言した純粋仮想クラス。
 *
 * このクラスを継承することで、モデル設定情報を取り扱うクラスになる。
 */ class ICubismModelSetting {
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.ICubismModelSetting = ICubismModelSetting;
})(icubismmodelsetting_Live2DCubismFramework || (icubismmodelsetting_Live2DCubismFramework = {}));
var icubismmodelsetting_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/type/csmvector.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * ベクター型（可変配列型）
 */ 
class csmVector {
    /**
   * インデックスで指定した要素を返す
   */ at(index) {
        return this._ptr[index];
    }
    /**
   * 要素をセット
   * @param index 要素をセットするインデックス
   * @param value セットする要素
   */ set(index, value) {
        this._ptr[index] = value;
    }
    /**
   * コンテナを取得する
   */ get() {
        let offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        const ret = new Array();
        for(let i = offset; i < this._size; i++){
            ret.push(this._ptr[i]);
        }
        return ret;
    }
    /**
   * pushBack処理、コンテナに新たな要素を追加する
   * @param value PushBack処理で追加する値
   */ pushBack(value) {
        if (this._size >= this._capacity) {
            this.prepareCapacity(this._capacity == 0 ? csmVector.DefaultSize : this._capacity * 2);
        }
        this._ptr[this._size++] = value;
    }
    /**
   * コンテナの全要素を解放する
   */ clear() {
        this._ptr.length = 0;
        this._size = 0;
    }
    /**
   * コンテナの要素数を返す
   * @return コンテナの要素数
   */ getSize() {
        return this._size;
    }
    /**
   * コンテナの全要素に対して代入処理を行う
   * @param newSize 代入処理後のサイズ
   * @param value 要素に代入する値
   */ assign(newSize, value) {
        const curSize = this._size;
        if (curSize < newSize) {
            this.prepareCapacity(newSize); // capacity更新
        }
        for(let i = 0; i < newSize; i++){
            this._ptr[i] = value;
        }
        this._size = newSize;
    }
    /**
   * サイズ変更
   */ resize(newSize) {
        let value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        this.updateSize(newSize, value, true);
    }
    /**
   * サイズ変更
   */ updateSize(newSize) {
        let value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, callPlacementNew = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        const curSize = this._size;
        if (curSize < newSize) {
            this.prepareCapacity(newSize); // capacity更新
            if (callPlacementNew) {
                for(let i = this._size; i < newSize; i++){
                    if (typeof value == 'function') {
                        // new
                        this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                    } else {
                        this._ptr[i] = value;
                    }
                }
            } else {
                for(let i = this._size; i < newSize; i++){
                    this._ptr[i] = value;
                }
            }
        } else {
            // newSize <= this._size
            //---
            const sub = this._size - newSize;
            this._ptr.splice(this._size - sub, sub); // 不要なので破棄する
        }
        this._size = newSize;
    }
    /**
   * コンテナにコンテナ要素を挿入する
   * @param position 挿入する位置
   * @param begin 挿入するコンテナの開始位置
   * @param end 挿入するコンテナの終端位置
   */ insert(position, begin, end) {
        let dstSi = position._index;
        const srcSi = begin._index;
        const srcEi = end._index;
        const addCount = srcEi - srcSi;
        this.prepareCapacity(this._size + addCount);
        // 挿入用の既存データをシフトして隙間を作る
        const addSize = this._size - dstSi;
        if (addSize > 0) {
            for(let i = 0; i < addSize; i++){
                this._ptr.splice(dstSi + i, 0, null);
            }
        }
        for(let i = srcSi; i < srcEi; i++, dstSi++){
            this._ptr[dstSi] = begin._vector._ptr[i];
        }
        this._size = this._size + addCount;
    }
    /**
   * コンテナからインデックスで指定した要素を削除する
   * @param index インデックス値
   * @return true 削除実行
   * @return false 削除範囲外
   */ remove(index) {
        if (index < 0 || this._size <= index) {
            return false; // 削除範囲外
        }
        this._ptr.splice(index, 1);
        --this._size;
        return true;
    }
    /**
   * コンテナから要素を削除して他の要素をシフトする
   * @param ite 削除する要素
   */ erase(ite) {
        const index = ite._index;
        if (index < 0 || this._size <= index) {
            return ite; // 削除範囲外
        }
        // 削除
        this._ptr.splice(index, 1);
        --this._size;
        const ite2 = new iterator(this, index); // 終了
        return ite2;
    }
    /**
   * コンテナのキャパシティを確保する
   * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない.
   */ prepareCapacity(newSize) {
        if (newSize > this._capacity) {
            if (this._capacity == 0) {
                this._ptr = new Array(newSize);
                this._capacity = newSize;
            } else {
                this._ptr.length = newSize;
                this._capacity = newSize;
            }
        }
    }
    /**
   * コンテナの先頭要素を返す
   */ begin() {
        const ite = this._size == 0 ? this.end() : new iterator(this, 0);
        return ite;
    }
    /**
   * コンテナの終端要素を返す
   */ end() {
        const ite = new iterator(this, this._size);
        return ite;
    }
    getOffset(offset) {
        const newVector = new csmVector();
        newVector._ptr = this.get(offset);
        newVector._size = this.get(offset).length;
        newVector._capacity = this.get(offset).length;
        return newVector;
    }
    /**
   * 引数付きコンストラクタ
   * @param iniitalCapacity 初期化後のキャパシティ。データサイズは_capacity * sizeof(T)
   * @param zeroClear trueなら初期化時に確保した領域を0で埋める
   */ constructor(initialCapacity = 0){
        (0,esm_define_property._)(this, "_ptr", void 0); // コンテナの先頭アドレス
        (0,esm_define_property._)(this, "_size", void 0); // コンテナの要素数
        (0,esm_define_property._)(this, "_capacity", void 0); // コンテナのキャパシティ
        if (initialCapacity < 1) {
            this._ptr = [];
            this._capacity = 0;
            this._size = 0;
        } else {
            this._ptr = new Array(initialCapacity);
            this._capacity = initialCapacity;
            this._size = 0;
        }
    }
}
(0,esm_define_property._)(csmVector, "DefaultSize", 10); // コンテナ初期化のデフォルトサイズ
class iterator {
    /**
   * 代入
   */ set(ite) {
        this._index = ite._index;
        this._vector = ite._vector;
        return this;
    }
    /**
   * 前置き++演算
   */ preIncrement() {
        ++this._index;
        return this;
    }
    /**
   * 前置き--演算
   */ preDecrement() {
        --this._index;
        return this;
    }
    /**
   * 後置き++演算子
   */ increment() {
        const iteold = new iterator(this._vector, this._index++); // 古い値を保存
        return iteold;
    }
    /**
   * 後置き--演算子
   */ decrement() {
        const iteold = new iterator(this._vector, this._index--); // 古い値を保存
        return iteold;
    }
    /**
   * ptr
   */ ptr() {
        return this._vector._ptr[this._index];
    }
    /**
   * =演算子のオーバーロード
   */ substitution(ite) {
        this._index = ite._index;
        this._vector = ite._vector;
        return this;
    }
    /**
   * !=演算子のオーバーロード
   */ notEqual(ite) {
        return this._index != ite._index || this._vector != ite._vector;
    }
    /**
   * コンストラクタ
   */ constructor(v, index){
        (0,esm_define_property._)(this, "_index", void 0); // コンテナのインデックス値
        (0,esm_define_property._)(this, "_vector", void 0); // コンテナ
        this._vector = v != undefined ? v : null;
        this._index = index != undefined ? index : 0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.csmVector = csmVector;
    Live2DCubismFramework.iterator = iterator;
})(csmvector_Live2DCubismFramework || (csmvector_Live2DCubismFramework = {}));
var csmvector_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/type/csmstring.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * 文字列クラス。
 */ 
class csmString {
    /**
   * 文字列を後方に追加する
   *
   * @param c 追加する文字列
   * @return 更新された文字列
   */ append(c, length) {
        this.s += length !== undefined ? c.substr(0, length) : c;
        return this;
    }
    /**
   * 文字サイズを拡張して文字を埋める
   * @param length    拡張する文字数
   * @param v         埋める文字
   * @return 更新された文字列
   */ expansion(length, v) {
        for(let i = 0; i < length; i++){
            this.append(v);
        }
        return this;
    }
    /**
   * 文字列の長さをバイト数で取得する
   */ getBytes() {
        return encodeURIComponent(this.s).replace(/%../g, 'x').length;
    }
    /**
   * 文字列の長さを返す
   */ getLength() {
        return this.s.length;
    }
    /**
   * 文字列比較 <
   * @param s 比較する文字列
   * @return true:    比較する文字列より小さい
   * @return false:   比較する文字列より大きい
   */ isLess(s) {
        return this.s < s.s;
    }
    /**
   * 文字列比較 >
   * @param s 比較する文字列
   * @return true:    比較する文字列より大きい
   * @return false:   比較する文字列より小さい
   */ isGreat(s) {
        return this.s > s.s;
    }
    /**
   * 文字列比較 ==
   * @param s 比較する文字列
   * @return true:    比較する文字列と等しい
   * @return false:   比較する文字列と異なる
   */ isEqual(s) {
        return this.s == s;
    }
    /**
   * 文字列が空かどうか
   * @return true: 空の文字列
   * @return false: 値が設定されている
   */ isEmpty() {
        return this.s.length == 0;
    }
    /**
   * 引数付きコンストラクタ
   */ constructor(s){
        (0,esm_define_property._)(this, "s", void 0);
        this.s = s;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.csmString = csmString;
})(csmstring_Live2DCubismFramework || (csmstring_Live2DCubismFramework = {}));
var csmstring_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/id/cubismid.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * パラメータ名・パーツ名・Drawable名を保持
 *
 * パラメータ名・パーツ名・Drawable名を保持するクラス。
 *
 * @note 指定したID文字列からCubismIdを取得する際はこのクラスの生成メソッドを呼ばず、
 *       CubismIdManager().getId(id)を使用してください
 */ class CubismId {
    /**
   * 内部で使用するCubismIdクラス生成メソッド
   *
   * @param id ID文字列
   * @returns CubismId
   * @note 指定したID文字列からCubismIdを取得する際は
   *       CubismIdManager().getId(id)を使用してください
   */ static createIdInternal(id) {
        return new CubismId(id);
    }
    /**
   * ID名を取得する
   */ getString() {
        return this._id;
    }
    /**
   * idを比較
   * @param c 比較するid
   * @return 同じならばtrue,異なっていればfalseを返す
   */ isEqual(c) {
        if (typeof c === 'string') {
            return this._id.isEqual(c);
        } else if (c instanceof csmString) {
            return this._id.isEqual(c.s);
        } else if (c instanceof CubismId) {
            return this._id.isEqual(c._id.s);
        }
        return false;
    }
    /**
   * idを比較
   * @param c 比較するid
   * @return 同じならばtrue,異なっていればfalseを返す
   */ isNotEqual(c) {
        if (typeof c == 'string') {
            return !this._id.isEqual(c);
        } else if (c instanceof csmString) {
            return !this._id.isEqual(c.s);
        } else if (c instanceof CubismId) {
            return !this._id.isEqual(c._id.s);
        }
        return false;
    }
    /**
   * プライベートコンストラクタ
   *
   * @note ユーザーによる生成は許可しません
   */ constructor(id){
        (0,esm_define_property._)(this, "_id", void 0); // ID名
        if (typeof id === 'string') {
            this._id = new csmString(id);
            return;
        }
        this._id = id;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismId = CubismId;
})(cubismid_Live2DCubismFramework || (cubismid_Live2DCubismFramework = {}));
var cubismid_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/id/cubismidmanager.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 


/**
 * ID名の管理
 *
 * ID名を管理する。
 */ class CubismIdManager {
    /**
   * デストラクタ相当の処理
   */ release() {
        for(let i = 0; i < this._ids.getSize(); ++i){
            this._ids.set(i, void 0);
        }
        this._ids = null;
    }
    /**
   * ID名をリストから登録
   *
   * @param ids ID名リスト
   * @param count IDの個数
   */ registerIds(ids) {
        for(let i = 0; i < ids.length; i++){
            this.registerId(ids[i]);
        }
    }
    /**
   * ID名を登録
   *
   * @param id ID名
   */ registerId(id) {
        let result = null;
        if ('string' == typeof id) {
            if ((result = this.findId(id)) != null) {
                return result;
            }
            result = CubismId.createIdInternal(id);
            this._ids.pushBack(result);
        } else {
            return this.registerId(id.s);
        }
        return result;
    }
    /**
   * ID名からIDを取得する
   *
   * @param id ID名
   */ getId(id) {
        return this.registerId(id);
    }
    /**
   * ID名からIDの確認
   *
   * @return true 存在する
   * @return false 存在しない
   */ isExist(id) {
        if ('string' == typeof id) {
            return this.findId(id) != null;
        }
        return this.isExist(id.s);
    }
    /**
   * ID名からIDを検索する。
   *
   * @param id ID名
   * @return 登録されているID。なければNULL。
   */ findId(id) {
        for(let i = 0; i < this._ids.getSize(); ++i){
            if (this._ids.at(i).getString().isEqual(id)) {
                return this._ids.at(i);
            }
        }
        return null;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_ids", void 0); // 登録されているIDのリスト
        this._ids = new csmVector();
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismIdManager = CubismIdManager;
})(cubismidmanager_Live2DCubismFramework || (cubismidmanager_Live2DCubismFramework = {}));
var cubismidmanager_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/math/cubismmatrix44.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * 4x4の行列
 *
 * 4x4行列の便利クラス。
 */ 
class CubismMatrix44 {
    /**
   * 受け取った２つの行列の乗算を行う。
   *
   * @param a 行列a
   * @param b 行列b
   * @return 乗算結果の行列
   */ static multiply(a, b, dst) {
        const c = new Float32Array([
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0
        ]);
        const n = 4;
        for(let i = 0; i < n; ++i){
            for(let j = 0; j < n; ++j){
                for(let k = 0; k < n; ++k){
                    c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                }
            }
        }
        for(let i = 0; i < 16; ++i){
            dst[i] = c[i];
        }
    }
    /**
   * 単位行列に初期化する
   */ loadIdentity() {
        const c = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        this.setMatrix(c);
    }
    /**
   * 行列を設定
   *
   * @param tr 16個の浮動小数点数で表される4x4の行列
   */ setMatrix(tr) {
        for(let i = 0; i < 16; ++i){
            this._tr[i] = tr[i];
        }
    }
    /**
   * 行列を浮動小数点数の配列で取得
   *
   * @return 16個の浮動小数点数で表される4x4の行列
   */ getArray() {
        return this._tr;
    }
    /**
   * X軸の拡大率を取得
   * @return X軸の拡大率
   */ getScaleX() {
        return this._tr[0];
    }
    /**
   * Y軸の拡大率を取得する
   *
   * @return Y軸の拡大率
   */ getScaleY() {
        return this._tr[5];
    }
    /**
   * X軸の移動量を取得
   * @return X軸の移動量
   */ getTranslateX() {
        return this._tr[12];
    }
    /**
   * Y軸の移動量を取得
   * @return Y軸の移動量
   */ getTranslateY() {
        return this._tr[13];
    }
    /**
   * X軸の値を現在の行列で計算
   *
   * @param src X軸の値
   * @return 現在の行列で計算されたX軸の値
   */ transformX(src) {
        return this._tr[0] * src + this._tr[12];
    }
    /**
   * Y軸の値を現在の行列で計算
   *
   * @param src Y軸の値
   * @return 現在の行列で計算されたY軸の値
   */ transformY(src) {
        return this._tr[5] * src + this._tr[13];
    }
    /**
   * X軸の値を現在の行列で逆計算
   */ invertTransformX(src) {
        return (src - this._tr[12]) / this._tr[0];
    }
    /**
   * Y軸の値を現在の行列で逆計算
   */ invertTransformY(src) {
        return (src - this._tr[13]) / this._tr[5];
    }
    /**
   * 現在の行列の位置を起点にして移動
   *
   * 現在の行列の位置を起点にして相対的に移動する。
   *
   * @param x X軸の移動量
   * @param y Y軸の移動量
   */ translateRelative(x, y) {
        const tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            x,
            y,
            0.0,
            1.0
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    /**
   * 現在の行列の位置を移動
   *
   * 現在の行列の位置を指定した位置へ移動する
   *
   * @param x X軸の移動量
   * @param y y軸の移動量
   */ translate(x, y) {
        this._tr[12] = x;
        this._tr[13] = y;
    }
    /**
   * 現在の行列のX軸の位置を指定した位置へ移動する
   *
   * @param x X軸の移動量
   */ translateX(x) {
        this._tr[12] = x;
    }
    /**
   * 現在の行列のY軸の位置を指定した位置へ移動する
   *
   * @param y Y軸の移動量
   */ translateY(y) {
        this._tr[13] = y;
    }
    /**
   * 現在の行列の拡大率を相対的に設定する
   *
   * @param x X軸の拡大率
   * @param y Y軸の拡大率
   */ scaleRelative(x, y) {
        const tr1 = new Float32Array([
            x,
            0.0,
            0.0,
            0.0,
            0.0,
            y,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    /**
   * 現在の行列の拡大率を指定した倍率に設定する
   *
   * @param x X軸の拡大率
   * @param y Y軸の拡大率
   */ scale(x, y) {
        this._tr[0] = x;
        this._tr[5] = y;
    }
    /**
   * 引数で与えられた行列にこの行列を乗算する。
   * (引数で与えられた行列) * (この行列)
   *
   * @note 関数名と実際の計算内容に乖離があるため、今後計算順が修正される可能性があります。
   * @param m 行列
   */ multiplyByMatrix(m) {
        CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
    }
    /**
   * オブジェクトのコピーを生成する
   */ clone() {
        const cloneMatrix = new CubismMatrix44();
        for(let i = 0; i < this._tr.length; i++){
            cloneMatrix._tr[i] = this._tr[i];
        }
        return cloneMatrix;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_tr", void 0); // 4x4行列データ
        this._tr = new Float32Array(16); // 4 * 4のサイズ
        this.loadIdentity();
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
})(cubismmatrix44_Live2DCubismFramework || (cubismmatrix44_Live2DCubismFramework = {}));
var cubismmatrix44_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/type/csmrectf.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * 矩形形状（座標・長さはfloat値）を定義するクラス
 */ 
class csmRect {
    /**
   * 矩形中央のX座標を取得する
   */ getCenterX() {
        return this.x + 0.5 * this.width;
    }
    /**
   * 矩形中央のY座標を取得する
   */ getCenterY() {
        return this.y + 0.5 * this.height;
    }
    /**
   * 右側のX座標を取得する
   */ getRight() {
        return this.x + this.width;
    }
    /**
   * 下端のY座標を取得する
   */ getBottom() {
        return this.y + this.height;
    }
    /**
   * 矩形に値をセットする
   * @param r 矩形のインスタンス
   */ setRect(r) {
        this.x = r.x;
        this.y = r.y;
        this.width = r.width;
        this.height = r.height;
    }
    /**
   * 矩形中央を軸にして縦横を拡縮する
   * @param w 幅方向に拡縮する量
   * @param h 高さ方向に拡縮する量
   */ expand(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += w * 2.0;
        this.height += h * 2.0;
    }
    /**
   * コンストラクタ
   * @param x 左端X座標
   * @param y 上端Y座標
   * @param w 幅
   * @param h 高さ
   */ constructor(x, y, w, h){
        (0,esm_define_property._)(this, "x", void 0); // 左端X座標
        (0,esm_define_property._)(this, "y", void 0); // 上端Y座標
        (0,esm_define_property._)(this, "width", void 0); // 幅
        (0,esm_define_property._)(this, "height", void 0); // 高さ
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.csmRect = csmRect;
})(csmrectf_Live2DCubismFramework || (csmrectf_Live2DCubismFramework = {}));
var csmrectf_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/rendering/cubismrenderer.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 


/**
 * モデル描画を処理するレンダラ
 *
 * サブクラスに環境依存の描画命令を記述する。
 */ class CubismRenderer {
    /**
   * レンダラのインスタンスを生成して取得する
   *
   * @return レンダラのインスタンス
   */ static create() {
        return null;
    }
    /**
   * レンダラのインスタンスを解放する
   */ static delete(renderer) {
        renderer = null;
    }
    /**
   * レンダラの初期化処理を実行する
   * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
   * @param model モデルのインスタンス
   */ initialize(model) {
        this._model = model;
    }
    /**
   * モデルを描画する
   */ drawModel() {
        if (this.getModel() == null) return;
        this.saveProfile();
        this.doDrawModel();
        this.restoreProfile();
    }
    /**
   * Model-View-Projection 行列をセットする
   * 配列は複製されるので、元の配列は外で破棄して良い
   * @param matrix44 Model-View-Projection 行列
   */ setMvpMatrix(matrix44) {
        this._mvpMatrix4x4.setMatrix(matrix44.getArray());
    }
    /**
   * Model-View-Projection 行列を取得する
   * @return Model-View-Projection 行列
   */ getMvpMatrix() {
        return this._mvpMatrix4x4;
    }
    /**
   * モデルの色をセットする
   * 各色0.0~1.0の間で指定する（1.0が標準の状態）
   * @param red 赤チャンネルの値
   * @param green 緑チャンネルの値
   * @param blue 青チャンネルの値
   * @param alpha αチャンネルの値
   */ setModelColor(red, green, blue, alpha) {
        if (red < 0.0) {
            red = 0.0;
        } else if (red > 1.0) {
            red = 1.0;
        }
        if (green < 0.0) {
            green = 0.0;
        } else if (green > 1.0) {
            green = 1.0;
        }
        if (blue < 0.0) {
            blue = 0.0;
        } else if (blue > 1.0) {
            blue = 1.0;
        }
        if (alpha < 0.0) {
            alpha = 0.0;
        } else if (alpha > 1.0) {
            alpha = 1.0;
        }
        this._modelColor.r = red;
        this._modelColor.g = green;
        this._modelColor.b = blue;
        this._modelColor.a = alpha;
    }
    /**
   * モデルの色を取得する
   * 各色0.0~1.0の間で指定する(1.0が標準の状態)
   *
   * @return RGBAのカラー情報
   */ getModelColor() {
        return JSON.parse(JSON.stringify(this._modelColor));
    }
    /**
   * 透明度を考慮したモデルの色を計算する。
   *
   * @param opacity 透明度
   *
   * @return RGBAのカラー情報
   */ getModelColorWithOpacity(opacity) {
        const modelColorRGBA = this.getModelColor();
        modelColorRGBA.a *= opacity;
        if (this.isPremultipliedAlpha()) {
            modelColorRGBA.r *= modelColorRGBA.a;
            modelColorRGBA.g *= modelColorRGBA.a;
            modelColorRGBA.b *= modelColorRGBA.a;
        }
        return modelColorRGBA;
    }
    /**
   * 乗算済みαの有効・無効をセットする
   * 有効にするならtrue、無効にするならfalseをセットする
   */ setIsPremultipliedAlpha(enable) {
        this._isPremultipliedAlpha = enable;
    }
    /**
   * 乗算済みαの有効・無効を取得する
   * @return true 乗算済みのα有効
   * @return false 乗算済みのα無効
   */ isPremultipliedAlpha() {
        return this._isPremultipliedAlpha;
    }
    /**
   * カリング（片面描画）の有効・無効をセットする。
   * 有効にするならtrue、無効にするならfalseをセットする
   */ setIsCulling(culling) {
        this._isCulling = culling;
    }
    /**
   * カリング（片面描画）の有効・無効を取得する。
   * @return true カリング有効
   * @return false カリング無効
   */ isCulling() {
        return this._isCulling;
    }
    /**
   * テクスチャの異方性フィルタリングのパラメータをセットする
   * パラメータ値の影響度はレンダラの実装に依存する
   * @param n パラメータの値
   */ setAnisotropy(n) {
        this._anisotropy = n;
    }
    /**
   * テクスチャの異方性フィルタリングのパラメータをセットする
   * @return 異方性フィルタリングのパラメータ
   */ getAnisotropy() {
        return this._anisotropy;
    }
    /**
   * レンダリングするモデルを取得する
   * @return レンダリングするモデル
   */ getModel() {
        return this._model;
    }
    /**
   * マスク描画の方式を変更する。
   * falseの場合、マスクを1枚のテクスチャに分割してレンダリングする（デフォルト）
   * 高速だが、マスク個数の上限が36に限定され、質も荒くなる
   * trueの場合、パーツ描画の前にその都度必要なマスクを描き直す
   * レンダリング品質は高いが描画処理負荷は増す
   * @param high 高精細マスクに切り替えるか？
   */ useHighPrecisionMask(high) {
        this._useHighPrecisionMask = high;
    }
    /**
   * マスクの描画方式を取得する
   * @return true 高精細方式
   * @return false デフォルト
   */ isUsingHighPrecisionMask() {
        return this._useHighPrecisionMask;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_mvpMatrix4x4", void 0); // Model-View-Projection 行列
        (0,esm_define_property._)(this, "_modelColor", void 0); // モデル自体のカラー（RGBA）
        (0,esm_define_property._)(this, "_isCulling", void 0); // カリングが有効ならtrue
        (0,esm_define_property._)(this, "_isPremultipliedAlpha", void 0); // 乗算済みαならtrue
        (0,esm_define_property._)(this, "_anisotropy", void 0); // テクスチャの異方性フィルタリングのパラメータ
        (0,esm_define_property._)(this, "_model", void 0); // レンダリング対象のモデル
        (0,esm_define_property._)(this, "_useHighPrecisionMask", void 0); // falseの場合、マスクを纏めて描画する trueの場合、マスクはパーツ描画ごとに書き直す
        this._isCulling = false;
        this._isPremultipliedAlpha = false;
        this._anisotropy = 0.0;
        this._model = null;
        this._modelColor = new CubismTextureColor();
        this._useHighPrecisionMask = false;
        // 単位行列に初期化
        this._mvpMatrix4x4 = new CubismMatrix44();
        this._mvpMatrix4x4.loadIdentity();
    }
}
/**
   * レンダラが保持する静的なリソースを開放する
   */ (0,esm_define_property._)(CubismRenderer, "staticRelease", void 0);
var cubismrenderer_CubismBlendMode = /*#__PURE__*/ function(CubismBlendMode) {
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative"; // 乗算
    return CubismBlendMode;
}({});
/**
 * テクスチャの色をRGBAで扱うためのクラス
 */ class CubismTextureColor {
    /**
   * コンストラクタ
   */ constructor(r = 1.0, g = 1.0, b = 1.0, a = 1.0){
        (0,esm_define_property._)(this, "r", void 0); // 赤チャンネル
        (0,esm_define_property._)(this, "g", void 0); // 緑チャンネル
        (0,esm_define_property._)(this, "b", void 0); // 青チャンネル
        (0,esm_define_property._)(this, "a", void 0); // αチャンネル
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
/**
 * クリッピングマスクのコンテキスト
 */ class CubismClippingContext {
    /**
   * デストラクタ相当の処理
   */ release() {
        if (this._layoutBounds != null) {
            this._layoutBounds = null;
        }
        if (this._allClippedDrawRect != null) {
            this._allClippedDrawRect = null;
        }
        if (this._clippedDrawableIndexList != null) {
            this._clippedDrawableIndexList = null;
        }
    }
    /**
   * このマスクにクリップされる描画オブジェクトを追加する
   *
   * @param drawableIndex クリッピング対象に追加する描画オブジェクトのインデックス
   */ addClippedDrawable(drawableIndex) {
        this._clippedDrawableIndexList.push(drawableIndex);
    }
    /**
   * 引数付きコンストラクタ
   */ constructor(clippingDrawableIndices, clipCount){
        (0,esm_define_property._)(this, "_isUsing", void 0); // 現在の描画状態でマスクの準備が必要ならtrue
        (0,esm_define_property._)(this, "_clippingIdList", void 0); // クリッピングマスクのIDリスト
        (0,esm_define_property._)(this, "_clippingIdCount", void 0); // クリッピングマスクの数
        (0,esm_define_property._)(this, "_layoutChannelIndex", void 0); // RGBAのいずれのチャンネルにこのクリップを配置するか（0:R, 1:G, 2:B, 3:A）
        (0,esm_define_property._)(this, "_layoutBounds", void 0); // マスク用チャンネルのどの領域にマスクを入れるか（View座標-1~1, UVは0~1に直す）
        (0,esm_define_property._)(this, "_allClippedDrawRect", void 0); // このクリッピングで、クリッピングされるすべての描画オブジェクトの囲み矩形（毎回更新）
        (0,esm_define_property._)(this, "_matrixForMask", void 0); // マスクの位置計算結果を保持する行列
        (0,esm_define_property._)(this, "_matrixForDraw", void 0); // 描画オブジェクトの位置計算結果を保持する行列
        (0,esm_define_property._)(this, "_clippedDrawableIndexList", void 0); // このマスクにクリップされる描画オブジェクトのリスト
        (0,esm_define_property._)(this, "_bufferIndex", void 0); // このマスクが割り当てられるレンダーテクスチャ（フレームバッファ）やカラーバッファのインデックス
        // クリップしている（＝マスク用の）Drawableのインデックスリスト
        this._clippingIdList = clippingDrawableIndices;
        // マスクの数
        this._clippingIdCount = clipCount;
        this._allClippedDrawRect = new csmRect();
        this._layoutBounds = new csmRect();
        this._clippedDrawableIndexList = [];
        this._matrixForMask = new CubismMatrix44();
        this._matrixForDraw = new CubismMatrix44();
        this._bufferIndex = 0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismBlendMode = cubismrenderer_CubismBlendMode;
    Live2DCubismFramework.CubismRenderer = CubismRenderer;
    Live2DCubismFramework.CubismTextureColor = CubismTextureColor;
})(cubismrenderer_Live2DCubismFramework || (cubismrenderer_Live2DCubismFramework = {}));
var cubismrenderer_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/utils/cubismdebug.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

const CubismLogPrint = (level, fmt, args)=>{
    CubismDebug.print(level, '[CSM]' + fmt, args);
};
const CubismLogPrintIn = (level, fmt, args)=>{
    CubismLogPrint(level, fmt + '\n', args);
};
const CSM_ASSERT = (expr)=>{
    console.assert(expr);
};
let CubismLogVerbose;
let CubismLogDebug;
let CubismLogInfo;
let CubismLogWarning;
let CubismLogError;
if (/* inlined export .CSM_LOG_LEVEL */ (0) <= /* inlined export .CSM_LOG_LEVEL_VERBOSE */ (0)) {
    CubismLogVerbose = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Verbose */ (0), '[V]' + fmt, args);
    };
    CubismLogDebug = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Debug */ (1), '[D]' + fmt, args);
    };
    CubismLogInfo = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Info */ (2), '[I]' + fmt, args);
    };
    CubismLogWarning = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Warning */ (3), '[W]' + fmt, args);
    };
    CubismLogError = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Error */ (4), '[E]' + fmt, args);
    };
} else if (/* inlined export .CSM_LOG_LEVEL */ (0) == /* inlined export .CSM_LOG_LEVEL_DEBUG */ (1)) {
    CubismLogDebug = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Debug */ (1), '[D]' + fmt, args);
    };
    CubismLogInfo = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Info */ (2), '[I]' + fmt, args);
    };
    CubismLogWarning = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Warning */ (3), '[W]' + fmt, args);
    };
    CubismLogError = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Error */ (4), '[E]' + fmt, args);
    };
} else if (/* inlined export .CSM_LOG_LEVEL */ (0) == /* inlined export .CSM_LOG_LEVEL_INFO */ (2)) {
    CubismLogInfo = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Info */ (2), '[I]' + fmt, args);
    };
    CubismLogWarning = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Warning */ (3), '[W]' + fmt, args);
    };
    CubismLogError = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Error */ (4), '[E]' + fmt, args);
    };
} else if (/* inlined export .CSM_LOG_LEVEL */ (0) == /* inlined export .CSM_LOG_LEVEL_WARNING */ (3)) {
    CubismLogWarning = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Warning */ (3), '[W]' + fmt, args);
    };
    CubismLogError = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Error */ (4), '[E]' + fmt, args);
    };
} else if (/* inlined export .CSM_LOG_LEVEL */ (0) == /* inlined export .CSM_LOG_LEVEL_ERROR */ (4)) {
    CubismLogError = function(fmt) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        CubismLogPrintIn(/* inlined export .LogLevel.LogLevel_Error */ (4), '[E]' + fmt, args);
    };
}
/**
 * デバッグ用のユーティリティクラス。
 * ログの出力、バイトのダンプなど
 */ class CubismDebug {
    /**
   * ログを出力する。第一引数にログレベルを設定する。
   * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
   *
   * @param logLevel ログレベルの設定
   * @param format 書式付き文字列
   * @param args 可変長引数
   */ static print(logLevel, format, args) {
        // オプションで設定されたログ出力レベルを下回る場合はログに出さない
        if (logLevel < CubismFramework.getLoggingLevel()) {
            return;
        }
        const logPrint = CubismFramework.coreLogFunction;
        if (!logPrint) return;
        const buffer = format.replace(/\{(\d+)\}/g, (m, k)=>{
            return args[k];
        });
        logPrint(buffer);
    }
    /**
   * データから指定した長さだけダンプ出力する。
   * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
   *
   * @param logLevel ログレベルの設定
   * @param data ダンプするデータ
   * @param length ダンプする長さ
   */ static dumpBytes(logLevel, data, length) {
        for(let i = 0; i < length; i++){
            if (i % 16 == 0 && i > 0) this.print(logLevel, '\n');
            else if (i % 8 == 0 && i > 0) this.print(logLevel, '  ');
            this.print(logLevel, '{0} ', [
                data[i] & 0xff
            ]);
        }
        this.print(logLevel, '\n');
    }
    /**
   * private コンストラクタ
   */ constructor(){}
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismDebug = CubismDebug;
})(cubismdebug_Live2DCubismFramework || (cubismdebug_Live2DCubismFramework = {}));
var cubismdebug_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/type/csmmap.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * Key-Valueのペアを定義するクラス
 * csmMapクラスの内部データで使用する。
 */ class csmPair {
    /**
   * コンストラクタ
   * @param key Keyとしてセットする値
   * @param value Valueとしてセットする値
   */ constructor(key, value){
        (0,esm_define_property._)(this, "first", void 0); // keyとして用いる変数
        (0,esm_define_property._)(this, "second", void 0); // valueとして用いる変数
        this.first = key == undefined ? null : key;
        this.second = value == undefined ? null : value;
    }
}
/**
 * マップ型
 */ class csmMap {
    /**
   * デストラクタ
   */ release() {
        this.clear();
    }
    /**
   * キーを追加する
   * @param key 新たに追加するキー
   */ appendKey(key) {
        let findIndex = -1;
        for(let i = 0; i < this._size; i++){
            if (this._keyValues[i].first == key) {
                findIndex = i;
                break;
            }
        }
        // 同じkeyが既に作られている場合は何もしない
        if (findIndex != -1) {
            CubismLogWarning('The key `{0}` is already append.', key);
            return;
        }
        // 新しくKey/Valueのペアを作る
        this.prepareCapacity(this._size + 1, false); // 1つ以上入る隙間を作る
        // 新しいkey/valueのインデックスは_size
        this._keyValues[this._size] = new csmPair(key);
        this._size += 1;
    }
    /**
   * 添字演算子[key]のオーバーロード(get)
   * @param key 添字から特定されるValue値
   */ getValue(key) {
        let found = -1;
        for(let i = 0; i < this._size; i++){
            if (this._keyValues[i].first == key) {
                found = i;
                break;
            }
        }
        if (found >= 0) {
            return this._keyValues[found].second;
        } else {
            this.appendKey(key); // 新規キーを追加
            return this._keyValues[this._size - 1].second;
        }
    }
    /**
   * 添字演算子[key]のオーバーロード(set)
   * @param key 添字から特定されるValue値
   * @param value 代入するValue値
   */ setValue(key, value) {
        let found = -1;
        for(let i = 0; i < this._size; i++){
            if (this._keyValues[i].first == key) {
                found = i;
                break;
            }
        }
        if (found >= 0) {
            this._keyValues[found].second = value;
        } else {
            this.appendKey(key); // 新規キーを追加
            this._keyValues[this._size - 1].second = value;
        }
    }
    /**
   * 引数で渡したKeyを持つ要素が存在するか
   * @param key 存在を確認するkey
   * @return true 引数で渡したkeyを持つ要素が存在する
   * @return false 引数で渡したkeyを持つ要素が存在しない
   */ isExist(key) {
        for(let i = 0; i < this._size; i++){
            if (this._keyValues[i].first == key) {
                return true;
            }
        }
        return false;
    }
    /**
   * keyValueのポインタを全て解放する
   */ clear() {
        this._keyValues = void 0;
        this._keyValues = null;
        this._keyValues = [];
        this._size = 0;
    }
    /**
   * コンテナのサイズを取得する
   *
   * @return コンテナのサイズ
   */ getSize() {
        return this._size;
    }
    /**
   * コンテナのキャパシティを確保する
   * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない。
   * @param fitToSize trueなら指定したサイズに合わせる。falseならサイズを2倍確保しておく。
   */ prepareCapacity(newSize, fitToSize) {
        if (newSize > this._keyValues.length) {
            if (this._keyValues.length == 0) {
                if (!fitToSize && newSize < csmMap.DefaultSize) newSize = csmMap.DefaultSize;
                this._keyValues.length = newSize;
            } else {
                if (!fitToSize && newSize < this._keyValues.length * 2) newSize = this._keyValues.length * 2;
                this._keyValues.length = newSize;
            }
        }
    }
    /**
   * コンテナの先頭要素を返す
   */ begin() {
        const ite = new csmmap_iterator(this, 0);
        return ite;
    }
    /**
   * コンテナの終端要素を返す
   */ end() {
        const ite = new csmmap_iterator(this, this._size); // 終了
        return ite;
    }
    /**
   * コンテナから要素を削除する
   *
   * @param ite 削除する要素
   */ erase(ite) {
        const index = ite._index;
        if (index < 0 || this._size <= index) {
            return ite; // 削除範囲外
        }
        // 削除
        this._keyValues.splice(index, 1);
        --this._size;
        const ite2 = new csmmap_iterator(this, index); // 終了
        return ite2;
    }
    /**
   * コンテナの値を32ビット符号付き整数型でダンプする
   */ dumpAsInt() {
        for(let i = 0; i < this._size; i++){
            CubismLogDebug('{0} ,', this._keyValues[i]);
            CubismLogDebug('\n');
        }
    }
    /**
   * 引数付きコンストラクタ
   * @param size 初期化時点で確保するサイズ
   */ constructor(size){
        (0,esm_define_property._)(this, "_keyValues", void 0); // key-valueペアの配列
        (0,esm_define_property._)(this, "_dummyValue", void 0); // 空の値を返す為のダミー
        (0,esm_define_property._)(this, "_size", void 0); // コンテナの要素数
        if (size != undefined) {
            if (size < 1) {
                this._keyValues = [];
                this._dummyValue = null;
                this._size = 0;
            } else {
                this._keyValues = new Array(size);
                this._size = size;
            }
        } else {
            this._keyValues = [];
            this._dummyValue = null;
            this._size = 0;
        }
    }
}
(0,esm_define_property._)(csmMap, "DefaultSize", 10); // コンテナの初期化のデフォルトサイズ
/**
 * csmMap<T>のイテレータ
 */ class csmmap_iterator {
    /**
   * =演算子のオーバーロード
   */ set(ite) {
        this._index = ite._index;
        this._map = ite._map;
        return this;
    }
    /**
   * 前置き++演算子のオーバーロード
   */ preIncrement() {
        ++this._index;
        return this;
    }
    /**
   * 前置き--演算子のオーバーロード
   */ preDecrement() {
        --this._index;
        return this;
    }
    /**
   * 後置き++演算子のオーバーロード
   */ increment() {
        const iteold = new csmmap_iterator(this._map, this._index++); // 古い値を保存
        return iteold;
    }
    /**
   * 後置き--演算子のオーバーロード
   */ decrement() {
        const iteold = new csmmap_iterator(this._map, this._index); // 古い値を保存
        this._map = iteold._map;
        this._index = iteold._index;
        return this;
    }
    /**
   * *演算子のオーバーロード
   */ ptr() {
        return this._map._keyValues[this._index];
    }
    /**
   * !=演算
   */ notEqual(ite) {
        return this._index != ite._index || this._map != ite._map;
    }
    /**
   * コンストラクタ
   */ constructor(v, idx){
        (0,esm_define_property._)(this, "_index", void 0); // コンテナのインデックス値
        (0,esm_define_property._)(this, "_map", void 0); // コンテナ
        this._map = v != undefined ? v : new csmMap();
        this._index = idx != undefined ? idx : 0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.csmMap = csmMap;
    Live2DCubismFramework.csmPair = csmPair;
    Live2DCubismFramework.iterator = csmmap_iterator;
})(csmmap_Live2DCubismFramework || (csmmap_Live2DCubismFramework = {}));
var csmmap_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/utils/cubismjsonextension.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 
/**
 * CubismJsonで実装されているJsonパーサを使用せず、
 * TypeScript標準のJsonパーサなどを使用し出力された結果を
 * Cubism SDKで定義されているJSONエレメントの要素に
 * 置き換える処理をするクラス。
 */ class CubismJsonExtension {
    static parseJsonObject(obj, map) {
        Object.keys(obj).forEach((key)=>{
            if (typeof obj[key] == 'boolean') {
                const convValue = Boolean(obj[key]);
                map.put(key, new JsonBoolean(convValue));
            } else if (typeof obj[key] == 'string') {
                const convValue = String(obj[key]);
                map.put(key, new JsonString(convValue));
            } else if (typeof obj[key] == 'number') {
                const convValue = Number(obj[key]);
                map.put(key, new JsonFloat(convValue));
            } else if (obj[key] instanceof Array) {
                // HACK: Array 単体で変換できないので unknown に変更してから Value にしている
                map.put(key, CubismJsonExtension.parseJsonArray(obj[key]));
            } else if (obj[key] instanceof Object) {
                map.put(key, CubismJsonExtension.parseJsonObject(obj[key], new JsonMap()));
            } else if (obj[key] == null) {
                map.put(key, new JsonNullvalue());
            } else {
                // どれにも当てはまらない場合でも処理する
                map.put(key, obj[key]);
            }
        });
        return map;
    }
    static parseJsonArray(obj) {
        const arr = new JsonArray();
        Object.keys(obj).forEach((key)=>{
            const convKey = Number(key);
            if (typeof convKey == 'number') {
                if (typeof obj[key] == 'boolean') {
                    const convValue = Boolean(obj[key]);
                    arr.add(new JsonBoolean(convValue));
                } else if (typeof obj[key] == 'string') {
                    const convValue = String(obj[key]);
                    arr.add(new JsonString(convValue));
                } else if (typeof obj[key] == 'number') {
                    const convValue = Number(obj[key]);
                    arr.add(new JsonFloat(convValue));
                } else if (obj[key] instanceof Array) {
                    // HACK: Array 単体で変換できないので unknown に変更してから Value にしている
                    arr.add(this.parseJsonArray(obj[key]));
                } else if (obj[key] instanceof Object) {
                    arr.add(this.parseJsonObject(obj[key], new JsonMap()));
                } else if (obj[key] == null) {
                    arr.add(new JsonNullvalue());
                } else {
                    // どれにも当てはまらない場合でも処理する
                    arr.add(obj[key]);
                }
            } else if (obj[key] instanceof Array) {
                // HACK: Array 単体で変換できないので unknown に変更してから Value にしている
                arr.add(this.parseJsonArray(obj[key]));
            } else if (obj[key] instanceof Object) {
                arr.add(this.parseJsonObject(obj[key], new JsonMap()));
            } else if (obj[key] == null) {
                arr.add(new JsonNullvalue());
            } else {
                const convValue = Array(obj[key]);
                // 配列ともObjectとも判定できなかった場合でも処理する
                for(let i = 0; i < convValue.length; i++){
                    arr.add(convValue[i]);
                }
            }
        });
        return arr;
    }
}

;// CONCATENATED MODULE: ./framework/src/utils/cubismjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 





// StaticInitializeNotForClientCall()で初期化する
const CSM_JSON_ERROR_TYPE_MISMATCH = 'Error: type mismatch';
const CSM_JSON_ERROR_INDEX_OF_BOUNDS = 'Error: index out of bounds';
/**
 * パースしたJSONエレメントの要素の基底クラス。
 */ class Value {
    /**
   * 要素を文字列型で返す(string)
   */ getRawString(defaultValue, indent) {
        return this.getString(defaultValue, indent);
    }
    /**
   * 要素を数値型で返す(number)
   */ toInt() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return defaultValue;
    }
    /**
   * 要素を数値型で返す(number)
   */ toFloat() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return defaultValue;
    }
    /**
   * 要素を真偽値で返す(boolean)
   */ toBoolean() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return defaultValue;
    }
    /**
   * サイズを返す
   */ getSize() {
        return 0;
    }
    /**
   * 要素を配列で返す(Value[])
   */ getArray() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return defaultValue;
    }
    /**
   * 要素をコンテナで返す(array)
   */ getVector() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new csmVector();
        return defaultValue;
    }
    /**
   * 要素をマップで返す(csmMap<csmString, Value>)
   */ getMap(defaultValue) {
        return defaultValue;
    }
    /**
   * 添字演算子[index]
   */ getValueByIndex(index) {
        return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    }
    /**
   * 添字演算子[string | csmString]
   */ getValueByString(s) {
        return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    }
    /**
   * マップのキー一覧をコンテナで返す
   *
   * @return マップのキーの一覧
   */ getKeys() {
        return Value.dummyKeys;
    }
    /**
   * Valueの種類がエラー値ならtrue
   */ isError() {
        return false;
    }
    /**
   * Valueの種類がnullならtrue
   */ isNull() {
        return false;
    }
    /**
   * Valueの種類が真偽値ならtrue
   */ isBool() {
        return false;
    }
    /**
   * Valueの種類が数値型ならtrue
   */ isFloat() {
        return false;
    }
    /**
   * Valueの種類が文字列ならtrue
   */ isString() {
        return false;
    }
    /**
   * Valueの種類が配列ならtrue
   */ isArray() {
        return false;
    }
    /**
   * Valueの種類がマップ型ならtrue
   */ isMap() {
        return false;
    }
    equals(value) {
        return false;
    }
    /**
   * Valueの値が静的ならtrue、静的なら解放しない
   */ isStatic() {
        return false;
    }
    /**
   * Valueにエラー値をセットする
   */ setErrorNotForClientCall(errorStr) {
        return JsonError.errorValue;
    }
    /**
   * 初期化用メソッド
   */ static staticInitializeNotForClientCall() {
        JsonBoolean.trueValue = new JsonBoolean(true);
        JsonBoolean.falseValue = new JsonBoolean(false);
        Value.errorValue = new JsonError('ERROR', true);
        Value.nullValue = new JsonNullvalue();
        Value.dummyKeys = new csmVector();
    }
    /**
   * リリース用メソッド
   */ static staticReleaseNotForClientCall() {
        JsonBoolean.trueValue = null;
        JsonBoolean.falseValue = null;
        Value.errorValue = null;
        Value.nullValue = null;
        Value.dummyKeys = null;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_stringBuffer", void 0); // 文字列バッファ
    }
}
(0,esm_define_property._)(Value, "dummyKeys", void 0); // ダミーキー
(0,esm_define_property._)(Value, "errorValue", void 0); // 一時的な返り値として返すエラー。 CubismFramework::Disposeするまではdeleteしない
(0,esm_define_property._)(Value, "nullValue", void 0); // 一時的な返り値として返すNULL。   CubismFramework::Disposeするまではdeleteしない
/**
 * Ascii文字のみ対応した最小限の軽量JSONパーサ。
 * 仕様はJSONのサブセットとなる。
 * 設定ファイル(model3.json)などのロード用
 *
 * [未対応項目]
 * ・日本語などの非ASCII文字
 * ・eによる指数表現
 */ class CubismJson {
    /**
   * バイトデータから直接ロードしてパースする
   *
   * @param buffer バッファ
   * @param size バッファサイズ
   * @return CubismJsonクラスのインスタンス。失敗したらNULL
   */ static create(buffer, size) {
        const json = new CubismJson();
        const succeeded = json.parseBytes(buffer, size, json._parseCallback);
        if (!succeeded) {
            CubismJson.delete(json);
            return null;
        } else {
            return json;
        }
    }
    /**
   * パースしたJSONオブジェクトの解放処理
   *
   * @param instance CubismJsonクラスのインスタンス
   */ static delete(instance) {
        instance = null;
    }
    /**
   * パースしたJSONのルート要素を返す
   */ getRoot() {
        return this._root;
    }
    /**
   *  UnicodeのバイナリをStringに変換
   *
   * @param buffer 変換するバイナリデータ
   * @return 変換後の文字列
   */ static arrayBufferToString(buffer) {
        const uint8Array = new Uint8Array(buffer);
        let str = '';
        for(let i = 0, len = uint8Array.length; i < len; ++i){
            str += '%' + this.pad(uint8Array[i].toString(16));
        }
        str = decodeURIComponent(str);
        return str;
    }
    /**
   * エンコード、パディング
   */ static pad(n) {
        return n.length < 2 ? '0' + n : n;
    }
    /**
   * JSONのパースを実行する
   * @param buffer    パース対象のデータバイト
   * @param size      データバイトのサイズ
   * return true : 成功
   * return false: 失敗
   */ parseBytes(buffer, size, parseCallback) {
        const endPos = new Array(1); // 参照渡しにするため配列
        const decodeBuffer = CubismJson.arrayBufferToString(buffer);
        if (parseCallback == undefined) {
            this._root = this.parseValue(decodeBuffer, size, 0, endPos);
        } else {
            // TypeScript標準のJSONパーサを使う
            this._root = parseCallback(JSON.parse(decodeBuffer), new JsonMap());
        }
        if (this._error) {
            let strbuf = '\0';
            strbuf = 'Json parse error : @line ' + (this._lineCount + 1) + '\n';
            this._root = new JsonString(strbuf);
            CubismLogInfo('{0}', this._root.getRawString());
            return false;
        } else if (this._root == null) {
            this._root = new JsonError(new csmString(this._error), false); // rootは解放されるのでエラーオブジェクトを別途作成する
            return false;
        }
        return true;
    }
    /**
   * パース時のエラー値を返す
   */ getParseError() {
        return this._error;
    }
    /**
   * ルート要素の次の要素がファイルの終端だったらtrueを返す
   */ checkEndOfFile() {
        return this._root.getArray()[1].equals('EOF');
    }
    /**
   * JSONエレメントからValue(float,String,Value*,Array,null,true,false)をパースする
   * エレメントの書式に応じて内部でParseString(), ParseObject(), ParseArray()を呼ぶ
   *
   * @param   buffer      JSONエレメントのバッファ
   * @param   length      パースする長さ
   * @param   begin       パースを開始する位置
   * @param   outEndPos   パース終了時の位置
   * @return      パースから取得したValueオブジェクト
   */ parseValue(buffer, length, begin, outEndPos) {
        if (this._error) return null;
        let o = null;
        let i = begin;
        let f;
        for(; i < length; i++){
            const c = buffer[i];
            switch(c){
                case '-':
                case '.':
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    {
                        const afterString = new Array(1); // 参照渡しにするため
                        f = strtod(buffer.slice(i), afterString);
                        outEndPos[0] = buffer.indexOf(afterString[0]);
                        return new JsonFloat(f);
                    }
                case '"':
                    return new JsonString(this.parseString(buffer, length, i + 1, outEndPos)); // \"の次の文字から
                case '[':
                    o = this.parseArray(buffer, length, i + 1, outEndPos);
                    return o;
                case '{':
                    o = this.parseObject(buffer, length, i + 1, outEndPos);
                    return o;
                case 'n':
                    if (i + 3 < length) {
                        o = new JsonNullvalue(); // 解放できるようにする
                        outEndPos[0] = i + 4;
                    } else {
                        this._error = 'parse null';
                    }
                    return o;
                case 't':
                    if (i + 3 < length) {
                        o = JsonBoolean.trueValue;
                        outEndPos[0] = i + 4;
                    } else {
                        this._error = 'parse true';
                    }
                    return o;
                case 'f':
                    if (i + 4 < length) {
                        o = JsonBoolean.falseValue;
                        outEndPos[0] = i + 5;
                    } else {
                        this._error = "illegal ',' position";
                    }
                    return o;
                case ',':
                    this._error = "illegal ',' position";
                    return null;
                case ']':
                    outEndPos[0] = i; // 同じ文字を再処理
                    return null;
                case '\n':
                    this._lineCount++;
                // falls through
                case ' ':
                case '\t':
                case '\r':
                default:
                    break;
            }
        }
        this._error = 'illegal end of value';
        return null;
    }
    /**
   * 次の「"」までの文字列をパースする。
   *
   * @param   string  ->  パース対象の文字列
   * @param   length  ->  パースする長さ
   * @param   begin   ->  パースを開始する位置
   * @param  outEndPos   ->  パース終了時の位置
   * @return      パースした文F字列要素
   */ parseString(string, length, begin, outEndPos) {
        if (this._error) {
            return null;
        }
        if (!string) {
            this._error = 'string is null';
            return null;
        }
        let i = begin;
        let c, c2;
        const ret = new csmString('');
        let bufStart = begin; // sbufに登録されていない文字の開始位置
        for(; i < length; i++){
            c = string[i];
            switch(c){
                case '"':
                    {
                        // 終端の”、エスケープ文字は別に処理されるのでここに来ない
                        outEndPos[0] = i + 1; // ”の次の文字
                        ret.append(string.slice(bufStart), i - bufStart); // 前の文字までを登録する
                        return ret.s;
                    }
                // falls through
                case '//':
                    {
                        // エスケープの場合
                        i++; // ２文字をセットで扱う
                        if (i - 1 > bufStart) {
                            ret.append(string.slice(bufStart), i - bufStart); // 前の文字までを登録する
                        }
                        bufStart = i + 1; // エスケープ（２文字)の次の文字から
                        if (i < length) {
                            c2 = string[i];
                            switch(c2){
                                case '\\':
                                    ret.expansion(1, '\\');
                                    break;
                                case '"':
                                    ret.expansion(1, '"');
                                    break;
                                case '/':
                                    ret.expansion(1, '/');
                                    break;
                                case 'b':
                                    ret.expansion(1, '\b');
                                    break;
                                case 'f':
                                    ret.expansion(1, '\f');
                                    break;
                                case 'n':
                                    ret.expansion(1, '\n');
                                    break;
                                case 'r':
                                    ret.expansion(1, '\r');
                                    break;
                                case 't':
                                    ret.expansion(1, '\t');
                                    break;
                                case 'u':
                                    this._error = 'parse string/unicord escape not supported';
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            this._error = 'parse string/escape error';
                        }
                    }
                // falls through
                default:
                    {
                        break;
                    }
            }
        }
        this._error = 'parse string/illegal end';
        return null;
    }
    /**
   * JSONのオブジェクトエレメントをパースしてValueオブジェクトを返す
   *
   * @param buffer    JSONエレメントのバッファ
   * @param length    パースする長さ
   * @param begin     パースを開始する位置
   * @param outEndPos パース終了時の位置
   * @return パースから取得したValueオブジェクト
   */ parseObject(buffer, length, begin, outEndPos) {
        if (this._error) {
            return null;
        }
        if (!buffer) {
            this._error = 'buffer is null';
            return null;
        }
        const ret = new JsonMap();
        // Key: Value
        let key = '';
        let i = begin;
        let c = '';
        const localRetEndPos2 = Array(1);
        let ok = false;
        // , が続く限りループ
        for(; i < length; i++){
            FOR_LOOP: for(; i < length; i++){
                c = buffer[i];
                switch(c){
                    case '"':
                        key = this.parseString(buffer, length, i + 1, localRetEndPos2);
                        if (this._error) {
                            return null;
                        }
                        i = localRetEndPos2[0];
                        ok = true;
                        break FOR_LOOP; //-- loopから出る
                    case '}':
                        outEndPos[0] = i + 1;
                        return ret; // 空
                    case ':':
                        this._error = "illegal ':' position";
                        break;
                    case '\n':
                        this._lineCount++;
                    // falls through
                    default:
                        break; // スキップする文字
                }
            }
            if (!ok) {
                this._error = 'key not found';
                return null;
            }
            ok = false;
            // : をチェック
            FOR_LOOP2: for(; i < length; i++){
                c = buffer[i];
                switch(c){
                    case ':':
                        ok = true;
                        i++;
                        break FOR_LOOP2;
                    case '}':
                        this._error = "illegal '}' position";
                        break;
                    // falls through
                    case '\n':
                        this._lineCount++;
                    // case ' ': case '\t' : case '\r':
                    // falls through
                    default:
                        break; // スキップする文字
                }
            }
            if (!ok) {
                this._error = "':' not found";
                return null;
            }
            // 値をチェック
            const value = this.parseValue(buffer, length, i, localRetEndPos2);
            if (this._error) {
                return null;
            }
            i = localRetEndPos2[0];
            // ret.put(key, value);
            ret.put(key, value);
            FOR_LOOP3: for(; i < length; i++){
                c = buffer[i];
                switch(c){
                    case ',':
                        break FOR_LOOP3;
                    case '}':
                        outEndPos[0] = i + 1;
                        return ret; // 正常終了
                    case '\n':
                        this._lineCount++;
                    // falls through
                    default:
                        break; // スキップ
                }
            }
        }
        this._error = 'illegal end of perseObject';
        return null;
    }
    /**
   * 次の「"」までの文字列をパースする。
   * @param buffer    JSONエレメントのバッファ
   * @param length    パースする長さ
   * @param begin     パースを開始する位置
   * @param outEndPos パース終了時の位置
   * @return パースから取得したValueオブジェクト
   */ parseArray(buffer, length, begin, outEndPos) {
        if (this._error) {
            return null;
        }
        if (!buffer) {
            this._error = 'buffer is null';
            return null;
        }
        let ret = new JsonArray();
        // key : value
        let i = begin;
        let c;
        const localRetEndpos2 = new Array(1);
        // , が続く限りループ
        for(; i < length; i++){
            // : をチェック
            const value = this.parseValue(buffer, length, i, localRetEndpos2);
            if (this._error) {
                return null;
            }
            i = localRetEndpos2[0];
            if (value) {
                ret.add(value);
            }
            // FOR_LOOP3:
            // boolean breakflag = false;
            FOR_LOOP: for(; i < length; i++){
                c = buffer[i];
                switch(c){
                    case ',':
                        break FOR_LOOP;
                    case ']':
                        outEndPos[0] = i + 1;
                        return ret; // 終了
                    case '\n':
                        ++this._lineCount;
                    //case ' ': case '\t': case '\r':
                    // falls through
                    default:
                        break; // スキップ
                }
            }
        }
        ret = void 0;
        this._error = 'illegal end of parseObject';
        return null;
    }
    /**
   * コンストラクタ
   */ constructor(buffer, length){
        (0,esm_define_property._)(this, "_parseCallback", CubismJsonExtension.parseJsonObject); // パース時に使う処理のコールバック関数
        (0,esm_define_property._)(this, "_error", void 0); // パース時のエラー
        (0,esm_define_property._)(this, "_lineCount", void 0); // エラー報告に用いる行数カウント
        (0,esm_define_property._)(this, "_root", void 0); // パースされたルート要素
        this._error = null;
        this._lineCount = 0;
        this._root = null;
        if (buffer != undefined) {
            this.parseBytes(buffer, length, this._parseCallback);
        }
    }
}
/**
 * パースしたJSONの要素をfloat値として扱う
 */ class JsonFloat extends Value {
    /**
   * Valueの種類が数値型ならtrue
   */ isFloat() {
        return true;
    }
    /**
   * 要素を文字列で返す(csmString型)
   */ getString(defaultValue, indent) {
        const strbuf = '\0';
        this._value = parseFloat(strbuf);
        this._stringBuffer = strbuf;
        return this._stringBuffer;
    }
    /**
   * 要素を数値型で返す(number)
   */ toInt() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return parseInt(this._value.toString());
    }
    /**
   * 要素を数値型で返す(number)
   */ toFloat() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.0;
        return this._value;
    }
    equals(value) {
        if ('number' === typeof value) {
            // int
            if (Math.round(value)) {
                return false;
            } else {
                return value == this._value;
            }
        }
        return false;
    }
    /**
   * コンストラクタ
   */ constructor(v){
        super(), (0,esm_define_property._)(this, "_value", void 0 // JSON要素の値
        );
        this._value = v;
    }
}
/**
 * パースしたJSONの要素を真偽値として扱う
 */ class JsonBoolean extends Value {
    /**
   * Valueの種類が真偽値ならtrue
   */ isBool() {
        return true;
    }
    /**
   * 要素を真偽値で返す(boolean)
   */ toBoolean() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return this._boolValue;
    }
    /**
   * 要素を文字列で返す(csmString型)
   */ getString(defaultValue, indent) {
        this._stringBuffer = this._boolValue ? 'true' : 'false';
        return this._stringBuffer;
    }
    equals(value) {
        if ('boolean' === typeof value) {
            return value == this._boolValue;
        }
        return false;
    }
    /**
   * Valueの値が静的ならtrue, 静的なら解放しない
   */ isStatic() {
        return true;
    }
    /**
   * 引数付きコンストラクタ
   */ constructor(v){
        super(), (0,esm_define_property._)(this, "_boolValue", void 0 // JSON要素の値
        );
        this._boolValue = v;
    }
}
(0,esm_define_property._)(JsonBoolean, "trueValue", void 0); // true
(0,esm_define_property._)(JsonBoolean, "falseValue", void 0); // false
/**
 * パースしたJSONの要素を文字列として扱う
 */ class JsonString extends Value {
    /**
   * Valueの種類が文字列ならtrue
   */ isString() {
        return true;
    }
    /**
   * 要素を文字列で返す(csmString型)
   */ getString(defaultValue, indent) {
        return this._stringBuffer;
    }
    equals(value) {
        if ('string' === typeof value) {
            return this._stringBuffer == value;
        }
        if (value instanceof csmString) {
            return this._stringBuffer == value.s;
        }
        return false;
    }
    constructor(s){
        super();
        if ('string' === typeof s) {
            this._stringBuffer = s;
        }
        if (s instanceof csmString) {
            this._stringBuffer = s.s;
        }
    }
}
/**
 * JSONパース時のエラー結果。文字列型のようにふるまう
 */ class JsonError extends JsonString {
    /**
   * Valueの値が静的ならtrue、静的なら解放しない
   */ isStatic() {
        return this._isStatic;
    }
    /**
   * エラー情報をセットする
   */ setErrorNotForClientCall(s) {
        this._stringBuffer = s;
        return this;
    }
    /**
   * Valueの種類がエラー値ならtrue
   */ isError() {
        return true;
    }
    /**
   * 引数付きコンストラクタ
   */ constructor(s, isStatic){
        if ('string' === typeof s) {
            super(s), (0,esm_define_property._)(this, "_isStatic", void 0 // 静的なValueかどうか
            );
        } else {
            super(s), (0,esm_define_property._)(this, "_isStatic", void 0);
        }
        this._isStatic = isStatic;
    }
}
/**
 * パースしたJSONの要素をNULL値として持つ
 */ class JsonNullvalue extends Value {
    /**
   * Valueの種類がNULL値ならtrue
   */ isNull() {
        return true;
    }
    /**
   * 要素を文字列で返す(csmString型)
   */ getString(defaultValue, indent) {
        return this._stringBuffer;
    }
    /**
   * Valueの値が静的ならtrue, 静的なら解放しない
   */ isStatic() {
        return true;
    }
    /**
   * Valueにエラー値をセットする
   */ setErrorNotForClientCall(s) {
        this._stringBuffer = s;
        return JsonError.nullValue;
    }
    /**
   * コンストラクタ
   */ constructor(){
        super();
        this._stringBuffer = 'NullValue';
    }
}
/**
 * パースしたJSONの要素を配列として持つ
 */ class JsonArray extends Value {
    /**
   * デストラクタ相当の処理
   */ release() {
        for(let ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()){
            let v = ite.ptr();
            if (v && !v.isStatic()) {
                v = void 0;
                v = null;
            }
        }
    }
    /**
   * Valueの種類が配列ならtrue
   */ isArray() {
        return true;
    }
    /**
   * 添字演算子[index]
   */ getValueByIndex(index) {
        if (index < 0 || this._array.getSize() <= index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
        }
        const v = this._array.at(index);
        if (v == null) {
            return Value.nullValue;
        }
        return v;
    }
    /**
   * 添字演算子[string | csmString]
   */ getValueByString(s) {
        return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    }
    /**
   * 要素を文字列で返す(csmString型)
   */ getString(defaultValue, indent) {
        const stringBuffer = indent + '[\n';
        for(let ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()){
            const v = ite.ptr();
            this._stringBuffer += indent + '' + v.getString(indent + ' ') + '\n';
        }
        this._stringBuffer = stringBuffer + indent + ']\n';
        return this._stringBuffer;
    }
    /**
   * 配列要素を追加する
   * @param v 追加する要素
   */ add(v) {
        this._array.pushBack(v);
    }
    /**
   * 要素をコンテナで返す(csmVector<Value>)
   */ getVector() {
        let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return this._array;
    }
    /**
   * 要素の数を返す
   */ getSize() {
        return this._array.getSize();
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_array", void 0 // JSON要素の値
        );
        this._array = new csmVector();
    }
}
/**
 * パースしたJSONの要素をマップとして持つ
 */ class JsonMap extends Value {
    /**
   * デストラクタ相当の処理
   */ release() {
        const ite = this._map.begin();
        while(ite.notEqual(this._map.end())){
            let v = ite.ptr().second;
            if (v && !v.isStatic()) {
                v = void 0;
                v = null;
            }
            ite.preIncrement();
        }
    }
    /**
   * Valueの値がMap型ならtrue
   */ isMap() {
        return true;
    }
    /**
   * 添字演算子[string | csmString]
   */ getValueByString(s) {
        if (s instanceof csmString) {
            const ret = this._map.getValue(s.s);
            if (ret == null) {
                return Value.nullValue;
            }
            return ret;
        }
        for(let iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()){
            if (iter.ptr().first == s) {
                if (iter.ptr().second == null) {
                    return Value.nullValue;
                }
                return iter.ptr().second;
            }
        }
        return Value.nullValue;
    }
    /**
   * 添字演算子[index]
   */ getValueByIndex(index) {
        return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    }
    /**
   * 要素を文字列で返す(csmString型)
   */ getString(defaultValue, indent) {
        this._stringBuffer = indent + '{\n';
        const ite = this._map.begin();
        while(ite.notEqual(this._map.end())){
            const key = ite.ptr().first;
            const v = ite.ptr().second;
            this._stringBuffer += indent + ' ' + key + ' : ' + v.getString(indent + '   ') + ' \n';
            ite.preIncrement();
        }
        this._stringBuffer += indent + '}\n';
        return this._stringBuffer;
    }
    /**
   * 要素をMap型で返す
   */ getMap(defaultValue) {
        return this._map;
    }
    /**
   * Mapに要素を追加する
   */ put(key, v) {
        this._map.setValue(key, v);
    }
    /**
   * Mapからキーのリストを取得する
   */ getKeys() {
        if (!this._keys) {
            this._keys = new csmVector();
            const ite = this._map.begin();
            while(ite.notEqual(this._map.end())){
                const key = ite.ptr().first;
                this._keys.pushBack(key);
                ite.preIncrement();
            }
        }
        return this._keys;
    }
    /**
   * Mapの要素数を取得する
   */ getSize() {
        return this._keys.getSize();
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_map", void 0 // JSON要素の値
        ), (0,esm_define_property._)(this, "_keys", void 0 // JSON要素の値
        );
        this._map = new csmMap();
    }
}
// Namespace definition for compatibility.


(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismJson = CubismJson;
    Live2DCubismFramework.JsonArray = JsonArray;
    Live2DCubismFramework.JsonBoolean = JsonBoolean;
    Live2DCubismFramework.JsonError = JsonError;
    Live2DCubismFramework.JsonFloat = JsonFloat;
    Live2DCubismFramework.JsonMap = JsonMap;
    Live2DCubismFramework.JsonNullvalue = JsonNullvalue;
    Live2DCubismFramework.JsonString = JsonString;
    Live2DCubismFramework.Value = Value;
})(cubismjson_Live2DCubismFramework || (cubismjson_Live2DCubismFramework = {}));
var cubismjson_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/live2dcubismframework.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 




function strtod(s, endPtr) {
    let index = 0;
    for(let i = 1;; i++){
        const testC = s.slice(i - 1, i);
        // 指数・マイナスの可能性があるのでスキップする
        if (testC == 'e' || testC == '-' || testC == 'E') {
            continue;
        } // 文字列の範囲を広げていく
        const test = s.substring(0, i);
        const number = Number(test);
        if (isNaN(number)) {
            break;
        } // 最後に数値としてできたindexを格納しておく
        index = i;
    }
    let d = parseFloat(s); // パースした数値
    if (isNaN(d)) {
        // 数値として認識できなくなったので終了
        d = NaN;
    }
    endPtr[0] = s.slice(index); // 後続の文字列
    return d;
}
// ファイルスコープの変数を初期化
let s_isStarted = false;
let s_isInitialized = false;
let s_option = null;
let s_cubismIdManager = null;
/**
 * Framework内で使う定数の宣言
 */ const Constant = Object.freeze({
    vertexOffset: 0,
    vertexStep: 2 // メッシュ頂点のステップ値
});
function csmDelete(address) {
    if (!address) {
        return;
    }
    address = void 0;
}
/**
 * Live2D Cubism SDK Original Workflow SDKのエントリポイント
 * 利用開始時はCubismFramework.initialize()を呼び、CubismFramework.dispose()で終了する。
 */ class CubismFramework {
    /**
   * Cubism FrameworkのAPIを使用可能にする。
   *  APIを実行する前に必ずこの関数を実行すること。
   *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
   *
   * @param    option      Optionクラスのインスタンス
   *
   * @return   準備処理が完了したらtrueが返ります。
   */ static startUp() {
        let option = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if (s_isStarted) {
            CubismLogInfo('CubismFramework.startUp() is already done.');
            return s_isStarted;
        }
        s_option = option;
        if (s_option != null) {
            Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
        }
        s_isStarted = true;
        // Live2D Cubism Coreバージョン情報を表示
        if (s_isStarted) {
            const version = Live2DCubismCore.Version.csmGetVersion();
            const major = (version & 0xff000000) >> 24;
            const minor = (version & 0x00ff0000) >> 16;
            const patch = version & 0x0000ffff;
            const versionNumber = version;
            CubismLogInfo(`Live2D Cubism Core version: {0}.{1}.{2} ({3})`, ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
        }
        CubismLogInfo('CubismFramework.startUp() is complete.');
        return s_isStarted;
    }
    /**
   * StartUp()で初期化したCubismFrameworkの各パラメータをクリアします。
   * Dispose()したCubismFrameworkを再利用する際に利用してください。
   */ static cleanUp() {
        s_isStarted = false;
        s_isInitialized = false;
        s_option = null;
        s_cubismIdManager = null;
    }
    /**
   * Cubism Framework内のリソースを初期化してモデルを表示可能な状態にします。<br>
   *     再度Initialize()するには先にDispose()を実行する必要があります。
   *
   * @param memorySize 初期化時メモリ量 [byte(s)]
   *    複数モデル表示時などにモデルが更新されない際に使用してください。
   *    指定する際は必ず1024*1024*16 byte(16MB)以上の値を指定してください。
   *    それ以外はすべて1024*1024*16 byteに丸めます。
   */ static initialize() {
        let memorySize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        CSM_ASSERT(s_isStarted);
        if (!s_isStarted) {
            CubismLogWarning('CubismFramework is not started.');
            return;
        }
        // --- s_isInitializedによる連続初期化ガード ---
        // 連続してリソース確保が行われないようにする。
        // 再度Initialize()するには先にDispose()を実行する必要がある。
        if (s_isInitialized) {
            CubismLogWarning('CubismFramework.initialize() skipped, already initialized.');
            return;
        }
        //---- static 初期化 ----
        Value.staticInitializeNotForClientCall();
        s_cubismIdManager = new CubismIdManager();
        // --- HACK: 初期化時メモリ量の拡張(単位byte) ---
        // 複数モデル表示時などにモデルが更新されない際に使用してください。
        // 指定する際は必ず1024*1024*16 byte(16MB)以上の値を指定してください。
        // それ以外はすべて1024*1024*16 byteに丸めます。
        Live2DCubismCore.Memory.initializeAmountOfMemory(memorySize);
        s_isInitialized = true;
        CubismLogInfo('CubismFramework.initialize() is complete.');
    }
    /**
   * Cubism Framework内の全てのリソースを解放します。
   *      ただし、外部で確保されたリソースについては解放しません。
   *      外部で適切に破棄する必要があります。
   */ static dispose() {
        CSM_ASSERT(s_isStarted);
        if (!s_isStarted) {
            CubismLogWarning('CubismFramework is not started.');
            return;
        }
        // --- s_isInitializedによる未初期化解放ガード ---
        // dispose()するには先にinitialize()を実行する必要がある。
        if (!s_isInitialized) {
            // false...リソース未確保の場合
            CubismLogWarning('CubismFramework.dispose() skipped, not initialized.');
            return;
        }
        Value.staticReleaseNotForClientCall();
        s_cubismIdManager.release();
        s_cubismIdManager = null;
        // レンダラの静的リソース（シェーダプログラム他）を解放する
        CubismRenderer.staticRelease();
        s_isInitialized = false;
        CubismLogInfo('CubismFramework.dispose() is complete.');
    }
    /**
   * Cubism FrameworkのAPIを使用する準備が完了したかどうか
   * @return APIを使用する準備が完了していればtrueが返ります。
   */ static isStarted() {
        return s_isStarted;
    }
    /**
   * Cubism Frameworkのリソース初期化がすでに行われているかどうか
   * @return リソース確保が完了していればtrueが返ります
   */ static isInitialized() {
        return s_isInitialized;
    }
    /**
   * Core APIにバインドしたログ関数を実行する
   *
   * @praram message ログメッセージ
   */ static coreLogFunction(message) {
        // Return if logging not possible.
        if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
            return;
        }
        Live2DCubismCore.Logging.csmGetLogFunction()(message);
    }
    /**
   * 現在のログ出力レベル設定の値を返す。
   *
   * @return  現在のログ出力レベル設定の値
   */ static getLoggingLevel() {
        if (s_option != null) {
            return s_option.loggingLevel;
        }
        return 5;
    }
    /**
   * IDマネージャのインスタンスを取得する
   * @return CubismManagerクラスのインスタンス
   */ static getIdManager() {
        return s_cubismIdManager;
    }
    /**
   * 静的クラスとして使用する
   * インスタンス化させない
   */ constructor(){}
}
class Option {
    constructor(){
        _define_property(this, "logFunction", void 0); // ログ出力の関数オブジェクト
        _define_property(this, "loggingLevel", void 0); // ログ出力レベルの設定
    }
}
/**
 * ログ出力のレベル
 */ var live2dcubismframework_LogLevel = /*#__PURE__*/ function(LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off"; // ログ出力無効
    return LogLevel;
}({});
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.Constant = Constant;
    Live2DCubismFramework.csmDelete = csmDelete;
    Live2DCubismFramework.CubismFramework = CubismFramework;
})(live2dcubismframework_Live2DCubismFramework || (live2dcubismframework_Live2DCubismFramework = {}));
var live2dcubismframework_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/cubismmodelsettingjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 




var cubismmodelsettingjson_FrequestNode = /*#__PURE__*/ function(FrequestNode) {
    FrequestNode[FrequestNode["FrequestNode_Groups"] = 0] = "FrequestNode_Groups";
    FrequestNode[FrequestNode["FrequestNode_Moc"] = 1] = "FrequestNode_Moc";
    FrequestNode[FrequestNode["FrequestNode_Motions"] = 2] = "FrequestNode_Motions";
    FrequestNode[FrequestNode["FrequestNode_Expressions"] = 3] = "FrequestNode_Expressions";
    FrequestNode[FrequestNode["FrequestNode_Textures"] = 4] = "FrequestNode_Textures";
    FrequestNode[FrequestNode["FrequestNode_Physics"] = 5] = "FrequestNode_Physics";
    FrequestNode[FrequestNode["FrequestNode_Pose"] = 6] = "FrequestNode_Pose";
    FrequestNode[FrequestNode["FrequestNode_HitAreas"] = 7] = "FrequestNode_HitAreas"; // getRoot().getValueByString(HitAreas)
    return FrequestNode;
}({});
/**
 * Model3Jsonパーサー
 *
 * model3.jsonファイルをパースして値を取得する
 */ class CubismModelSettingJson extends ICubismModelSetting {
    /**
   * デストラクタ相当の処理
   */ release() {
        CubismJson["delete"](this._json);
        this._jsonValue = null;
    }
    /**
   * CubismJsonオブジェクトを取得する
   *
   * @return CubismJson
   */ getJson() {
        return this._json;
    }
    /**
   * Mocファイルの名前を取得する
   * @return Mocファイルの名前
   */ getModelFileName() {
        if (!this.isExistModelFile()) {
            return '';
        }
        return this._jsonValue.at(1).getRawString();
    }
    /**
   * モデルが使用するテクスチャの数を取得する
   * テクスチャの数
   */ getTextureCount() {
        if (!this.isExistTextureFiles()) {
            return 0;
        }
        return this._jsonValue.at(4).getSize();
    }
    /**
   * テクスチャが配置されたディレクトリの名前を取得する
   * @return テクスチャが配置されたディレクトリの名前
   */ getTextureDirectory() {
        const texturePath = this._jsonValue.at(4).getValueByIndex(0).getRawString();
        const pathArray = texturePath.split('/');
        // 最後の要素はテクスチャ名なので不要
        const arrayLength = pathArray.length - 1;
        let textureDirectoryStr = '';
        // 分割したパスを結合
        for(let i = 0; i < arrayLength; i++){
            textureDirectoryStr += pathArray[i];
            if (i < arrayLength - 1) {
                textureDirectoryStr += '/';
            }
        }
        return textureDirectoryStr;
    }
    /**
   * モデルが使用するテクスチャの名前を取得する
   * @param index 配列のインデックス値
   * @return テクスチャの名前
   */ getTextureFileName(index) {
        return this._jsonValue.at(4).getValueByIndex(index).getRawString();
    }
    /**
   * モデルに設定された当たり判定の数を取得する
   * @return モデルに設定された当たり判定の数
   */ getHitAreasCount() {
        if (!this.isExistHitAreas()) {
            return 0;
        }
        return this._jsonValue.at(7).getSize();
    }
    /**
   * 当たり判定に設定されたIDを取得する
   *
   * @param index 配列のindex
   * @return 当たり判定に設定されたID
   */ getHitAreaId(index) {
        return CubismFramework.getIdManager().getId(this._jsonValue.at(7).getValueByIndex(index).getValueByString(this.id).getRawString());
    }
    /**
   * 当たり判定に設定された名前を取得する
   * @param index 配列のインデックス値
   * @return 当たり判定に設定された名前
   */ getHitAreaName(index) {
        return this._jsonValue.at(7).getValueByIndex(index).getValueByString(this.name).getRawString();
    }
    /**
   * 物理演算設定ファイルの名前を取得する
   * @return 物理演算設定ファイルの名前
   */ getPhysicsFileName() {
        if (!this.isExistPhysicsFile()) {
            return '';
        }
        return this._jsonValue.at(5).getRawString();
    }
    /**
   * パーツ切り替え設定ファイルの名前を取得する
   * @return パーツ切り替え設定ファイルの名前
   */ getPoseFileName() {
        if (!this.isExistPoseFile()) {
            return '';
        }
        return this._jsonValue.at(6).getRawString();
    }
    /**
   * 表情設定ファイルの数を取得する
   * @return 表情設定ファイルの数
   */ getExpressionCount() {
        if (!this.isExistExpressionFile()) {
            return 0;
        }
        return this._jsonValue.at(3).getSize();
    }
    /**
   * 表情設定ファイルを識別する名前（別名）を取得する
   * @param index 配列のインデックス値
   * @return 表情の名前
   */ getExpressionName(index) {
        return this._jsonValue.at(3).getValueByIndex(index).getValueByString(this.name).getRawString();
    }
    /**
   * 表情設定ファイルの名前を取得する
   * @param index 配列のインデックス値
   * @return 表情設定ファイルの名前
   */ getExpressionFileName(index) {
        return this._jsonValue.at(3).getValueByIndex(index).getValueByString(this.filePath).getRawString();
    }
    /**
   * モーショングループの数を取得する
   * @return モーショングループの数
   */ getMotionGroupCount() {
        if (!this.isExistMotionGroups()) {
            return 0;
        }
        return this._jsonValue.at(2).getKeys().getSize();
    }
    /**
   * モーショングループの名前を取得する
   * @param index 配列のインデックス値
   * @return モーショングループの名前
   */ getMotionGroupName(index) {
        if (!this.isExistMotionGroups()) {
            return null;
        }
        return this._jsonValue.at(2).getKeys().at(index);
    }
    /**
   * モーショングループに含まれるモーションの数を取得する
   * @param groupName モーショングループの名前
   * @return モーショングループの数
   */ getMotionCount(groupName) {
        if (!this.isExistMotionGroupName(groupName)) {
            return 0;
        }
        return this._jsonValue.at(2).getValueByString(groupName).getSize();
    }
    /**
   * グループ名とインデックス値からモーションファイル名を取得する
   * @param groupName モーショングループの名前
   * @param index     配列のインデックス値
   * @return モーションファイルの名前
   */ getMotionFileName(groupName, index) {
        if (!this.isExistMotionGroupName(groupName)) {
            return '';
        }
        return this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.filePath).getRawString();
    }
    /**
   * モーションに対応するサウンドファイルの名前を取得する
   * @param groupName モーショングループの名前
   * @param index 配列のインデックス値
   * @return サウンドファイルの名前
   */ getMotionSoundFileName(groupName, index) {
        if (!this.isExistMotionSoundFile(groupName, index)) {
            return '';
        }
        return this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.soundPath).getRawString();
    }
    /**
   * モーション開始時のフェードイン処理時間を取得する
   * @param groupName モーショングループの名前
   * @param index 配列のインデックス値
   * @return フェードイン処理時間[秒]
   */ getMotionFadeInTimeValue(groupName, index) {
        if (!this.isExistMotionFadeIn(groupName, index)) {
            return -1.0;
        }
        return this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.fadeInTime).toFloat();
    }
    /**
   * モーション終了時のフェードアウト処理時間を取得する
   * @param groupName モーショングループの名前
   * @param index 配列のインデックス値
   * @return フェードアウト処理時間[秒]
   */ getMotionFadeOutTimeValue(groupName, index) {
        if (!this.isExistMotionFadeOut(groupName, index)) {
            return -1.0;
        }
        return this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.fadeOutTime).toFloat();
    }
    /**
   * ユーザーデータのファイル名を取得する
   * @return ユーザーデータのファイル名
   */ getUserDataFile() {
        if (!this.isExistUserDataFile()) {
            return '';
        }
        return this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.userData).getRawString();
    }
    /**
   * レイアウト情報を取得する
   * @param outLayoutMap csmMapクラスのインスタンス
   * @return true レイアウト情報が存在する
   * @return false レイアウト情報が存在しない
   */ getLayoutMap(outLayoutMap) {
        // 存在しない要素にアクセスするとエラーになるためValueがnullの場合はnullを代入する
        const map = this.getJson().getRoot().getValueByString(this.layout).getMap();
        if (map == null) {
            return false;
        }
        let ret = false;
        for(const ite = map.begin(); ite.notEqual(map.end()); ite.preIncrement()){
            outLayoutMap.setValue(ite.ptr().first, ite.ptr().second.toFloat());
            ret = true;
        }
        return ret;
    }
    /**
   * 目パチに関連付けられたパラメータの数を取得する
   * @return 目パチに関連付けられたパラメータの数
   */ getEyeBlinkParameterCount() {
        if (!this.isExistEyeBlinkParameters()) {
            return 0;
        }
        let num = 0;
        for(let i = 0; i < this._jsonValue.at(0).getSize(); i++){
            const refI = this._jsonValue.at(0).getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(this.name).getRawString() == this.eyeBlink) {
                num = refI.getValueByString(this.ids).getVector().getSize();
                break;
            }
        }
        return num;
    }
    /**
   * 目パチに関連付けられたパラメータのIDを取得する
   * @param index 配列のインデックス値
   * @return パラメータID
   */ getEyeBlinkParameterId(index) {
        if (!this.isExistEyeBlinkParameters()) {
            return null;
        }
        for(let i = 0; i < this._jsonValue.at(0).getSize(); i++){
            const refI = this._jsonValue.at(0).getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(this.name).getRawString() == this.eyeBlink) {
                return CubismFramework.getIdManager().getId(refI.getValueByString(this.ids).getValueByIndex(index).getRawString());
            }
        }
        return null;
    }
    /**
   * リップシンクに関連付けられたパラメータの数を取得する
   * @return リップシンクに関連付けられたパラメータの数
   */ getLipSyncParameterCount() {
        if (!this.isExistLipSyncParameters()) {
            return 0;
        }
        let num = 0;
        for(let i = 0; i < this._jsonValue.at(0).getSize(); i++){
            const refI = this._jsonValue.at(0).getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(this.name).getRawString() == this.lipSync) {
                num = refI.getValueByString(this.ids).getVector().getSize();
                break;
            }
        }
        return num;
    }
    /**
   * リップシンクに関連付けられたパラメータの数を取得する
   * @param index 配列のインデックス値
   * @return パラメータID
   */ getLipSyncParameterId(index) {
        if (!this.isExistLipSyncParameters()) {
            return null;
        }
        for(let i = 0; i < this._jsonValue.at(0).getSize(); i++){
            const refI = this._jsonValue.at(0).getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(this.name).getRawString() == this.lipSync) {
                return CubismFramework.getIdManager().getId(refI.getValueByString(this.ids).getValueByIndex(index).getRawString());
            }
        }
        return null;
    }
    /**
   * モデルファイルのキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistModelFile() {
        const node = this._jsonValue.at(1);
        return !node.isNull() && !node.isError();
    }
    /**
   * テクスチャファイルのキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistTextureFiles() {
        const node = this._jsonValue.at(4);
        return !node.isNull() && !node.isError();
    }
    /**
   * 当たり判定のキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistHitAreas() {
        const node = this._jsonValue.at(7);
        return !node.isNull() && !node.isError();
    }
    /**
   * 物理演算ファイルのキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistPhysicsFile() {
        const node = this._jsonValue.at(5);
        return !node.isNull() && !node.isError();
    }
    /**
   * ポーズ設定ファイルのキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistPoseFile() {
        const node = this._jsonValue.at(6);
        return !node.isNull() && !node.isError();
    }
    /**
   * 表情設定ファイルのキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistExpressionFile() {
        const node = this._jsonValue.at(3);
        return !node.isNull() && !node.isError();
    }
    /**
   * モーショングループのキーが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistMotionGroups() {
        const node = this._jsonValue.at(2);
        return !node.isNull() && !node.isError();
    }
    /**
   * 引数で指定したモーショングループのキーが存在するかどうかを確認する
   * @param groupName  グループ名
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistMotionGroupName(groupName) {
        const node = this._jsonValue.at(2).getValueByString(groupName);
        return !node.isNull() && !node.isError();
    }
    /**
   * 引数で指定したモーションに対応するサウンドファイルのキーが存在するかどうかを確認する
   * @param groupName  グループ名
   * @param index 配列のインデックス値
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistMotionSoundFile(groupName, index) {
        const node = this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.soundPath);
        return !node.isNull() && !node.isError();
    }
    /**
   * 引数で指定したモーションに対応するフェードイン時間のキーが存在するかどうかを確認する
   * @param groupName  グループ名
   * @param index 配列のインデックス値
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistMotionFadeIn(groupName, index) {
        const node = this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.fadeInTime);
        return !node.isNull() && !node.isError();
    }
    /**
   * 引数で指定したモーションに対応するフェードアウト時間のキーが存在するかどうかを確認する
   * @param groupName  グループ名
   * @param index 配列のインデックス値
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistMotionFadeOut(groupName, index) {
        const node = this._jsonValue.at(2).getValueByString(groupName).getValueByIndex(index).getValueByString(this.fadeOutTime);
        return !node.isNull() && !node.isError();
    }
    /**
   * UserDataのファイル名が存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistUserDataFile() {
        const node = this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.userData);
        return !node.isNull() && !node.isError();
    }
    /**
   * 目ぱちに対応付けられたパラメータが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistEyeBlinkParameters() {
        if (this._jsonValue.at(0).isNull() || this._jsonValue.at(0).isError()) {
            return false;
        }
        for(let i = 0; i < this._jsonValue.at(0).getSize(); ++i){
            if (this._jsonValue.at(0).getValueByIndex(i).getValueByString(this.name).getRawString() == this.eyeBlink) {
                return true;
            }
        }
        return false;
    }
    /**
   * リップシンクに対応付けられたパラメータが存在するかどうかを確認する
   * @return true キーが存在する
   * @return false キーが存在しない
   */ isExistLipSyncParameters() {
        if (this._jsonValue.at(0).isNull() || this._jsonValue.at(0).isError()) {
            return false;
        }
        for(let i = 0; i < this._jsonValue.at(0).getSize(); ++i){
            if (this._jsonValue.at(0).getValueByIndex(i).getValueByString(this.name).getRawString() == this.lipSync) {
                return true;
            }
        }
        return false;
    }
    /**
   * 引数付きコンストラクタ
   *
   * @param buffer    Model3Jsonをバイト配列として読み込んだデータバッファ
   * @param size      Model3Jsonのデータサイズ
   */ constructor(buffer, size){
        super(), (0,esm_define_property._)(this, "_json", void 0), (0,esm_define_property._)(this, "_jsonValue", void 0), /**
   * Model3Jsonのキー文字列
   */ (0,esm_define_property._)(this, "version", 'Version'), (0,esm_define_property._)(this, "fileReferences", 'FileReferences'), (0,esm_define_property._)(this, "groups", 'Groups'), (0,esm_define_property._)(this, "layout", 'Layout'), (0,esm_define_property._)(this, "hitAreas", 'HitAreas'), (0,esm_define_property._)(this, "moc", 'Moc'), (0,esm_define_property._)(this, "textures", 'Textures'), (0,esm_define_property._)(this, "physics", 'Physics'), (0,esm_define_property._)(this, "pose", 'Pose'), (0,esm_define_property._)(this, "expressions", 'Expressions'), (0,esm_define_property._)(this, "motions", 'Motions'), (0,esm_define_property._)(this, "userData", 'UserData'), (0,esm_define_property._)(this, "name", 'Name'), (0,esm_define_property._)(this, "filePath", 'File'), (0,esm_define_property._)(this, "id", 'Id'), (0,esm_define_property._)(this, "ids", 'Ids'), (0,esm_define_property._)(this, "target", 'Target'), // Motions
        (0,esm_define_property._)(this, "idle", 'Idle'), (0,esm_define_property._)(this, "tapBody", 'TapBody'), (0,esm_define_property._)(this, "pinchIn", 'PinchIn'), (0,esm_define_property._)(this, "pinchOut", 'PinchOut'), (0,esm_define_property._)(this, "shake", 'Shake'), (0,esm_define_property._)(this, "flickHead", 'FlickHead'), (0,esm_define_property._)(this, "parameter", 'Parameter'), (0,esm_define_property._)(this, "soundPath", 'Sound'), (0,esm_define_property._)(this, "fadeInTime", 'FadeInTime'), (0,esm_define_property._)(this, "fadeOutTime", 'FadeOutTime'), // Layout
        (0,esm_define_property._)(this, "centerX", 'CenterX'), (0,esm_define_property._)(this, "centerY", 'CenterY'), (0,esm_define_property._)(this, "x", 'X'), (0,esm_define_property._)(this, "y", 'Y'), (0,esm_define_property._)(this, "width", 'Width'), (0,esm_define_property._)(this, "height", 'Height'), (0,esm_define_property._)(this, "lipSync", 'LipSync'), (0,esm_define_property._)(this, "eyeBlink", 'EyeBlink'), (0,esm_define_property._)(this, "initParameter", 'init_param'), (0,esm_define_property._)(this, "initPartsVisible", 'init_parts_visible'), (0,esm_define_property._)(this, "val", 'val');
        this._json = CubismJson.create(buffer, size);
        if (this.getJson()) {
            this._jsonValue = new csmVector();
            // 順番はenum FrequestNodeと一致させる
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.groups));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.moc));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.motions));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.expressions));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.textures));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.physics));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.pose));
            this._jsonValue.pushBack(this.getJson().getRoot().getValueByString(this.hitAreas));
        }
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelSettingJson = CubismModelSettingJson;
    Live2DCubismFramework.FrequestNode = cubismmodelsettingjson_FrequestNode;
})(cubismmodelsettingjson_Live2DCubismFramework || (cubismmodelsettingjson_Live2DCubismFramework = {}));
var cubismmodelsettingjson_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/cubismdefaultparameterid.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * @brief パラメータIDのデフォルト値を保持する定数<br>
 *         デフォルト値の仕様は以下のマニュアルに基づく<br>
 *         https://docs.live2d.com/cubism-editor-manual/standard-parametor-list/
 */ const CubismDefaultParameterId = Object.freeze({
    // パーツID
    HitAreaPrefix: 'HitArea',
    HitAreaHead: 'Head',
    HitAreaBody: 'Body',
    PartsIdCore: 'Parts01Core',
    PartsArmPrefix: 'Parts01Arm_',
    PartsArmLPrefix: 'Parts01ArmL_',
    PartsArmRPrefix: 'Parts01ArmR_',
    // パラメータID
    ParamAngleX: 'ParamAngleX',
    ParamAngleY: 'ParamAngleY',
    ParamAngleZ: 'ParamAngleZ',
    ParamEyeLOpen: 'ParamEyeLOpen',
    ParamEyeLSmile: 'ParamEyeLSmile',
    ParamEyeROpen: 'ParamEyeROpen',
    ParamEyeRSmile: 'ParamEyeRSmile',
    ParamEyeBallX: 'ParamEyeBallX',
    ParamEyeBallY: 'ParamEyeBallY',
    ParamEyeBallForm: 'ParamEyeBallForm',
    ParamBrowLY: 'ParamBrowLY',
    ParamBrowRY: 'ParamBrowRY',
    ParamBrowLX: 'ParamBrowLX',
    ParamBrowRX: 'ParamBrowRX',
    ParamBrowLAngle: 'ParamBrowLAngle',
    ParamBrowRAngle: 'ParamBrowRAngle',
    ParamBrowLForm: 'ParamBrowLForm',
    ParamBrowRForm: 'ParamBrowRForm',
    ParamMouthForm: 'ParamMouthForm',
    ParamMouthOpenY: 'ParamMouthOpenY',
    ParamCheek: 'ParamCheek',
    ParamBodyAngleX: 'ParamBodyAngleX',
    ParamBodyAngleY: 'ParamBodyAngleY',
    ParamBodyAngleZ: 'ParamBodyAngleZ',
    ParamBreath: 'ParamBreath',
    ParamArmLA: 'ParamArmLA',
    ParamArmRA: 'ParamArmRA',
    ParamArmLB: 'ParamArmLB',
    ParamArmRB: 'ParamArmRB',
    ParamHandL: 'ParamHandL',
    ParamHandR: 'ParamHandR',
    ParamHairFront: 'ParamHairFront',
    ParamHairSide: 'ParamHairSide',
    ParamHairBack: 'ParamHairBack',
    ParamHairFluffy: 'ParamHairFluffy',
    ParamShoulderY: 'ParamShoulderY',
    ParamBustX: 'ParamBustX',
    ParamBustY: 'ParamBustY',
    ParamBaseX: 'ParamBaseX',
    ParamBaseY: 'ParamBaseY',
    ParamNONE: 'NONE:'
});
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.HitAreaBody = CubismDefaultParameterId.HitAreaBody;
    Live2DCubismFramework.HitAreaHead = CubismDefaultParameterId.HitAreaHead;
    Live2DCubismFramework.HitAreaPrefix = CubismDefaultParameterId.HitAreaPrefix;
    Live2DCubismFramework.ParamAngleX = CubismDefaultParameterId.ParamAngleX;
    Live2DCubismFramework.ParamAngleY = CubismDefaultParameterId.ParamAngleY;
    Live2DCubismFramework.ParamAngleZ = CubismDefaultParameterId.ParamAngleZ;
    Live2DCubismFramework.ParamArmLA = CubismDefaultParameterId.ParamArmLA;
    Live2DCubismFramework.ParamArmLB = CubismDefaultParameterId.ParamArmLB;
    Live2DCubismFramework.ParamArmRA = CubismDefaultParameterId.ParamArmRA;
    Live2DCubismFramework.ParamArmRB = CubismDefaultParameterId.ParamArmRB;
    Live2DCubismFramework.ParamBaseX = CubismDefaultParameterId.ParamBaseX;
    Live2DCubismFramework.ParamBaseY = CubismDefaultParameterId.ParamBaseY;
    Live2DCubismFramework.ParamBodyAngleX = CubismDefaultParameterId.ParamBodyAngleX;
    Live2DCubismFramework.ParamBodyAngleY = CubismDefaultParameterId.ParamBodyAngleY;
    Live2DCubismFramework.ParamBodyAngleZ = CubismDefaultParameterId.ParamBodyAngleZ;
    Live2DCubismFramework.ParamBreath = CubismDefaultParameterId.ParamBreath;
    Live2DCubismFramework.ParamBrowLAngle = CubismDefaultParameterId.ParamBrowLAngle;
    Live2DCubismFramework.ParamBrowLForm = CubismDefaultParameterId.ParamBrowLForm;
    Live2DCubismFramework.ParamBrowLX = CubismDefaultParameterId.ParamBrowLX;
    Live2DCubismFramework.ParamBrowLY = CubismDefaultParameterId.ParamBrowLY;
    Live2DCubismFramework.ParamBrowRAngle = CubismDefaultParameterId.ParamBrowRAngle;
    Live2DCubismFramework.ParamBrowRForm = CubismDefaultParameterId.ParamBrowRForm;
    Live2DCubismFramework.ParamBrowRX = CubismDefaultParameterId.ParamBrowRX;
    Live2DCubismFramework.ParamBrowRY = CubismDefaultParameterId.ParamBrowRY;
    Live2DCubismFramework.ParamBustX = CubismDefaultParameterId.ParamBustX;
    Live2DCubismFramework.ParamBustY = CubismDefaultParameterId.ParamBustY;
    Live2DCubismFramework.ParamCheek = CubismDefaultParameterId.ParamCheek;
    Live2DCubismFramework.ParamEyeBallForm = CubismDefaultParameterId.ParamEyeBallForm;
    Live2DCubismFramework.ParamEyeBallX = CubismDefaultParameterId.ParamEyeBallX;
    Live2DCubismFramework.ParamEyeBallY = CubismDefaultParameterId.ParamEyeBallY;
    Live2DCubismFramework.ParamEyeLOpen = CubismDefaultParameterId.ParamEyeLOpen;
    Live2DCubismFramework.ParamEyeLSmile = CubismDefaultParameterId.ParamEyeLSmile;
    Live2DCubismFramework.ParamEyeROpen = CubismDefaultParameterId.ParamEyeROpen;
    Live2DCubismFramework.ParamEyeRSmile = CubismDefaultParameterId.ParamEyeRSmile;
    Live2DCubismFramework.ParamHairBack = CubismDefaultParameterId.ParamHairBack;
    Live2DCubismFramework.ParamHairFluffy = CubismDefaultParameterId.ParamHairFluffy;
    Live2DCubismFramework.ParamHairFront = CubismDefaultParameterId.ParamHairFront;
    Live2DCubismFramework.ParamHairSide = CubismDefaultParameterId.ParamHairSide;
    Live2DCubismFramework.ParamHandL = CubismDefaultParameterId.ParamHandL;
    Live2DCubismFramework.ParamHandR = CubismDefaultParameterId.ParamHandR;
    Live2DCubismFramework.ParamMouthForm = CubismDefaultParameterId.ParamMouthForm;
    Live2DCubismFramework.ParamMouthOpenY = CubismDefaultParameterId.ParamMouthOpenY;
    Live2DCubismFramework.ParamNONE = CubismDefaultParameterId.ParamNONE;
    Live2DCubismFramework.ParamShoulderY = CubismDefaultParameterId.ParamShoulderY;
    Live2DCubismFramework.PartsArmLPrefix = CubismDefaultParameterId.PartsArmLPrefix;
    Live2DCubismFramework.PartsArmPrefix = CubismDefaultParameterId.PartsArmPrefix;
    Live2DCubismFramework.PartsArmRPrefix = CubismDefaultParameterId.PartsArmRPrefix;
    Live2DCubismFramework.PartsIdCore = CubismDefaultParameterId.PartsIdCore;
})(cubismdefaultparameterid_Live2DCubismFramework || (cubismdefaultparameterid_Live2DCubismFramework = {}));
var cubismdefaultparameterid_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/effect/cubismeyeblink.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * 自動まばたき機能
 *
 * 自動まばたき機能を提供する。
 */ class CubismEyeBlink {
    /**
   * インスタンスを作成する
   * @param modelSetting モデルの設定情報
   * @return 作成されたインスタンス
   * @note 引数がNULLの場合、パラメータIDが設定されていない空のインスタンスを作成する。
   */ static create() {
        let modelSetting = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return new CubismEyeBlink(modelSetting);
    }
    /**
   * インスタンスの破棄
   * @param eyeBlink 対象のCubismEyeBlink
   */ static delete(eyeBlink) {
        if (eyeBlink != null) {
            eyeBlink = null;
        }
    }
    /**
   * まばたきの間隔の設定
   * @param blinkingInterval まばたきの間隔の時間[秒]
   */ setBlinkingInterval(blinkingInterval) {
        this._blinkingIntervalSeconds = blinkingInterval;
    }
    /**
   * まばたきのモーションの詳細設定
   * @param closing   まぶたを閉じる動作の所要時間[秒]
   * @param closed    まぶたを閉じている動作の所要時間[秒]
   * @param opening   まぶたを開く動作の所要時間[秒]
   */ setBlinkingSetting(closing, closed, opening) {
        this._closingSeconds = closing;
        this._closedSeconds = closed;
        this._openingSeconds = opening;
    }
    /**
   * まばたきさせるパラメータIDのリストの設定
   * @param parameterIds パラメータのIDのリスト
   */ setParameterIds(parameterIds) {
        this._parameterIds = parameterIds;
    }
    /**
   * まばたきさせるパラメータIDのリストの取得
   * @return パラメータIDのリスト
   */ getParameterIds() {
        return this._parameterIds;
    }
    /**
   * モデルのパラメータの更新
   * @param model 対象のモデル
   * @param deltaTimeSeconds デルタ時間[秒]
   */ updateParameters(model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        let parameterValue;
        let t = 0.0;
        const blinkingState = this._blinkingState;
        switch(blinkingState){
            case 2:
                t = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds;
                if (t >= 1.0) {
                    t = 1.0;
                    this._blinkingState = 3;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 1.0 - t;
                break;
            case 3:
                t = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds;
                if (t >= 1.0) {
                    this._blinkingState = 4;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 0.0;
                break;
            case 4:
                t = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds;
                if (t >= 1.0) {
                    t = 1.0;
                    this._blinkingState = 1;
                    this._nextBlinkingTime = this.determinNextBlinkingTiming();
                }
                parameterValue = t;
                break;
            case 1:
                if (this._nextBlinkingTime < this._userTimeSeconds) {
                    this._blinkingState = 2;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 1.0;
                break;
            case 0:
            default:
                this._blinkingState = 1;
                this._nextBlinkingTime = this.determinNextBlinkingTiming();
                parameterValue = 1.0;
                break;
        }
        if (!CubismEyeBlink.CloseIfZero) {
            parameterValue = -parameterValue;
        }
        for(let i = 0; i < this._parameterIds.getSize(); ++i){
            model.setParameterValueById(this._parameterIds.at(i), parameterValue);
        }
    }
    /**
   * 次の瞬きのタイミングの決定
   *
   * @return 次のまばたきを行う時刻[秒]
   */ determinNextBlinkingTiming() {
        const r = Math.random();
        return this._userTimeSeconds + r * (2.0 * this._blinkingIntervalSeconds - 1.0);
    }
    /**
   * コンストラクタ
   * @param modelSetting モデルの設定情報
   */ constructor(modelSetting){
        (0,esm_define_property._)(this, "_blinkingState", void 0); // 現在の状態
        (0,esm_define_property._)(this, "_parameterIds", void 0); // 操作対象のパラメータのIDのリスト
        (0,esm_define_property._)(this, "_nextBlinkingTime", void 0); // 次のまばたきの時刻[秒]
        (0,esm_define_property._)(this, "_stateStartTimeSeconds", void 0); // 現在の状態が開始した時刻[秒]
        (0,esm_define_property._)(this, "_blinkingIntervalSeconds", void 0); // まばたきの間隔[秒]
        (0,esm_define_property._)(this, "_closingSeconds", void 0); // まぶたを閉じる動作の所要時間[秒]
        (0,esm_define_property._)(this, "_closedSeconds", void 0); // まぶたを閉じている動作の所要時間[秒]
        (0,esm_define_property._)(this, "_openingSeconds", void 0); // まぶたを開く動作の所要時間[秒]
        (0,esm_define_property._)(this, "_userTimeSeconds", void 0); // デルタ時間の積算値[秒]
        this._blinkingState = 0;
        this._nextBlinkingTime = 0.0;
        this._stateStartTimeSeconds = 0.0;
        this._blinkingIntervalSeconds = 4.0;
        this._closingSeconds = 0.1;
        this._closedSeconds = 0.05;
        this._openingSeconds = 0.15;
        this._userTimeSeconds = 0.0;
        this._parameterIds = new csmVector();
        if (modelSetting == null) {
            return;
        }
        for(let i = 0; i < modelSetting.getEyeBlinkParameterCount(); ++i){
            this._parameterIds.pushBack(modelSetting.getEyeBlinkParameterId(i));
        }
    }
}
/**
   * IDで指定された目のパラメータが、0のときに閉じるなら true 、1の時に閉じるなら false 。
   */ (0,esm_define_property._)(CubismEyeBlink, "CloseIfZero", true);
/**
 * まばたきの状態
 *
 * まばたきの状態を表す列挙型
 */ var cubismeyeblink_EyeState = /*#__PURE__*/ function(EyeState) {
    EyeState[EyeState["EyeState_First"] = 0] = "EyeState_First";
    EyeState[EyeState["EyeState_Interval"] = 1] = "EyeState_Interval";
    EyeState[EyeState["EyeState_Closing"] = 2] = "EyeState_Closing";
    EyeState[EyeState["EyeState_Closed"] = 3] = "EyeState_Closed";
    EyeState[EyeState["EyeState_Opening"] = 4] = "EyeState_Opening"; // まぶたが開いていく途中の状態
    return EyeState;
}({});
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismEyeBlink = CubismEyeBlink;
    Live2DCubismFramework.EyeState = cubismeyeblink_EyeState;
})(cubismeyeblink_Live2DCubismFramework || (cubismeyeblink_Live2DCubismFramework = {}));
var cubismeyeblink_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/effect/cubismbreath.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 
/**
 * 呼吸機能
 *
 * 呼吸機能を提供する。
 */ class CubismBreath {
    /**
   * インスタンスの作成
   */ static create() {
        return new CubismBreath();
    }
    /**
   * インスタンスの破棄
   * @param instance 対象のCubismBreath
   */ static delete(instance) {
        if (instance != null) {
            instance = null;
        }
    }
    /**
   * 呼吸のパラメータの紐づけ
   * @param breathParameters 呼吸を紐づけたいパラメータのリスト
   */ setParameters(breathParameters) {
        this._breathParameters = breathParameters;
    }
    /**
   * 呼吸に紐づいているパラメータの取得
   * @return 呼吸に紐づいているパラメータのリスト
   */ getParameters() {
        return this._breathParameters;
    }
    /**
   * モデルのパラメータの更新
   * @param model 対象のモデル
   * @param deltaTimeSeconds デルタ時間[秒]
   */ updateParameters(model, deltaTimeSeconds) {
        this._currentTime += deltaTimeSeconds;
        const t = this._currentTime * 2.0 * Math.PI;
        for(let i = 0; i < this._breathParameters.getSize(); ++i){
            const data = this._breathParameters.at(i);
            model.addParameterValueById(data.parameterId, data.offset + data.peak * Math.sin(t / data.cycle), data.weight);
        }
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_breathParameters", void 0); // 呼吸にひもづいているパラメータのリスト
        (0,esm_define_property._)(this, "_currentTime", void 0); // 積算時間[秒]
        this._currentTime = 0.0;
    }
}
/**
 * 呼吸のパラメータ情報
 */ class BreathParameterData {
    /**
   * コンストラクタ
   * @param parameterId   呼吸をひもづけるパラメータID
   * @param offset        呼吸を正弦波としたときの、波のオフセット
   * @param peak          呼吸を正弦波としたときの、波の高さ
   * @param cycle         呼吸を正弦波としたときの、波の周期
   * @param weight        パラメータへの重み
   */ constructor(parameterId, offset, peak, cycle, weight){
        (0,esm_define_property._)(this, "parameterId", void 0); // 呼吸をひもづけるパラメータID\
        (0,esm_define_property._)(this, "offset", void 0); // 呼吸を正弦波としたときの、波のオフセット
        (0,esm_define_property._)(this, "peak", void 0); // 呼吸を正弦波としたときの、波の高さ
        (0,esm_define_property._)(this, "cycle", void 0); // 呼吸を正弦波としたときの、波の周期
        (0,esm_define_property._)(this, "weight", void 0); // パラメータへの重み
        this.parameterId = parameterId == undefined ? null : parameterId;
        this.offset = offset == undefined ? 0.0 : offset;
        this.peak = peak == undefined ? 0.0 : peak;
        this.cycle = cycle == undefined ? 0.0 : cycle;
        this.weight = weight == undefined ? 0.0 : weight;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.BreathParameterData = BreathParameterData;
    Live2DCubismFramework.CubismBreath = CubismBreath;
})(cubismbreath_Live2DCubismFramework || (cubismbreath_Live2DCubismFramework = {}));
var cubismbreath_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/math/cubismvector2.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ /**
 * 2次元ベクトル型
 *
 * 2次元ベクトル型の機能を提供する。
 */ 
class CubismVector2 {
    /**
   * ベクトルの加算
   *
   * @param vector2 加算するベクトル値
   * @return 加算結果 ベクトル値
   */ add(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x + vector2.x;
        ret.y = this.y + vector2.y;
        return ret;
    }
    /**
   * ベクトルの減算
   *
   * @param vector2 減算するベクトル値
   * @return 減算結果 ベクトル値
   */ substract(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x - vector2.x;
        ret.y = this.y - vector2.y;
        return ret;
    }
    /**
   * ベクトルの乗算
   *
   * @param vector2 乗算するベクトル値
   * @return 乗算結果 ベクトル値
   */ multiply(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x * vector2.x;
        ret.y = this.y * vector2.y;
        return ret;
    }
    /**
   * ベクトルの乗算(スカラー)
   *
   * @param scalar 乗算するスカラー値
   * @return 乗算結果 ベクトル値
   */ multiplyByScaler(scalar) {
        return this.multiply(new CubismVector2(scalar, scalar));
    }
    /**
   * ベクトルの除算
   *
   * @param vector2 除算するベクトル値
   * @return 除算結果 ベクトル値
   */ division(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x / vector2.x;
        ret.y = this.y / vector2.y;
        return ret;
    }
    /**
   * ベクトルの除算(スカラー)
   *
   * @param scalar 除算するスカラー値
   * @return 除算結果 ベクトル値
   */ divisionByScalar(scalar) {
        return this.division(new CubismVector2(scalar, scalar));
    }
    /**
   * ベクトルの長さを取得する
   *
   * @return ベクトルの長さ
   */ getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
   * ベクトルの距離の取得
   *
   * @param a 点
   * @return ベクトルの距離
   */ getDistanceWith(a) {
        return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    }
    /**
   * ドット積の計算
   *
   * @param a 値
   * @return 結果
   */ dot(a) {
        return this.x * a.x + this.y * a.y;
    }
    /**
   * 正規化の適用
   */ normalize() {
        const length = Math.pow(this.x * this.x + this.y * this.y, 0.5);
        this.x = this.x / length;
        this.y = this.y / length;
    }
    /**
   * 等しさの確認（等しいか？）
   *
   * 値が等しいか？
   *
   * @param rhs 確認する値
   * @return true 値は等しい
   * @return false 値は等しくない
   */ isEqual(rhs) {
        return this.x == rhs.x && this.y == rhs.y;
    }
    /**
   * 等しさの確認（等しくないか？）
   *
   * 値が等しくないか？
   *
   * @param rhs 確認する値
   * @return true 値は等しくない
   * @return false 値は等しい
   */ isNotEqual(rhs) {
        return !this.isEqual(rhs);
    }
    /**
   * コンストラクタ
   */ constructor(x, y){
        (0,esm_define_property._)(this, "x", void 0);
        (0,esm_define_property._)(this, "y", void 0);
        this.x = x;
        this.y = y;
        this.x = x == undefined ? 0.0 : x;
        this.y = y == undefined ? 0.0 : y;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismVector2 = CubismVector2;
})(cubismvector2_Live2DCubismFramework || (cubismvector2_Live2DCubismFramework = {}));
var cubismvector2_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/math/cubismmath.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * 数値計算などに使用するユーティリティクラス
 */ class CubismMath {
    /**
   * 第一引数の値を最小値と最大値の範囲に収めた値を返す
   *
   * @param value 収められる値
   * @param min   範囲の最小値
   * @param max   範囲の最大値
   * @return 最小値と最大値の範囲に収めた値
   */ static range(value, min, max) {
        if (value < min) {
            value = min;
        } else if (value > max) {
            value = max;
        }
        return value;
    }
    /**
   * サイン関数の値を求める
   *
   * @param x 角度値（ラジアン）
   * @return サイン関数sin(x)の値
   */ static sin(x) {
        return Math.sin(x);
    }
    /**
   * コサイン関数の値を求める
   *
   * @param x 角度値(ラジアン)
   * @return コサイン関数cos(x)の値
   */ static cos(x) {
        return Math.cos(x);
    }
    /**
   * 値の絶対値を求める
   *
   * @param x 絶対値を求める値
   * @return 値の絶対値
   */ static abs(x) {
        return Math.abs(x);
    }
    /**
   * 平方根(ルート)を求める
   * @param x -> 平方根を求める値
   * @return 値の平方根
   */ static sqrt(x) {
        return Math.sqrt(x);
    }
    /**
   * 立方根を求める
   * @param x -> 立方根を求める値
   * @return 値の立方根
   */ static cbrt(x) {
        if (x === 0) {
            return x;
        }
        let cx = x;
        const isNegativeNumber = cx < 0;
        if (isNegativeNumber) {
            cx = -cx;
        }
        let ret;
        if (cx === Infinity) {
            ret = Infinity;
        } else {
            ret = Math.exp(Math.log(cx) / 3);
            ret = (cx / (ret * ret) + 2 * ret) / 3;
        }
        return isNegativeNumber ? -ret : ret;
    }
    /**
   * イージング処理されたサインを求める
   * フェードイン・アウト時のイージングに利用できる
   *
   * @param value イージングを行う値
   * @return イージング処理されたサイン値
   */ static getEasingSine(value) {
        if (value < 0.0) {
            return 0.0;
        } else if (value > 1.0) {
            return 1.0;
        }
        return 0.5 - 0.5 * this.cos(value * Math.PI);
    }
    /**
   * 大きい方の値を返す
   *
   * @param left 左辺の値
   * @param right 右辺の値
   * @return 大きい方の値
   */ static max(left, right) {
        return left > right ? left : right;
    }
    /**
   * 小さい方の値を返す
   *
   * @param left  左辺の値
   * @param right 右辺の値
   * @return 小さい方の値
   */ static min(left, right) {
        return left > right ? right : left;
    }
    static clamp(val, min, max) {
        if (val < min) {
            return min;
        } else if (max < val) {
            return max;
        }
        return val;
    }
    /**
   * 角度値をラジアン値に変換する
   *
   * @param degrees   角度値
   * @return 角度値から変換したラジアン値
   */ static degreesToRadian(degrees) {
        return degrees / 180.0 * Math.PI;
    }
    /**
   * ラジアン値を角度値に変換する
   *
   * @param radian    ラジアン値
   * @return ラジアン値から変換した角度値
   */ static radianToDegrees(radian) {
        return radian * 180.0 / Math.PI;
    }
    /**
   * ２つのベクトルからラジアン値を求める
   *
   * @param from  始点ベクトル
   * @param to    終点ベクトル
   * @return ラジアン値から求めた方向ベクトル
   */ static directionToRadian(from, to) {
        const q1 = Math.atan2(to.y, to.x);
        const q2 = Math.atan2(from.y, from.x);
        let ret = q1 - q2;
        while(ret < -Math.PI){
            ret += Math.PI * 2.0;
        }
        while(ret > Math.PI){
            ret -= Math.PI * 2.0;
        }
        return ret;
    }
    /**
   * ２つのベクトルから角度値を求める
   *
   * @param from  始点ベクトル
   * @param to    終点ベクトル
   * @return 角度値から求めた方向ベクトル
   */ static directionToDegrees(from, to) {
        const radian = this.directionToRadian(from, to);
        let degree = this.radianToDegrees(radian);
        if (to.x - from.x > 0.0) {
            degree = -degree;
        }
        return degree;
    }
    /**
   * ラジアン値を方向ベクトルに変換する。
   *
   * @param totalAngle    ラジアン値
   * @return ラジアン値から変換した方向ベクトル
   */ static radianToDirection(totalAngle) {
        const ret = new CubismVector2();
        ret.x = this.sin(totalAngle);
        ret.y = this.cos(totalAngle);
        return ret;
    }
    /**
   * 三次方程式の三次項の係数が0になったときに補欠的に二次方程式の解をもとめる。
   * a * x^2 + b * x + c = 0
   *
   * @param   a -> 二次項の係数値
   * @param   b -> 一次項の係数値
   * @param   c -> 定数項の値
   * @return  二次方程式の解
   */ static quadraticEquation(a, b, c) {
        if (this.abs(a) < CubismMath.Epsilon) {
            if (this.abs(b) < CubismMath.Epsilon) {
                return -c;
            }
            return -c / b;
        }
        return -(b + this.sqrt(b * b - 4.0 * a * c)) / (2.0 * a);
    }
    /**
   * カルダノの公式によってベジェのt値に該当する３次方程式の解を求める。
   * 重解になったときには0.0～1.0の値になる解を返す。
   *
   * a * x^3 + b * x^2 + c * x + d = 0
   *
   * @param   a -> 三次項の係数値
   * @param   b -> 二次項の係数値
   * @param   c -> 一次項の係数値
   * @param   d -> 定数項の値
   * @return  0.0～1.0の間にある解
   */ static cardanoAlgorithmForBezier(a, b, c, d) {
        if (this.abs(a) < CubismMath.Epsilon) {
            return this.range(this.quadraticEquation(b, c, d), 0.0, 1.0);
        }
        const ba = b / a;
        const ca = c / a;
        const da = d / a;
        const p = (3.0 * ca - ba * ba) / 3.0;
        const p3 = p / 3.0;
        const q = (2.0 * ba * ba * ba - 9.0 * ba * ca + 27.0 * da) / 27.0;
        const q2 = q / 2.0;
        const discriminant = q2 * q2 + p3 * p3 * p3;
        const center = 0.5;
        const threshold = center + 0.01;
        if (discriminant < 0.0) {
            const mp3 = -p / 3.0;
            const mp33 = mp3 * mp3 * mp3;
            const r = this.sqrt(mp33);
            const t = -q / (2.0 * r);
            const cosphi = this.range(t, -1.0, 1.0);
            const phi = Math.acos(cosphi);
            const crtr = this.cbrt(r);
            const t1 = 2.0 * crtr;
            const root1 = t1 * this.cos(phi / 3.0) - ba / 3.0;
            if (this.abs(root1 - center) < threshold) {
                return this.range(root1, 0.0, 1.0);
            }
            const root2 = t1 * this.cos((phi + 2.0 * Math.PI) / 3.0) - ba / 3.0;
            if (this.abs(root2 - center) < threshold) {
                return this.range(root2, 0.0, 1.0);
            }
            const root3 = t1 * this.cos((phi + 4.0 * Math.PI) / 3.0) - ba / 3.0;
            return this.range(root3, 0.0, 1.0);
        }
        if (discriminant == 0.0) {
            let u1;
            if (q2 < 0.0) {
                u1 = this.cbrt(-q2);
            } else {
                u1 = -this.cbrt(q2);
            }
            const root1 = 2.0 * u1 - ba / 3.0;
            if (this.abs(root1 - center) < threshold) {
                return this.range(root1, 0.0, 1.0);
            }
            const root2 = -u1 - ba / 3.0;
            return this.range(root2, 0.0, 1.0);
        }
        const sd = this.sqrt(discriminant);
        const u1 = this.cbrt(sd - q2);
        const v1 = this.cbrt(sd + q2);
        const root1 = u1 - v1 - ba / 3.0;
        return this.range(root1, 0.0, 1.0);
    }
    /**
   * 浮動小数点の余りを求める。
   *
   * @param dividend 被除数（割られる値）
   * @param divisor 除数（割る値）
   * @returns 余り
   */ static mod(dividend, divisor) {
        if (!isFinite(dividend) || divisor === 0 || isNaN(dividend) || isNaN(divisor)) {
            console.warn(`divided: ${dividend}, divisor: ${divisor} mod() returns 'NaN'.`);
            return NaN;
        }
        // 絶対値に変換する。
        const absDividend = Math.abs(dividend);
        const absDivisor = Math.abs(divisor);
        // 絶対値で割り算する。
        let result = absDividend - Math.floor(absDividend / absDivisor) * absDivisor;
        // 符号を被除数のものに指定する。
        result *= Math.sign(dividend);
        return result;
    }
    /**
   * コンストラクタ
   */ constructor(){}
}
(0,esm_define_property._)(CubismMath, "Epsilon", 0.00001);
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMath = CubismMath;
})(cubismmath_Live2DCubismFramework || (cubismmath_Live2DCubismFramework = {}));
var cubismmath_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/acubismmotion.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 



/**
 * モーションの抽象基底クラス
 *
 * モーションの抽象基底クラス。MotionQueueManagerによってモーションの再生を管理する。
 */ class ACubismMotion {
    /**
   * インスタンスの破棄
   */ static delete(motion) {
        motion.release();
        motion = null;
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        this._weight = 0.0;
    }
    /**
   * モデルのパラメータ
   * @param model 対象のモデル
   * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
   * @param userTimeSeconds デルタ時間の積算値[秒]
   */ updateParameters(model, motionQueueEntry, userTimeSeconds) {
        if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
            return;
        }
        this.setupMotionQueueEntry(motionQueueEntry, userTimeSeconds);
        const fadeWeight = this.updateFadeWeight(motionQueueEntry, userTimeSeconds);
        //---- 全てのパラメータIDをループする ----
        this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
        // 後処理
        // 終了時刻を過ぎたら終了フラグを立てる(CubismMotionQueueManager)
        if (motionQueueEntry.getEndTime() > 0 && motionQueueEntry.getEndTime() < userTimeSeconds) {
            motionQueueEntry.setIsFinished(true); // 終了
        }
    }
    /**
   * @brief モデルの再生開始処理
   *
   * モーションの再生を開始するためのセットアップを行う。
   *
   * @param[in]   motionQueueEntry    CubismMotionQueueManagerで管理されているモーション
   * @param[in]   userTimeSeconds     デルタ時間の積算値[秒]
   */ setupMotionQueueEntry(motionQueueEntry, userTimeSeconds) {
        if (motionQueueEntry == null || motionQueueEntry.isStarted()) {
            return;
        }
        if (!motionQueueEntry.isAvailable()) {
            return;
        }
        motionQueueEntry.setIsStarted(true);
        motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds); // モーションの開始時刻を記録
        motionQueueEntry.setFadeInStartTime(userTimeSeconds); // フェードインの開始時刻
        if (motionQueueEntry.getEndTime() < 0.0) {
            // 開始していないうちに終了設定している場合がある
            this.adjustEndTime(motionQueueEntry);
        }
        // 再生開始コールバック
        if (motionQueueEntry._motion._onBeganMotion) {
            motionQueueEntry._motion._onBeganMotion(motionQueueEntry._motion);
        }
    }
    /**
   * @brief モデルのウェイト更新
   *
   * モーションのウェイトを更新する。
   *
   * @param[in]   motionQueueEntry    CubismMotionQueueManagerで管理されているモーション
   * @param[in]   userTimeSeconds     デルタ時間の積算値[秒]
   */ updateFadeWeight(motionQueueEntry, userTimeSeconds) {
        if (motionQueueEntry == null) {
            CubismDebug.print(/* inlined export .LogLevel.LogLevel_Error */ (4), 'motionQueueEntry is null.');
        }
        let fadeWeight = this._weight; // 現在の値と掛け合わせる割合
        //---- フェードイン・アウトの処理 ----
        // 単純なサイン関数でイージングする
        const fadeIn = this._fadeInSeconds == 0.0 ? 1.0 : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
        const fadeOut = this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0 ? 1.0 : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
        fadeWeight = fadeWeight * fadeIn * fadeOut;
        motionQueueEntry.setState(userTimeSeconds, fadeWeight);
        CSM_ASSERT(0.0 <= fadeWeight && fadeWeight <= 1.0);
        return fadeWeight;
    }
    /**
   * フェードインの時間を設定する
   * @param fadeInSeconds フェードインにかかる時間[秒]
   */ setFadeInTime(fadeInSeconds) {
        this._fadeInSeconds = fadeInSeconds;
    }
    /**
   * フェードアウトの時間を設定する
   * @param fadeOutSeconds フェードアウトにかかる時間[秒]
   */ setFadeOutTime(fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
    }
    /**
   * フェードアウトにかかる時間の取得
   * @return フェードアウトにかかる時間[秒]
   */ getFadeOutTime() {
        return this._fadeOutSeconds;
    }
    /**
   * フェードインにかかる時間の取得
   * @return フェードインにかかる時間[秒]
   */ getFadeInTime() {
        return this._fadeInSeconds;
    }
    /**
   * モーション適用の重みの設定
   * @param weight 重み（0.0 - 1.0）
   */ setWeight(weight) {
        this._weight = weight;
    }
    /**
   * モーション適用の重みの取得
   * @return 重み（0.0 - 1.0）
   */ getWeight() {
        return this._weight;
    }
    /**
   * モーションの長さの取得
   * @return モーションの長さ[秒]
   *
   * @note ループの時は「-1」。
   *       ループでない場合は、オーバーライドする。
   *       正の値の時は取得される時間で終了する。
   *       「-1」の時は外部から停止命令がない限り終わらない処理となる。
   */ getDuration() {
        return -1.0;
    }
    /**
   * モーションのループ1回分の長さの取得
   * @return モーションのループ一回分の長さ[秒]
   *
   * @note ループしない場合は、getDuration()と同じ値を返す
   *       ループ一回分の長さが定義できない場合(プログラム的に動き続けるサブクラスなど)の場合は「-1」を返す
   */ getLoopDuration() {
        return -1.0;
    }
    /**
   * モーション再生の開始時刻の設定
   * @param offsetSeconds モーション再生の開始時刻[秒]
   */ setOffsetTime(offsetSeconds) {
        this._offsetSeconds = offsetSeconds;
    }
    /**
   * ループ情報の設定
   * @param loop ループ情報
   */ setLoop(loop) {
        this._isLoop = loop;
    }
    /**
   * ループ情報の取得
   * @return true ループする
   * @return false ループしない
   */ getLoop() {
        return this._isLoop;
    }
    /**
   * ループ時のフェードイン情報の設定
   * @param loopFadeIn  ループ時のフェードイン情報
   */ setLoopFadeIn(loopFadeIn) {
        this._isLoopFadeIn = loopFadeIn;
    }
    /**
   * ループ時のフェードイン情報の取得
   *
   * @return  true    する
   * @return  false   しない
   */ getLoopFadeIn() {
        return this._isLoopFadeIn;
    }
    /**
   * モデルのパラメータ更新
   *
   * イベント発火のチェック。
   * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
   *
   * @param beforeCheckTimeSeconds 前回のイベントチェック時間[秒]
   * @param motionTimeSeconds 今回の再生時間[秒]
   */ getFiredEvent(beforeCheckTimeSeconds, motionTimeSeconds) {
        return this._firedEventValues;
    }
    /**
   * 透明度のカーブが存在するかどうかを確認する
   *
   * @returns true  -> キーが存在する
   *          false -> キーが存在しない
   */ isExistModelOpacity() {
        return false;
    }
    /**
   * 透明度のカーブのインデックスを返す
   *
   * @returns success:透明度のカーブのインデックス
   */ getModelOpacityIndex() {
        return -1;
    }
    /**
   * 透明度のIdを返す
   *
   * @param index モーションカーブのインデックス
   * @returns success:透明度のId
   */ getModelOpacityId(index) {
        return null;
    }
    /**
   * 指定時間の透明度の値を返す
   *
   * @returns success:モーションの現在時間におけるOpacityの値
   *
   * @note  更新後の値を取るにはUpdateParameters() の後に呼び出す。
   */ getModelOpacityValue() {
        return 1.0;
    }
    /**
   * 終了時刻の調整
   * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
   */ adjustEndTime(motionQueueEntry) {
        const duration = this.getDuration();
        // duration == -1 の場合はループする
        const endTime = duration <= 0.0 ? -1 : motionQueueEntry.getStartTime() + duration;
        motionQueueEntry.setEndTime(endTime);
    }
    /**
   * コンストラクタ
   */ constructor(){
        /**
   * モーション再生開始コールバックの登録
   *
   * モーション再生開始コールバックを登録する。
   * 以下の状態の際には呼び出されない:
   *   1. 再生中のモーションが「ループ」として設定されているとき
   *   2. コールバックが登録されていない時
   *
   * @param onBeganMotionHandler モーション再生開始コールバック関数
   */ (0,esm_define_property._)(this, "setBeganMotionHandler", (onBeganMotionHandler)=>this._onBeganMotion = onBeganMotionHandler);
        /**
   * モーション再生開始コールバックの取得
   *
   * モーション再生開始コールバックを取得する。
   *
   * @return 登録されているモーション再生開始コールバック関数
   */ (0,esm_define_property._)(this, "getBeganMotionHandler", ()=>this._onBeganMotion);
        /**
   * モーション再生終了コールバックの登録
   *
   * モーション再生終了コールバックを登録する。
   * isFinishedフラグを設定するタイミングで呼び出される。
   * 以下の状態の際には呼び出されない:
   *   1. 再生中のモーションが「ループ」として設定されているとき
   *   2. コールバックが登録されていない時
   *
   * @param onFinishedMotionHandler モーション再生終了コールバック関数
   */ (0,esm_define_property._)(this, "setFinishedMotionHandler", (onFinishedMotionHandler)=>this._onFinishedMotion = onFinishedMotionHandler);
        /**
   * モーション再生終了コールバックの取得
   *
   * モーション再生終了コールバックを取得する。
   *
   * @return 登録されているモーション再生終了コールバック関数
   */ (0,esm_define_property._)(this, "getFinishedMotionHandler", ()=>this._onFinishedMotion);
        (0,esm_define_property._)(this, "_fadeInSeconds", void 0); // フェードインにかかる時間[秒]
        (0,esm_define_property._)(this, "_fadeOutSeconds", void 0); // フェードアウトにかかる時間[秒]
        (0,esm_define_property._)(this, "_weight", void 0); // モーションの重み
        (0,esm_define_property._)(this, "_offsetSeconds", void 0); // モーション再生の開始時間[秒]
        (0,esm_define_property._)(this, "_isLoop", void 0); // ループが有効かのフラグ
        (0,esm_define_property._)(this, "_isLoopFadeIn", void 0); // ループ時にフェードインが有効かどうかのフラグ
        (0,esm_define_property._)(this, "_previousLoopState", void 0); // 前回の `_isLoop` の状態
        (0,esm_define_property._)(this, "_firedEventValues", void 0);
        // モーション再生開始コールバック関数
        (0,esm_define_property._)(this, "_onBeganMotion", void 0);
        // モーション再生終了コールバック関数
        (0,esm_define_property._)(this, "_onFinishedMotion", void 0);
        this._fadeInSeconds = -1.0;
        this._fadeOutSeconds = -1.0;
        this._weight = 1.0;
        this._offsetSeconds = 0.0; // 再生の開始時刻
        this._isLoop = false; // ループするか
        this._isLoopFadeIn = true; // ループ時にフェードインが有効かどうかのフラグ。初期値では有効。
        this._previousLoopState = this._isLoop;
        this._firedEventValues = new csmVector();
    }
}
// Namespace definition for compatibility.


(function(Live2DCubismFramework) {
    Live2DCubismFramework.ACubismMotion = ACubismMotion;
})(acubismmotion_Live2DCubismFramework || (acubismmotion_Live2DCubismFramework = {}));
var acubismmotion_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismmotionqueueentry.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * CubismMotionQueueManagerで再生している各モーションの管理クラス。
 */ class CubismMotionQueueEntry {
    /**
   * デストラクタ相当の処理
   */ release() {
        if (this._autoDelete && this._motion) {
            ACubismMotion["delete"](this._motion); //
        }
    }
    /**
   * フェードアウト時間と開始判定の設定
   * @param fadeOutSeconds フェードアウトにかかる時間[秒]
   */ setFadeOut(fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
        this._isTriggeredFadeOut = true;
    }
    /**
   * フェードアウトの開始
   * @param fadeOutSeconds フェードアウトにかかる時間[秒]
   * @param userTimeSeconds デルタ時間の積算値[秒]
   */ startFadeOut(fadeOutSeconds, userTimeSeconds) {
        const newEndTimeSeconds = userTimeSeconds + fadeOutSeconds;
        this._isTriggeredFadeOut = true;
        if (this._endTimeSeconds < 0.0 || newEndTimeSeconds < this._endTimeSeconds) {
            this._endTimeSeconds = newEndTimeSeconds;
        }
    }
    /**
   * モーションの終了の確認
   *
   * @return true モーションが終了した
   * @return false 終了していない
   */ isFinished() {
        return this._finished;
    }
    /**
   * モーションの開始の確認
   * @return true モーションが開始した
   * @return false 開始していない
   */ isStarted() {
        return this._started;
    }
    /**
   * モーションの開始時刻の取得
   * @return モーションの開始時刻[秒]
   */ getStartTime() {
        return this._startTimeSeconds;
    }
    /**
   * フェードインの開始時刻の取得
   * @return フェードインの開始時刻[秒]
   */ getFadeInStartTime() {
        return this._fadeInStartTimeSeconds;
    }
    /**
   * フェードインの終了時刻の取得
   * @return フェードインの終了時刻の取得
   */ getEndTime() {
        return this._endTimeSeconds;
    }
    /**
   * モーションの開始時刻の設定
   * @param startTime モーションの開始時刻
   */ setStartTime(startTime) {
        this._startTimeSeconds = startTime;
    }
    /**
   * フェードインの開始時刻の設定
   * @param startTime フェードインの開始時刻[秒]
   */ setFadeInStartTime(startTime) {
        this._fadeInStartTimeSeconds = startTime;
    }
    /**
   * フェードインの終了時刻の設定
   * @param endTime フェードインの終了時刻[秒]
   */ setEndTime(endTime) {
        this._endTimeSeconds = endTime;
    }
    /**
   * モーションの終了の設定
   * @param f trueならモーションの終了
   */ setIsFinished(f) {
        this._finished = f;
    }
    /**
   * モーション開始の設定
   * @param f trueならモーションの開始
   */ setIsStarted(f) {
        this._started = f;
    }
    /**
   * モーションの有効性の確認
   * @return true モーションは有効
   * @return false モーションは無効
   */ isAvailable() {
        return this._available;
    }
    /**
   * モーションの有効性の設定
   * @param v trueならモーションは有効
   */ setIsAvailable(v) {
        this._available = v;
    }
    /**
   * モーションの状態の設定
   * @param timeSeconds 現在時刻[秒]
   * @param weight モーション尾重み
   */ setState(timeSeconds, weight) {
        this._stateTimeSeconds = timeSeconds;
        this._stateWeight = weight;
    }
    /**
   * モーションの現在時刻の取得
   * @return モーションの現在時刻[秒]
   */ getStateTime() {
        return this._stateTimeSeconds;
    }
    /**
   * モーションの重みの取得
   * @return モーションの重み
   */ getStateWeight() {
        return this._stateWeight;
    }
    /**
   * 最後にイベントの発火をチェックした時間を取得
   *
   * @return 最後にイベントの発火をチェックした時間[秒]
   */ getLastCheckEventSeconds() {
        return this._lastEventCheckSeconds;
    }
    /**
   * 最後にイベントをチェックした時間を設定
   * @param checkSeconds 最後にイベントをチェックした時間[秒]
   */ setLastCheckEventSeconds(checkSeconds) {
        this._lastEventCheckSeconds = checkSeconds;
    }
    /**
   * フェードアウト開始判定の取得
   * @return フェードアウト開始するかどうか
   */ isTriggeredFadeOut() {
        return this._isTriggeredFadeOut;
    }
    /**
   * フェードアウト時間の取得
   * @return フェードアウト時間[秒]
   */ getFadeOutSeconds() {
        return this._fadeOutSeconds;
    }
    /**
   * モーションの取得
   *
   * @return モーション
   */ getCubismMotion() {
        return this._motion;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_autoDelete", void 0); // 自動削除
        (0,esm_define_property._)(this, "_motion", void 0); // モーション
        (0,esm_define_property._)(this, "_available", void 0); // 有効化フラグ
        (0,esm_define_property._)(this, "_finished", void 0); // 終了フラグ
        (0,esm_define_property._)(this, "_started", void 0); // 開始フラグ
        (0,esm_define_property._)(this, "_startTimeSeconds", void 0); // モーション再生開始時刻[秒]
        (0,esm_define_property._)(this, "_fadeInStartTimeSeconds", void 0); // フェードイン開始時刻（ループの時は初回のみ）[秒]
        (0,esm_define_property._)(this, "_endTimeSeconds", void 0); // 終了予定時刻[秒]
        (0,esm_define_property._)(this, "_stateTimeSeconds", void 0); // 時刻の状態[秒]
        (0,esm_define_property._)(this, "_stateWeight", void 0); // 重みの状態
        (0,esm_define_property._)(this, "_lastEventCheckSeconds", void 0); // 最終のMotion側のチェックした時間
        (0,esm_define_property._)(this, "_fadeOutSeconds", void 0); // フェードアウト時間[秒]
        (0,esm_define_property._)(this, "_isTriggeredFadeOut", void 0); // フェードアウト開始フラグ
        (0,esm_define_property._)(this, "_motionQueueEntryHandle", void 0); // インスタンスごとに一意の値を持つ識別番号
        this._autoDelete = false;
        this._motion = null;
        this._available = true;
        this._finished = false;
        this._started = false;
        this._startTimeSeconds = -1.0;
        this._fadeInStartTimeSeconds = 0.0;
        this._endTimeSeconds = -1.0;
        this._stateTimeSeconds = 0.0;
        this._stateWeight = 0.0;
        this._lastEventCheckSeconds = 0.0;
        this._motionQueueEntryHandle = this;
        this._fadeOutSeconds = 0.0;
        this._isTriggeredFadeOut = false;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionQueueEntry = CubismMotionQueueEntry;
})(cubismmotionqueueentry_Live2DCubismFramework || (cubismmotionqueueentry_Live2DCubismFramework = {}));
var cubismmotionqueueentry_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismmotionqueuemanager.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 


/**
 * モーション再生の管理
 *
 * モーション再生の管理用クラス。CubismMotionモーションなどACubismMotionのサブクラスを再生するために使用する。
 *
 * @note 再生中に別のモーションが StartMotion()された場合は、新しいモーションに滑らかに変化し旧モーションは中断する。
 *       表情用モーション、体用モーションなどを分けてモーション化した場合など、
 *       複数のモーションを同時に再生させる場合は、複数のCubismMotionQueueManagerインスタンスを使用する。
 */ class CubismMotionQueueManager {
    /**
   * デストラクタ
   */ release() {
        for(let i = 0; i < this._motions.getSize(); ++i){
            if (this._motions.at(i)) {
                this._motions.at(i).release();
                this._motions.set(i, null);
            }
        }
        this._motions = null;
    }
    /**
   * 指定したモーションの開始
   *
   * 指定したモーションを開始する。同じタイプのモーションが既にある場合は、既存のモーションに終了フラグを立て、フェードアウトを開始させる。
   *
   * @param   motion          開始するモーション
   * @param   autoDelete      再生が終了したモーションのインスタンスを削除するなら true
   * @param   userTimeSeconds Deprecated: デルタ時間の積算値[秒] 関数内で参照していないため使用は非推奨。
   * @return                      開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
   */ startMotion(motion, autoDelete, userTimeSeconds) {
        if (motion == null) {
            return InvalidMotionQueueEntryHandleValue;
        }
        let motionQueueEntry = null;
        // 既にモーションがあれば終了フラグを立てる
        for(let i = 0; i < this._motions.getSize(); ++i){
            motionQueueEntry = this._motions.at(i);
            if (motionQueueEntry == null) {
                continue;
            }
            motionQueueEntry.setFadeOut(motionQueueEntry._motion.getFadeOutTime()); // フェードアウト設定
        }
        motionQueueEntry = new CubismMotionQueueEntry(); // 終了時に破棄する
        motionQueueEntry._autoDelete = autoDelete;
        motionQueueEntry._motion = motion;
        this._motions.pushBack(motionQueueEntry);
        return motionQueueEntry._motionQueueEntryHandle;
    }
    /**
   * 全てのモーションの終了の確認
   * @return true 全て終了している
   * @return false 終了していない
   */ isFinished() {
        // ------- 処理を行う -------
        // 既にモーションがあれば終了フラグを立てる
        for(let ite = this._motions.begin(); ite.notEqual(this._motions.end());){
            let motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = this._motions.erase(ite); // 削除
                continue;
            }
            const motion = motionQueueEntry._motion;
            if (motion == null) {
                motionQueueEntry.release();
                motionQueueEntry = null;
                ite = this._motions.erase(ite); // 削除
                continue;
            }
            // ----- 終了済みの処理があれば削除する ------
            if (!motionQueueEntry.isFinished()) {
                return false;
            } else {
                ite.preIncrement();
            }
        }
        return true;
    }
    /**
   * 指定したモーションの終了の確認
   * @param motionQueueEntryNumber モーションの識別番号
   * @return true 全て終了している
   * @return false 終了していない
   */ isFinishedByHandle(motionQueueEntryNumber) {
        for(let ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.increment()){
            const motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                continue;
            }
            if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber && !motionQueueEntry.isFinished()) {
                return false;
            }
        }
        return true;
    }
    /**
   * 全てのモーションを停止する
   */ stopAllMotions() {
        // ------- 処理を行う -------
        // 既にモーションがあれば終了フラグを立てる
        for(let ite = this._motions.begin(); ite.notEqual(this._motions.end());){
            let motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = this._motions.erase(ite);
                continue;
            }
            // ----- 終了済みの処理があれば削除する ------
            motionQueueEntry.release();
            motionQueueEntry = null;
            ite = this._motions.erase(ite); // 削除
        }
    }
    /**
   * @brief CubismMotionQueueEntryの配列の取得
   *
   * CubismMotionQueueEntryの配列を取得する。
   *
   * @return  CubismMotionQueueEntryの配列へのポインタ
   * @retval  NULL   見つからなかった
   */ getCubismMotionQueueEntries() {
        return this._motions;
    }
    /**
   * 指定したCubismMotionQueueEntryの取得

   * @param   motionQueueEntryNumber  モーションの識別番号
   * @return  指定したCubismMotionQueueEntry
   * @return  null   見つからなかった
   */ getCubismMotionQueueEntry(motionQueueEntryNumber) {
        //------- 処理を行う -------
        for(let ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.preIncrement()){
            const motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                continue;
            }
            if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber) {
                return motionQueueEntry;
            }
        }
        return null;
    }
    /**
   * イベントを受け取るCallbackの登録
   *
   * @param callback コールバック関数
   * @param customData コールバックに返されるデータ
   */ setEventCallback(callback) {
        let customData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        this._eventCallBack = callback;
        this._eventCustomData = customData;
    }
    /**
   * モーションを更新して、モデルにパラメータ値を反映する。
   *
   * @param   model   対象のモデル
   * @param   userTimeSeconds   デルタ時間の積算値[秒]
   * @return  true    モデルへパラメータ値の反映あり
   * @return  false   モデルへパラメータ値の反映なし(モーションの変化なし)
   */ doUpdateMotion(model, userTimeSeconds) {
        let updated = false;
        // ------- 処理を行う --------
        // 既にモーションがあれば終了フラグを立てる
        for(let ite = this._motions.begin(); ite.notEqual(this._motions.end());){
            let motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = this._motions.erase(ite); // 削除
                continue;
            }
            const motion = motionQueueEntry._motion;
            if (motion == null) {
                motionQueueEntry.release();
                motionQueueEntry = null;
                ite = this._motions.erase(ite); // 削除
                continue;
            }
            // ------ 値を反映する ------
            motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
            updated = true;
            // ------ ユーザトリガーイベントを検査する ----
            const firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventSeconds() - motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
            for(let i = 0; i < firedList.getSize(); ++i){
                this._eventCallBack(this, firedList.at(i), this._eventCustomData);
            }
            motionQueueEntry.setLastCheckEventSeconds(userTimeSeconds);
            // ------ 終了済みの処理があれば削除する ------
            if (motionQueueEntry.isFinished()) {
                motionQueueEntry.release();
                motionQueueEntry = null;
                ite = this._motions.erase(ite); // 削除
            } else {
                if (motionQueueEntry.isTriggeredFadeOut()) {
                    motionQueueEntry.startFadeOut(motionQueueEntry.getFadeOutSeconds(), userTimeSeconds);
                }
                ite.preIncrement();
            }
        }
        return updated;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_userTimeSeconds", void 0); // デルタ時間の積算値[秒]
        (0,esm_define_property._)(this, "_motions", void 0); // モーション
        (0,esm_define_property._)(this, "_eventCallBack", void 0); // コールバック関数
        (0,esm_define_property._)(this, "_eventCustomData", void 0); // コールバックに戻されるデータ
        this._userTimeSeconds = 0.0;
        this._eventCallBack = null;
        this._eventCustomData = null;
        this._motions = new csmVector();
    }
}
const InvalidMotionQueueEntryHandleValue = -1;
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionQueueManager = CubismMotionQueueManager;
    Live2DCubismFramework.InvalidMotionQueueEntryHandleValue = InvalidMotionQueueEntryHandleValue;
})(cubismmotionqueuemanager_Live2DCubismFramework || (cubismmotionqueuemanager_Live2DCubismFramework = {}));
var cubismmotionqueuemanager_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/math/cubismviewmatrix.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * カメラの位置変更に使うと便利な4x4行列
 *
 * カメラの位置変更に使うと便利な4x4行列のクラス。
 */ class CubismViewMatrix extends CubismMatrix44 {
    /**
   * 移動を調整
   *
   * @param x X軸の移動量
   * @param y Y軸の移動量
   */ adjustTranslate(x, y) {
        if (this._tr[0] * this._maxLeft + (this._tr[12] + x) > this._screenLeft) {
            x = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12];
        }
        if (this._tr[0] * this._maxRight + (this._tr[12] + x) < this._screenRight) {
            x = this._screenRight - this._tr[0] * this._maxRight - this._tr[12];
        }
        if (this._tr[5] * this._maxTop + (this._tr[13] + y) < this._screenTop) {
            y = this._screenTop - this._tr[5] * this._maxTop - this._tr[13];
        }
        if (this._tr[5] * this._maxBottom + (this._tr[13] + y) > this._screenBottom) {
            y = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13];
        }
        const tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            x,
            y,
            0.0,
            1.0
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    /**
   * 拡大率を調整
   *
   * @param cx 拡大を行うX軸の中心位置
   * @param cy 拡大を行うY軸の中心位置
   * @param scale 拡大率
   */ adjustScale(cx, cy, scale) {
        const maxScale = this.getMaxScale();
        const minScale = this.getMinScale();
        const targetScale = scale * this._tr[0];
        if (targetScale < minScale) {
            if (this._tr[0] > 0.0) {
                scale = minScale / this._tr[0];
            }
        } else if (targetScale > maxScale) {
            if (this._tr[0] > 0.0) {
                scale = maxScale / this._tr[0];
            }
        }
        const tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            cx,
            cy,
            0.0,
            1.0
        ]);
        const tr2 = new Float32Array([
            scale,
            0.0,
            0.0,
            0.0,
            0.0,
            scale,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        const tr3 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            -cx,
            -cy,
            0.0,
            1.0
        ]);
        CubismMatrix44.multiply(tr3, this._tr, this._tr);
        CubismMatrix44.multiply(tr2, this._tr, this._tr);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    /**
   * デバイスに対応する論理座養生の範囲の設定
   *
   * @param left      左辺のX軸の位置
   * @param right     右辺のX軸の位置
   * @param bottom    下辺のY軸の位置
   * @param top       上辺のY軸の位置
   */ setScreenRect(left, right, bottom, top) {
        this._screenLeft = left;
        this._screenRight = right;
        this._screenBottom = bottom;
        this._screenTop = top;
    }
    /**
   * デバイスに対応する論理座標上の移動可能範囲の設定
   * @param left      左辺のX軸の位置
   * @param right     右辺のX軸の位置
   * @param bottom    下辺のY軸の位置
   * @param top       上辺のY軸の位置
   */ setMaxScreenRect(left, right, bottom, top) {
        this._maxLeft = left;
        this._maxRight = right;
        this._maxTop = top;
        this._maxBottom = bottom;
    }
    /**
   * 最大拡大率の設定
   * @param maxScale 最大拡大率
   */ setMaxScale(maxScale) {
        this._maxScale = maxScale;
    }
    /**
   * 最小拡大率の設定
   * @param minScale 最小拡大率
   */ setMinScale(minScale) {
        this._minScale = minScale;
    }
    /**
   * 最大拡大率の取得
   * @return 最大拡大率
   */ getMaxScale() {
        return this._maxScale;
    }
    /**
   * 最小拡大率の取得
   * @return 最小拡大率
   */ getMinScale() {
        return this._minScale;
    }
    /**
   * 拡大率が最大になっているかを確認する
   *
   * @return true 拡大率は最大
   * @return false 拡大率は最大ではない
   */ isMaxScale() {
        return this.getScaleX() >= this._maxScale;
    }
    /**
   * 拡大率が最小になっているかを確認する
   *
   * @return true 拡大率は最小
   * @return false 拡大率は最小ではない
   */ isMinScale() {
        return this.getScaleX() <= this._minScale;
    }
    /**
   * デバイスに対応する論理座標の左辺のＸ軸位置を取得する
   * @return デバイスに対応する論理座標の左辺のX軸位置
   */ getScreenLeft() {
        return this._screenLeft;
    }
    /**
   * デバイスに対応する論理座標の右辺のＸ軸位置を取得する
   * @return デバイスに対応する論理座標の右辺のX軸位置
   */ getScreenRight() {
        return this._screenRight;
    }
    /**
   * デバイスに対応する論理座標の下辺のY軸位置を取得する
   * @return デバイスに対応する論理座標の下辺のY軸位置
   */ getScreenBottom() {
        return this._screenBottom;
    }
    /**
   * デバイスに対応する論理座標の上辺のY軸位置を取得する
   * @return デバイスに対応する論理座標の上辺のY軸位置
   */ getScreenTop() {
        return this._screenTop;
    }
    /**
   * 左辺のX軸位置の最大値の取得
   * @return 左辺のX軸位置の最大値
   */ getMaxLeft() {
        return this._maxLeft;
    }
    /**
   * 右辺のX軸位置の最大値の取得
   * @return 右辺のX軸位置の最大値
   */ getMaxRight() {
        return this._maxRight;
    }
    /**
   * 下辺のY軸位置の最大値の取得
   * @return 下辺のY軸位置の最大値
   */ getMaxBottom() {
        return this._maxBottom;
    }
    /**
   * 上辺のY軸位置の最大値の取得
   * @return 上辺のY軸位置の最大値
   */ getMaxTop() {
        return this._maxTop;
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_screenLeft", void 0 // デバイスに対応する論理座標上の範囲（左辺X軸位置）
        ), (0,esm_define_property._)(this, "_screenRight", void 0 // デバイスに対応する論理座標上の範囲（右辺X軸位置）
        ), (0,esm_define_property._)(this, "_screenTop", void 0 // デバイスに対応する論理座標上の範囲（上辺Y軸位置）
        ), (0,esm_define_property._)(this, "_screenBottom", void 0 // デバイスに対応する論理座標上の範囲（下辺Y軸位置）
        ), (0,esm_define_property._)(this, "_maxLeft", void 0 // 論理座標上の移動可能範囲（左辺X軸位置）
        ), (0,esm_define_property._)(this, "_maxRight", void 0 // 論理座標上の移動可能範囲（右辺X軸位置）
        ), (0,esm_define_property._)(this, "_maxTop", void 0 // 論理座標上の移動可能範囲（上辺Y軸位置）
        ), (0,esm_define_property._)(this, "_maxBottom", void 0 // 論理座標上の移動可能範囲（下辺Y軸位置）
        ), (0,esm_define_property._)(this, "_maxScale", void 0 // 拡大率の最大値
        ), (0,esm_define_property._)(this, "_minScale", void 0 // 拡大率の最小値
        );
        this._screenLeft = 0.0;
        this._screenRight = 0.0;
        this._screenTop = 0.0;
        this._screenBottom = 0.0;
        this._maxLeft = 0.0;
        this._maxRight = 0.0;
        this._maxTop = 0.0;
        this._maxBottom = 0.0;
        this._maxScale = 0.0;
        this._minScale = 0.0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismViewMatrix = CubismViewMatrix;
})(cubismviewmatrix_Live2DCubismFramework || (cubismviewmatrix_Live2DCubismFramework = {}));
var cubismviewmatrix_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/model/cubismmodel.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 






/**
 * Structure for managing the override of parameter repetition settings
 */ class ParameterRepeatData {
    /**
   * Constructor
   *
   * @param isOverridden whether to be overriden
   * @param isParameterRepeated override flag for settings
   */ constructor(isOverridden = false, isParameterRepeated = false){
        /**
   * Whether to be overridden
   */ (0,esm_define_property._)(this, "isOverridden", void 0);
        /**
   * Override flag for settings
   */ (0,esm_define_property._)(this, "isParameterRepeated", void 0);
        this.isOverridden = isOverridden;
        this.isParameterRepeated = isParameterRepeated;
    }
}
/**
 * SDK側から与えられたDrawableの乗算色・スクリーン色上書きフラグと
 * その色を保持する構造体
 */ class DrawableColorData {
    get isOverwritten() {
        return this.isOverridden;
    }
    constructor(isOverridden = false, color = new CubismTextureColor()){
        (0,esm_define_property._)(this, "isOverridden", void 0);
        (0,esm_define_property._)(this, "color", void 0);
        this.isOverridden = isOverridden;
        this.color = color;
    }
}
/**
 * @brief テクスチャの色をRGBAで扱うための構造体
 */ class PartColorData {
    get isOverwritten() {
        return this.isOverridden;
    }
    constructor(isOverridden = false, color = new CubismTextureColor()){
        (0,esm_define_property._)(this, "isOverridden", void 0);
        (0,esm_define_property._)(this, "color", void 0);
        this.isOverridden = isOverridden;
        this.color = color;
    }
}
/**
 * テクスチャのカリング設定を管理するための構造体
 */ class DrawableCullingData {
    get isOverwritten() {
        return this.isOverridden;
    }
    /**
   * コンストラクタ
   *
   * @param isOverridden
   * @param isCulling
   */ constructor(isOverridden = false, isCulling = false){
        (0,esm_define_property._)(this, "isOverridden", void 0);
        (0,esm_define_property._)(this, "isCulling", void 0);
        this.isOverridden = isOverridden;
        this.isCulling = isCulling;
    }
}
/**
 * モデル
 *
 * Mocデータから生成されるモデルのクラス。
 */ class CubismModel {
    /**
   * モデルのパラメータの更新
   */ update() {
        // Update model
        this._model.update();
        this._model.drawables.resetDynamicFlags();
    }
    /**
   * PixelsPerUnitを取得する
   * @returns PixelsPerUnit
   */ getPixelsPerUnit() {
        if (this._model == null) {
            return 0.0;
        }
        return this._model.canvasinfo.PixelsPerUnit;
    }
    /**
   * キャンバスの幅を取得する
   */ getCanvasWidth() {
        if (this._model == null) {
            return 0.0;
        }
        return this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
    }
    /**
   * キャンバスの高さを取得する
   */ getCanvasHeight() {
        if (this._model == null) {
            return 0.0;
        }
        return this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
    }
    /**
   * パラメータを保存する
   */ saveParameters() {
        const parameterCount = this._model.parameters.count;
        const savedParameterCount = this._savedParameters.getSize();
        for(let i = 0; i < parameterCount; ++i){
            if (i < savedParameterCount) {
                this._savedParameters.set(i, this._parameterValues[i]);
            } else {
                this._savedParameters.pushBack(this._parameterValues[i]);
            }
        }
    }
    /**
   * 乗算色を取得する
   * @param index Drawablesのインデックス
   * @returns 指定したdrawableの乗算色(RGBA)
   */ getMultiplyColor(index) {
        // Drawableとモデル全体の乗算色上書きフラグがどちらもtrueな場合、モデル全体の上書きフラグが優先される
        if (this.getOverrideFlagForModelMultiplyColors() || this.getOverrideFlagForDrawableMultiplyColors(index)) {
            return this._userMultiplyColors.at(index).color;
        }
        const color = this.getDrawableMultiplyColor(index);
        return color;
    }
    /**
   * スクリーン色を取得する
   * @param index Drawablesのインデックス
   * @returns 指定したdrawableのスクリーン色(RGBA)
   */ getScreenColor(index) {
        // Drawableとモデル全体のスクリーン色上書きフラグがどちらもtrueな場合、モデル全体の上書きフラグが優先される
        if (this.getOverrideFlagForModelScreenColors() || this.getOverrideFlagForDrawableScreenColors(index)) {
            return this._userScreenColors.at(index).color;
        }
        const color = this.getDrawableScreenColor(index);
        return color;
    }
    /**
   * 乗算色をセットする
   * @param index Drawablesのインデックス
   * @param color 設定する乗算色(CubismTextureColor)
   */ setMultiplyColorByTextureColor(index, color) {
        this.setMultiplyColorByRGBA(index, color.r, color.g, color.b, color.a);
    }
    /**
   * 乗算色をセットする
   * @param index Drawablesのインデックス
   * @param r 設定する乗算色のR値
   * @param g 設定する乗算色のG値
   * @param b 設定する乗算色のB値
   * @param a 設定する乗算色のA値
   */ setMultiplyColorByRGBA(index, r, g, b) {
        let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1.0;
        this._userMultiplyColors.at(index).color.r = r;
        this._userMultiplyColors.at(index).color.g = g;
        this._userMultiplyColors.at(index).color.b = b;
        this._userMultiplyColors.at(index).color.a = a;
    }
    /**
   * スクリーン色をセットする
   * @param index Drawablesのインデックス
   * @param color 設定するスクリーン色(CubismTextureColor)
   */ setScreenColorByTextureColor(index, color) {
        this.setScreenColorByRGBA(index, color.r, color.g, color.b, color.a);
    }
    /**
   * スクリーン色をセットする
   * @param index Drawablesのインデックス
   * @param r 設定するスクリーン色のR値
   * @param g 設定するスクリーン色のG値
   * @param b 設定するスクリーン色のB値
   * @param a 設定するスクリーン色のA値
   */ setScreenColorByRGBA(index, r, g, b) {
        let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1.0;
        this._userScreenColors.at(index).color.r = r;
        this._userScreenColors.at(index).color.g = g;
        this._userScreenColors.at(index).color.b = b;
        this._userScreenColors.at(index).color.a = a;
    }
    /**
   * partの乗算色を取得する
   * @param partIndex partのインデックス
   * @returns 指定したpartの乗算色
   */ getPartMultiplyColor(partIndex) {
        return this._userPartMultiplyColors.at(partIndex).color;
    }
    /**
   * partのスクリーン色を取得する
   * @param partIndex partのインデックス
   * @returns 指定したpartのスクリーン色
   */ getPartScreenColor(partIndex) {
        return this._userPartScreenColors.at(partIndex).color;
    }
    /**
   * partのOverrideColor setter関数
   * @param partIndex partのインデックス
   * @param r 設定する色のR値
   * @param g 設定する色のG値
   * @param b 設定する色のB値
   * @param a 設定する色のA値
   * @param partColors 設定するpartのカラーデータ配列
   * @param drawableColors partに関連するDrawableのカラーデータ配列
   */ setPartColor(partIndex, r, g, b, a, partColors, drawableColors) {
        partColors.at(partIndex).color.r = r;
        partColors.at(partIndex).color.g = g;
        partColors.at(partIndex).color.b = b;
        partColors.at(partIndex).color.a = a;
        if (partColors.at(partIndex).isOverridden) {
            for(let i = 0; i < this._partChildDrawables.at(partIndex).getSize(); ++i){
                const drawableIndex = this._partChildDrawables.at(partIndex).at(i);
                drawableColors.at(drawableIndex).color.r = r;
                drawableColors.at(drawableIndex).color.g = g;
                drawableColors.at(drawableIndex).color.b = b;
                drawableColors.at(drawableIndex).color.a = a;
            }
        }
    }
    /**
   * 乗算色をセットする
   * @param partIndex partのインデックス
   * @param color 設定する乗算色(CubismTextureColor)
   */ setPartMultiplyColorByTextureColor(partIndex, color) {
        this.setPartMultiplyColorByRGBA(partIndex, color.r, color.g, color.b, color.a);
    }
    /**
   * 乗算色をセットする
   * @param partIndex partのインデックス
   * @param r 設定する乗算色のR値
   * @param g 設定する乗算色のG値
   * @param b 設定する乗算色のB値
   * @param a 設定する乗算色のA値
   */ setPartMultiplyColorByRGBA(partIndex, r, g, b, a) {
        this.setPartColor(partIndex, r, g, b, a, this._userPartMultiplyColors, this._userMultiplyColors);
    }
    /**
   * スクリーン色をセットする
   * @param partIndex partのインデックス
   * @param color 設定するスクリーン色(CubismTextureColor)
   */ setPartScreenColorByTextureColor(partIndex, color) {
        this.setPartScreenColorByRGBA(partIndex, color.r, color.g, color.b, color.a);
    }
    /**
   * スクリーン色をセットする
   * @param partIndex partのインデックス
   * @param r 設定するスクリーン色のR値
   * @param g 設定するスクリーン色のG値
   * @param b 設定するスクリーン色のB値
   * @param a 設定するスクリーン色のA値
   */ setPartScreenColorByRGBA(partIndex, r, g, b, a) {
        this.setPartColor(partIndex, r, g, b, a, this._userPartScreenColors, this._userScreenColors);
    }
    /**
   * Checks whether parameter repetition is performed for the entire model.
   *
   * @return true if parameter repetition is performed for the entire model; otherwise returns false.
   */ getOverrideFlagForModelParameterRepeat() {
        return this._isOverriddenParameterRepeat;
    }
    /**
   * Sets whether parameter repetition is performed for the entire model.
   * Use true to perform parameter repetition for the entire model, or false to not perform it.
   */ setOverrideFlagForModelParameterRepeat(isRepeat) {
        this._isOverriddenParameterRepeat = isRepeat;
    }
    /**
   * Returns the flag indicating whether to override the parameter repeat.
   *
   * @param parameterIndex Parameter index
   *
   * @return true if the parameter repeat is overridden, false otherwise.
   */ getOverrideFlagForParameterRepeat(parameterIndex) {
        return this._userParameterRepeatDataList.at(parameterIndex).isOverridden;
    }
    /**
   * Sets the flag indicating whether to override the parameter repeat.
   *
   * @param parameterIndex Parameter index
   * @param value true if it is to be overridden; otherwise, false.
   */ setOverrideFlagForParameterRepeat(parameterIndex, value) {
        this._userParameterRepeatDataList.at(parameterIndex).isOverridden = value;
    }
    /**
   * Returns the repeat flag.
   *
   * @param parameterIndex Parameter index
   *
   * @return true if repeating, false otherwise.
   */ getRepeatFlagForParameterRepeat(parameterIndex) {
        return this._userParameterRepeatDataList.at(parameterIndex).isParameterRepeated;
    }
    /**
   * Sets the repeat flag.
   *
   * @param parameterIndex Parameter index
   * @param value true to enable repeating, false otherwise.
   */ setRepeatFlagForParameterRepeat(parameterIndex, value) {
        this._userParameterRepeatDataList.at(parameterIndex).isParameterRepeated = value;
    }
    /**
   * SDKから指定したモデルの乗算色を上書きするか
   *
   * @deprecated 名称変更のため非推奨 getOverrideFlagForModelMultiplyColors() に置き換え
   *
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverwriteFlagForModelMultiplyColors() {
        CubismLogWarning('getOverwriteFlagForModelMultiplyColors() is a deprecated function. Please use getOverrideFlagForModelMultiplyColors().');
        return this.getOverrideFlagForModelMultiplyColors();
    }
    /**
   * SDKから指定したモデルの乗算色を上書きするか
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverrideFlagForModelMultiplyColors() {
        return this._isOverriddenModelMultiplyColors;
    }
    /**
   * SDKから指定したモデルのスクリーン色を上書きするか
   *
   * @deprecated 名称変更のため非推奨 getOverrideFlagForModelScreenColors() に置き換え
   *
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverwriteFlagForModelScreenColors() {
        CubismLogWarning('getOverwriteFlagForModelScreenColors() is a deprecated function. Please use getOverrideFlagForModelScreenColors().');
        return this.getOverrideFlagForModelScreenColors();
    }
    /**
   * SDKから指定したモデルのスクリーン色を上書きするか
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverrideFlagForModelScreenColors() {
        return this._isOverriddenModelScreenColors;
    }
    /**
   * SDKから指定したモデルの乗算色を上書きするかセットする
   *
   * @deprecated 名称変更のため非推奨 setOverrideFlagForModelMultiplyColors(value: boolean) に置き換え
   *
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverwriteFlagForModelMultiplyColors(value) {
        CubismLogWarning('setOverwriteFlagForModelMultiplyColors(value: boolean) is a deprecated function. Please use setOverrideFlagForModelMultiplyColors(value: boolean).');
        this.setOverrideFlagForModelMultiplyColors(value);
    }
    /**
   * SDKから指定したモデルの乗算色を上書きするかセットする
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverrideFlagForModelMultiplyColors(value) {
        this._isOverriddenModelMultiplyColors = value;
    }
    /**
   * SDKから指定したモデルのスクリーン色を上書きするかセットする
   *
   * @deprecated 名称変更のため非推奨 setOverrideFlagForModelScreenColors(value: boolean) に置き換え
   *
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverwriteFlagForModelScreenColors(value) {
        CubismLogWarning('setOverwriteFlagForModelScreenColors(value: boolean) is a deprecated function. Please use setOverrideFlagForModelScreenColors(value: boolean).');
        this.setOverrideFlagForModelScreenColors(value);
    }
    /**
   * SDKから指定したモデルのスクリーン色を上書きするかセットする
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverrideFlagForModelScreenColors(value) {
        this._isOverriddenModelScreenColors = value;
    }
    /**
   * SDKから指定したDrawableIndexの乗算色を上書きするか
   *
   * @deprecated 名称変更のため非推奨 getOverrideFlagForDrawableMultiplyColors(drawableindex: number) に置き換え
   *
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverwriteFlagForDrawableMultiplyColors(drawableindex) {
        CubismLogWarning('getOverwriteFlagForDrawableMultiplyColors(drawableindex: number) is a deprecated function. Please use getOverrideFlagForDrawableMultiplyColors(drawableindex: number).');
        return this.getOverrideFlagForDrawableMultiplyColors(drawableindex);
    }
    /**
   * SDKから指定したDrawableIndexの乗算色を上書きするか
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverrideFlagForDrawableMultiplyColors(drawableindex) {
        return this._userMultiplyColors.at(drawableindex).isOverridden;
    }
    /**
   * SDKから指定したDrawableIndexのスクリーン色を上書きするか
   *
   * @deprecated 名称変更のため非推奨 getOverrideFlagForDrawableScreenColors(drawableindex: number) に置き換え
   *
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverwriteFlagForDrawableScreenColors(drawableindex) {
        CubismLogWarning('getOverwriteFlagForDrawableScreenColors(drawableindex: number) is a deprecated function. Please use getOverrideFlagForDrawableScreenColors(drawableindex: number).');
        return this.getOverrideFlagForDrawableScreenColors(drawableindex);
    }
    /**
   * SDKから指定したDrawableIndexのスクリーン色を上書きするか
   * @returns true -> SDKからの情報を優先する
   *          false -> モデルに設定されている色情報を使用
   */ getOverrideFlagForDrawableScreenColors(drawableindex) {
        return this._userScreenColors.at(drawableindex).isOverridden;
    }
    /**
   * SDKから指定したDrawableIndexの乗算色を上書きするかセットする
   *
   * @deprecated 名称変更のため非推奨 setOverrideFlagForDrawableMultiplyColors(drawableindex: number, value: boolean) に置き換え
   *
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverwriteFlagForDrawableMultiplyColors(drawableindex, value) {
        CubismLogWarning('setOverwriteFlagForDrawableMultiplyColors(drawableindex: number, value: boolean) is a deprecated function. Please use setOverrideFlagForDrawableMultiplyColors(drawableindex: number, value: boolean).');
        this.setOverrideFlagForDrawableMultiplyColors(drawableindex, value);
    }
    /**
   * SDKから指定したDrawableIndexの乗算色を上書きするかセットする
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverrideFlagForDrawableMultiplyColors(drawableindex, value) {
        this._userMultiplyColors.at(drawableindex).isOverridden = value;
    }
    /**
   * SDKから指定したDrawableIndexのスクリーン色を上書きするかセットする
   *
   * @deprecated 名称変更のため非推奨 setOverrideFlagForDrawableScreenColors(drawableindex: number, value: boolean) に置き換え
   *
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverwriteFlagForDrawableScreenColors(drawableindex, value) {
        CubismLogWarning('setOverwriteFlagForDrawableScreenColors(drawableindex: number, value: boolean) is a deprecated function. Please use setOverrideFlagForDrawableScreenColors(drawableindex: number, value: boolean).');
        this.setOverrideFlagForDrawableScreenColors(drawableindex, value);
    }
    /**
   * SDKから指定したDrawableIndexのスクリーン色を上書きするかセットする
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverrideFlagForDrawableScreenColors(drawableindex, value) {
        this._userScreenColors.at(drawableindex).isOverridden = value;
    }
    /**
   * SDKからpartの乗算色を上書きするか
   *
   * @deprecated 名称変更のため非推奨 getOverrideColorForPartMultiplyColors(partIndex: number) に置き換え
   *
   * @param partIndex partのインデックス
   * @returns true    ->  SDKからの情報を優先する
   *          false   ->  モデルに設定されている色情報を使用
   */ getOverwriteColorForPartMultiplyColors(partIndex) {
        CubismLogWarning('getOverwriteColorForPartMultiplyColors(partIndex: number) is a deprecated function. Please use getOverrideColorForPartMultiplyColors(partIndex: number).');
        return this.getOverrideColorForPartMultiplyColors(partIndex);
    }
    /**
   * SDKからpartの乗算色を上書きするか
   * @param partIndex partのインデックス
   * @returns true    ->  SDKからの情報を優先する
   *          false   ->  モデルに設定されている色情報を使用
   */ getOverrideColorForPartMultiplyColors(partIndex) {
        return this._userPartMultiplyColors.at(partIndex).isOverridden;
    }
    /**
   * SDKからpartのスクリーン色を上書きするか
   *
   * @deprecated 名称変更のため非推奨 getOverrideColorForPartScreenColors(partIndex: number) に置き換え
   *
   * @param partIndex partのインデックス
   * @returns true    ->  SDKからの情報を優先する
   *          false   ->  モデルに設定されている色情報を使用
   */ getOverwriteColorForPartScreenColors(partIndex) {
        CubismLogWarning('getOverwriteColorForPartScreenColors(partIndex: number) is a deprecated function. Please use getOverrideColorForPartScreenColors(partIndex: number).');
        return this.getOverrideColorForPartScreenColors(partIndex);
    }
    /**
   * SDKからpartのスクリーン色を上書きするか
   * @param partIndex partのインデックス
   * @returns true    ->  SDKからの情報を優先する
   *          false   ->  モデルに設定されている色情報を使用
   */ getOverrideColorForPartScreenColors(partIndex) {
        return this._userPartScreenColors.at(partIndex).isOverridden;
    }
    /**
   * partのOverrideFlag setter関数
   *
   * @deprecated 名称変更のため非推奨 setOverrideColorForPartColors(
   * partIndex: number,
   * value: boolean,
   * partColors: csmVector<PartColorData>,
   * drawableColors: csmVector<DrawableColorData>) に置き換え
   *
   * @param partIndex partのインデックス
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   * @param partColors 設定するpartのカラーデータ配列
   * @param drawableColors partに関連するDrawableのカラーデータ配列
   */ setOverwriteColorForPartColors(partIndex, value, partColors, drawableColors) {
        CubismLogWarning('setOverwriteColorForPartColors(partIndex: number, value: boolean, partColors: csmVector<PartColorData>, drawableColors: csmVector<DrawableColorData>) is a deprecated function. Please use setOverrideColorForPartColors(partIndex: number, value: boolean, partColors: csmVector<PartColorData>, drawableColors: csmVector<DrawableColorData>).');
        this.setOverrideColorForPartColors(partIndex, value, partColors, drawableColors);
    }
    /**
   * partのOverrideFlag setter関数
   * @param partIndex partのインデックス
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   * @param partColors 設定するpartのカラーデータ配列
   * @param drawableColors partに関連するDrawableのカラーデータ配列
   */ setOverrideColorForPartColors(partIndex, value, partColors, drawableColors) {
        partColors.at(partIndex).isOverridden = value;
        for(let i = 0; i < this._partChildDrawables.at(partIndex).getSize(); ++i){
            const drawableIndex = this._partChildDrawables.at(partIndex).at(i);
            drawableColors.at(drawableIndex).isOverridden = value;
            if (value) {
                drawableColors.at(drawableIndex).color.r = partColors.at(partIndex).color.r;
                drawableColors.at(drawableIndex).color.g = partColors.at(partIndex).color.g;
                drawableColors.at(drawableIndex).color.b = partColors.at(partIndex).color.b;
                drawableColors.at(drawableIndex).color.a = partColors.at(partIndex).color.a;
            }
        }
    }
    /**
   * SDKからpartのスクリーン色を上書きするかをセットする
   *
   * @deprecated 名称変更のため非推奨 setOverrideColorForPartMultiplyColors(partIndex: number, value: boolean) に置き換え
   *
   * @param partIndex partのインデックス
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverwriteColorForPartMultiplyColors(partIndex, value) {
        CubismLogWarning('setOverwriteColorForPartMultiplyColors(partIndex: number, value: boolean) is a deprecated function. Please use setOverrideColorForPartMultiplyColors(partIndex: number, value: boolean).');
        this.setOverrideColorForPartMultiplyColors(partIndex, value);
    }
    /**
   * SDKからpartのスクリーン色を上書きするかをセットする
   * @param partIndex partのインデックス
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverrideColorForPartMultiplyColors(partIndex, value) {
        this._userPartMultiplyColors.at(partIndex).isOverridden = value;
        this.setOverrideColorForPartColors(partIndex, value, this._userPartMultiplyColors, this._userMultiplyColors);
    }
    /**
   * SDKからpartのスクリーン色を上書きするかをセットする
   *
   * @deprecated 名称変更のため非推奨 setOverrideColorForPartScreenColors(partIndex: number, value: boolean) に置き換え
   *
   * @param partIndex partのインデックス
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverwriteColorForPartScreenColors(partIndex, value) {
        CubismLogWarning('setOverwriteColorForPartScreenColors(partIndex: number, value: boolean) is a deprecated function. Please use setOverrideColorForPartScreenColors(partIndex: number, value: boolean).');
        this.setOverrideColorForPartScreenColors(partIndex, value);
    }
    /**
   * SDKからpartのスクリーン色を上書きするかをセットする
   * @param partIndex partのインデックス
   * @param value true -> SDKからの情報を優先する
   *              false -> モデルに設定されている色情報を使用
   */ setOverrideColorForPartScreenColors(partIndex, value) {
        this._userPartScreenColors.at(partIndex).isOverridden = value;
        this.setOverrideColorForPartColors(partIndex, value, this._userPartScreenColors, this._userScreenColors);
    }
    /**
   * Drawableのカリング情報を取得する。
   *
   * @param   drawableIndex   Drawableのインデックス
   * @return  Drawableのカリング情報
   */ getDrawableCulling(drawableIndex) {
        if (this.getOverrideFlagForModelCullings() || this.getOverrideFlagForDrawableCullings(drawableIndex)) {
            return this._userCullings.at(drawableIndex).isCulling;
        }
        const constantFlags = this._model.drawables.constantFlags;
        return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
    }
    /**
   * Drawableのカリング情報を設定する。
   *
   * @param drawableIndex Drawableのインデックス
   * @param isCulling カリング情報
   */ setDrawableCulling(drawableIndex, isCulling) {
        this._userCullings.at(drawableIndex).isCulling = isCulling;
    }
    /**
   * SDKからモデル全体のカリング設定を上書きするか。
   *
   * @deprecated 名称変更のため非推奨 getOverrideFlagForModelCullings() に置き換え
   *
   * @retval  true    ->  SDK上のカリング設定を使用
   * @retval  false   ->  モデルのカリング設定を使用
   */ getOverwriteFlagForModelCullings() {
        CubismLogWarning('getOverwriteFlagForModelCullings() is a deprecated function. Please use getOverrideFlagForModelCullings().');
        return this.getOverrideFlagForModelCullings();
    }
    /**
   * SDKからモデル全体のカリング設定を上書きするか。
   *
   * @retval  true    ->  SDK上のカリング設定を使用
   * @retval  false   ->  モデルのカリング設定を使用
   */ getOverrideFlagForModelCullings() {
        return this._isOverriddenCullings;
    }
    /**
   * SDKからモデル全体のカリング設定を上書きするかを設定する。
   *
   * @deprecated 名称変更のため非推奨 setOverrideFlagForModelCullings(isOverriddenCullings: boolean) に置き換え
   *
   * @param isOveriddenCullings SDK上のカリング設定を使うならtrue、モデルのカリング設定を使うならfalse
   */ setOverwriteFlagForModelCullings(isOverriddenCullings) {
        CubismLogWarning('setOverwriteFlagForModelCullings(isOverriddenCullings: boolean) is a deprecated function. Please use setOverrideFlagForModelCullings(isOverriddenCullings: boolean).');
        this.setOverrideFlagForModelCullings(isOverriddenCullings);
    }
    /**
   * SDKからモデル全体のカリング設定を上書きするかを設定する。
   *
   * @param isOverriddenCullings SDK上のカリング設定を使うならtrue、モデルのカリング設定を使うならfalse
   */ setOverrideFlagForModelCullings(isOverriddenCullings) {
        this._isOverriddenCullings = isOverriddenCullings;
    }
    /**
   *
   * @deprecated 名称変更のため非推奨 getOverrideFlagForDrawableCullings(drawableIndex: number) に置き換え
   *
   * @param drawableIndex Drawableのインデックス
   * @retval  true    ->  SDK上のカリング設定を使用
   * @retval  false   ->  モデルのカリング設定を使用
   */ getOverwriteFlagForDrawableCullings(drawableIndex) {
        CubismLogWarning('getOverwriteFlagForDrawableCullings(drawableIndex: number) is a deprecated function. Please use getOverrideFlagForDrawableCullings(drawableIndex: number).');
        return this.getOverrideFlagForDrawableCullings(drawableIndex);
    }
    /**
   *
   * @param drawableIndex Drawableのインデックス
   * @retval  true    ->  SDK上のカリング設定を使用
   * @retval  false   ->  モデルのカリング設定を使用
   */ getOverrideFlagForDrawableCullings(drawableIndex) {
        return this._userCullings.at(drawableIndex).isOverridden;
    }
    /**
   *
   * @deprecated 名称変更のため非推奨 setOverrideFlagForDrawableCullings(drawableIndex: number, isOverriddenCullings: bolean) に置き換え
   *
   * @param drawableIndex Drawableのインデックス
   * @param isOverriddenCullings SDK上のカリング設定を使うならtrue、モデルのカリング設定を使うならfalse
   */ setOverwriteFlagForDrawableCullings(drawableIndex, isOverriddenCullings) {
        CubismLogWarning('setOverwriteFlagForDrawableCullings(drawableIndex: number, isOverriddenCullings: boolean) is a deprecated function. Please use setOverrideFlagForDrawableCullings(drawableIndex: number, isOverriddenCullings: boolean).');
        this.setOverrideFlagForDrawableCullings(drawableIndex, isOverriddenCullings);
    }
    /**
   *
   * @param drawableIndex Drawableのインデックス
   * @param isOverriddenCullings SDK上のカリング設定を使うならtrue、モデルのカリング設定を使うならfalse
   */ setOverrideFlagForDrawableCullings(drawableIndex, isOverriddenCullings) {
        this._userCullings.at(drawableIndex).isOverridden = isOverriddenCullings;
    }
    /**
   * モデルの不透明度を取得する
   *
   * @returns 不透明度の値
   */ getModelOapcity() {
        return this._modelOpacity;
    }
    /**
   * モデルの不透明度を設定する
   *
   * @param value 不透明度の値
   */ setModelOapcity(value) {
        this._modelOpacity = value;
    }
    /**
   * モデルを取得
   */ getModel() {
        return this._model;
    }
    /**
   * パーツのインデックスを取得
   * @param partId パーツのID
   * @return パーツのインデックス
   */ getPartIndex(partId) {
        let partIndex;
        const partCount = this._model.parts.count;
        for(partIndex = 0; partIndex < partCount; ++partIndex){
            if (partId == this._partIds.at(partIndex)) {
                return partIndex;
            }
        }
        // モデルに存在していない場合、非存在パーツIDリスト内にあるかを検索し、そのインデックスを返す
        if (this._notExistPartId.isExist(partId)) {
            return this._notExistPartId.getValue(partId);
        }
        // 非存在パーツIDリストにない場合、新しく要素を追加する
        partIndex = partCount + this._notExistPartId.getSize();
        this._notExistPartId.setValue(partId, partIndex);
        this._notExistPartOpacities.appendKey(partIndex);
        return partIndex;
    }
    /**
   * パーツのIDを取得する。
   *
   * @param partIndex 取得するパーツのインデックス
   * @return パーツのID
   */ getPartId(partIndex) {
        const partId = this._model.parts.ids[partIndex];
        return CubismFramework.getIdManager().getId(partId);
    }
    /**
   * パーツの個数の取得
   * @return パーツの個数
   */ getPartCount() {
        const partCount = this._model.parts.count;
        return partCount;
    }
    /**
   * パーツの親パーツインデックスのリストを取得
   *
   * @returns パーツの親パーツインデックスのリスト
   */ getPartParentPartIndices() {
        const parentIndices = this._model.parts.parentIndices;
        return parentIndices;
    }
    /**
   * パーツの不透明度の設定(Index)
   * @param partIndex パーツのインデックス
   * @param opacity 不透明度
   */ setPartOpacityByIndex(partIndex, opacity) {
        if (this._notExistPartOpacities.isExist(partIndex)) {
            this._notExistPartOpacities.setValue(partIndex, opacity);
            return;
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
        this._partOpacities[partIndex] = opacity;
    }
    /**
   * パーツの不透明度の設定(Id)
   * @param partId パーツのID
   * @param opacity パーツの不透明度
   */ setPartOpacityById(partId, opacity) {
        // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
        const index = this.getPartIndex(partId);
        if (index < 0) {
            return; // パーツがないのでスキップ
        }
        this.setPartOpacityByIndex(index, opacity);
    }
    /**
   * パーツの不透明度の取得(index)
   * @param partIndex パーツのインデックス
   * @return パーツの不透明度
   */ getPartOpacityByIndex(partIndex) {
        if (this._notExistPartOpacities.isExist(partIndex)) {
            // モデルに存在しないパーツIDの場合、非存在パーツリストから不透明度を返す。
            return this._notExistPartOpacities.getValue(partIndex);
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
        return this._partOpacities[partIndex];
    }
    /**
   * パーツの不透明度の取得(id)
   * @param partId パーツのＩｄ
   * @return パーツの不透明度
   */ getPartOpacityById(partId) {
        // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
        const index = this.getPartIndex(partId);
        if (index < 0) {
            return 0; // パーツが無いのでスキップ
        }
        return this.getPartOpacityByIndex(index);
    }
    /**
   * パラメータのインデックスの取得
   * @param パラメータID
   * @return パラメータのインデックス
   */ getParameterIndex(parameterId) {
        let parameterIndex;
        const idCount = this._model.parameters.count;
        for(parameterIndex = 0; parameterIndex < idCount; ++parameterIndex){
            if (parameterId != this._parameterIds.at(parameterIndex)) {
                continue;
            }
            return parameterIndex;
        }
        // モデルに存在していない場合、非存在パラメータIDリスト内を検索し、そのインデックスを返す
        if (this._notExistParameterId.isExist(parameterId)) {
            return this._notExistParameterId.getValue(parameterId);
        }
        // 非存在パラメータIDリストにない場合新しく要素を追加する
        parameterIndex = this._model.parameters.count + this._notExistParameterId.getSize();
        this._notExistParameterId.setValue(parameterId, parameterIndex);
        this._notExistParameterValues.appendKey(parameterIndex);
        return parameterIndex;
    }
    /**
   * パラメータの個数の取得
   * @return パラメータの個数
   */ getParameterCount() {
        return this._model.parameters.count;
    }
    /**
   * パラメータの種類の取得
   * @param parameterIndex パラメータのインデックス
   * @return csmParameterType_Normal -> 通常のパラメータ
   *          csmParameterType_BlendShape -> ブレンドシェイプパラメータ
   */ getParameterType(parameterIndex) {
        return this._model.parameters.types[parameterIndex];
    }
    /**
   * パラメータの最大値の取得
   * @param parameterIndex パラメータのインデックス
   * @return パラメータの最大値
   */ getParameterMaximumValue(parameterIndex) {
        return this._model.parameters.maximumValues[parameterIndex];
    }
    /**
   * パラメータの最小値の取得
   * @param parameterIndex パラメータのインデックス
   * @return パラメータの最小値
   */ getParameterMinimumValue(parameterIndex) {
        return this._model.parameters.minimumValues[parameterIndex];
    }
    /**
   * パラメータのデフォルト値の取得
   * @param parameterIndex パラメータのインデックス
   * @return パラメータのデフォルト値
   */ getParameterDefaultValue(parameterIndex) {
        return this._model.parameters.defaultValues[parameterIndex];
    }
    /**
   * 指定したパラメータindexのIDを取得
   *
   * @param parameterIndex パラメータのインデックス
   * @returns パラメータID
   */ getParameterId(parameterIndex) {
        return CubismFramework.getIdManager().getId(this._model.parameters.ids[parameterIndex]);
    }
    /**
   * パラメータの値の取得
   * @param parameterIndex    パラメータのインデックス
   * @return パラメータの値
   */ getParameterValueByIndex(parameterIndex) {
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            return this._notExistParameterValues.getValue(parameterIndex);
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        return this._parameterValues[parameterIndex];
    }
    /**
   * パラメータの値の取得
   * @param parameterId    パラメータのID
   * @return パラメータの値
   */ getParameterValueById(parameterId) {
        // 高速化のためにparameterIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
        const parameterIndex = this.getParameterIndex(parameterId);
        return this.getParameterValueByIndex(parameterIndex);
    }
    /**
   * パラメータの値の設定
   * @param parameterIndex パラメータのインデックス
   * @param value パラメータの値
   * @param weight 重み
   */ setParameterValueByIndex(parameterIndex, value) {
        let weight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.0;
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            this._notExistParameterValues.setValue(parameterIndex, weight == 1 ? value : this._notExistParameterValues.getValue(parameterIndex) * (1 - weight) + value * weight);
            return;
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        if (this.isRepeat(parameterIndex)) {
            value = this.getParameterRepeatValue(parameterIndex, value);
        } else {
            value = this.getParameterClampValue(parameterIndex, value);
        }
        this._parameterValues[parameterIndex] = weight == 1 ? value : this._parameterValues[parameterIndex] = this._parameterValues[parameterIndex] * (1 - weight) + value * weight;
    }
    /**
   * パラメータの値の設定
   * @param parameterId パラメータのID
   * @param value パラメータの値
   * @param weight 重み
   */ setParameterValueById(parameterId, value) {
        let weight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.0;
        const index = this.getParameterIndex(parameterId);
        this.setParameterValueByIndex(index, value, weight);
    }
    /**
   * パラメータの値の加算(index)
   * @param parameterIndex パラメータインデックス
   * @param value 加算する値
   * @param weight 重み
   */ addParameterValueByIndex(parameterIndex, value) {
        let weight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.0;
        this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) + value * weight);
    }
    /**
   * パラメータの値の加算(id)
   * @param parameterId パラメータＩＤ
   * @param value 加算する値
   * @param weight 重み
   */ addParameterValueById(parameterId, value) {
        let weight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.0;
        const index = this.getParameterIndex(parameterId);
        this.addParameterValueByIndex(index, value, weight);
    }
    /**
   * Gets whether the parameter has the repeat setting.
   *
   * @param parameterIndex Parameter index
   *
   * @return true if it is set, otherwise returns false.
   */ isRepeat(parameterIndex) {
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            return false;
        }
        // In-index range detection
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        let isRepeat;
        // Determines whether to perform parameter repeat processing
        if (this._isOverriddenParameterRepeat || this._userParameterRepeatDataList.at(parameterIndex).isOverridden) {
            // Use repeat information set on the SDK side
            isRepeat = this._userParameterRepeatDataList.at(parameterIndex).isParameterRepeated;
        } else {
            // Use repeat information set in Editor
            isRepeat = this._model.parameters.repeats[parameterIndex] != 0;
        }
        return isRepeat;
    }
    /**
   * Returns the calculated result ensuring the value falls within the parameter's range.
   *
   * @param parameterIndex Parameter index
   * @param value Parameter value
   *
   * @return a value that falls within the parameter’s range. If the parameter does not exist, returns it as is.
   */ getParameterRepeatValue(parameterIndex, value) {
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            return value;
        }
        // In-index range detection
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        const maxValue = this._model.parameters.maximumValues[parameterIndex];
        const minValue = this._model.parameters.minimumValues[parameterIndex];
        const valueSize = maxValue - minValue;
        if (maxValue < value) {
            const overValue = CubismMath.mod(value - maxValue, valueSize);
            if (!Number.isNaN(overValue)) {
                value = minValue + overValue;
            } else {
                value = maxValue;
            }
        }
        if (value < minValue) {
            const overValue = CubismMath.mod(minValue - value, valueSize);
            if (!Number.isNaN(overValue)) {
                value = maxValue - overValue;
            } else {
                value = minValue;
            }
        }
        return value;
    }
    /**
   * Returns the result of clamping the value to ensure it falls within the parameter's range.
   *
   * @param parameterIndex Parameter index
   * @param value Parameter value
   *
   * @return the clamped value. If the parameter does not exist, returns it as is.
   */ getParameterClampValue(parameterIndex, value) {
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            return value;
        }
        // In-index range detection
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        const maxValue = this._model.parameters.maximumValues[parameterIndex];
        const minValue = this._model.parameters.minimumValues[parameterIndex];
        return CubismMath.clamp(value, minValue, maxValue);
    }
    /**
   * Returns the repeat of the parameter.
   *
   * @param parameterIndex Parameter index
   *
   * @return the raw data parameter repeat from the Cubism Core.
   */ getParameterRepeats(parameterIndex) {
        return this._model.parameters.repeats[parameterIndex] != 0;
    }
    /**
   * パラメータの値の乗算
   * @param parameterId パラメータのID
   * @param value 乗算する値
   * @param weight 重み
   */ multiplyParameterValueById(parameterId, value) {
        let weight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.0;
        const index = this.getParameterIndex(parameterId);
        this.multiplyParameterValueByIndex(index, value, weight);
    }
    /**
   * パラメータの値の乗算
   * @param parameterIndex パラメータのインデックス
   * @param value 乗算する値
   * @param weight 重み
   */ multiplyParameterValueByIndex(parameterIndex, value) {
        let weight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1.0;
        this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) * (1.0 + (value - 1.0) * weight));
    }
    /**
   * Drawableのインデックスの取得
   * @param drawableId DrawableのID
   * @return Drawableのインデックス
   */ getDrawableIndex(drawableId) {
        const drawableCount = this._model.drawables.count;
        for(let drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex){
            if (this._drawableIds.at(drawableIndex) == drawableId) {
                return drawableIndex;
            }
        }
        return -1;
    }
    /**
   * Drawableの個数の取得
   * @return drawableの個数
   */ getDrawableCount() {
        const drawableCount = this._model.drawables.count;
        return drawableCount;
    }
    /**
   * DrawableのIDを取得する
   * @param drawableIndex Drawableのインデックス
   * @return drawableのID
   */ getDrawableId(drawableIndex) {
        const parameterIds = this._model.drawables.ids;
        return CubismFramework.getIdManager().getId(parameterIds[drawableIndex]);
    }
    /**
   * Drawableの描画順リストの取得
   * @return Drawableの描画順リスト
   */ getDrawableRenderOrders() {
        const renderOrders = this._model.drawables.renderOrders;
        return renderOrders;
    }
    /**
   * @deprecated
   * 関数名が誤っていたため、代替となる getDrawableTextureIndex を追加し、この関数は非推奨となりました。
   *
   * Drawableのテクスチャインデックスリストの取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableのテクスチャインデックスリスト
   */ getDrawableTextureIndices(drawableIndex) {
        return this.getDrawableTextureIndex(drawableIndex);
    }
    /**
   * Drawableのテクスチャインデックスの取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableのテクスチャインデックス
   */ getDrawableTextureIndex(drawableIndex) {
        const textureIndices = this._model.drawables.textureIndices;
        return textureIndices[drawableIndex];
    }
    /**
   * DrawableのVertexPositionsの変化情報の取得
   *
   * 直近のCubismModel.update関数でDrawableの頂点情報が変化したかを取得する。
   *
   * @param   drawableIndex   Drawableのインデックス
   * @retval  true    Drawableの頂点情報が直近のCubismModel.update関数で変化した
   * @retval  false   Drawableの頂点情報が直近のCubismModel.update関数で変化していない
   */ getDrawableDynamicFlagVertexPositionsDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
   * Drawableの頂点インデックスの個数の取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの頂点インデックスの個数
   */ getDrawableVertexIndexCount(drawableIndex) {
        const indexCounts = this._model.drawables.indexCounts;
        return indexCounts[drawableIndex];
    }
    /**
   * Drawableの頂点の個数の取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの頂点の個数
   */ getDrawableVertexCount(drawableIndex) {
        const vertexCounts = this._model.drawables.vertexCounts;
        return vertexCounts[drawableIndex];
    }
    /**
   * Drawableの頂点リストの取得
   * @param drawableIndex drawableのインデックス
   * @return drawableの頂点リスト
   */ getDrawableVertices(drawableIndex) {
        return this.getDrawableVertexPositions(drawableIndex);
    }
    /**
   * Drawableの頂点インデックスリストの取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの頂点インデックスリスト
   */ getDrawableVertexIndices(drawableIndex) {
        const indicesArray = this._model.drawables.indices;
        return indicesArray[drawableIndex];
    }
    /**
   * Drawableの頂点リストの取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの頂点リスト
   */ getDrawableVertexPositions(drawableIndex) {
        const verticesArray = this._model.drawables.vertexPositions;
        return verticesArray[drawableIndex];
    }
    /**
   * Drawableの頂点のUVリストの取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの頂点UVリスト
   */ getDrawableVertexUvs(drawableIndex) {
        const uvsArray = this._model.drawables.vertexUvs;
        return uvsArray[drawableIndex];
    }
    /**
   * Drawableの不透明度の取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの不透明度
   */ getDrawableOpacity(drawableIndex) {
        const opacities = this._model.drawables.opacities;
        return opacities[drawableIndex];
    }
    /**
   * Drawableの乗算色の取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの乗算色(RGBA)
   * スクリーン色はRGBAで取得されるが、Aは必ず0
   */ getDrawableMultiplyColor(drawableIndex) {
        const multiplyColors = this._model.drawables.multiplyColors;
        const index = drawableIndex * 4;
        const multiplyColor = new CubismTextureColor();
        multiplyColor.r = multiplyColors[index];
        multiplyColor.g = multiplyColors[index + 1];
        multiplyColor.b = multiplyColors[index + 2];
        multiplyColor.a = multiplyColors[index + 3];
        return multiplyColor;
    }
    /**
   * Drawableのスクリーン色の取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableのスクリーン色(RGBA)
   * スクリーン色はRGBAで取得されるが、Aは必ず0
   */ getDrawableScreenColor(drawableIndex) {
        const screenColors = this._model.drawables.screenColors;
        const index = drawableIndex * 4;
        const screenColor = new CubismTextureColor();
        screenColor.r = screenColors[index];
        screenColor.g = screenColors[index + 1];
        screenColor.b = screenColors[index + 2];
        screenColor.a = screenColors[index + 3];
        return screenColor;
    }
    /**
   * Drawableの親パーツのインデックスの取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableの親パーツのインデックス
   */ getDrawableParentPartIndex(drawableIndex) {
        return this._model.drawables.parentPartIndices[drawableIndex];
    }
    /**
   * Drawableのブレンドモードを取得
   * @param drawableIndex Drawableのインデックス
   * @return drawableのブレンドモード
   */ getDrawableBlendMode(drawableIndex) {
        const constantFlags = this._model.drawables.constantFlags;
        return Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex]) ? cubismrenderer_CubismBlendMode.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex]) ? cubismrenderer_CubismBlendMode.CubismBlendMode_Multiplicative : cubismrenderer_CubismBlendMode.CubismBlendMode_Normal;
    }
    /**
   * Drawableのマスクの反転使用の取得
   *
   * Drawableのマスク使用時の反転設定を取得する。
   * マスクを使用しない場合は無視される。
   *
   * @param drawableIndex Drawableのインデックス
   * @return Drawableの反転設定
   */ getDrawableInvertedMaskBit(drawableIndex) {
        const constantFlags = this._model.drawables.constantFlags;
        return Live2DCubismCore.Utils.hasIsInvertedMaskBit(constantFlags[drawableIndex]);
    }
    /**
   * Drawableのクリッピングマスクリストの取得
   * @return Drawableのクリッピングマスクリスト
   */ getDrawableMasks() {
        const masks = this._model.drawables.masks;
        return masks;
    }
    /**
   * Drawableのクリッピングマスクの個数リストの取得
   * @return Drawableのクリッピングマスクの個数リスト
   */ getDrawableMaskCounts() {
        const maskCounts = this._model.drawables.maskCounts;
        return maskCounts;
    }
    /**
   * クリッピングマスクの使用状態
   *
   * @return true クリッピングマスクを使用している
   * @return false クリッピングマスクを使用していない
   */ isUsingMasking() {
        for(let d = 0; d < this._model.drawables.count; ++d){
            if (this._model.drawables.maskCounts[d] <= 0) {
                continue;
            }
            return true;
        }
        return false;
    }
    /**
   * Drawableの表示情報を取得する
   *
   * @param drawableIndex Drawableのインデックス
   * @return true Drawableが表示
   * @return false Drawableが非表示
   */ getDrawableDynamicFlagIsVisible(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
    }
    /**
   * DrawableのDrawOrderの変化情報の取得
   *
   * 直近のCubismModel.update関数でdrawableのdrawOrderが変化したかを取得する。
   * drawOrderはartMesh上で指定する0から1000の情報
   * @param drawableIndex drawableのインデックス
   * @return true drawableの不透明度が直近のCubismModel.update関数で変化した
   * @return false drawableの不透明度が直近のCubismModel.update関数で変化している
   */ getDrawableDynamicFlagVisibilityDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
   * Drawableの不透明度の変化情報の取得
   *
   * 直近のCubismModel.update関数でdrawableの不透明度が変化したかを取得する。
   *
   * @param drawableIndex drawableのインデックス
   * @return true Drawableの不透明度が直近のCubismModel.update関数で変化した
   * @return false Drawableの不透明度が直近のCubismModel.update関数で変化してない
   */ getDrawableDynamicFlagOpacityDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
   * Drawableの描画順序の変化情報の取得
   *
   * 直近のCubismModel.update関数でDrawableの描画の順序が変化したかを取得する。
   *
   * @param drawableIndex Drawableのインデックス
   * @return true Drawableの描画の順序が直近のCubismModel.update関数で変化した
   * @return false Drawableの描画の順序が直近のCubismModel.update関数で変化してない
   */ getDrawableDynamicFlagRenderOrderDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
   * Drawableの乗算色・スクリーン色の変化情報の取得
   *
   * 直近のCubismModel.update関数でDrawableの乗算色・スクリーン色が変化したかを取得する。
   *
   * @param drawableIndex Drawableのインデックス
   * @return true Drawableの乗算色・スクリーン色が直近のCubismModel.update関数で変化した
   * @return false Drawableの乗算色・スクリーン色が直近のCubismModel.update関数で変化してない
   */ getDrawableDynamicFlagBlendColorDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasBlendColorDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
   * 保存されたパラメータの読み込み
   */ loadParameters() {
        let parameterCount = this._model.parameters.count;
        const savedParameterCount = this._savedParameters.getSize();
        if (parameterCount > savedParameterCount) {
            parameterCount = savedParameterCount;
        }
        for(let i = 0; i < parameterCount; ++i){
            this._parameterValues[i] = this._savedParameters.at(i);
        }
    }
    /**
   * 初期化する
   */ initialize() {
        CSM_ASSERT(this._model);
        this._parameterValues = this._model.parameters.values;
        this._partOpacities = this._model.parts.opacities;
        this._parameterMaximumValues = this._model.parameters.maximumValues;
        this._parameterMinimumValues = this._model.parameters.minimumValues;
        {
            const parameterIds = this._model.parameters.ids;
            const parameterCount = this._model.parameters.count;
            this._parameterIds.prepareCapacity(parameterCount);
            this._userParameterRepeatDataList.prepareCapacity(parameterCount);
            for(let i = 0; i < parameterCount; ++i){
                this._parameterIds.pushBack(CubismFramework.getIdManager().getId(parameterIds[i]));
                this._userParameterRepeatDataList.pushBack(new ParameterRepeatData(false, false));
            }
        }
        const partCount = this._model.parts.count;
        {
            const partIds = this._model.parts.ids;
            this._partIds.prepareCapacity(partCount);
            for(let i = 0; i < partCount; ++i){
                this._partIds.pushBack(CubismFramework.getIdManager().getId(partIds[i]));
            }
            this._userPartMultiplyColors.prepareCapacity(partCount);
            this._userPartScreenColors.prepareCapacity(partCount);
            this._partChildDrawables.prepareCapacity(partCount);
        }
        {
            const drawableIds = this._model.drawables.ids;
            const drawableCount = this._model.drawables.count;
            this._userMultiplyColors.prepareCapacity(drawableCount);
            this._userScreenColors.prepareCapacity(drawableCount);
            // カリング設定
            this._userCullings.prepareCapacity(drawableCount);
            const userCulling = new DrawableCullingData(false, false);
            // Part
            {
                for(let i = 0; i < partCount; ++i){
                    const multiplyColor = new CubismTextureColor(1.0, 1.0, 1.0, 1.0);
                    const screenColor = new CubismTextureColor(0.0, 0.0, 0.0, 1.0);
                    const userMultiplyColor = new PartColorData(false, multiplyColor);
                    const userScreenColor = new PartColorData(false, screenColor);
                    this._userPartMultiplyColors.pushBack(userMultiplyColor);
                    this._userPartScreenColors.pushBack(userScreenColor);
                    this._partChildDrawables.pushBack(new csmVector());
                    this._partChildDrawables.at(i).prepareCapacity(drawableCount);
                }
            }
            // Drawables
            {
                for(let i = 0; i < drawableCount; ++i){
                    const multiplyColor = new CubismTextureColor(1.0, 1.0, 1.0, 1.0);
                    const screenColor = new CubismTextureColor(0.0, 0.0, 0.0, 1.0);
                    const userMultiplyColor = new DrawableColorData(false, multiplyColor);
                    const userScreenColor = new DrawableColorData(false, screenColor);
                    this._drawableIds.pushBack(CubismFramework.getIdManager().getId(drawableIds[i]));
                    this._userMultiplyColors.pushBack(userMultiplyColor);
                    this._userScreenColors.pushBack(userScreenColor);
                    this._userCullings.pushBack(userCulling);
                    const parentIndex = this.getDrawableParentPartIndex(i);
                    if (parentIndex >= 0) {
                        this._partChildDrawables.at(parentIndex).pushBack(i);
                    }
                }
            }
        }
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        this._model.release();
        this._model = null;
    }
    /**
   * コンストラクタ
   * @param model モデル
   */ constructor(model){
        (0,esm_define_property._)(this, "_notExistPartOpacities", void 0); // 存在していないパーツの不透明度のリスト
        (0,esm_define_property._)(this, "_notExistPartId", void 0); // 存在していないパーツIDのリスト
        (0,esm_define_property._)(this, "_notExistParameterValues", void 0); // 存在していないパラメータの値のリスト
        (0,esm_define_property._)(this, "_notExistParameterId", void 0); // 存在していないパラメータIDのリスト
        (0,esm_define_property._)(this, "_savedParameters", void 0); // 保存されたパラメータ
        /**
   * Flag to determine whether to override model-wide parameter repeats on the SDK
   */ (0,esm_define_property._)(this, "_isOverriddenParameterRepeat", void 0);
        (0,esm_define_property._)(this, "_isOverriddenModelMultiplyColors", void 0); // SDK上でモデル全体の乗算色を上書きするか判定するフラグ
        (0,esm_define_property._)(this, "_isOverriddenModelScreenColors", void 0); // SDK上でモデル全体のスクリーン色を上書きするか判定するフラグ
        /**
   * List to manage ParameterRepeat and Override flag to be set for each Parameter
   */ (0,esm_define_property._)(this, "_userParameterRepeatDataList", void 0);
        (0,esm_define_property._)(this, "_userMultiplyColors", void 0); // Drawableごとに設定する乗算色と上書きフラグを管理するリスト
        (0,esm_define_property._)(this, "_userScreenColors", void 0); // Drawableごとに設定するスクリーン色と上書きフラグを管理するリスト
        (0,esm_define_property._)(this, "_userPartScreenColors", void 0); // Part 乗算色の配列
        (0,esm_define_property._)(this, "_userPartMultiplyColors", void 0); // Part スクリーン色の配列
        (0,esm_define_property._)(this, "_partChildDrawables", void 0); // Partの子DrawableIndexの配列
        (0,esm_define_property._)(this, "_model", void 0); // モデル
        (0,esm_define_property._)(this, "_parameterValues", void 0); // パラメータの値のリスト
        (0,esm_define_property._)(this, "_parameterMaximumValues", void 0); // パラメータの最大値のリスト
        (0,esm_define_property._)(this, "_parameterMinimumValues", void 0); // パラメータの最小値のリスト
        (0,esm_define_property._)(this, "_partOpacities", void 0); // パーツの不透明度のリスト
        (0,esm_define_property._)(this, "_modelOpacity", void 0); // モデルの不透明度
        (0,esm_define_property._)(this, "_parameterIds", void 0);
        (0,esm_define_property._)(this, "_partIds", void 0);
        (0,esm_define_property._)(this, "_drawableIds", void 0);
        (0,esm_define_property._)(this, "_isOverriddenCullings", void 0); // モデルのカリング設定をすべて上書きするか？
        (0,esm_define_property._)(this, "_userCullings", void 0); // カリング設定の配列
        this._model = model;
        this._parameterValues = null;
        this._parameterMaximumValues = null;
        this._parameterMinimumValues = null;
        this._partOpacities = null;
        this._savedParameters = new csmVector();
        this._parameterIds = new csmVector();
        this._drawableIds = new csmVector();
        this._partIds = new csmVector();
        this._isOverriddenParameterRepeat = true;
        this._isOverriddenModelMultiplyColors = false;
        this._isOverriddenModelScreenColors = false;
        this._isOverriddenCullings = false;
        this._modelOpacity = 1.0;
        this._userParameterRepeatDataList = new csmVector();
        this._userMultiplyColors = new csmVector();
        this._userScreenColors = new csmVector();
        this._userCullings = new csmVector();
        this._userPartMultiplyColors = new csmVector();
        this._userPartScreenColors = new csmVector();
        this._partChildDrawables = new csmVector();
        this._notExistPartId = new csmMap();
        this._notExistParameterId = new csmMap();
        this._notExistParameterValues = new csmMap();
        this._notExistPartOpacities = new csmMap();
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismModel = CubismModel;
})(cubismmodel_Live2DCubismFramework || (cubismmodel_Live2DCubismFramework = {}));
var cubismmodel_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/model/cubismmoc.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 


/**
 * Mocデータの管理
 *
 * Mocデータの管理を行うクラス。
 */ class CubismMoc {
    /**
   * Mocデータの作成
   */ static create(mocBytes, shouldCheckMocConsistency) {
        let cubismMoc = null;
        if (shouldCheckMocConsistency) {
            // .moc3の整合性を確認
            const consistency = this.hasMocConsistency(mocBytes);
            if (!consistency) {
                // 整合性が確認できなければ処理しない
                CubismLogError(`Inconsistent MOC3.`);
                return cubismMoc;
            }
        }
        const moc = Live2DCubismCore.Moc.fromArrayBuffer(mocBytes);
        if (moc) {
            cubismMoc = new CubismMoc(moc);
            cubismMoc._mocVersion = Live2DCubismCore.Version.csmGetMocVersion(moc, mocBytes);
        }
        return cubismMoc;
    }
    /**
   * Mocデータを削除
   *
   * Mocデータを削除する
   */ static delete(moc) {
        moc._moc._release();
        moc._moc = null;
        moc = null;
    }
    /**
   * モデルを作成する
   *
   * @return Mocデータから作成されたモデル
   */ createModel() {
        let cubismModel = null;
        const model = Live2DCubismCore.Model.fromMoc(this._moc);
        if (model) {
            cubismModel = new CubismModel(model);
            cubismModel.initialize();
            ++this._modelCount;
        }
        return cubismModel;
    }
    /**
   * モデルを削除する
   */ deleteModel(model) {
        if (model != null) {
            model.release();
            model = null;
            --this._modelCount;
        }
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        CSM_ASSERT(this._modelCount == 0);
        this._moc._release();
        this._moc = null;
    }
    /**
   * 最新の.moc3 Versionを取得
   */ getLatestMocVersion() {
        return Live2DCubismCore.Version.csmGetLatestMocVersion();
    }
    /**
   * 読み込んだモデルの.moc3 Versionを取得
   */ getMocVersion() {
        return this._mocVersion;
    }
    /**
   * .moc3 の整合性を検証する
   */ static hasMocConsistency(mocBytes) {
        const isConsistent = Live2DCubismCore.Moc.prototype.hasMocConsistency(mocBytes);
        return isConsistent === 1 ? true : false;
    }
    /**
   * コンストラクタ
   */ constructor(moc){
        (0,esm_define_property._)(this, "_moc", void 0); // Mocデータ
        (0,esm_define_property._)(this, "_modelCount", void 0); // Mocデータから作られたモデルの個数
        (0,esm_define_property._)(this, "_mocVersion", void 0); // 読み込んだモデルの.moc3 Version
        this._moc = moc;
        this._modelCount = 0;
        this._mocVersion = 0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMoc = CubismMoc;
})(cubismmoc_Live2DCubismFramework || (cubismmoc_Live2DCubismFramework = {}));
var cubismmoc_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/effect/cubismpose.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 



const Epsilon = 0.001;
const DefaultFadeInSeconds = 0.5;
// Pose.jsonのタグ
const FadeIn = 'FadeInTime';
const Link = 'Link';
const Groups = 'Groups';
const Id = 'Id';
/**
 * パーツの不透明度の設定
 *
 * パーツの不透明度の管理と設定を行う。
 */ class CubismPose {
    /**
   * インスタンスの作成
   * @param pose3json pose3.jsonのデータ
   * @param size pose3.jsonのデータのサイズ[byte]
   * @return 作成されたインスタンス
   */ static create(pose3json, size) {
        const json = CubismJson.create(pose3json, size);
        if (!json) {
            return null;
        }
        const ret = new CubismPose();
        const root = json.getRoot();
        // フェード時間の指定
        if (!root.getValueByString(FadeIn).isNull()) {
            ret._fadeTimeSeconds = root.getValueByString(FadeIn).toFloat(DefaultFadeInSeconds);
            if (ret._fadeTimeSeconds < 0.0) {
                ret._fadeTimeSeconds = DefaultFadeInSeconds;
            }
        }
        // パーツグループ
        const poseListInfo = root.getValueByString(Groups);
        const poseCount = poseListInfo.getSize();
        for(let poseIndex = 0; poseIndex < poseCount; ++poseIndex){
            const idListInfo = poseListInfo.getValueByIndex(poseIndex);
            const idCount = idListInfo.getSize();
            let groupCount = 0;
            for(let groupIndex = 0; groupIndex < idCount; ++groupIndex){
                const partInfo = idListInfo.getValueByIndex(groupIndex);
                const partData = new PartData();
                const parameterId = CubismFramework.getIdManager().getId(partInfo.getValueByString(Id).getRawString());
                partData.partId = parameterId;
                // リンクするパーツの設定
                if (!partInfo.getValueByString(Link).isNull()) {
                    const linkListInfo = partInfo.getValueByString(Link);
                    const linkCount = linkListInfo.getSize();
                    for(let linkIndex = 0; linkIndex < linkCount; ++linkIndex){
                        const linkPart = new PartData();
                        const linkId = CubismFramework.getIdManager().getId(linkListInfo.getValueByIndex(linkIndex).getString());
                        linkPart.partId = linkId;
                        partData.link.pushBack(linkPart);
                    }
                }
                ret._partGroups.pushBack(partData.clone());
                ++groupCount;
            }
            ret._partGroupCounts.pushBack(groupCount);
        }
        CubismJson["delete"](json);
        return ret;
    }
    /**
   * インスタンスを破棄する
   * @param pose 対象のCubismPose
   */ static delete(pose) {
        if (pose != null) {
            pose = null;
        }
    }
    /**
   * モデルのパラメータの更新
   * @param model 対象のモデル
   * @param deltaTimeSeconds デルタ時間[秒]
   */ updateParameters(model, deltaTimeSeconds) {
        // 前回のモデルと同じでない場合は初期化が必要
        if (model != this._lastModel) {
            // パラメータインデックスの初期化
            this.reset(model);
        }
        this._lastModel = model;
        // 設定から時間を変更すると、経過時間がマイナスになる事があるので、経過時間0として対応
        if (deltaTimeSeconds < 0.0) {
            deltaTimeSeconds = 0.0;
        }
        let beginIndex = 0;
        for(let i = 0; i < this._partGroupCounts.getSize(); i++){
            const partGroupCount = this._partGroupCounts.at(i);
            this.doFade(model, deltaTimeSeconds, beginIndex, partGroupCount);
            beginIndex += partGroupCount;
        }
        this.copyPartOpacities(model);
    }
    /**
   * 表示を初期化
   * @param model 対象のモデル
   * @note 不透明度の初期値が0でないパラメータは、不透明度を１に設定する
   */ reset(model) {
        let beginIndex = 0;
        for(let i = 0; i < this._partGroupCounts.getSize(); ++i){
            const groupCount = this._partGroupCounts.at(i);
            for(let j = beginIndex; j < beginIndex + groupCount; ++j){
                this._partGroups.at(j).initialize(model);
                const partsIndex = this._partGroups.at(j).partIndex;
                const paramIndex = this._partGroups.at(j).parameterIndex;
                if (partsIndex < 0) {
                    continue;
                }
                model.setPartOpacityByIndex(partsIndex, j == beginIndex ? 1.0 : 0.0);
                model.setParameterValueByIndex(paramIndex, j == beginIndex ? 1.0 : 0.0);
                for(let k = 0; k < this._partGroups.at(j).link.getSize(); ++k){
                    this._partGroups.at(j).link.at(k).initialize(model);
                }
            }
            beginIndex += groupCount;
        }
    }
    /**
   * パーツの不透明度をコピー
   *
   * @param model 対象のモデル
   */ copyPartOpacities(model) {
        for(let groupIndex = 0; groupIndex < this._partGroups.getSize(); ++groupIndex){
            const partData = this._partGroups.at(groupIndex);
            if (partData.link.getSize() == 0) {
                continue; // 連動するパラメータはない
            }
            const partIndex = this._partGroups.at(groupIndex).partIndex;
            const opacity = model.getPartOpacityByIndex(partIndex);
            for(let linkIndex = 0; linkIndex < partData.link.getSize(); ++linkIndex){
                const linkPart = partData.link.at(linkIndex);
                const linkPartIndex = linkPart.partIndex;
                if (linkPartIndex < 0) {
                    continue;
                }
                model.setPartOpacityByIndex(linkPartIndex, opacity);
            }
        }
    }
    /**
   * パーツのフェード操作を行う。
   * @param model 対象のモデル
   * @param deltaTimeSeconds デルタ時間[秒]
   * @param beginIndex フェード操作を行うパーツグループの先頭インデックス
   * @param partGroupCount フェード操作を行うパーツグループの個数
   */ doFade(model, deltaTimeSeconds, beginIndex, partGroupCount) {
        let visiblePartIndex = -1;
        let newOpacity = 1.0;
        const phi = 0.5;
        const backOpacityThreshold = 0.15;
        // 現在、表示状態になっているパーツを取得
        for(let i = beginIndex; i < beginIndex + partGroupCount; ++i){
            const partIndex = this._partGroups.at(i).partIndex;
            const paramIndex = this._partGroups.at(i).parameterIndex;
            if (model.getParameterValueByIndex(paramIndex) > Epsilon) {
                if (visiblePartIndex >= 0) {
                    break;
                }
                visiblePartIndex = i;
                // ゼロ除算の回避
                if (this._fadeTimeSeconds == 0) {
                    newOpacity = 1.0;
                    continue;
                }
                newOpacity = model.getPartOpacityByIndex(partIndex);
                // 新しい不透明度を計算
                newOpacity += deltaTimeSeconds / this._fadeTimeSeconds;
                if (newOpacity > 1.0) {
                    newOpacity = 1.0;
                }
            }
        }
        if (visiblePartIndex < 0) {
            visiblePartIndex = 0;
            newOpacity = 1.0;
        }
        // 表示パーツ、非表示パーツの不透明度を設定する
        for(let i = beginIndex; i < beginIndex + partGroupCount; ++i){
            const partsIndex = this._partGroups.at(i).partIndex;
            // 表示パーツの設定
            if (visiblePartIndex == i) {
                model.setPartOpacityByIndex(partsIndex, newOpacity); // 先に設定
            } else {
                let opacity = model.getPartOpacityByIndex(partsIndex);
                let a1; // 計算によって求められる不透明度
                if (newOpacity < phi) {
                    a1 = newOpacity * (phi - 1) / phi + 1.0; // (0,1),(phi,phi)を通る直線式
                } else {
                    a1 = (1 - newOpacity) * phi / (1.0 - phi); // (1,0),(phi,phi)を通る直線式
                }
                // 背景の見える割合を制限する場合
                const backOpacity = (1.0 - a1) * (1.0 - newOpacity);
                if (backOpacity > backOpacityThreshold) {
                    a1 = 1.0 - backOpacityThreshold / (1.0 - newOpacity);
                }
                if (opacity > a1) {
                    opacity = a1; // 計算の不透明度よりも大きければ（濃ければ）不透明度を上げる
                }
                model.setPartOpacityByIndex(partsIndex, opacity);
            }
        }
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_partGroups", void 0); // パーツグループ
        (0,esm_define_property._)(this, "_partGroupCounts", void 0); // それぞれのパーツグループの個数
        (0,esm_define_property._)(this, "_fadeTimeSeconds", void 0); // フェード時間[秒]
        (0,esm_define_property._)(this, "_lastModel", void 0); // 前回操作したモデル
        this._fadeTimeSeconds = DefaultFadeInSeconds;
        this._lastModel = null;
        this._partGroups = new csmVector();
        this._partGroupCounts = new csmVector();
    }
}
/**
 * パーツにまつわるデータを管理
 */ class PartData {
    /**
   * =演算子のオーバーロード
   */ assignment(v) {
        this.partId = v.partId;
        for(const ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()){
            this.link.pushBack(ite.ptr().clone());
        }
        return this;
    }
    /**
   * 初期化
   * @param model 初期化に使用するモデル
   */ initialize(model) {
        this.parameterIndex = model.getParameterIndex(this.partId);
        this.partIndex = model.getPartIndex(this.partId);
        model.setParameterValueByIndex(this.parameterIndex, 1);
    }
    /**
   * オブジェクトのコピーを生成する
   */ clone() {
        const clonePartData = new PartData();
        clonePartData.partId = this.partId;
        clonePartData.parameterIndex = this.parameterIndex;
        clonePartData.partIndex = this.partIndex;
        clonePartData.link = new csmVector();
        for(let ite = this.link.begin(); ite.notEqual(this.link.end()); ite.increment()){
            clonePartData.link.pushBack(ite.ptr().clone());
        }
        return clonePartData;
    }
    /**
   * コンストラクタ
   */ constructor(v){
        (0,esm_define_property._)(this, "partId", void 0); // パーツID
        (0,esm_define_property._)(this, "parameterIndex", void 0); // パラメータのインデックス
        (0,esm_define_property._)(this, "partIndex", void 0); // パーツのインデックス
        (0,esm_define_property._)(this, "link", void 0); // 連動するパラメータ
        this.parameterIndex = 0;
        this.partIndex = 0;
        this.link = new csmVector();
        if (v != undefined) {
            this.partId = v.partId;
            for(const ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()){
                this.link.pushBack(ite.ptr().clone());
            }
        }
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismPose = CubismPose;
    Live2DCubismFramework.PartData = PartData;
})(cubismpose_Live2DCubismFramework || (cubismpose_Live2DCubismFramework = {}));
var cubismpose_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/math/cubismmodelmatrix.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * モデル座標設定用の4x4行列
 *
 * モデル座標設定用の4x4行列クラス
 */ class CubismModelMatrix extends CubismMatrix44 {
    /**
   * 横幅を設定
   *
   * @param w 横幅
   */ setWidth(w) {
        const scaleX = w / this._width;
        const scaleY = scaleX;
        this.scale(scaleX, scaleY);
    }
    /**
   * 縦幅を設定
   * @param h 縦幅
   */ setHeight(h) {
        const scaleX = h / this._height;
        const scaleY = scaleX;
        this.scale(scaleX, scaleY);
    }
    /**
   * 位置を設定
   *
   * @param x X軸の位置
   * @param y Y軸の位置
   */ setPosition(x, y) {
        this.translate(x, y);
    }
    /**
   * 中心位置を設定
   *
   * @param x X軸の中心位置
   * @param y Y軸の中心位置
   *
   * @note widthかheightを設定したあとでないと、拡大率が正しく取得できないためずれる。
   */ setCenterPosition(x, y) {
        this.centerX(x);
        this.centerY(y);
    }
    /**
   * 上辺の位置を設定する
   *
   * @param y 上辺のY軸位置
   */ top(y) {
        this.setY(y);
    }
    /**
   * 下辺の位置を設定する
   *
   * @param y 下辺のY軸位置
   */ bottom(y) {
        const h = this._height * this.getScaleY();
        this.translateY(y - h);
    }
    /**
   * 左辺の位置を設定
   *
   * @param x 左辺のX軸位置
   */ left(x) {
        this.setX(x);
    }
    /**
   * 右辺の位置を設定
   *
   * @param x 右辺のX軸位置
   */ right(x) {
        const w = this._width * this.getScaleX();
        this.translateX(x - w);
    }
    /**
   * X軸の中心位置を設定
   *
   * @param x X軸の中心位置
   */ centerX(x) {
        const w = this._width * this.getScaleX();
        this.translateX(x - w / 2.0);
    }
    /**
   * X軸の位置を設定
   *
   * @param x X軸の位置
   */ setX(x) {
        this.translateX(x);
    }
    /**
   * Y軸の中心位置を設定
   *
   * @param y Y軸の中心位置
   */ centerY(y) {
        const h = this._height * this.getScaleY();
        this.translateY(y - h / 2.0);
    }
    /**
   * Y軸の位置を設定する
   *
   * @param y Y軸の位置
   */ setY(y) {
        this.translateY(y);
    }
    /**
   * レイアウト情報から位置を設定
   *
   * @param layout レイアウト情報
   */ setupFromLayout(layout) {
        const keyWidth = 'width';
        const keyHeight = 'height';
        const keyX = 'x';
        const keyY = 'y';
        const keyCenterX = 'center_x';
        const keyCenterY = 'center_y';
        const keyTop = 'top';
        const keyBottom = 'bottom';
        const keyLeft = 'left';
        const keyRight = 'right';
        for(const ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()){
            const key = ite.ptr().first;
            const value = ite.ptr().second;
            if (key == keyWidth) {
                this.setWidth(value);
            } else if (key == keyHeight) {
                this.setHeight(value);
            }
        }
        for(const ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()){
            const key = ite.ptr().first;
            const value = ite.ptr().second;
            if (key == keyX) {
                this.setX(value);
            } else if (key == keyY) {
                this.setY(value);
            } else if (key == keyCenterX) {
                this.centerX(value);
            } else if (key == keyCenterY) {
                this.centerY(value);
            } else if (key == keyTop) {
                this.top(value);
            } else if (key == keyBottom) {
                this.bottom(value);
            } else if (key == keyLeft) {
                this.left(value);
            } else if (key == keyRight) {
                this.right(value);
            }
        }
    }
    /**
   * コンストラクタ
   *
   * @param w 横幅
   * @param h 縦幅
   */ constructor(w, h){
        super(), (0,esm_define_property._)(this, "_width", void 0 // 横幅
        ), (0,esm_define_property._)(this, "_height", void 0 // 縦幅
        );
        this._width = w !== undefined ? w : 0.0;
        this._height = h !== undefined ? h : 0.0;
        this.setHeight(2.0);
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelMatrix = CubismModelMatrix;
})(cubismmodelmatrix_Live2DCubismFramework || (cubismmodelmatrix_Live2DCubismFramework = {}));
var cubismmodelmatrix_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/math/cubismtargetpoint.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

const FrameRate = 30;
const cubismtargetpoint_Epsilon = 0.01;
/**
 * 顔の向きの制御機能
 *
 * 顔の向きの制御機能を提供するクラス。
 */ class CubismTargetPoint {
    /**
   * 更新処理
   */ update(deltaTimeSeconds) {
        // デルタ時間を加算する
        this._userTimeSeconds += deltaTimeSeconds;
        // 首を中央から左右に振るときの平均的な速さは 秒速度。加速・減速を考慮して、その２倍を最高速度とする
        // 顔の振り具合を、中央（0.0）から、左右は（+-1.0）とする
        const faceParamMaxV = 40.0 / 10.0; // 7.5秒間に40分移動(5.3/sc)
        const maxV = faceParamMaxV * 1.0 / FrameRate; // 1frameあたりに変化できる速度の上限
        if (this._lastTimeSeconds == 0.0) {
            this._lastTimeSeconds = this._userTimeSeconds;
            return;
        }
        const deltaTimeWeight = (this._userTimeSeconds - this._lastTimeSeconds) * FrameRate;
        this._lastTimeSeconds = this._userTimeSeconds;
        // 最高速度になるまでの時間を
        const timeToMaxSpeed = 0.15;
        const frameToMaxSpeed = timeToMaxSpeed * FrameRate; // sec * frame/sec
        const maxA = deltaTimeWeight * maxV / frameToMaxSpeed; // 1frameあたりの加速度
        // 目指す向きは、（dx, dy）方向のベクトルとなる
        const dx = this._faceTargetX - this._faceX;
        const dy = this._faceTargetY - this._faceY;
        if (CubismMath.abs(dx) <= cubismtargetpoint_Epsilon && CubismMath.abs(dy) <= cubismtargetpoint_Epsilon) {
            return; // 変化なし
        }
        // 速度の最大よりも大きい場合は、速度を落とす
        const d = CubismMath.sqrt(dx * dx + dy * dy);
        // 進行方向の最大速度ベクトル
        const vx = maxV * dx / d;
        const vy = maxV * dy / d;
        // 現在の速度から、新規速度への変化（加速度）を求める
        let ax = vx - this._faceVX;
        let ay = vy - this._faceVY;
        const a = CubismMath.sqrt(ax * ax + ay * ay);
        // 加速のとき
        if (a < -maxA || a > maxA) {
            ax *= maxA / a;
            ay *= maxA / a;
        }
        // 加速度を元の速度に足して、新速度とする
        this._faceVX += ax;
        this._faceVY += ay;
        // 目的の方向に近づいたとき、滑らかに減速するための処理
        // 設定された加速度で止まる事の出来る距離と速度の関係から
        // 現在とりうる最高速度を計算し、それ以上の時は速度を落とす
        // ※本来、人間は筋力で力（加速度）を調整できるため、より自由度が高いが、簡単な処理で済ませている
        {
            // 加速度、速度、距離の関係式。
            //            2  6           2               3
            //      sqrt(a  t  + 16 a h t  - 8 a h) - a t
            // v = --------------------------------------
            //                    2
            //                 4 t  - 2
            // (t=1)
            // 	時刻tは、あらかじめ加速度、速度を1/60(フレームレート、単位なし)で
            // 	考えているので、t＝１として消してよい（※未検証）
            const maxV = 0.5 * (CubismMath.sqrt(maxA * maxA + 16.0 * maxA * d - 8.0 * maxA * d) - maxA);
            const curV = CubismMath.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
            if (curV > maxV) {
                // 現在の速度 > 最高速度のとき、最高速度まで減速
                this._faceVX *= maxV / curV;
                this._faceVY *= maxV / curV;
            }
        }
        this._faceX += this._faceVX;
        this._faceY += this._faceVY;
    }
    /**
   * X軸の顔の向きの値を取得
   *
   * @return X軸の顔の向きの値（-1.0 ~ 1.0）
   */ getX() {
        return this._faceX;
    }
    /**
   * Y軸の顔の向きの値を取得
   *
   * @return Y軸の顔の向きの値（-1.0 ~ 1.0）
   */ getY() {
        return this._faceY;
    }
    /**
   * 顔の向きの目標値を設定
   *
   * @param x X軸の顔の向きの値（-1.0 ~ 1.0）
   * @param y Y軸の顔の向きの値（-1.0 ~ 1.0）
   */ set(x, y) {
        this._faceTargetX = x;
        this._faceTargetY = y;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_faceTargetX", void 0); // 顔の向きのX目標値（この値に近づいていく）
        (0,esm_define_property._)(this, "_faceTargetY", void 0); // 顔の向きのY目標値（この値に近づいていく）
        (0,esm_define_property._)(this, "_faceX", void 0); // 顔の向きX（-1.0 ~ 1.0）
        (0,esm_define_property._)(this, "_faceY", void 0); // 顔の向きY（-1.0 ~ 1.0）
        (0,esm_define_property._)(this, "_faceVX", void 0); // 顔の向きの変化速度X
        (0,esm_define_property._)(this, "_faceVY", void 0); // 顔の向きの変化速度Y
        (0,esm_define_property._)(this, "_lastTimeSeconds", void 0); // 最後の実行時間[秒]
        (0,esm_define_property._)(this, "_userTimeSeconds", void 0); // デルタ時間の積算値[秒]
        this._faceTargetX = 0.0;
        this._faceTargetY = 0.0;
        this._faceX = 0.0;
        this._faceY = 0.0;
        this._faceVX = 0.0;
        this._faceVY = 0.0;
        this._lastTimeSeconds = 0.0;
        this._userTimeSeconds = 0.0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismTargetPoint = CubismTargetPoint;
})(cubismtargetpoint_Live2DCubismFramework || (cubismtargetpoint_Live2DCubismFramework = {}));
var cubismtargetpoint_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismexpressionmotion.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 




// exp3.jsonのキーとデフォルト
const ExpressionKeyFadeIn = 'FadeInTime';
const ExpressionKeyFadeOut = 'FadeOutTime';
const ExpressionKeyParameters = 'Parameters';
const ExpressionKeyId = 'Id';
const ExpressionKeyValue = 'Value';
const ExpressionKeyBlend = 'Blend';
const BlendValueAdd = 'Add';
const BlendValueMultiply = 'Multiply';
const BlendValueOverwrite = 'Overwrite';
const DefaultFadeTime = 1.0;
/**
 * 表情のモーション
 *
 * 表情のモーションクラス。
 */ class CubismExpressionMotion extends ACubismMotion {
    /**
   * インスタンスを作成する。
   * @param buffer expファイルが読み込まれているバッファ
   * @param size バッファのサイズ
   * @return 作成されたインスタンス
   */ static create(buffer, size) {
        const expression = new CubismExpressionMotion();
        expression.parse(buffer, size);
        return expression;
    }
    /**
   * モデルのパラメータの更新の実行
   * @param model 対象のモデル
   * @param userTimeSeconds デルタ時間の積算値[秒]
   * @param weight モーションの重み
   * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
   */ doUpdateParameters(model, userTimeSeconds, weight, motionQueueEntry) {
        for(let i = 0; i < this._parameters.getSize(); ++i){
            const parameter = this._parameters.at(i);
            switch(parameter.blendType){
                case 0:
                    {
                        model.addParameterValueById(parameter.parameterId, parameter.value, weight);
                        break;
                    }
                case 1:
                    {
                        model.multiplyParameterValueById(parameter.parameterId, parameter.value, weight);
                        break;
                    }
                case 2:
                    {
                        model.setParameterValueById(parameter.parameterId, parameter.value, weight);
                        break;
                    }
                default:
                    break;
            }
        }
    }
    /**
   * @brief 表情によるモデルのパラメータの計算
   *
   * モデルの表情に関するパラメータを計算する。
   *
   * @param[in]   model                        対象のモデル
   * @param[in]   userTimeSeconds              デルタ時間の積算値[秒]
   * @param[in]   motionQueueEntry             CubismMotionQueueManagerで管理されているモーション
   * @param[in]   expressionParameterValues    モデルに適用する各パラメータの値
   * @param[in]   expressionIndex              表情のインデックス
   * @param[in]   fadeWeight                   表情のウェイト
   */ calculateExpressionParameters(model, userTimeSeconds, motionQueueEntry, expressionParameterValues, expressionIndex, fadeWeight) {
        if (motionQueueEntry == null || expressionParameterValues == null) {
            return;
        }
        if (!motionQueueEntry.isAvailable()) {
            return;
        }
        // CubismExpressionMotion._fadeWeight は廃止予定です。
        // 互換性のために処理は残りますが、実際には使用しておりません。
        this._fadeWeight = this.updateFadeWeight(motionQueueEntry, userTimeSeconds);
        // モデルに適用する値を計算
        for(let i = 0; i < expressionParameterValues.getSize(); ++i){
            const expressionParameterValue = expressionParameterValues.at(i);
            if (expressionParameterValue.parameterId == null) {
                continue;
            }
            const currentParameterValue = expressionParameterValue.overwriteValue = model.getParameterValueById(expressionParameterValue.parameterId);
            const expressionParameters = this.getExpressionParameters();
            let parameterIndex = -1;
            for(let j = 0; j < expressionParameters.getSize(); ++j){
                if (expressionParameterValue.parameterId != expressionParameters.at(j).parameterId) {
                    continue;
                }
                parameterIndex = j;
                break;
            }
            // 再生中のExpressionが参照していないパラメータは初期値を適用
            if (parameterIndex < 0) {
                if (expressionIndex == 0) {
                    expressionParameterValue.additiveValue = CubismExpressionMotion.DefaultAdditiveValue;
                    expressionParameterValue.multiplyValue = CubismExpressionMotion.DefaultMultiplyValue;
                    expressionParameterValue.overwriteValue = currentParameterValue;
                } else {
                    expressionParameterValue.additiveValue = this.calculateValue(expressionParameterValue.additiveValue, CubismExpressionMotion.DefaultAdditiveValue, fadeWeight);
                    expressionParameterValue.multiplyValue = this.calculateValue(expressionParameterValue.multiplyValue, CubismExpressionMotion.DefaultMultiplyValue, fadeWeight);
                    expressionParameterValue.overwriteValue = this.calculateValue(expressionParameterValue.overwriteValue, currentParameterValue, fadeWeight);
                }
                continue;
            }
            // 値を計算
            const value = expressionParameters.at(parameterIndex).value;
            let newAdditiveValue, newMultiplyValue, newOverwriteValue;
            switch(expressionParameters.at(parameterIndex).blendType){
                case 0:
                    newAdditiveValue = value;
                    newMultiplyValue = CubismExpressionMotion.DefaultMultiplyValue;
                    newOverwriteValue = currentParameterValue;
                    break;
                case 1:
                    newAdditiveValue = CubismExpressionMotion.DefaultAdditiveValue;
                    newMultiplyValue = value;
                    newOverwriteValue = currentParameterValue;
                    break;
                case 2:
                    newAdditiveValue = CubismExpressionMotion.DefaultAdditiveValue;
                    newMultiplyValue = CubismExpressionMotion.DefaultMultiplyValue;
                    newOverwriteValue = value;
                    break;
                default:
                    return;
            }
            if (expressionIndex == 0) {
                expressionParameterValue.additiveValue = newAdditiveValue;
                expressionParameterValue.multiplyValue = newMultiplyValue;
                expressionParameterValue.overwriteValue = newOverwriteValue;
            } else {
                expressionParameterValue.additiveValue = expressionParameterValue.additiveValue * (1.0 - fadeWeight) + newAdditiveValue * fadeWeight;
                expressionParameterValue.multiplyValue = expressionParameterValue.multiplyValue * (1.0 - fadeWeight) + newMultiplyValue * fadeWeight;
                expressionParameterValue.overwriteValue = expressionParameterValue.overwriteValue * (1.0 - fadeWeight) + newOverwriteValue * fadeWeight;
            }
        }
    }
    /**
   * @brief 表情が参照しているパラメータを取得
   *
   * 表情が参照しているパラメータを取得する
   *
   * @return 表情パラメータ
   */ getExpressionParameters() {
        return this._parameters;
    }
    /**
   * @brief 表情のフェードの値を取得
   *
   * 現在の表情のフェードのウェイト値を取得する
   *
   * @returns 表情のフェードのウェイト値
   *
   * @deprecated CubismExpressionMotion.fadeWeightが削除予定のため非推奨。
   * CubismExpressionMotionManager.getFadeWeight(index: number): number を使用してください。
   * @see CubismExpressionMotionManager#getFadeWeight(index: number)
   */ getFadeWeight() {
        return this._fadeWeight;
    }
    parse(buffer, size) {
        const json = CubismJson.create(buffer, size);
        if (!json) {
            return;
        }
        const root = json.getRoot();
        this.setFadeInTime(root.getValueByString(ExpressionKeyFadeIn).toFloat(DefaultFadeTime)); // フェードイン
        this.setFadeOutTime(root.getValueByString(ExpressionKeyFadeOut).toFloat(DefaultFadeTime)); // フェードアウト
        // 各パラメータについて
        const parameterCount = root.getValueByString(ExpressionKeyParameters).getSize();
        this._parameters.prepareCapacity(parameterCount);
        for(let i = 0; i < parameterCount; ++i){
            const param = root.getValueByString(ExpressionKeyParameters).getValueByIndex(i);
            const parameterId = CubismFramework.getIdManager().getId(param.getValueByString(ExpressionKeyId).getRawString()); // パラメータID
            const value = param.getValueByString(ExpressionKeyValue).toFloat(); // 値
            // 計算方法の設定
            let blendType;
            if (param.getValueByString(ExpressionKeyBlend).isNull() || param.getValueByString(ExpressionKeyBlend).getString() == BlendValueAdd) {
                blendType = 0;
            } else if (param.getValueByString(ExpressionKeyBlend).getString() == BlendValueMultiply) {
                blendType = 1;
            } else if (param.getValueByString(ExpressionKeyBlend).getString() == BlendValueOverwrite) {
                blendType = 2;
            } else {
                // その他 仕様にない値を設定した時は加算モードにすることで復旧
                blendType = 0;
            }
            // 設定オブジェクトを作成してリストに追加する
            const item = new ExpressionParameter();
            item.parameterId = parameterId;
            item.blendType = blendType;
            item.value = value;
            this._parameters.pushBack(item);
        }
        CubismJson["delete"](json); // JSONデータは不要になったら削除する
    }
    /**
   * @brief ブレンド計算
   *
   * 入力された値でブレンド計算をする。
   *
   * @param source 現在の値
   * @param destination 適用する値
   * @param weight ウェイト
   * @returns 計算結果
   */ calculateValue(source, destination, fadeWeight) {
        return source * (1.0 - fadeWeight) + destination * fadeWeight;
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_parameters", void 0 // 表情のパラメータ情報リスト
        ), /**
   * 表情の現在のウェイト
   *
   * @deprecated 不具合を引き起こす要因となるため非推奨。
   */ (0,esm_define_property._)(this, "_fadeWeight", void 0);
        this._parameters = new csmVector();
        this._fadeWeight = 0.0;
    }
}
(0,esm_define_property._)(CubismExpressionMotion, "DefaultAdditiveValue", 0.0); // 加算適用の初期値
(0,esm_define_property._)(CubismExpressionMotion, "DefaultMultiplyValue", 1.0); // 乗算適用の初期値
/**
 * 表情パラメータ値の計算方式
 */ var cubismexpressionmotion_ExpressionBlendType = /*#__PURE__*/ function(ExpressionBlendType) {
    ExpressionBlendType[ExpressionBlendType["Additive"] = 0] = "Additive";
    ExpressionBlendType[ExpressionBlendType["Multiply"] = 1] = "Multiply";
    ExpressionBlendType[ExpressionBlendType["Overwrite"] = 2] = "Overwrite"; // 上書き
    return ExpressionBlendType;
}({});
/**
 * 表情のパラメータ情報
 */ class ExpressionParameter {
    constructor(){
        (0,esm_define_property._)(this, "parameterId", void 0); // パラメータID
        (0,esm_define_property._)(this, "blendType", void 0); // パラメータの演算種類
        (0,esm_define_property._)(this, "value", void 0); // 値
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismExpressionMotion = CubismExpressionMotion;
    Live2DCubismFramework.ExpressionBlendType = cubismexpressionmotion_ExpressionBlendType;
    Live2DCubismFramework.ExpressionParameter = ExpressionParameter;
})(cubismexpressionmotion_Live2DCubismFramework || (cubismexpressionmotion_Live2DCubismFramework = {}));
var cubismexpressionmotion_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismexpressionmotionmanager.ts






/**
 * @brief パラメータに適用する表情の値を持たせる構造体
 */ class ExpressionParameterValue {
    constructor(){
        (0,esm_define_property._)(this, "parameterId", void 0); // パラメーターID
        (0,esm_define_property._)(this, "additiveValue", void 0); // 加算値
        (0,esm_define_property._)(this, "multiplyValue", void 0); // 乗算値
        (0,esm_define_property._)(this, "overwriteValue", void 0); // 上書き値
    }
}
/**
 * @brief 表情モーションの管理
 *
 * 表情モーションの管理をおこなうクラス。
 */ class CubismExpressionMotionManager extends CubismMotionQueueManager {
    /**
   * デストラクタ相当の処理
   */ release() {
        if (this._expressionParameterValues) {
            csmDelete(this._expressionParameterValues);
            this._expressionParameterValues = null;
        }
        if (this._fadeWeights) {
            csmDelete(this._fadeWeights);
            this._fadeWeights = null;
        }
    }
    /**
   * @deprecated
   * ExpressionではPriorityを使用していないため、この関数は非推奨となりました。
   *
   * @brief 再生中のモーションの優先度の取得
   *
   * 再生中のモーションの優先度を取得する。
   *
   * @returns モーションの優先度
   */ getCurrentPriority() {
        CubismLogInfo('CubismExpressionMotionManager.getCurrentPriority() is deprecated because a priority value is not actually used during expression motion playback.');
        return this._currentPriority;
    }
    /**
   * @deprecated
   * ExpressionではPriorityを使用していないため、この関数は非推奨となりました。
   *
   * @brief 予約中のモーションの優先度の取得
   *
   * 予約中のモーションの優先度を取得する。
   *
   * @return  モーションの優先度
   */ getReservePriority() {
        CubismLogInfo('CubismExpressionMotionManager.getReservePriority() is deprecated because a priority value is not actually used during expression motion playback.');
        return this._reservePriority;
    }
    /**
   * @brief 再生中のモーションのウェイトを取得する。
   *
   * @param[in]    index    表情のインデックス
   * @returns               表情モーションのウェイト
   */ getFadeWeight(index) {
        if (index < 0 || this._fadeWeights.getSize() < 1 || index >= this._fadeWeights.getSize()) {
            console.warn('Failed to get the fade weight value. The element at that index does not exist.');
            return -1;
        }
        return this._fadeWeights.at(index);
    }
    /**
   * @brief モーションのウェイトの設定。
   *
   * @param[in]    index    表情のインデックス
   * @param[in]    index    表情モーションのウェイト
   */ setFadeWeight(index, expressionFadeWeight) {
        if (index < 0 || this._fadeWeights.getSize() < 1 || this._fadeWeights.getSize() <= index) {
            console.warn('Failed to set the fade weight value. The element at that index does not exist.');
            return;
        }
        this._fadeWeights.set(index, expressionFadeWeight);
    }
    /**
   * @deprecated
   * ExpressionではPriorityを使用していないため、この関数は非推奨となりました。
   *
   * @brief 予約中のモーションの優先度の設定
   *
   * 予約中のモーションの優先度を設定する。
   *
   * @param[in]   priority     優先度
   */ setReservePriority(priority) {
        CubismLogInfo('CubismExpressionMotionManager.setReservePriority() is deprecated because a priority value is not actually used during expression motion playback.');
        this._reservePriority = priority;
    }
    /**
   * @deprecated
   * ExpressionではPriorityを使用していないため、この関数は非推奨となりました。
   * CubismExpressionMotionManager.startMotion() を使用してください。
   *
   * @brief 優先度を設定してモーションの開始
   *
   * 優先度を設定してモーションを開始する。
   *
   * @param[in]   motion          モーション
   * @param[in]   autoDelete      再生が終了したモーションのインスタンスを削除するならtrue
   * @param[in]   priority        優先度
   * @return                      開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
   */ startMotionPriority(motion, autoDelete, priority) {
        CubismLogInfo('CubismExpressionMotionManager.startMotionPriority() is deprecated because a priority value is not actually used during expression motion playback.');
        if (priority == this.getReservePriority()) {
            this.setReservePriority(0);
        }
        this._currentPriority = priority;
        return this.startMotion(motion, autoDelete);
    }
    /**
   * @brief モーションの更新
   *
   * モーションを更新して、モデルにパラメータ値を反映する。
   *
   * @param[in]   model   対象のモデル
   * @param[in]   deltaTimeSeconds    デルタ時間[秒]
   * @retval  true    更新されている
   * @retval  false   更新されていない
   */ updateMotion(model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        let updated = false;
        const motions = this.getCubismMotionQueueEntries();
        let expressionWeight = 0.0;
        let expressionIndex = 0;
        if (this._fadeWeights.getSize() !== motions.getSize()) {
            const difference = motions.getSize() - this._fadeWeights.getSize();
            for(let i = 0; i < difference; i++){
                this._fadeWeights.pushBack(0.0);
            }
        }
        // ------- 処理を行う --------
        // 既にモーションがあれば終了フラグを立てる
        for(let ite = this._motions.begin(); ite.notEqual(this._motions.end());){
            const motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = motions.erase(ite); //削除
                continue;
            }
            const expressionMotion = motionQueueEntry.getCubismMotion();
            if (expressionMotion == null) {
                csmDelete(motionQueueEntry);
                ite = motions.erase(ite); //削除
                continue;
            }
            const expressionParameters = expressionMotion.getExpressionParameters();
            if (motionQueueEntry.isAvailable()) {
                // 再生中のExpressionが参照しているパラメータをすべてリストアップ
                for(let i = 0; i < expressionParameters.getSize(); ++i){
                    if (expressionParameters.at(i).parameterId == null) {
                        continue;
                    }
                    let index = -1;
                    // リストにパラメータIDが存在するか検索
                    for(let j = 0; j < this._expressionParameterValues.getSize(); ++j){
                        if (this._expressionParameterValues.at(j).parameterId != expressionParameters.at(i).parameterId) {
                            continue;
                        }
                        index = j;
                        break;
                    }
                    if (index >= 0) {
                        continue;
                    }
                    // パラメータがリストに存在しないなら新規追加
                    const item = new ExpressionParameterValue();
                    item.parameterId = expressionParameters.at(i).parameterId;
                    item.additiveValue = CubismExpressionMotion.DefaultAdditiveValue;
                    item.multiplyValue = CubismExpressionMotion.DefaultMultiplyValue;
                    item.overwriteValue = model.getParameterValueById(item.parameterId);
                    this._expressionParameterValues.pushBack(item);
                }
            }
            // ------ 値を計算する ------
            expressionMotion.setupMotionQueueEntry(motionQueueEntry, this._userTimeSeconds);
            this.setFadeWeight(expressionIndex, expressionMotion.updateFadeWeight(motionQueueEntry, this._userTimeSeconds));
            expressionMotion.calculateExpressionParameters(model, this._userTimeSeconds, motionQueueEntry, this._expressionParameterValues, expressionIndex, this.getFadeWeight(expressionIndex));
            expressionWeight += expressionMotion.getFadeInTime() == 0.0 ? 1.0 : CubismMath.getEasingSine((this._userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / expressionMotion.getFadeInTime());
            updated = true;
            if (motionQueueEntry.isTriggeredFadeOut()) {
                // フェードアウト開始
                motionQueueEntry.startFadeOut(motionQueueEntry.getFadeOutSeconds(), this._userTimeSeconds);
            }
            ite.preIncrement();
            ++expressionIndex;
        }
        // ----- 最新のExpressionのフェードが完了していればそれ以前を削除する ------
        if (motions.getSize() > 1) {
            const latestFadeWeight = this.getFadeWeight(this._fadeWeights.getSize() - 1);
            if (latestFadeWeight >= 1.0) {
                // 配列の最後の要素は削除しない
                for(let i = motions.getSize() - 2; i >= 0; --i){
                    const motionQueueEntry = motions.at(i);
                    csmDelete(motionQueueEntry);
                    motions.remove(i);
                    this._fadeWeights.remove(i);
                }
            }
        }
        if (expressionWeight > 1.0) {
            expressionWeight = 1.0;
        }
        // モデルに各値を適用
        for(let i = 0; i < this._expressionParameterValues.getSize(); ++i){
            const expressionParameterValue = this._expressionParameterValues.at(i);
            model.setParameterValueById(expressionParameterValue.parameterId, (expressionParameterValue.overwriteValue + expressionParameterValue.additiveValue) * expressionParameterValue.multiplyValue, expressionWeight);
            expressionParameterValue.additiveValue = CubismExpressionMotion.DefaultAdditiveValue;
            expressionParameterValue.multiplyValue = CubismExpressionMotion.DefaultMultiplyValue;
        }
        return updated;
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_expressionParameterValues", void 0 ///< モデルに適用する各パラメータの値
        ), (0,esm_define_property._)(this, "_fadeWeights", void 0 ///< 再生中の表情のウェイト
        ), (0,esm_define_property._)(this, "_currentPriority", void 0 ///< @deprecated 現在再生中のモーションの優先度。Expressionでは使用しないため非推奨。
        ), (0,esm_define_property._)(this, "_reservePriority", void 0 ///< @deprecated 再生予定のモーションの優先度。再生中は0になる。モーションファイルを別スレッドで読み込むときの機能。Expressionでは使用しないため非推奨。
        ), (0,esm_define_property._)(this, "_startExpressionTime", void 0 ///< 表情の再生開始時刻
        );
        this._currentPriority = 0;
        this._reservePriority = 0;
        this._expressionParameterValues = new csmVector();
        this._fadeWeights = new csmVector();
    }
}
// Namespace definition for compatibility.


(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismExpressionMotionManager = CubismExpressionMotionManager;
})(cubismexpressionmotionmanager_Live2DCubismFramework || (cubismexpressionmotionmanager_Live2DCubismFramework = {}));
var cubismexpressionmotionmanager_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismmotioninternal.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * @brief モーションカーブの種類
 *
 * モーションカーブの種類。
 */ var cubismmotioninternal_CubismMotionCurveTarget = /*#__PURE__*/ function(CubismMotionCurveTarget) {
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity"; // パーツの不透明度に対して
    return CubismMotionCurveTarget;
}({});
/**
 * @brief モーションカーブのセグメントの種類
 *
 * モーションカーブのセグメントの種類。
 */ var cubismmotioninternal_CubismMotionSegmentType = /*#__PURE__*/ function(CubismMotionSegmentType) {
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped"; // インバースステップ
    return CubismMotionSegmentType;
}({});
/**
 * @brief モーションカーブの制御点
 *
 * モーションカーブの制御点。
 */ class CubismMotionPoint {
    constructor(){
        (0,esm_define_property._)(this, "time", 0.0); // 時間[秒]
        (0,esm_define_property._)(this, "value", 0.0); // 値
    }
}
/**
 * @brief モーションカーブのセグメント
 *
 * モーションカーブのセグメント。
 */ class CubismMotionSegment {
    /**
   * @brief コンストラクタ
   *
   * コンストラクタ。
   */ constructor(){
        (0,esm_define_property._)(this, "evaluate", void 0); // 使用する評価関数
        (0,esm_define_property._)(this, "basePointIndex", void 0); // 最初のセグメントへのインデックス
        (0,esm_define_property._)(this, "segmentType", void 0); // セグメントの種類
        this.evaluate = null;
        this.basePointIndex = 0;
        this.segmentType = 0;
    }
}
/**
 * @brief モーションカーブ
 *
 * モーションカーブ。
 */ class CubismMotionCurve {
    constructor(){
        (0,esm_define_property._)(this, "type", void 0); // カーブの種類
        (0,esm_define_property._)(this, "id", void 0); // カーブのID
        (0,esm_define_property._)(this, "segmentCount", void 0); // セグメントの個数
        (0,esm_define_property._)(this, "baseSegmentIndex", void 0); // 最初のセグメントのインデックス
        (0,esm_define_property._)(this, "fadeInTime", void 0); // フェードインにかかる時間[秒]
        (0,esm_define_property._)(this, "fadeOutTime", void 0); // フェードアウトにかかる時間[秒]
        this.type = 0;
        this.segmentCount = 0;
        this.baseSegmentIndex = 0;
        this.fadeInTime = 0.0;
        this.fadeOutTime = 0.0;
    }
}
/**
 * イベント。
 */ class CubismMotionEvent {
    constructor(){
        (0,esm_define_property._)(this, "fireTime", 0.0);
        (0,esm_define_property._)(this, "value", void 0);
    }
}
/**
 * @brief モーションデータ
 *
 * モーションデータ。
 */ class CubismMotionData {
    constructor(){
        (0,esm_define_property._)(this, "duration", void 0); // モーションの長さ[秒]
        (0,esm_define_property._)(this, "loop", void 0); // ループするかどうか
        (0,esm_define_property._)(this, "curveCount", void 0); // カーブの個数
        (0,esm_define_property._)(this, "eventCount", void 0); // UserDataの個数
        (0,esm_define_property._)(this, "fps", void 0); // フレームレート
        (0,esm_define_property._)(this, "curves", void 0); // カーブのリスト
        (0,esm_define_property._)(this, "segments", void 0); // セグメントのリスト
        (0,esm_define_property._)(this, "points", void 0); // ポイントのリスト
        (0,esm_define_property._)(this, "events", void 0); // イベントのリスト
        this.duration = 0.0;
        this.loop = false;
        this.curveCount = 0;
        this.eventCount = 0;
        this.fps = 0.0;
        this.curves = new csmVector();
        this.segments = new csmVector();
        this.points = new csmVector();
        this.events = new csmVector();
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionCurve = CubismMotionCurve;
    Live2DCubismFramework.CubismMotionCurveTarget = cubismmotioninternal_CubismMotionCurveTarget;
    Live2DCubismFramework.CubismMotionData = CubismMotionData;
    Live2DCubismFramework.CubismMotionEvent = CubismMotionEvent;
    Live2DCubismFramework.CubismMotionPoint = CubismMotionPoint;
    Live2DCubismFramework.CubismMotionSegment = CubismMotionSegment;
    Live2DCubismFramework.CubismMotionSegmentType = cubismmotioninternal_CubismMotionSegmentType;
})(cubismmotioninternal_Live2DCubismFramework || (cubismmotioninternal_Live2DCubismFramework = {}));
var cubismmotioninternal_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismmotionjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 





// JSON keys
const Meta = 'Meta';
const Duration = 'Duration';
const Loop = 'Loop';
const AreBeziersRestricted = 'AreBeziersRestricted';
const CurveCount = 'CurveCount';
const Fps = 'Fps';
const TotalSegmentCount = 'TotalSegmentCount';
const TotalPointCount = 'TotalPointCount';
const Curves = 'Curves';
const Target = 'Target';
const cubismmotionjson_Id = 'Id';
const FadeInTime = 'FadeInTime';
const FadeOutTime = 'FadeOutTime';
const Segments = 'Segments';
const UserData = 'UserData';
const UserDataCount = 'UserDataCount';
const TotalUserDataSize = 'TotalUserDataSize';
const Time = 'Time';
const cubismmotionjson_Value = 'Value';
/**
 * motion3.jsonのコンテナ。
 */ class CubismMotionJson {
    /**
   * デストラクタ相当の処理
   */ release() {
        CubismJson["delete"](this._json);
    }
    /**
   * モーションの長さを取得する
   * @return モーションの長さ[秒]
   */ getMotionDuration() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(Duration).toFloat();
    }
    /**
   * モーションのループ情報の取得
   * @return true ループする
   * @return false ループしない
   */ isMotionLoop() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(Loop).toBoolean();
    }
    /**
   *  motion3.jsonファイルの整合性チェック
   *
   * @return 正常なファイルの場合はtrueを返す。
   */ hasConsistency() {
        let result = true;
        if (!this._json || !this._json.getRoot()) {
            return false;
        }
        const actualCurveListSize = this._json.getRoot().getValueByString(Curves).getVector().getSize();
        let actualTotalSegmentCount = 0;
        let actualTotalPointCount = 0;
        // カウント処理
        for(let curvePosition = 0; curvePosition < actualCurveListSize; ++curvePosition){
            for(let segmentPosition = 0; segmentPosition < this.getMotionCurveSegmentCount(curvePosition);){
                if (segmentPosition == 0) {
                    actualTotalPointCount += 1;
                    segmentPosition += 2;
                }
                const segment = this.getMotionCurveSegment(curvePosition, segmentPosition);
                switch(segment){
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Linear:
                        actualTotalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Bezier:
                        actualTotalPointCount += 3;
                        segmentPosition += 7;
                        break;
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Stepped:
                        actualTotalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped:
                        actualTotalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    default:
                        CSM_ASSERT(0);
                        break;
                }
                ++actualTotalSegmentCount;
            }
        }
        // 個数チェック
        if (actualCurveListSize != this.getMotionCurveCount()) {
            CubismLogWarning('The number of curves does not match the metadata.');
            result = false;
        }
        if (actualTotalSegmentCount != this.getMotionTotalSegmentCount()) {
            CubismLogWarning('The number of segment does not match the metadata.');
            result = false;
        }
        if (actualTotalPointCount != this.getMotionTotalPointCount()) {
            CubismLogWarning('The number of point does not match the metadata.');
            result = false;
        }
        return result;
    }
    getEvaluationOptionFlag(flagType) {
        if (0 == flagType) {
            return this._json.getRoot().getValueByString(Meta).getValueByString(AreBeziersRestricted).toBoolean();
        }
        return false;
    }
    /**
   * モーションカーブの個数の取得
   * @return モーションカーブの個数
   */ getMotionCurveCount() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(CurveCount).toInt();
    }
    /**
   * モーションのフレームレートの取得
   * @return フレームレート[FPS]
   */ getMotionFps() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(Fps).toFloat();
    }
    /**
   * モーションのセグメントの総合計の取得
   * @return モーションのセグメントの取得
   */ getMotionTotalSegmentCount() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(TotalSegmentCount).toInt();
    }
    /**
   * モーションのカーブの制御店の総合計の取得
   * @return モーションのカーブの制御点の総合計
   */ getMotionTotalPointCount() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(TotalPointCount).toInt();
    }
    /**
   * モーションのフェードイン時間の存在
   * @return true 存在する
   * @return false 存在しない
   */ isExistMotionFadeInTime() {
        return !this._json.getRoot().getValueByString(Meta).getValueByString(FadeInTime).isNull();
    }
    /**
   * モーションのフェードアウト時間の存在
   * @return true 存在する
   * @return false 存在しない
   */ isExistMotionFadeOutTime() {
        return !this._json.getRoot().getValueByString(Meta).getValueByString(FadeOutTime).isNull();
    }
    /**
   * モーションのフェードイン時間の取得
   * @return フェードイン時間[秒]
   */ getMotionFadeInTime() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(FadeInTime).toFloat();
    }
    /**
   * モーションのフェードアウト時間の取得
   * @return フェードアウト時間[秒]
   */ getMotionFadeOutTime() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(FadeOutTime).toFloat();
    }
    /**
   * モーションのカーブの種類の取得
   * @param curveIndex カーブのインデックス
   * @return カーブの種類
   */ getMotionCurveTarget(curveIndex) {
        return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Target).getRawString();
    }
    /**
   * モーションのカーブのIDの取得
   * @param curveIndex カーブのインデックス
   * @return カーブのID
   */ getMotionCurveId(curveIndex) {
        return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(cubismmotionjson_Id).getRawString());
    }
    /**
   * モーションのカーブのフェードイン時間の存在
   * @param curveIndex カーブのインデックス
   * @return true 存在する
   * @return false 存在しない
   */ isExistMotionCurveFadeInTime(curveIndex) {
        return !this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeInTime).isNull();
    }
    /**
   * モーションのカーブのフェードアウト時間の存在
   * @param curveIndex カーブのインデックス
   * @return true 存在する
   * @return false 存在しない
   */ isExistMotionCurveFadeOutTime(curveIndex) {
        return !this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeOutTime).isNull();
    }
    /**
   * モーションのカーブのフェードイン時間の取得
   * @param curveIndex カーブのインデックス
   * @return フェードイン時間[秒]
   */ getMotionCurveFadeInTime(curveIndex) {
        return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeInTime).toFloat();
    }
    /**
   * モーションのカーブのフェードアウト時間の取得
   * @param curveIndex カーブのインデックス
   * @return フェードアウト時間[秒]
   */ getMotionCurveFadeOutTime(curveIndex) {
        return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(FadeOutTime).toFloat();
    }
    /**
   * モーションのカーブのセグメントの個数を取得する
   * @param curveIndex カーブのインデックス
   * @return モーションのカーブのセグメントの個数
   */ getMotionCurveSegmentCount(curveIndex) {
        return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Segments).getVector().getSize();
    }
    /**
   * モーションのカーブのセグメントの値の取得
   * @param curveIndex カーブのインデックス
   * @param segmentIndex セグメントのインデックス
   * @return セグメントの値
   */ getMotionCurveSegment(curveIndex, segmentIndex) {
        return this._json.getRoot().getValueByString(Curves).getValueByIndex(curveIndex).getValueByString(Segments).getValueByIndex(segmentIndex).toFloat();
    }
    /**
   * イベントの個数の取得
   * @return イベントの個数
   */ getEventCount() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(UserDataCount).toInt();
    }
    /**
   *  イベントの総文字数の取得
   * @return イベントの総文字数
   */ getTotalEventValueSize() {
        return this._json.getRoot().getValueByString(Meta).getValueByString(TotalUserDataSize).toInt();
    }
    /**
   * イベントの時間の取得
   * @param userDataIndex イベントのインデックス
   * @return イベントの時間[秒]
   */ getEventTime(userDataIndex) {
        return this._json.getRoot().getValueByString(UserData).getValueByIndex(userDataIndex).getValueByString(Time).toFloat();
    }
    /**
   * イベントの取得
   * @param userDataIndex イベントのインデックス
   * @return イベントの文字列
   */ getEventValue(userDataIndex) {
        return new csmString(this._json.getRoot().getValueByString(UserData).getValueByIndex(userDataIndex).getValueByString(cubismmotionjson_Value).getRawString());
    }
    /**
   * コンストラクタ
   * @param buffer motion3.jsonが読み込まれているバッファ
   * @param size バッファのサイズ
   */ constructor(buffer, size){
        (0,esm_define_property._)(this, "_json", void 0); // motion3.jsonのデータ
        this._json = CubismJson.create(buffer, size);
    }
}
/**
 * @brief ベジェカーブの解釈方法のフラグタイプ
 */ var cubismmotionjson_EvaluationOptionFlag = /*#__PURE__*/ function(EvaluationOptionFlag) {
    EvaluationOptionFlag[EvaluationOptionFlag["EvaluationOptionFlag_AreBeziersRistricted"] = 0] = "EvaluationOptionFlag_AreBeziersRistricted"; ///< ベジェハンドルの規制状態
    return EvaluationOptionFlag;
}({});
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionJson = CubismMotionJson;
})(cubismmotionjson_Live2DCubismFramework || (cubismmotionjson_Live2DCubismFramework = {}));
var cubismmotionjson_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismmotion.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 







const EffectNameEyeBlink = 'EyeBlink';
const EffectNameLipSync = 'LipSync';
const TargetNameModel = 'Model';
const TargetNameParameter = 'Parameter';
const TargetNamePartOpacity = 'PartOpacity';
// Id
const IdNameOpacity = 'Opacity';
/**
 * Cubism SDK R2 以前のモーションを再現させるなら true 、アニメータのモーションを正しく再現するなら false 。
 */ const UseOldBeziersCurveMotion = false;
function lerpPoints(a, b, t) {
    const result = new CubismMotionPoint();
    result.time = a.time + (b.time - a.time) * t;
    result.value = a.value + (b.value - a.value) * t;
    return result;
}
function linearEvaluate(points, time) {
    let t = (time - points[0].time) / (points[1].time - points[0].time);
    if (t < 0.0) {
        t = 0.0;
    }
    return points[0].value + (points[1].value - points[0].value) * t;
}
function bezierEvaluate(points, time) {
    let t = (time - points[0].time) / (points[3].time - points[0].time);
    if (t < 0.0) {
        t = 0.0;
    }
    const p01 = lerpPoints(points[0], points[1], t);
    const p12 = lerpPoints(points[1], points[2], t);
    const p23 = lerpPoints(points[2], points[3], t);
    const p012 = lerpPoints(p01, p12, t);
    const p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function bezierEvaluateBinarySearch(points, time) {
    const xError = 0.01;
    const x = time;
    let x1 = points[0].time;
    let x2 = points[3].time;
    let cx1 = points[1].time;
    let cx2 = points[2].time;
    let ta = 0.0;
    let tb = 1.0;
    let t = 0.0;
    let i = 0;
    for(let var33 = true; i < 20; ++i){
        if (x < x1 + xError) {
            t = ta;
            break;
        }
        if (x2 - xError < x) {
            t = tb;
            break;
        }
        let centerx = (cx1 + cx2) * 0.5;
        cx1 = (x1 + cx1) * 0.5;
        cx2 = (x2 + cx2) * 0.5;
        const ctrlx12 = (cx1 + centerx) * 0.5;
        const ctrlx21 = (cx2 + centerx) * 0.5;
        centerx = (ctrlx12 + ctrlx21) * 0.5;
        if (x < centerx) {
            tb = (ta + tb) * 0.5;
            if (centerx - xError < x) {
                t = tb;
                break;
            }
            x2 = centerx;
            cx2 = ctrlx12;
        } else {
            ta = (ta + tb) * 0.5;
            if (x < centerx + xError) {
                t = ta;
                break;
            }
            x1 = centerx;
            cx1 = ctrlx21;
        }
    }
    if (i == 20) {
        t = (ta + tb) * 0.5;
    }
    if (t < 0.0) {
        t = 0.0;
    }
    if (t > 1.0) {
        t = 1.0;
    }
    const p01 = lerpPoints(points[0], points[1], t);
    const p12 = lerpPoints(points[1], points[2], t);
    const p23 = lerpPoints(points[2], points[3], t);
    const p012 = lerpPoints(p01, p12, t);
    const p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function bezierEvaluateCardanoInterpretation(points, time) {
    const x = time;
    const x1 = points[0].time;
    const x2 = points[3].time;
    const cx1 = points[1].time;
    const cx2 = points[2].time;
    const a = x2 - 3.0 * cx2 + 3.0 * cx1 - x1;
    const b = 3.0 * cx2 - 6.0 * cx1 + 3.0 * x1;
    const c = 3.0 * cx1 - 3.0 * x1;
    const d = x1 - x;
    const t = CubismMath.cardanoAlgorithmForBezier(a, b, c, d);
    const p01 = lerpPoints(points[0], points[1], t);
    const p12 = lerpPoints(points[1], points[2], t);
    const p23 = lerpPoints(points[2], points[3], t);
    const p012 = lerpPoints(p01, p12, t);
    const p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function steppedEvaluate(points, time) {
    return points[0].value;
}
function inverseSteppedEvaluate(points, time) {
    return points[1].value;
}
function evaluateCurve(motionData, index, time, isCorrection, endTime) {
    // Find segment to evaluate.
    const curve = motionData.curves.at(index);
    let target = -1;
    const totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
    let pointPosition = 0;
    for(let i = curve.baseSegmentIndex; i < totalSegmentCount; ++i){
        // Get first point of next segment.
        pointPosition = motionData.segments.at(i).basePointIndex + (motionData.segments.at(i).segmentType == cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Bezier ? 3 : 1);
        // Break if time lies within current segment.
        if (motionData.points.at(pointPosition).time > time) {
            target = i;
            break;
        }
    }
    if (target == -1) {
        if (isCorrection && time < endTime) {
            return correctEndPoint(motionData, totalSegmentCount - 1, motionData.segments.at(curve.baseSegmentIndex).basePointIndex, pointPosition, time, endTime);
        }
        return motionData.points.at(pointPosition).value;
    }
    const segment = motionData.segments.at(target);
    return segment.evaluate(motionData.points.get(segment.basePointIndex), time);
}
/**
 * 終点から始点への補正処理
 * @param motionData
 * @param segmentIndex
 * @param beginIndex
 * @param endIndex
 * @param time
 * @param endTime
 * @returns
 */ function correctEndPoint(motionData, segmentIndex, beginIndex, endIndex, time, endTime) {
    const motionPoint = [
        new CubismMotionPoint(),
        new CubismMotionPoint()
    ];
    {
        const src = motionData.points.at(endIndex);
        motionPoint[0].time = src.time;
        motionPoint[0].value = src.value;
    }
    {
        const src = motionData.points.at(beginIndex);
        motionPoint[1].time = endTime;
        motionPoint[1].value = src.value;
    }
    switch(motionData.segments.at(segmentIndex).segmentType){
        case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Linear:
        case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Bezier:
        default:
            return linearEvaluate(motionPoint, time);
        case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Stepped:
            return steppedEvaluate(motionPoint, time);
        case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped:
            return inverseSteppedEvaluate(motionPoint, time);
    }
}
/**
 * Enumerator for version control of Motion Behavior.
 * For details, see the SDK Manual.
 */ var cubismmotion_MotionBehavior = /*#__PURE__*/ (/* unused pure expression or super */ null && (function(MotionBehavior) {
    MotionBehavior[MotionBehavior["MotionBehavior_V1"] = 0] = "MotionBehavior_V1";
    MotionBehavior[MotionBehavior["MotionBehavior_V2"] = 1] = "MotionBehavior_V2";
    return MotionBehavior;
}({})));
/**
 * モーションクラス
 *
 * モーションのクラス。
 */ class CubismMotion extends ACubismMotion {
    /**
   * インスタンスを作成する
   *
   * @param buffer motion3.jsonが読み込まれているバッファ
   * @param size バッファのサイズ
   * @param onFinishedMotionHandler モーション再生終了時に呼び出されるコールバック関数
   * @param onBeganMotionHandler モーション再生開始時に呼び出されるコールバック関数
   * @param shouldCheckMotionConsistency motion3.json整合性チェックするかどうか
   * @return 作成されたインスタンス
   */ static create(buffer, size, onFinishedMotionHandler, onBeganMotionHandler) {
        let shouldCheckMotionConsistency = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        const ret = new CubismMotion();
        ret.parse(buffer, size, shouldCheckMotionConsistency);
        if (ret._motionData) {
            ret._sourceFrameRate = ret._motionData.fps;
            ret._loopDurationSeconds = ret._motionData.duration;
            ret._onFinishedMotion = onFinishedMotionHandler;
            ret._onBeganMotion = onBeganMotionHandler;
        } else {
            csmDelete(ret);
            return null;
        }
        // NOTE: Editorではループありのモーション書き出しは非対応
        // ret->_loop = (ret->_motionData->Loop > 0);
        return ret;
    }
    /**
   * モデルのパラメータの更新の実行
   * @param model             対象のモデル
   * @param userTimeSeconds   現在の時刻[秒]
   * @param fadeWeight        モーションの重み
   * @param motionQueueEntry  CubismMotionQueueManagerで管理されているモーション
   */ doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry) {
        if (this._modelCurveIdEyeBlink == null) {
            this._modelCurveIdEyeBlink = CubismFramework.getIdManager().getId(EffectNameEyeBlink);
        }
        if (this._modelCurveIdLipSync == null) {
            this._modelCurveIdLipSync = CubismFramework.getIdManager().getId(EffectNameLipSync);
        }
        if (this._modelCurveIdOpacity == null) {
            this._modelCurveIdOpacity = CubismFramework.getIdManager().getId(IdNameOpacity);
        }
        if (this._motionBehavior === 1) {
            if (this._previousLoopState !== this._isLoop) {
                // 終了時間を計算する
                this.adjustEndTime(motionQueueEntry);
                this._previousLoopState = this._isLoop;
            }
        }
        let timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
        if (timeOffsetSeconds < 0.0) {
            timeOffsetSeconds = 0.0; // エラー回避
        }
        let lipSyncValue = Number.MAX_VALUE;
        let eyeBlinkValue = Number.MAX_VALUE;
        //まばたき、リップシンクのうちモーションの適用を検出するためのビット（maxFlagCount個まで
        const maxTargetSize = 64;
        let lipSyncFlags = 0;
        let eyeBlinkFlags = 0;
        //瞬き、リップシンクのターゲット数が上限を超えている場合
        if (this._eyeBlinkParameterIds.getSize() > maxTargetSize) {
            CubismLogDebug('too many eye blink targets : {0}', this._eyeBlinkParameterIds.getSize());
        }
        if (this._lipSyncParameterIds.getSize() > maxTargetSize) {
            CubismLogDebug('too many lip sync targets : {0}', this._lipSyncParameterIds.getSize());
        }
        const tmpFadeIn = this._fadeInSeconds <= 0.0 ? 1.0 : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
        const tmpFadeOut = this._fadeOutSeconds <= 0.0 || motionQueueEntry.getEndTime() < 0.0 ? 1.0 : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
        let value;
        let c, parameterIndex;
        // 'Repeat' time as necessary.
        let time = timeOffsetSeconds;
        let duration = this._motionData.duration;
        const isCorrection = this._motionBehavior === 1 && this._isLoop;
        if (this._isLoop) {
            if (this._motionBehavior === 1) {
                duration += 1.0 / this._motionData.fps;
            }
            while(time > duration){
                time -= duration;
            }
        }
        const curves = this._motionData.curves;
        // Evaluate model curves.
        for(c = 0; c < this._motionData.curveCount && curves.at(c).type == cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c){
            // Evaluate curve and call handler.
            value = evaluateCurve(this._motionData, c, time, isCorrection, duration);
            if (curves.at(c).id == this._modelCurveIdEyeBlink) {
                eyeBlinkValue = value;
            } else if (curves.at(c).id == this._modelCurveIdLipSync) {
                lipSyncValue = value;
            } else if (curves.at(c).id == this._modelCurveIdOpacity) {
                this._modelOpacity = value;
                model.setModelOapcity(this.getModelOpacityValue());
            }
        }
        let parameterMotionCurveCount = 0;
        for(; c < this._motionData.curveCount && curves.at(c).type == cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c){
            parameterMotionCurveCount++;
            // Find parameter index.
            parameterIndex = model.getParameterIndex(curves.at(c).id);
            // Skip curve evaluation if no value in sink.
            if (parameterIndex == -1) {
                continue;
            }
            const sourceValue = model.getParameterValueByIndex(parameterIndex);
            // Evaluate curve and apply value.
            value = evaluateCurve(this._motionData, c, time, isCorrection, duration);
            if (eyeBlinkValue != Number.MAX_VALUE) {
                for(let i = 0; i < this._eyeBlinkParameterIds.getSize() && i < maxTargetSize; ++i){
                    if (this._eyeBlinkParameterIds.at(i) == curves.at(c).id) {
                        value *= eyeBlinkValue;
                        eyeBlinkFlags |= 1 << i;
                        break;
                    }
                }
            }
            if (lipSyncValue != Number.MAX_VALUE) {
                for(let i = 0; i < this._lipSyncParameterIds.getSize() && i < maxTargetSize; ++i){
                    if (this._lipSyncParameterIds.at(i) == curves.at(c).id) {
                        value += lipSyncValue;
                        lipSyncFlags |= 1 << i;
                        break;
                    }
                }
            }
            // Process "repeats only" for compatibility
            if (model.isRepeat(parameterIndex)) {
                value = model.getParameterRepeatValue(parameterIndex, value);
            }
            let v;
            // パラメータごとのフェード
            if (curves.at(c).fadeInTime < 0.0 && curves.at(c).fadeOutTime < 0.0) {
                // モーションのフェードを適用
                v = sourceValue + (value - sourceValue) * fadeWeight;
            } else {
                // パラメータに対してフェードインかフェードアウトが設定してある場合はそちらを適用
                let fin;
                let fout;
                if (curves.at(c).fadeInTime < 0.0) {
                    fin = tmpFadeIn;
                } else {
                    fin = curves.at(c).fadeInTime == 0.0 ? 1.0 : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / curves.at(c).fadeInTime);
                }
                if (curves.at(c).fadeOutTime < 0.0) {
                    fout = tmpFadeOut;
                } else {
                    fout = curves.at(c).fadeOutTime == 0.0 || motionQueueEntry.getEndTime() < 0.0 ? 1.0 : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / curves.at(c).fadeOutTime);
                }
                const paramWeight = this._weight * fin * fout;
                // パラメータごとのフェードを適用
                v = sourceValue + (value - sourceValue) * paramWeight;
            }
            model.setParameterValueByIndex(parameterIndex, v, 1.0);
        }
        {
            if (eyeBlinkValue != Number.MAX_VALUE) {
                for(let i = 0; i < this._eyeBlinkParameterIds.getSize() && i < maxTargetSize; ++i){
                    const sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds.at(i));
                    // モーションでの上書きがあった時にはまばたきは適用しない
                    if (eyeBlinkFlags >> i & 0x01) {
                        continue;
                    }
                    const v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
                    model.setParameterValueById(this._eyeBlinkParameterIds.at(i), v);
                }
            }
            if (lipSyncValue != Number.MAX_VALUE) {
                for(let i = 0; i < this._lipSyncParameterIds.getSize() && i < maxTargetSize; ++i){
                    const sourceValue = model.getParameterValueById(this._lipSyncParameterIds.at(i));
                    // モーションでの上書きがあった時にはリップシンクは適用しない
                    if (lipSyncFlags >> i & 0x01) {
                        continue;
                    }
                    const v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
                    model.setParameterValueById(this._lipSyncParameterIds.at(i), v);
                }
            }
        }
        for(; c < this._motionData.curveCount && curves.at(c).type == cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c){
            // Find parameter index.
            parameterIndex = model.getParameterIndex(curves.at(c).id);
            // Skip curve evaluation if no value in sink.
            if (parameterIndex == -1) {
                continue;
            }
            // Evaluate curve and apply value.
            value = evaluateCurve(this._motionData, c, time, isCorrection, duration);
            model.setParameterValueByIndex(parameterIndex, value);
        }
        if (timeOffsetSeconds >= duration) {
            if (this._isLoop) {
                this.updateForNextLoop(motionQueueEntry, userTimeSeconds, time);
            } else {
                if (this._onFinishedMotion) {
                    this._onFinishedMotion(this);
                }
                motionQueueEntry.setIsFinished(true);
            }
        }
        this._lastWeight = fadeWeight;
    }
    /**
   * ループ情報の設定
   * @param loop ループ情報
   */ setIsLoop(loop) {
        CubismLogWarning('setIsLoop() is a deprecated function. Please use setLoop().');
        this._isLoop = loop;
    }
    /**
   * ループ情報の取得
   * @return true ループする
   * @return false ループしない
   */ isLoop() {
        CubismLogWarning('isLoop() is a deprecated function. Please use getLoop().');
        return this._isLoop;
    }
    /**
   * ループ時のフェードイン情報の設定
   * @param loopFadeIn  ループ時のフェードイン情報
   */ setIsLoopFadeIn(loopFadeIn) {
        CubismLogWarning('setIsLoopFadeIn() is a deprecated function. Please use setLoopFadeIn().');
        this._isLoopFadeIn = loopFadeIn;
    }
    /**
   * ループ時のフェードイン情報の取得
   *
   * @return  true    する
   * @return  false   しない
   */ isLoopFadeIn() {
        CubismLogWarning('isLoopFadeIn() is a deprecated function. Please use getLoopFadeIn().');
        return this._isLoopFadeIn;
    }
    /**
   * Sets the version of the Motion Behavior.
   *
   * @param Specifies the version of the Motion Behavior.
   */ setMotionBehavior(motionBehavior) {
        this._motionBehavior = motionBehavior;
    }
    /**
   * Gets the version of the Motion Behavior.
   *
   * @return Returns the version of the Motion Behavior.
   */ getMotionBehavior() {
        return this._motionBehavior;
    }
    /**
   * モーションの長さを取得する。
   *
   * @return  モーションの長さ[秒]
   */ getDuration() {
        return this._isLoop ? -1.0 : this._loopDurationSeconds;
    }
    /**
   * モーションのループ時の長さを取得する。
   *
   * @return  モーションのループ時の長さ[秒]
   */ getLoopDuration() {
        return this._loopDurationSeconds;
    }
    /**
   * パラメータに対するフェードインの時間を設定する。
   *
   * @param parameterId     パラメータID
   * @param value           フェードインにかかる時間[秒]
   */ setParameterFadeInTime(parameterId, value) {
        const curves = this._motionData.curves;
        for(let i = 0; i < this._motionData.curveCount; ++i){
            if (parameterId == curves.at(i).id) {
                curves.at(i).fadeInTime = value;
                return;
            }
        }
    }
    /**
   * パラメータに対するフェードアウトの時間の設定
   * @param parameterId     パラメータID
   * @param value           フェードアウトにかかる時間[秒]
   */ setParameterFadeOutTime(parameterId, value) {
        const curves = this._motionData.curves;
        for(let i = 0; i < this._motionData.curveCount; ++i){
            if (parameterId == curves.at(i).id) {
                curves.at(i).fadeOutTime = value;
                return;
            }
        }
    }
    /**
   * パラメータに対するフェードインの時間の取得
   * @param    parameterId     パラメータID
   * @return   フェードインにかかる時間[秒]
   */ getParameterFadeInTime(parameterId) {
        const curves = this._motionData.curves;
        for(let i = 0; i < this._motionData.curveCount; ++i){
            if (parameterId == curves.at(i).id) {
                return curves.at(i).fadeInTime;
            }
        }
        return -1;
    }
    /**
   * パラメータに対するフェードアウトの時間を取得
   *
   * @param   parameterId     パラメータID
   * @return   フェードアウトにかかる時間[秒]
   */ getParameterFadeOutTime(parameterId) {
        const curves = this._motionData.curves;
        for(let i = 0; i < this._motionData.curveCount; ++i){
            if (parameterId == curves.at(i).id) {
                return curves.at(i).fadeOutTime;
            }
        }
        return -1;
    }
    /**
   * 自動エフェクトがかかっているパラメータIDリストの設定
   * @param eyeBlinkParameterIds    自動まばたきがかかっているパラメータIDのリスト
   * @param lipSyncParameterIds     リップシンクがかかっているパラメータIDのリスト
   */ setEffectIds(eyeBlinkParameterIds, lipSyncParameterIds) {
        this._eyeBlinkParameterIds = eyeBlinkParameterIds;
        this._lipSyncParameterIds = lipSyncParameterIds;
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        this._motionData = void 0;
        this._motionData = null;
    }
    /**
   *
   * @param motionQueueEntry
   * @param userTimeSeconds
   * @param time
   */ updateForNextLoop(motionQueueEntry, userTimeSeconds, time) {
        switch(this._motionBehavior){
            case 1:
            default:
                motionQueueEntry.setStartTime(userTimeSeconds - time); // 最初の状態へ
                if (this._isLoopFadeIn) {
                    // ループ中でループ用フェードインが有効のときは、フェードイン設定し直し
                    motionQueueEntry.setFadeInStartTime(userTimeSeconds - time);
                }
                if (this._onFinishedMotion != null) {
                    this._onFinishedMotion(this);
                }
                break;
            case 0:
                // 旧ループ処理
                motionQueueEntry.setStartTime(userTimeSeconds); // 最初の状態へ
                if (this._isLoopFadeIn) {
                    // ループ中でループ用フェードインが有効のときは、フェードイン設定し直し
                    motionQueueEntry.setFadeInStartTime(userTimeSeconds);
                }
                break;
        }
    }
    /**
   * motion3.jsonをパースする。
   *
   * @param motionJson  motion3.jsonが読み込まれているバッファ
   * @param size        バッファのサイズ
   * @param shouldCheckMotionConsistency motion3.json整合性チェックするかどうか
   */ parse(motionJson, size) {
        let shouldCheckMotionConsistency = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        let json = new CubismMotionJson(motionJson, size);
        if (!json) {
            json.release();
            json = void 0;
            return;
        }
        if (shouldCheckMotionConsistency) {
            const consistency = json.hasConsistency();
            if (!consistency) {
                json.release();
                CubismLogError('Inconsistent motion3.json.');
                return;
            }
        }
        this._motionData = new CubismMotionData();
        this._motionData.duration = json.getMotionDuration();
        this._motionData.loop = json.isMotionLoop();
        this._motionData.curveCount = json.getMotionCurveCount();
        this._motionData.fps = json.getMotionFps();
        this._motionData.eventCount = json.getEventCount();
        const areBeziersRestructed = json.getEvaluationOptionFlag(/* inlined export .EvaluationOptionFlag.EvaluationOptionFlag_AreBeziersRistricted */ (0));
        if (json.isExistMotionFadeInTime()) {
            this._fadeInSeconds = json.getMotionFadeInTime() < 0.0 ? 1.0 : json.getMotionFadeInTime();
        } else {
            this._fadeInSeconds = 1.0;
        }
        if (json.isExistMotionFadeOutTime()) {
            this._fadeOutSeconds = json.getMotionFadeOutTime() < 0.0 ? 1.0 : json.getMotionFadeOutTime();
        } else {
            this._fadeOutSeconds = 1.0;
        }
        this._motionData.curves.updateSize(this._motionData.curveCount, CubismMotionCurve, true);
        this._motionData.segments.updateSize(json.getMotionTotalSegmentCount(), CubismMotionSegment, true);
        this._motionData.points.updateSize(json.getMotionTotalPointCount(), CubismMotionPoint, true);
        this._motionData.events.updateSize(this._motionData.eventCount, CubismMotionEvent, true);
        let totalPointCount = 0;
        let totalSegmentCount = 0;
        // Curves
        for(let curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount){
            if (json.getMotionCurveTarget(curveCount) == TargetNameModel) {
                this._motionData.curves.at(curveCount).type = cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
            } else if (json.getMotionCurveTarget(curveCount) == TargetNameParameter) {
                this._motionData.curves.at(curveCount).type = cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
            } else if (json.getMotionCurveTarget(curveCount) == TargetNamePartOpacity) {
                this._motionData.curves.at(curveCount).type = cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
            } else {
                CubismLogWarning('Warning : Unable to get segment type from Curve! The number of "CurveCount" may be incorrect!');
            }
            this._motionData.curves.at(curveCount).id = json.getMotionCurveId(curveCount);
            this._motionData.curves.at(curveCount).baseSegmentIndex = totalSegmentCount;
            this._motionData.curves.at(curveCount).fadeInTime = json.isExistMotionCurveFadeInTime(curveCount) ? json.getMotionCurveFadeInTime(curveCount) : -1.0;
            this._motionData.curves.at(curveCount).fadeOutTime = json.isExistMotionCurveFadeOutTime(curveCount) ? json.getMotionCurveFadeOutTime(curveCount) : -1.0;
            // Segments
            for(let segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount);){
                if (segmentPosition == 0) {
                    this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount;
                    this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition);
                    this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                    totalPointCount += 1;
                    segmentPosition += 2;
                } else {
                    this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount - 1;
                }
                const segment = json.getMotionCurveSegment(curveCount, segmentPosition);
                const segmentType = segment;
                switch(segmentType){
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Linear:
                        {
                            this._motionData.segments.at(totalSegmentCount).segmentType = cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Linear;
                            this._motionData.segments.at(totalSegmentCount).evaluate = linearEvaluate;
                            this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                            this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                            totalPointCount += 1;
                            segmentPosition += 3;
                            break;
                        }
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Bezier:
                        {
                            this._motionData.segments.at(totalSegmentCount).segmentType = cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
                            if (areBeziersRestructed || UseOldBeziersCurveMotion) {
                                this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluate;
                            } else {
                                this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluateCardanoInterpretation;
                            }
                            this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                            this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                            this._motionData.points.at(totalPointCount + 1).time = json.getMotionCurveSegment(curveCount, segmentPosition + 3);
                            this._motionData.points.at(totalPointCount + 1).value = json.getMotionCurveSegment(curveCount, segmentPosition + 4);
                            this._motionData.points.at(totalPointCount + 2).time = json.getMotionCurveSegment(curveCount, segmentPosition + 5);
                            this._motionData.points.at(totalPointCount + 2).value = json.getMotionCurveSegment(curveCount, segmentPosition + 6);
                            totalPointCount += 3;
                            segmentPosition += 7;
                            break;
                        }
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Stepped:
                        {
                            this._motionData.segments.at(totalSegmentCount).segmentType = cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
                            this._motionData.segments.at(totalSegmentCount).evaluate = steppedEvaluate;
                            this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                            this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                            totalPointCount += 1;
                            segmentPosition += 3;
                            break;
                        }
                    case cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped:
                        {
                            this._motionData.segments.at(totalSegmentCount).segmentType = cubismmotioninternal_CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
                            this._motionData.segments.at(totalSegmentCount).evaluate = inverseSteppedEvaluate;
                            this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                            this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                            totalPointCount += 1;
                            segmentPosition += 3;
                            break;
                        }
                    default:
                        {
                            CSM_ASSERT(0);
                            break;
                        }
                }
                ++this._motionData.curves.at(curveCount).segmentCount;
                ++totalSegmentCount;
            }
        }
        for(let userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount){
            this._motionData.events.at(userdatacount).fireTime = json.getEventTime(userdatacount);
            this._motionData.events.at(userdatacount).value = json.getEventValue(userdatacount);
        }
        json.release();
        json = void 0;
        json = null;
    }
    /**
   * モデルのパラメータ更新
   *
   * イベント発火のチェック。
   * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
   *
   * @param beforeCheckTimeSeconds   前回のイベントチェック時間[秒]
   * @param motionTimeSeconds        今回の再生時間[秒]
   */ getFiredEvent(beforeCheckTimeSeconds, motionTimeSeconds) {
        this._firedEventValues.updateSize(0);
        // イベントの発火チェック
        for(let u = 0; u < this._motionData.eventCount; ++u){
            if (this._motionData.events.at(u).fireTime > beforeCheckTimeSeconds && this._motionData.events.at(u).fireTime <= motionTimeSeconds) {
                this._firedEventValues.pushBack(new csmString(this._motionData.events.at(u).value.s));
            }
        }
        return this._firedEventValues;
    }
    /**
   * 透明度のカーブが存在するかどうかを確認する
   *
   * @returns true  -> キーが存在する
   *          false -> キーが存在しない
   */ isExistModelOpacity() {
        for(let i = 0; i < this._motionData.curveCount; i++){
            const curve = this._motionData.curves.at(i);
            if (curve.type != cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Model) {
                continue;
            }
            if (curve.id.getString().s.localeCompare(IdNameOpacity) == 0) {
                return true;
            }
        }
        return false;
    }
    /**
   * 透明度のカーブのインデックスを返す
   *
   * @returns success:透明度のカーブのインデックス
   */ getModelOpacityIndex() {
        if (this.isExistModelOpacity()) {
            for(let i = 0; i < this._motionData.curveCount; i++){
                const curve = this._motionData.curves.at(i);
                if (curve.type != cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Model) {
                    continue;
                }
                if (curve.id.getString().s.localeCompare(IdNameOpacity) == 0) {
                    return i;
                }
            }
        }
        return -1;
    }
    /**
   * 透明度のIdを返す
   *
   * @param index モーションカーブのインデックス
   * @returns success:透明度のカーブのインデックス
   */ getModelOpacityId(index) {
        if (index != -1) {
            const curve = this._motionData.curves.at(index);
            if (curve.type == cubismmotioninternal_CubismMotionCurveTarget.CubismMotionCurveTarget_Model) {
                if (curve.id.getString().s.localeCompare(IdNameOpacity) == 0) {
                    return CubismFramework.getIdManager().getId(curve.id.getString().s);
                }
            }
        }
        return null;
    }
    /**
   * 現在時間の透明度の値を返す
   *
   * @returns success:モーションの当該時間におけるOpacityの値
   */ getModelOpacityValue() {
        return this._modelOpacity;
    }
    /**
   * デバッグ用フラグを設定する
   *
   * @param debugMode デバッグモードの有効・無効
   */ setDebugMode(debugMode) {
        this._debugMode = debugMode;
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_sourceFrameRate", void 0 // ロードしたファイルのFPS。記述が無ければデフォルト値15fpsとなる
        ), (0,esm_define_property._)(this, "_loopDurationSeconds", void 0 // mtnファイルで定義される一連のモーションの長さ
        ), (0,esm_define_property._)(this, "_motionBehavior", 1), (0,esm_define_property._)(this, "_lastWeight", void 0 // 最後に設定された重み
        ), (0,esm_define_property._)(this, "_motionData", void 0 // 実際のモーションデータ本体
        ), (0,esm_define_property._)(this, "_eyeBlinkParameterIds", void 0 // 自動まばたきを適用するパラメータIDハンドルのリスト。  モデル（モデルセッティング）とパラメータを対応付ける。
        ), (0,esm_define_property._)(this, "_lipSyncParameterIds", void 0 // リップシンクを適用するパラメータIDハンドルのリスト。  モデル（モデルセッティング）とパラメータを対応付ける。
        ), (0,esm_define_property._)(this, "_modelCurveIdEyeBlink", void 0 // モデルが持つ自動まばたき用パラメータIDのハンドル。  モデルとモーションを対応付ける。
        ), (0,esm_define_property._)(this, "_modelCurveIdLipSync", void 0 // モデルが持つリップシンク用パラメータIDのハンドル。  モデルとモーションを対応付ける。
        ), (0,esm_define_property._)(this, "_modelCurveIdOpacity", void 0 // モデルが持つ不透明度用パラメータIDのハンドル。  モデルとモーションを対応付ける。
        ), (0,esm_define_property._)(this, "_modelOpacity", void 0 // モーションから取得した不透明度
        ), (0,esm_define_property._)(this, "_debugMode", void 0 // デバッグモードかどうか
        );
        this._sourceFrameRate = 30.0;
        this._loopDurationSeconds = -1.0;
        this._isLoop = false; // trueから false へデフォルトを変更
        this._isLoopFadeIn = true; // ループ時にフェードインが有効かどうかのフラグ
        this._lastWeight = 0.0;
        this._motionData = null;
        this._modelCurveIdEyeBlink = null;
        this._modelCurveIdLipSync = null;
        this._modelCurveIdOpacity = null;
        this._eyeBlinkParameterIds = null;
        this._lipSyncParameterIds = null;
        this._modelOpacity = 1.0;
        this._debugMode = false;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotion = CubismMotion;
})(cubismmotion_Live2DCubismFramework || (cubismmotion_Live2DCubismFramework = {}));
var cubismmotion_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/motion/cubismmotionmanager.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 

/**
 * モーションの管理
 *
 * モーションの管理を行うクラス
 */ class CubismMotionManager extends CubismMotionQueueManager {
    /**
   * 再生中のモーションの優先度の取得
   * @return  モーションの優先度
   */ getCurrentPriority() {
        return this._currentPriority;
    }
    /**
   * 予約中のモーションの優先度を取得する。
   * @return  モーションの優先度
   */ getReservePriority() {
        return this._reservePriority;
    }
    /**
   * 予約中のモーションの優先度を設定する。
   * @param   val     優先度
   */ setReservePriority(val) {
        this._reservePriority = val;
    }
    /**
   * 優先度を設定してモーションを開始する。
   *
   * @param motion          モーション
   * @param autoDelete      再生が狩猟したモーションのインスタンスを削除するならtrue
   * @param priority        優先度
   * @return                開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
   */ startMotionPriority(motion, autoDelete, priority) {
        if (priority == this._reservePriority) {
            this._reservePriority = 0; // 予約を解除
        }
        this._currentPriority = priority; // 再生中モーションの優先度を設定
        return super.startMotion(motion, autoDelete);
    }
    /**
   * モーションを更新して、モデルにパラメータ値を反映する。
   *
   * @param model   対象のモデル
   * @param deltaTimeSeconds    デルタ時間[秒]
   * @return  true    更新されている
   * @return  false   更新されていない
   */ updateMotion(model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        const updated = super.doUpdateMotion(model, this._userTimeSeconds);
        if (this.isFinished()) {
            this._currentPriority = 0; // 再生中のモーションの優先度を解除
        }
        return updated;
    }
    /**
   * モーションを予約する。
   *
   * @param   priority    優先度
   * @return  true    予約できた
   * @return  false   予約できなかった
   */ reserveMotion(priority) {
        if (priority <= this._reservePriority || priority <= this._currentPriority) {
            return false;
        }
        this._reservePriority = priority;
        return true;
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_currentPriority", void 0 // 現在再生中のモーションの優先度
        ), (0,esm_define_property._)(this, "_reservePriority", void 0 // 再生予定のモーションの優先度。再生中は0になる。モーションファイルを別スレッドで読み込むときの機能。
        );
        this._currentPriority = 0;
        this._reservePriority = 0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionManager = CubismMotionManager;
})(cubismmotionmanager_Live2DCubismFramework || (cubismmotionmanager_Live2DCubismFramework = {}));
var cubismmotionmanager_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/physics/cubismphysicsinternal.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 


/**
 * 物理演算の適用先の種類
 */ var cubismphysicsinternal_CubismPhysicsTargetType = /*#__PURE__*/ function(CubismPhysicsTargetType) {
    CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter"; // パラメータに対して適用
    return CubismPhysicsTargetType;
}({});
/**
 * 物理演算の入力の種類
 */ var cubismphysicsinternal_CubismPhysicsSource = /*#__PURE__*/ function(CubismPhysicsSource) {
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle"; // 角度から
    return CubismPhysicsSource;
}({});
/**
 * @brief 物理演算で使用する外部の力
 *
 * 物理演算で使用する外部の力。
 */ class PhysicsJsonEffectiveForces {
    constructor(){
        (0,esm_define_property._)(this, "gravity", void 0); // 重力
        (0,esm_define_property._)(this, "wind", void 0); // 風
        this.gravity = new CubismVector2(0, 0);
        this.wind = new CubismVector2(0, 0);
    }
}
/**
 * 物理演算のパラメータ情報
 */ class CubismPhysicsParameter {
    constructor(){
        (0,esm_define_property._)(this, "id", void 0); // パラメータ
        (0,esm_define_property._)(this, "targetType", void 0); // 適用先の種類
    }
}
/**
 * 物理演算の正規化情報
 */ class CubismPhysicsNormalization {
    constructor(){
        (0,esm_define_property._)(this, "minimum", void 0); // 最大値
        (0,esm_define_property._)(this, "maximum", void 0); // 最小値
        (0,esm_define_property._)(this, "defalut", void 0); // デフォルト値
    }
}
/**
 * 物理演算の演算委使用する物理点の情報
 */ class CubismPhysicsParticle {
    constructor(){
        (0,esm_define_property._)(this, "initialPosition", void 0); // 初期位置
        (0,esm_define_property._)(this, "mobility", void 0); // 動きやすさ
        (0,esm_define_property._)(this, "delay", void 0); // 遅れ
        (0,esm_define_property._)(this, "acceleration", void 0); // 加速度
        (0,esm_define_property._)(this, "radius", void 0); // 距離
        (0,esm_define_property._)(this, "position", void 0); // 現在の位置
        (0,esm_define_property._)(this, "lastPosition", void 0); // 最後の位置
        (0,esm_define_property._)(this, "lastGravity", void 0); // 最後の重力
        (0,esm_define_property._)(this, "force", void 0); // 現在かかっている力
        (0,esm_define_property._)(this, "velocity", void 0); // 現在の速度
        this.initialPosition = new CubismVector2(0, 0);
        this.position = new CubismVector2(0, 0);
        this.lastPosition = new CubismVector2(0, 0);
        this.lastGravity = new CubismVector2(0, 0);
        this.force = new CubismVector2(0, 0);
        this.velocity = new CubismVector2(0, 0);
    }
}
/**
 * 物理演算の物理点の管理
 */ class CubismPhysicsSubRig {
    constructor(){
        (0,esm_define_property._)(this, "inputCount", void 0); // 入力の個数
        (0,esm_define_property._)(this, "outputCount", void 0); // 出力の個数
        (0,esm_define_property._)(this, "particleCount", void 0); // 物理点の個数
        (0,esm_define_property._)(this, "baseInputIndex", void 0); // 入力の最初のインデックス
        (0,esm_define_property._)(this, "baseOutputIndex", void 0); // 出力の最初のインデックス
        (0,esm_define_property._)(this, "baseParticleIndex", void 0); // 物理点の最初のインデックス
        (0,esm_define_property._)(this, "normalizationPosition", void 0); // 正規化された位置
        (0,esm_define_property._)(this, "normalizationAngle", void 0); // 正規化された角度
        this.normalizationPosition = new CubismPhysicsNormalization();
        this.normalizationAngle = new CubismPhysicsNormalization();
    }
}
/**
 * 物理演算の入力情報
 */ class CubismPhysicsInput {
    constructor(){
        (0,esm_define_property._)(this, "source", void 0); // 入力元のパラメータ
        (0,esm_define_property._)(this, "sourceParameterIndex", void 0); // 入力元のパラメータのインデックス
        (0,esm_define_property._)(this, "weight", void 0); // 重み
        (0,esm_define_property._)(this, "type", void 0); // 入力の種類
        (0,esm_define_property._)(this, "reflect", void 0); // 値が反転されているかどうか
        (0,esm_define_property._)(this, "getNormalizedParameterValue", void 0); // 正規化されたパラメータ値の取得関数
        this.source = new CubismPhysicsParameter();
    }
}
/**
 * @brief 物理演算の出力情報
 *
 * 物理演算の出力情報。
 */ class CubismPhysicsOutput {
    constructor(){
        (0,esm_define_property._)(this, "destination", void 0); // 出力先のパラメータ
        (0,esm_define_property._)(this, "destinationParameterIndex", void 0); // 出力先のパラメータのインデックス
        (0,esm_define_property._)(this, "vertexIndex", void 0); // 振り子のインデックス
        (0,esm_define_property._)(this, "translationScale", void 0); // 移動値のスケール
        (0,esm_define_property._)(this, "angleScale", void 0); // 角度のスケール
        (0,esm_define_property._)(this, "weight", void 0); // 重み
        (0,esm_define_property._)(this, "type", void 0); // 出力の種類
        (0,esm_define_property._)(this, "reflect", void 0); // 値が反転されているかどうか
        (0,esm_define_property._)(this, "valueBelowMinimum", void 0); // 最小値を下回った時の値
        (0,esm_define_property._)(this, "valueExceededMaximum", void 0); // 最大値をこえた時の値
        (0,esm_define_property._)(this, "getValue", void 0); // 物理演算の値の取得関数
        (0,esm_define_property._)(this, "getScale", void 0); // 物理演算のスケール値の取得関数
        this.destination = new CubismPhysicsParameter();
        this.translationScale = new CubismVector2(0, 0);
    }
}
/**
 * @brief 物理演算のデータ
 *
 * 物理演算のデータ。
 */ class CubismPhysicsRig {
    constructor(){
        (0,esm_define_property._)(this, "subRigCount", void 0); // 物理演算の物理点の個数
        (0,esm_define_property._)(this, "settings", void 0); // 物理演算の物理点の管理のリスト
        (0,esm_define_property._)(this, "inputs", void 0); // 物理演算の入力のリスト
        (0,esm_define_property._)(this, "outputs", void 0); // 物理演算の出力のリスト
        (0,esm_define_property._)(this, "particles", void 0); // 物理演算の物理点のリスト
        (0,esm_define_property._)(this, "gravity", void 0); // 重力
        (0,esm_define_property._)(this, "wind", void 0); // 風
        (0,esm_define_property._)(this, "fps", void 0); //物理演算動作FPS
        this.settings = new csmVector();
        this.inputs = new csmVector();
        this.outputs = new csmVector();
        this.particles = new csmVector();
        this.gravity = new CubismVector2(0, 0);
        this.wind = new CubismVector2(0, 0);
        this.fps = 0.0;
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismPhysicsInput = CubismPhysicsInput;
    Live2DCubismFramework.CubismPhysicsNormalization = CubismPhysicsNormalization;
    Live2DCubismFramework.CubismPhysicsOutput = CubismPhysicsOutput;
    Live2DCubismFramework.CubismPhysicsParameter = CubismPhysicsParameter;
    Live2DCubismFramework.CubismPhysicsParticle = CubismPhysicsParticle;
    Live2DCubismFramework.CubismPhysicsRig = CubismPhysicsRig;
    Live2DCubismFramework.CubismPhysicsSource = cubismphysicsinternal_CubismPhysicsSource;
    Live2DCubismFramework.CubismPhysicsSubRig = CubismPhysicsSubRig;
    Live2DCubismFramework.CubismPhysicsTargetType = cubismphysicsinternal_CubismPhysicsTargetType;
    Live2DCubismFramework.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
})(cubismphysicsinternal_Live2DCubismFramework || (cubismphysicsinternal_Live2DCubismFramework = {}));
var cubismphysicsinternal_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/physics/cubismphysicsjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 



// JSON keys
const Position = 'Position';
const X = 'X';
const Y = 'Y';
const Angle = 'Angle';
const Type = 'Type';
const cubismphysicsjson_Id = 'Id';
// Meta
const cubismphysicsjson_Meta = 'Meta';
const EffectiveForces = 'EffectiveForces';
const TotalInputCount = 'TotalInputCount';
const TotalOutputCount = 'TotalOutputCount';
const PhysicsSettingCount = 'PhysicsSettingCount';
const Gravity = 'Gravity';
const Wind = 'Wind';
const VertexCount = 'VertexCount';
const cubismphysicsjson_Fps = 'Fps';
// PhysicsSettings
const PhysicsSettings = 'PhysicsSettings';
const Normalization = 'Normalization';
const Minimum = 'Minimum';
const Maximum = 'Maximum';
const Default = 'Default';
const Reflect = 'Reflect';
const Weight = 'Weight';
// Input
const Input = 'Input';
const Source = 'Source';
// Output
const Output = 'Output';
const Scale = 'Scale';
const VertexIndex = 'VertexIndex';
const Destination = 'Destination';
// Particle
const Vertices = 'Vertices';
const Mobility = 'Mobility';
const Delay = 'Delay';
const Radius = 'Radius';
const Acceleration = 'Acceleration';
/**
 * physics3.jsonのコンテナ。
 */ class CubismPhysicsJson {
    /**
   * デストラクタ相当の処理
   */ release() {
        CubismJson["delete"](this._json);
    }
    /**
   * 重力の取得
   * @return 重力
   */ getGravity() {
        const ret = new CubismVector2(0, 0);
        ret.x = this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(EffectiveForces).getValueByString(Gravity).getValueByString(X).toFloat();
        ret.y = this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(EffectiveForces).getValueByString(Gravity).getValueByString(Y).toFloat();
        return ret;
    }
    /**
   * 風の取得
   * @return 風
   */ getWind() {
        const ret = new CubismVector2(0, 0);
        ret.x = this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(EffectiveForces).getValueByString(Wind).getValueByString(X).toFloat();
        ret.y = this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(EffectiveForces).getValueByString(Wind).getValueByString(Y).toFloat();
        return ret;
    }
    /**
   * 物理演算設定FPSの取得
   * @return 物理演算設定FPS
   */ getFps() {
        return this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(cubismphysicsjson_Fps).toFloat(0.0);
    }
    /**
   * 物理店の管理の個数の取得
   * @return 物理店の管理の個数
   */ getSubRigCount() {
        return this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(PhysicsSettingCount).toInt();
    }
    /**
   * 入力の総合計の取得
   * @return 入力の総合計
   */ getTotalInputCount() {
        return this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(TotalInputCount).toInt();
    }
    /**
   * 出力の総合計の取得
   * @return 出力の総合計
   */ getTotalOutputCount() {
        return this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(TotalOutputCount).toInt();
    }
    /**
   * 物理点の個数の取得
   * @return 物理点の個数
   */ getVertexCount() {
        return this._json.getRoot().getValueByString(cubismphysicsjson_Meta).getValueByString(VertexCount).toInt();
    }
    /**
   * 正規化された位置の最小値の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 正規化された位置の最小値
   */ getNormalizationPositionMinimumValue(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Minimum).toFloat();
    }
    /**
   * 正規化された位置の最大値の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 正規化された位置の最大値
   */ getNormalizationPositionMaximumValue(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Maximum).toFloat();
    }
    /**
   * 正規化された位置のデフォルト値の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 正規化された位置のデフォルト値
   */ getNormalizationPositionDefaultValue(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Position).getValueByString(Default).toFloat();
    }
    /**
   * 正規化された角度の最小値の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 正規化された角度の最小値
   */ getNormalizationAngleMinimumValue(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Minimum).toFloat();
    }
    /**
   * 正規化された角度の最大値の取得
   * @param physicsSettingIndex
   * @return 正規化された角度の最大値
   */ getNormalizationAngleMaximumValue(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Maximum).toFloat();
    }
    /**
   * 正規化された角度のデフォルト値の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 正規化された角度のデフォルト値
   */ getNormalizationAngleDefaultValue(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Normalization).getValueByString(Angle).getValueByString(Default).toFloat();
    }
    /**
   * 入力の個数の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 入力の個数
   */ getInputCount(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getVector().getSize();
    }
    /**
   * 入力の重みの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param inputIndex 入力のインデックス
   * @return 入力の重み
   */ getInputWeight(physicsSettingIndex, inputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Weight).toFloat();
    }
    /**
   * 入力の反転の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param inputIndex 入力のインデックス
   * @return 入力の反転
   */ getInputReflect(physicsSettingIndex, inputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Reflect).toBoolean();
    }
    /**
   * 入力の種類の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param inputIndex 入力のインデックス
   * @return 入力の種類
   */ getInputType(physicsSettingIndex, inputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Type).getRawString();
    }
    /**
   * 入力元のIDの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param inputIndex 入力のインデックス
   * @return 入力元のID
   */ getInputSourceId(physicsSettingIndex, inputIndex) {
        return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Input).getValueByIndex(inputIndex).getValueByString(Source).getValueByString(cubismphysicsjson_Id).getRawString());
    }
    /**
   * 出力の個数の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @return 出力の個数
   */ getOutputCount(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getVector().getSize();
    }
    /**
   * 出力の物理点のインデックスの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param outputIndex 出力のインデックス
   * @return 出力の物理点のインデックス
   */ getOutputVertexIndex(physicsSettingIndex, outputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(VertexIndex).toInt();
    }
    /**
   * 出力の角度のスケールを取得する
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param outputIndex 出力のインデックス
   * @return 出力の角度のスケール
   */ getOutputAngleScale(physicsSettingIndex, outputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Scale).toFloat();
    }
    /**
   * 出力の重みの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param outputIndex 出力のインデックス
   * @return 出力の重み
   */ getOutputWeight(physicsSettingIndex, outputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Weight).toFloat();
    }
    /**
   * 出力先のIDの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param outputIndex 出力のインデックス
   * @return 出力先のID
   */ getOutputDestinationId(physicsSettingIndex, outputIndex) {
        return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Destination).getValueByString(cubismphysicsjson_Id).getRawString());
    }
    /**
   * 出力の種類の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param outputIndex 出力のインデックス
   * @return 出力の種類
   */ getOutputType(physicsSettingIndex, outputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Type).getRawString();
    }
    /**
   * 出力の反転の取得
   * @param physicsSettingIndex 物理演算のインデックス
   * @param outputIndex 出力のインデックス
   * @return 出力の反転
   */ getOutputReflect(physicsSettingIndex, outputIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Output).getValueByIndex(outputIndex).getValueByString(Reflect).toBoolean();
    }
    /**
   * 物理点の個数の取得
   * @param physicsSettingIndex 物理演算男設定のインデックス
   * @return 物理点の個数
   */ getParticleCount(physicsSettingIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getVector().getSize();
    }
    /**
   * 物理点の動きやすさの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param vertexIndex 物理点のインデックス
   * @return 物理点の動きやすさ
   */ getParticleMobility(physicsSettingIndex, vertexIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Mobility).toFloat();
    }
    /**
   * 物理点の遅れの取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param vertexIndex 物理点のインデックス
   * @return 物理点の遅れ
   */ getParticleDelay(physicsSettingIndex, vertexIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Delay).toFloat();
    }
    /**
   * 物理点の加速度の取得
   * @param physicsSettingIndex 物理演算の設定
   * @param vertexIndex 物理点のインデックス
   * @return 物理点の加速度
   */ getParticleAcceleration(physicsSettingIndex, vertexIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Acceleration).toFloat();
    }
    /**
   * 物理点の距離の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param vertexIndex 物理点のインデックス
   * @return 物理点の距離
   */ getParticleRadius(physicsSettingIndex, vertexIndex) {
        return this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Radius).toFloat();
    }
    /**
   * 物理点の位置の取得
   * @param physicsSettingIndex 物理演算の設定のインデックス
   * @param vertexInde 物理点のインデックス
   * @return 物理点の位置
   */ getParticlePosition(physicsSettingIndex, vertexIndex) {
        const ret = new CubismVector2(0, 0);
        ret.x = this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Position).getValueByString(X).toFloat();
        ret.y = this._json.getRoot().getValueByString(PhysicsSettings).getValueByIndex(physicsSettingIndex).getValueByString(Vertices).getValueByIndex(vertexIndex).getValueByString(Position).getValueByString(Y).toFloat();
        return ret;
    }
    /**
   * コンストラクタ
   * @param buffer physics3.jsonが読み込まれているバッファ
   * @param size バッファのサイズ
   */ constructor(buffer, size){
        (0,esm_define_property._)(this, "_json", void 0); // physics3.jsonデータ
        this._json = CubismJson.create(buffer, size);
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismPhysicsJson = CubismPhysicsJson;
})(cubismphysicsjson_Live2DCubismFramework || (cubismphysicsjson_Live2DCubismFramework = {}));
var cubismphysicsjson_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/physics/cubismphysics.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 





// physics types tags.
const PhysicsTypeTagX = 'X';
const PhysicsTypeTagY = 'Y';
const PhysicsTypeTagAngle = 'Angle';
// Constant of air resistance.
const AirResistance = 5.0;
// Constant of maximum weight of input and output ratio.
const MaximumWeight = 100.0;
// Constant of threshold of movement.
const MovementThreshold = 0.001;
// Constant of maximum allowed delta time
const MaxDeltaTime = 5.0;
/**
 * 物理演算クラス
 */ class CubismPhysics {
    /**
   * インスタンスの作成
   * @param buffer    physics3.jsonが読み込まれているバッファ
   * @param size      バッファのサイズ
   * @return 作成されたインスタンス
   */ static create(buffer, size) {
        const ret = new CubismPhysics();
        ret.parse(buffer, size);
        ret._physicsRig.gravity.y = 0;
        return ret;
    }
    /**
   * インスタンスを破棄する
   * @param physics 破棄するインスタンス
   */ static delete(physics) {
        if (physics != null) {
            physics.release();
            physics = null;
        }
    }
    /**
   * physics3.jsonをパースする。
   * @param physicsJson physics3.jsonが読み込まれているバッファ
   * @param size バッファのサイズ
   */ parse(physicsJson, size) {
        this._physicsRig = new CubismPhysicsRig();
        let json = new CubismPhysicsJson(physicsJson, size);
        this._physicsRig.gravity = json.getGravity();
        this._physicsRig.wind = json.getWind();
        this._physicsRig.subRigCount = json.getSubRigCount();
        this._physicsRig.fps = json.getFps();
        this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, CubismPhysicsSubRig, true);
        this._physicsRig.inputs.updateSize(json.getTotalInputCount(), CubismPhysicsInput, true);
        this._physicsRig.outputs.updateSize(json.getTotalOutputCount(), CubismPhysicsOutput, true);
        this._physicsRig.particles.updateSize(json.getVertexCount(), CubismPhysicsParticle, true);
        this._currentRigOutputs.clear();
        this._previousRigOutputs.clear();
        let inputIndex = 0, outputIndex = 0, particleIndex = 0;
        for(let i = 0; i < this._physicsRig.settings.getSize(); ++i){
            this._physicsRig.settings.at(i).normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
            this._physicsRig.settings.at(i).normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
            this._physicsRig.settings.at(i).normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
            this._physicsRig.settings.at(i).normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
            this._physicsRig.settings.at(i).normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
            this._physicsRig.settings.at(i).normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
            // Input
            this._physicsRig.settings.at(i).inputCount = json.getInputCount(i);
            this._physicsRig.settings.at(i).baseInputIndex = inputIndex;
            for(let j = 0; j < this._physicsRig.settings.at(i).inputCount; ++j){
                this._physicsRig.inputs.at(inputIndex + j).sourceParameterIndex = -1;
                this._physicsRig.inputs.at(inputIndex + j).weight = json.getInputWeight(i, j);
                this._physicsRig.inputs.at(inputIndex + j).reflect = json.getInputReflect(i, j);
                if (json.getInputType(i, j) == PhysicsTypeTagX) {
                    this._physicsRig.inputs.at(inputIndex + j).type = cubismphysicsinternal_CubismPhysicsSource.CubismPhysicsSource_X;
                    this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
                } else if (json.getInputType(i, j) == PhysicsTypeTagY) {
                    this._physicsRig.inputs.at(inputIndex + j).type = cubismphysicsinternal_CubismPhysicsSource.CubismPhysicsSource_Y;
                    this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
                } else if (json.getInputType(i, j) == PhysicsTypeTagAngle) {
                    this._physicsRig.inputs.at(inputIndex + j).type = cubismphysicsinternal_CubismPhysicsSource.CubismPhysicsSource_Angle;
                    this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
                }
                this._physicsRig.inputs.at(inputIndex + j).source.targetType = cubismphysicsinternal_CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                this._physicsRig.inputs.at(inputIndex + j).source.id = json.getInputSourceId(i, j);
            }
            inputIndex += this._physicsRig.settings.at(i).inputCount;
            // Output
            this._physicsRig.settings.at(i).outputCount = json.getOutputCount(i);
            this._physicsRig.settings.at(i).baseOutputIndex = outputIndex;
            const currentRigOutput = new PhysicsOutput();
            currentRigOutput.outputs.resize(this._physicsRig.settings.at(i).outputCount);
            const previousRigOutput = new PhysicsOutput();
            previousRigOutput.outputs.resize(this._physicsRig.settings.at(i).outputCount);
            for(let j = 0; j < this._physicsRig.settings.at(i).outputCount; ++j){
                // initialize
                currentRigOutput.outputs.set(j, 0.0);
                previousRigOutput.outputs.set(j, 0.0);
                this._physicsRig.outputs.at(outputIndex + j).destinationParameterIndex = -1;
                this._physicsRig.outputs.at(outputIndex + j).vertexIndex = json.getOutputVertexIndex(i, j);
                this._physicsRig.outputs.at(outputIndex + j).angleScale = json.getOutputAngleScale(i, j);
                this._physicsRig.outputs.at(outputIndex + j).weight = json.getOutputWeight(i, j);
                this._physicsRig.outputs.at(outputIndex + j).destination.targetType = cubismphysicsinternal_CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                this._physicsRig.outputs.at(outputIndex + j).destination.id = json.getOutputDestinationId(i, j);
                if (json.getOutputType(i, j) == PhysicsTypeTagX) {
                    this._physicsRig.outputs.at(outputIndex + j).type = cubismphysicsinternal_CubismPhysicsSource.CubismPhysicsSource_X;
                    this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationX;
                    this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationX;
                } else if (json.getOutputType(i, j) == PhysicsTypeTagY) {
                    this._physicsRig.outputs.at(outputIndex + j).type = cubismphysicsinternal_CubismPhysicsSource.CubismPhysicsSource_Y;
                    this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationY;
                    this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationY;
                } else if (json.getOutputType(i, j) == PhysicsTypeTagAngle) {
                    this._physicsRig.outputs.at(outputIndex + j).type = cubismphysicsinternal_CubismPhysicsSource.CubismPhysicsSource_Angle;
                    this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputAngle;
                    this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleAngle;
                }
                this._physicsRig.outputs.at(outputIndex + j).reflect = json.getOutputReflect(i, j);
            }
            this._currentRigOutputs.pushBack(currentRigOutput);
            this._previousRigOutputs.pushBack(previousRigOutput);
            outputIndex += this._physicsRig.settings.at(i).outputCount;
            // Particle
            this._physicsRig.settings.at(i).particleCount = json.getParticleCount(i);
            this._physicsRig.settings.at(i).baseParticleIndex = particleIndex;
            for(let j = 0; j < this._physicsRig.settings.at(i).particleCount; ++j){
                this._physicsRig.particles.at(particleIndex + j).mobility = json.getParticleMobility(i, j);
                this._physicsRig.particles.at(particleIndex + j).delay = json.getParticleDelay(i, j);
                this._physicsRig.particles.at(particleIndex + j).acceleration = json.getParticleAcceleration(i, j);
                this._physicsRig.particles.at(particleIndex + j).radius = json.getParticleRadius(i, j);
                this._physicsRig.particles.at(particleIndex + j).position = json.getParticlePosition(i, j);
            }
            particleIndex += this._physicsRig.settings.at(i).particleCount;
        }
        this.initialize();
        json.release();
        json = void 0;
        json = null;
    }
    /**
   * 現在のパラメータ値で物理演算が安定化する状態を演算する。
   * @param model 物理演算の結果を適用するモデル
   */ stabilization(model) {
        var _this__parameterCaches, _this__parameterInputCaches;
        let totalAngle;
        let weight;
        let radAngle;
        let outputValue;
        const totalTranslation = new CubismVector2();
        let currentSetting;
        let currentInputs;
        let currentOutputs;
        let currentParticles;
        const parameterValues = model.getModel().parameters.values;
        const parameterMaximumValues = model.getModel().parameters.maximumValues;
        const parameterMinimumValues = model.getModel().parameters.minimumValues;
        const parameterDefaultValues = model.getModel().parameters.defaultValues;
        if ((((_this__parameterCaches = this._parameterCaches) === null || _this__parameterCaches === void 0 ? void 0 : _this__parameterCaches.length) ?? 0) < model.getParameterCount()) {
            this._parameterCaches = new Float32Array(model.getParameterCount());
        }
        if ((((_this__parameterInputCaches = this._parameterInputCaches) === null || _this__parameterInputCaches === void 0 ? void 0 : _this__parameterInputCaches.length) ?? 0) < model.getParameterCount()) {
            this._parameterInputCaches = new Float32Array(model.getParameterCount());
        }
        for(let j = 0; j < model.getParameterCount(); ++j){
            this._parameterCaches[j] = parameterValues[j];
            this._parameterInputCaches[j] = parameterValues[j];
        }
        for(let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex){
            totalAngle = {
                angle: 0.0
            };
            totalTranslation.x = 0.0;
            totalTranslation.y = 0.0;
            currentSetting = this._physicsRig.settings.at(settingIndex);
            currentInputs = this._physicsRig.inputs.get(currentSetting.baseInputIndex);
            currentOutputs = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
            currentParticles = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
            // Load input parameters
            for(let i = 0; i < currentSetting.inputCount; ++i){
                weight = currentInputs[i].weight / MaximumWeight;
                if (currentInputs[i].sourceParameterIndex == -1) {
                    currentInputs[i].sourceParameterIndex = model.getParameterIndex(currentInputs[i].source.id);
                }
                currentInputs[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValues[currentInputs[i].sourceParameterIndex], parameterMinimumValues[currentInputs[i].sourceParameterIndex], parameterMaximumValues[currentInputs[i].sourceParameterIndex], parameterDefaultValues[currentInputs[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInputs[i].reflect, weight);
                this._parameterCaches[currentInputs[i].sourceParameterIndex] = parameterValues[currentInputs[i].sourceParameterIndex];
            }
            radAngle = CubismMath.degreesToRadian(-totalAngle.angle);
            totalTranslation.x = totalTranslation.x * CubismMath.cos(radAngle) - totalTranslation.y * CubismMath.sin(radAngle);
            totalTranslation.y = totalTranslation.x * CubismMath.sin(radAngle) + totalTranslation.y * CubismMath.cos(radAngle);
            // Calculate particles position.
            updateParticlesForStabilization(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum);
            // Update output parameters.
            for(let i = 0; i < currentSetting.outputCount; ++i){
                const particleIndex = currentOutputs[i].vertexIndex;
                if (currentOutputs[i].destinationParameterIndex == -1) {
                    currentOutputs[i].destinationParameterIndex = model.getParameterIndex(currentOutputs[i].destination.id);
                }
                if (particleIndex < 1 || particleIndex >= currentSetting.particleCount) {
                    continue;
                }
                let translation = new CubismVector2();
                translation = currentParticles[particleIndex].position.substract(currentParticles[particleIndex - 1].position);
                outputValue = currentOutputs[i].getValue(translation, currentParticles, particleIndex, currentOutputs[i].reflect, this._options.gravity);
                this._currentRigOutputs.at(settingIndex).outputs.set(i, outputValue);
                this._previousRigOutputs.at(settingIndex).outputs.set(i, outputValue);
                const destinationParameterIndex = currentOutputs[i].destinationParameterIndex;
                const outParameterCaches = !Float32Array.prototype.slice && 'subarray' in Float32Array.prototype ? JSON.parse(JSON.stringify(parameterValues.subarray(destinationParameterIndex))) // 値渡しするため、JSON.parse, JSON.stringify
                 : parameterValues.slice(destinationParameterIndex);
                updateOutputParameterValue(outParameterCaches, parameterMinimumValues[destinationParameterIndex], parameterMaximumValues[destinationParameterIndex], outputValue, currentOutputs[i]);
                // 値を反映
                for(let offset = destinationParameterIndex, outParamIndex = 0; offset < this._parameterCaches.length; offset++, outParamIndex++){
                    parameterValues[offset] = this._parameterCaches[offset] = outParameterCaches[outParamIndex];
                }
            }
        }
    }
    /**
   * 物理演算の評価
   *
   * Pendulum interpolation weights
   *
   * 振り子の計算結果は保存され、パラメータへの出力は保存された前回の結果で補間されます。
   * The result of the pendulum calculation is saved and
   * the output to the parameters is interpolated with the saved previous result of the pendulum calculation.
   *
   * 図で示すと[1]と[2]で補間されます。
   * The figure shows the interpolation between [1] and [2].
   *
   * 補間の重みは最新の振り子計算タイミングと次回のタイミングの間で見た現在時間で決定する。
   * The weight of the interpolation are determined by the current time seen between
   * the latest pendulum calculation timing and the next timing.
   *
   * 図で示すと[2]と[4]の間でみた(3)の位置の重みになる。
   * Figure shows the weight of position (3) as seen between [2] and [4].
   *
   * 解釈として振り子計算のタイミングと重み計算のタイミングがズレる。
   * As an interpretation, the pendulum calculation and weights are misaligned.
   *
   * physics3.jsonにFPS情報が存在しない場合は常に前の振り子状態で設定される。
   * If there is no FPS information in physics3.json, it is always set in the previous pendulum state.
   *
   * この仕様は補間範囲を逸脱したことが原因の震えたような見た目を回避を目的にしている。
   * The purpose of this specification is to avoid the quivering appearance caused by deviations from the interpolation range.
   *
   * ------------ time -------------->
   *
   *                 |+++++|------| <- weight
   * ==[1]====#=====[2]---(3)----(4)
   *          ^ output contents
   *
   * 1:_previousRigOutputs
   * 2:_currentRigOutputs
   * 3:_currentRemainTime (now rendering)
   * 4:next particles timing
   * @param model 物理演算の結果を適用するモデル
   * @param deltaTimeSeconds デルタ時間[秒]
   */ evaluate(model, deltaTimeSeconds) {
        var _this__parameterCaches, _this__parameterInputCaches;
        let totalAngle;
        let weight;
        let radAngle;
        let outputValue;
        const totalTranslation = new CubismVector2();
        let currentSetting;
        let currentInputs;
        let currentOutputs;
        let currentParticles;
        if (0.0 >= deltaTimeSeconds) {
            return;
        }
        const parameterValues = model.getModel().parameters.values;
        const parameterMaximumValues = model.getModel().parameters.maximumValues;
        const parameterMinimumValues = model.getModel().parameters.minimumValues;
        const parameterDefaultValues = model.getModel().parameters.defaultValues;
        let physicsDeltaTime;
        this._currentRemainTime += deltaTimeSeconds;
        if (this._currentRemainTime > MaxDeltaTime) {
            this._currentRemainTime = 0.0;
        }
        if ((((_this__parameterCaches = this._parameterCaches) === null || _this__parameterCaches === void 0 ? void 0 : _this__parameterCaches.length) ?? 0) < model.getParameterCount()) {
            this._parameterCaches = new Float32Array(model.getParameterCount());
        }
        if ((((_this__parameterInputCaches = this._parameterInputCaches) === null || _this__parameterInputCaches === void 0 ? void 0 : _this__parameterInputCaches.length) ?? 0) < model.getParameterCount()) {
            this._parameterInputCaches = new Float32Array(model.getParameterCount());
            for(let j = 0; j < model.getParameterCount(); ++j){
                this._parameterInputCaches[j] = parameterValues[j];
            }
        }
        if (this._physicsRig.fps > 0.0) {
            physicsDeltaTime = 1.0 / this._physicsRig.fps;
        } else {
            physicsDeltaTime = deltaTimeSeconds;
        }
        while(this._currentRemainTime >= physicsDeltaTime){
            // copyRigOutputs _currentRigOutputs to _previousRigOutputs
            for(let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex){
                currentSetting = this._physicsRig.settings.at(settingIndex);
                currentOutputs = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
                for(let i = 0; i < currentSetting.outputCount; ++i){
                    this._previousRigOutputs.at(settingIndex).outputs.set(i, this._currentRigOutputs.at(settingIndex).outputs.at(i));
                }
            }
            // 入力キャッシュとパラメータで線形補間してUpdateParticlesするタイミングでの入力を計算する。
            // Calculate the input at the timing to UpdateParticles by linear interpolation with the _parameterInputCache and parameterValue.
            // _parameterCacheはグループ間での値の伝搬の役割があるので_parameterInputCacheとの分離が必要。
            // _parameterCache needs to be separated from _parameterInputCache because of its role in propagating values between groups.
            const inputWeight = physicsDeltaTime / this._currentRemainTime;
            for(let j = 0; j < model.getParameterCount(); ++j){
                this._parameterCaches[j] = this._parameterInputCaches[j] * (1.0 - inputWeight) + parameterValues[j] * inputWeight;
                this._parameterInputCaches[j] = this._parameterCaches[j];
            }
            for(let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex){
                totalAngle = {
                    angle: 0.0
                };
                totalTranslation.x = 0.0;
                totalTranslation.y = 0.0;
                currentSetting = this._physicsRig.settings.at(settingIndex);
                currentInputs = this._physicsRig.inputs.get(currentSetting.baseInputIndex);
                currentOutputs = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
                currentParticles = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
                // Load input parameters
                for(let i = 0; i < currentSetting.inputCount; ++i){
                    weight = currentInputs[i].weight / MaximumWeight;
                    if (currentInputs[i].sourceParameterIndex == -1) {
                        currentInputs[i].sourceParameterIndex = model.getParameterIndex(currentInputs[i].source.id);
                    }
                    currentInputs[i].getNormalizedParameterValue(totalTranslation, totalAngle, this._parameterCaches[currentInputs[i].sourceParameterIndex], parameterMinimumValues[currentInputs[i].sourceParameterIndex], parameterMaximumValues[currentInputs[i].sourceParameterIndex], parameterDefaultValues[currentInputs[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInputs[i].reflect, weight);
                }
                radAngle = CubismMath.degreesToRadian(-totalAngle.angle);
                totalTranslation.x = totalTranslation.x * CubismMath.cos(radAngle) - totalTranslation.y * CubismMath.sin(radAngle);
                totalTranslation.y = totalTranslation.x * CubismMath.sin(radAngle) + totalTranslation.y * CubismMath.cos(radAngle);
                // Calculate particles position.
                updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, physicsDeltaTime, AirResistance);
                // Update output parameters.
                for(let i = 0; i < currentSetting.outputCount; ++i){
                    const particleIndex = currentOutputs[i].vertexIndex;
                    if (currentOutputs[i].destinationParameterIndex == -1) {
                        currentOutputs[i].destinationParameterIndex = model.getParameterIndex(currentOutputs[i].destination.id);
                    }
                    if (particleIndex < 1 || particleIndex >= currentSetting.particleCount) {
                        continue;
                    }
                    const translation = new CubismVector2();
                    translation.x = currentParticles[particleIndex].position.x - currentParticles[particleIndex - 1].position.x;
                    translation.y = currentParticles[particleIndex].position.y - currentParticles[particleIndex - 1].position.y;
                    outputValue = currentOutputs[i].getValue(translation, currentParticles, particleIndex, currentOutputs[i].reflect, this._options.gravity);
                    this._currentRigOutputs.at(settingIndex).outputs.set(i, outputValue);
                    const destinationParameterIndex = currentOutputs[i].destinationParameterIndex;
                    const outParameterCaches = !Float32Array.prototype.slice && 'subarray' in Float32Array.prototype ? JSON.parse(JSON.stringify(this._parameterCaches.subarray(destinationParameterIndex))) // 値渡しするため、JSON.parse, JSON.stringify
                     : this._parameterCaches.slice(destinationParameterIndex);
                    updateOutputParameterValue(outParameterCaches, parameterMinimumValues[destinationParameterIndex], parameterMaximumValues[destinationParameterIndex], outputValue, currentOutputs[i]);
                    // 値を反映
                    for(let offset = destinationParameterIndex, outParamIndex = 0; offset < this._parameterCaches.length; offset++, outParamIndex++){
                        this._parameterCaches[offset] = outParameterCaches[outParamIndex];
                    }
                }
            }
            this._currentRemainTime -= physicsDeltaTime;
        }
        const alpha = this._currentRemainTime / physicsDeltaTime;
        this.interpolate(model, alpha);
    }
    /**
   * 物理演算結果の適用
   * 振り子演算の最新の結果と一つ前の結果から指定した重みで適用する。
   * @param model 物理演算の結果を適用するモデル
   * @param weight 最新結果の重み
   */ interpolate(model, weight) {
        let currentOutputs;
        let currentSetting;
        const parameterValues = model.getModel().parameters.values;
        const parameterMaximumValues = model.getModel().parameters.maximumValues;
        const parameterMinimumValues = model.getModel().parameters.minimumValues;
        for(let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex){
            currentSetting = this._physicsRig.settings.at(settingIndex);
            currentOutputs = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
            // Load input parameters.
            for(let i = 0; i < currentSetting.outputCount; ++i){
                if (currentOutputs[i].destinationParameterIndex == -1) {
                    continue;
                }
                const destinationParameterIndex = currentOutputs[i].destinationParameterIndex;
                const outParameterValues = !Float32Array.prototype.slice && 'subarray' in Float32Array.prototype ? JSON.parse(JSON.stringify(parameterValues.subarray(destinationParameterIndex))) // 値渡しするため、JSON.parse, JSON.stringify
                 : parameterValues.slice(destinationParameterIndex);
                updateOutputParameterValue(outParameterValues, parameterMinimumValues[destinationParameterIndex], parameterMaximumValues[destinationParameterIndex], this._previousRigOutputs.at(settingIndex).outputs.at(i) * (1 - weight) + this._currentRigOutputs.at(settingIndex).outputs.at(i) * weight, currentOutputs[i]);
                // 値を反映
                for(let offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValues.length; offset++, outParamIndex++){
                    parameterValues[offset] = outParameterValues[outParamIndex];
                }
            }
        }
    }
    /**
   * オプションの設定
   * @param options オプション
   */ setOptions(options) {
        this._options = options;
    }
    /**
   * オプションの取得
   * @return オプション
   */ getOption() {
        return this._options;
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        this._physicsRig = void 0;
        this._physicsRig = null;
    }
    /**
   * 初期化する
   */ initialize() {
        let strand;
        let currentSetting;
        let radius;
        for(let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex){
            currentSetting = this._physicsRig.settings.at(settingIndex);
            strand = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
            // Initialize the top of particle.
            strand[0].initialPosition = new CubismVector2(0.0, 0.0);
            strand[0].lastPosition = new CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
            strand[0].lastGravity = new CubismVector2(0.0, -1.0);
            strand[0].lastGravity.y *= -1.0;
            strand[0].velocity = new CubismVector2(0.0, 0.0);
            strand[0].force = new CubismVector2(0.0, 0.0);
            // Initialize particles.
            for(let i = 1; i < currentSetting.particleCount; ++i){
                radius = new CubismVector2(0.0, 0.0);
                radius.y = strand[i].radius;
                strand[i].initialPosition = new CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
                strand[i].position = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                strand[i].lastPosition = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                strand[i].lastGravity = new CubismVector2(0.0, -1.0);
                strand[i].lastGravity.y *= -1.0;
                strand[i].velocity = new CubismVector2(0.0, 0.0);
                strand[i].force = new CubismVector2(0.0, 0.0);
            }
        }
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_physicsRig", void 0); // 物理演算のデータ
        (0,esm_define_property._)(this, "_options", void 0); // オプション
        (0,esm_define_property._)(this, "_currentRigOutputs", void 0); ///< 最新の振り子計算の結果
        (0,esm_define_property._)(this, "_previousRigOutputs", void 0); ///< 一つ前の振り子計算の結果
        (0,esm_define_property._)(this, "_currentRemainTime", void 0); ///< 物理演算が処理していない時間
        (0,esm_define_property._)(this, "_parameterCaches", void 0); ///< Evaluateで利用するパラメータのキャッシュ
        (0,esm_define_property._)(this, "_parameterInputCaches", void 0); ///< UpdateParticlesが動くときの入力をキャッシュ
        this._physicsRig = null;
        // set default options
        this._options = new Options();
        this._options.gravity.y = -1.0;
        this._options.gravity.x = 0.0;
        this._options.wind.x = 0.0;
        this._options.wind.y = 0.0;
        this._currentRigOutputs = new csmVector();
        this._previousRigOutputs = new csmVector();
        this._currentRemainTime = 0.0;
        this._parameterCaches = null;
        this._parameterInputCaches = null;
    }
}
/**
 * 物理演算のオプション
 */ class Options {
    constructor(){
        (0,esm_define_property._)(this, "gravity", void 0); // 重力方向
        (0,esm_define_property._)(this, "wind", void 0); // 風の方向
        this.gravity = new CubismVector2(0, 0);
        this.wind = new CubismVector2(0, 0);
    }
}
/**
 * パラメータに適用する前の物理演算の出力結果
 */ class PhysicsOutput {
    constructor(){
        (0,esm_define_property._)(this, "outputs", void 0); // 物理演算出力結果
        this.outputs = new csmVector(0);
    }
}
/**
 * Gets sign.
 *
 * @param value Evaluation target value.
 *
 * @return Sign of value.
 */ function sign(value) {
    let ret = 0;
    if (value > 0.0) {
        ret = 1;
    } else if (value < 0.0) {
        ret = -1;
    }
    return ret;
}
function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.x += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
}
function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.y += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
}
function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
    targetAngle.angle += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
}
function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue = translation.x;
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue = translation.y;
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue;
    if (particleIndex >= 2) {
        parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
    } else {
        parentGravity = parentGravity.multiplyByScaler(-1.0);
    }
    outputValue = CubismMath.directionToRadian(parentGravity, translation);
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getRangeValue(min, max) {
    const maxValue = CubismMath.max(min, max);
    const minValue = CubismMath.min(min, max);
    return CubismMath.abs(maxValue - minValue);
}
function getDefaultValue(min, max) {
    const minValue = CubismMath.min(min, max);
    return minValue + getRangeValue(min, max) / 2.0;
}
function getOutputScaleTranslationX(translationScale, angleScale) {
    return JSON.parse(JSON.stringify(translationScale.x));
}
function getOutputScaleTranslationY(translationScale, angleScale) {
    return JSON.parse(JSON.stringify(translationScale.y));
}
function getOutputScaleAngle(translationScale, angleScale) {
    return JSON.parse(JSON.stringify(angleScale));
}
/**
 * Updates particles.
 *
 * @param strand                Target array of particle.
 * @param strandCount           Count of particle.
 * @param totalTranslation      Total translation value.
 * @param totalAngle            Total angle.
 * @param windDirection         Direction of Wind.
 * @param thresholdValue        Threshold of movement.
 * @param deltaTimeSeconds      Delta time.
 * @param airResistance         Air resistance.
 */ function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
    let delay;
    let radian;
    let direction = new CubismVector2(0.0, 0.0);
    let velocity = new CubismVector2(0.0, 0.0);
    let force = new CubismVector2(0.0, 0.0);
    let newDirection = new CubismVector2(0.0, 0.0);
    strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
    const totalRadian = CubismMath.degreesToRadian(totalAngle);
    const currentGravity = CubismMath.radianToDirection(totalRadian);
    currentGravity.normalize();
    for(let i = 1; i < strandCount; ++i){
        strand[i].force = currentGravity.multiplyByScaler(strand[i].acceleration).add(windDirection);
        strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
        delay = strand[i].delay * deltaTimeSeconds * 30.0;
        direction = strand[i].position.substract(strand[i - 1].position);
        radian = CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) / airResistance;
        direction.x = CubismMath.cos(radian) * direction.x - direction.y * CubismMath.sin(radian);
        direction.y = CubismMath.sin(radian) * direction.x + direction.y * CubismMath.cos(radian);
        strand[i].position = strand[i - 1].position.add(direction);
        velocity = strand[i].velocity.multiplyByScaler(delay);
        force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
        strand[i].position = strand[i].position.add(velocity).add(force);
        newDirection = strand[i].position.substract(strand[i - 1].position);
        newDirection.normalize();
        strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
        if (CubismMath.abs(strand[i].position.x) < thresholdValue) {
            strand[i].position.x = 0.0;
        }
        if (delay != 0.0) {
            strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
            strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
            strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
        }
        strand[i].force = new CubismVector2(0.0, 0.0);
        strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
    }
}
/**
 * Updates particles for stabilization.
 *
 * @param strand                Target array of particle.
 * @param strandCount           Count of particle.
 * @param totalTranslation      Total translation value.
 * @param totalAngle            Total angle.
 * @param windDirection         Direction of Wind.
 * @param thresholdValue        Threshold of movement.
 */ function updateParticlesForStabilization(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue) {
    let force = new CubismVector2(0.0, 0.0);
    strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
    const totalRadian = CubismMath.degreesToRadian(totalAngle);
    const currentGravity = CubismMath.radianToDirection(totalRadian);
    currentGravity.normalize();
    for(let i = 1; i < strandCount; ++i){
        strand[i].force = currentGravity.multiplyByScaler(strand[i].acceleration).add(windDirection);
        strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
        strand[i].velocity = new CubismVector2(0.0, 0.0);
        force = strand[i].force;
        force.normalize();
        force = force.multiplyByScaler(strand[i].radius);
        strand[i].position = strand[i - 1].position.add(force);
        if (CubismMath.abs(strand[i].position.x) < thresholdValue) {
            strand[i].position.x = 0.0;
        }
        strand[i].force = new CubismVector2(0.0, 0.0);
        strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
    }
}
/**
 * Updates output parameter value.
 * @param parameterValue            Target parameter value.
 * @param parameterValueMinimum     Minimum of parameter value.
 * @param parameterValueMaximum     Maximum of parameter value.
 * @param translation               Translation value.
 */ function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
    let value;
    const outputScale = output.getScale(output.translationScale, output.angleScale);
    value = translation * outputScale;
    if (value < parameterValueMinimum) {
        if (value < output.valueBelowMinimum) {
            output.valueBelowMinimum = value;
        }
        value = parameterValueMinimum;
    } else if (value > parameterValueMaximum) {
        if (value > output.valueExceededMaximum) {
            output.valueExceededMaximum = value;
        }
        value = parameterValueMaximum;
    }
    const weight = output.weight / MaximumWeight;
    if (weight >= 1.0) {
        parameterValue[0] = value;
    } else {
        value = parameterValue[0] * (1.0 - weight) + value * weight;
        parameterValue[0] = value;
    }
}
function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
    let result = 0.0;
    const maxValue = CubismMath.max(parameterMaximum, parameterMinimum);
    if (maxValue < value) {
        value = maxValue;
    }
    const minValue = CubismMath.min(parameterMaximum, parameterMinimum);
    if (minValue > value) {
        value = minValue;
    }
    const minNormValue = CubismMath.min(normalizedMinimum, normalizedMaximum);
    const maxNormValue = CubismMath.max(normalizedMinimum, normalizedMaximum);
    const middleNormValue = normalizedDefault;
    const middleValue = getDefaultValue(minValue, maxValue);
    const paramValue = value - middleValue;
    switch(sign(paramValue)){
        case 1:
            {
                const nLength = maxNormValue - middleNormValue;
                const pLength = maxValue - middleValue;
                if (pLength != 0.0) {
                    result = paramValue * (nLength / pLength);
                    result += middleNormValue;
                }
                break;
            }
        case -1:
            {
                const nLength = minNormValue - middleNormValue;
                const pLength = minValue - middleValue;
                if (pLength != 0.0) {
                    result = paramValue * (nLength / pLength);
                    result += middleNormValue;
                }
                break;
            }
        case 0:
            {
                result = middleNormValue;
                break;
            }
        default:
            {
                break;
            }
    }
    return isInverted ? result : result * -1.0;
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismPhysics = CubismPhysics;
    Live2DCubismFramework.Options = Options;
})(cubismphysics_Live2DCubismFramework || (cubismphysics_Live2DCubismFramework = {}));
var cubismphysics_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/rendering/cubismclippingmanager.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 






const ColorChannelCount = 4; // 実験時に1チャンネルの場合は1、RGBだけの場合は3、アルファも含める場合は4
const ClippingMaskMaxCountOnDefault = 36; // 通常のフレームバッファ一枚あたりのマスク最大数
const ClippingMaskMaxCountOnMultiRenderTexture = 32; // フレームバッファが2枚以上ある場合のフレームバッファ一枚あたりのマスク最大数
class CubismClippingManager {
    /**
   * デストラクタ相当の処理
   */ release() {
        for(let i = 0; i < this._clippingContextListForMask.getSize(); i++){
            if (this._clippingContextListForMask.at(i)) {
                this._clippingContextListForMask.at(i).release();
                this._clippingContextListForMask.set(i, void 0);
            }
            this._clippingContextListForMask.set(i, null);
        }
        this._clippingContextListForMask = null;
        // _clippingContextListForDrawは_clippingContextListForMaskにあるインスタンスを指している。上記の処理により要素ごとのDELETEは不要。
        for(let i = 0; i < this._clippingContextListForDraw.getSize(); i++){
            this._clippingContextListForDraw.set(i, null);
        }
        this._clippingContextListForDraw = null;
        for(let i = 0; i < this._channelColors.getSize(); i++){
            this._channelColors.set(i, null);
        }
        this._channelColors = null;
        if (this._clearedFrameBufferFlags != null) {
            this._clearedFrameBufferFlags.clear();
        }
        this._clearedFrameBufferFlags = null;
    }
    /**
   * マネージャの初期化処理
   * クリッピングマスクを使う描画オブジェクトの登録を行う
   * @param model モデルのインスタンス
   * @param renderTextureCount バッファの生成数
   */ initialize(model, renderTextureCount) {
        // レンダーテクスチャの合計枚数の設定
        // 1以上の整数でない場合はそれぞれ警告を出す
        if (renderTextureCount % 1 != 0) {
            CubismLogWarning('The number of render textures must be specified as an integer. The decimal point is rounded down and corrected to an integer.');
            // 小数点以下を除去
            renderTextureCount = ~~renderTextureCount;
        }
        if (renderTextureCount < 1) {
            CubismLogWarning('The number of render textures must be an integer greater than or equal to 1. Set the number of render textures to 1.');
        }
        // 負の値が使われている場合は強制的に1枚と設定する
        this._renderTextureCount = renderTextureCount < 1 ? 1 : renderTextureCount;
        this._clearedFrameBufferFlags = new csmVector(this._renderTextureCount);
        // クリッピングマスクを使う描画オブジェクトをすべて登録する
        // クリッピングマスクは、通常数個程度に限定して使うものとする
        for(let i = 0; i < model.getDrawableCount(); i++){
            if (model.getDrawableMaskCounts()[i] <= 0) {
                // クリッピングマスクが使用されていないアートメッシュ（多くの場合使用しない）
                this._clippingContextListForDraw.pushBack(null);
                continue;
            }
            // 既にあるClipContextと同じかチェックする
            let clippingContext = this.findSameClip(model.getDrawableMasks()[i], model.getDrawableMaskCounts()[i]);
            if (clippingContext == null) {
                // 同一のマスクが存在していない場合は生成する
                clippingContext = new this._clippingContexttConstructor(this, model.getDrawableMasks()[i], model.getDrawableMaskCounts()[i]);
                this._clippingContextListForMask.pushBack(clippingContext);
            }
            clippingContext.addClippedDrawable(i);
            this._clippingContextListForDraw.pushBack(clippingContext);
        }
    }
    /**
   * 既にマスクを作っているかを確認
   * 作っている様であれば該当するクリッピングマスクのインスタンスを返す
   * 作っていなければNULLを返す
   * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのリスト
   * @param drawableMaskCounts 描画オブジェクトをマスクする描画オブジェクトの数
   * @return 該当するクリッピングマスクが存在すればインスタンスを返し、なければNULLを返す
   */ findSameClip(drawableMasks, drawableMaskCounts) {
        // 作成済みClippingContextと一致するか確認
        for(let i = 0; i < this._clippingContextListForMask.getSize(); i++){
            const clippingContext = this._clippingContextListForMask.at(i);
            const count = clippingContext._clippingIdCount;
            // 個数が違う場合は別物
            if (count != drawableMaskCounts) {
                continue;
            }
            let sameCount = 0;
            // 同じIDを持つか確認。配列の数が同じなので、一致した個数が同じなら同じ物を持つとする
            for(let j = 0; j < count; j++){
                const clipId = clippingContext._clippingIdList[j];
                for(let k = 0; k < count; k++){
                    if (drawableMasks[k] == clipId) {
                        sameCount++;
                        break;
                    }
                }
            }
            if (sameCount == count) {
                return clippingContext;
            }
        }
        return null; // 見つからなかった
    }
    /**
   * 高精細マスク処理用の行列を計算する
   * @param model モデルのインスタンス
   * @param isRightHanded 処理が右手系であるか
   */ setupMatrixForHighPrecision(model, isRightHanded) {
        // 全てのクリッピングを用意する
        // 同じクリップ（複数の場合はまとめて一つのクリップ）を使う場合は1度だけ設定する
        let usingClipCount = 0;
        for(let clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++){
            // １つのクリッピングマスクに関して
            const cc = this._clippingContextListForMask.at(clipIndex);
            // このクリップを利用する描画オブジェクト群全体を囲む矩形を計算
            this.calcClippedDrawTotalBounds(model, cc);
            if (cc._isUsing) {
                usingClipCount++; // 使用中としてカウント
            }
        }
        // マスク行列作成処理
        if (usingClipCount > 0) {
            this.setupLayoutBounds(0);
            // サイズがレンダーテクスチャの枚数と合わない場合は合わせる
            if (this._clearedFrameBufferFlags.getSize() != this._renderTextureCount) {
                this._clearedFrameBufferFlags.clear();
                for(let i = 0; i < this._renderTextureCount; i++){
                    this._clearedFrameBufferFlags.pushBack(false);
                }
            } else {
                // マスクのクリアフラグを毎フレーム開始時に初期化
                for(let i = 0; i < this._renderTextureCount; i++){
                    this._clearedFrameBufferFlags.set(i, false);
                }
            }
            // 実際にマスクを生成する
            // 全てのマスクをどの様にレイアウトして描くかを決定し、ClipContext , ClippedDrawContext に記憶する
            for(let clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++){
                // --- 実際に１つのマスクを描く ---
                const clipContext = this._clippingContextListForMask.at(clipIndex);
                const allClippedDrawRect = clipContext._allClippedDrawRect; //このマスクを使う、全ての描画オブジェクトの論理座標上の囲み矩形
                const layoutBoundsOnTex01 = clipContext._layoutBounds; //この中にマスクを収める
                const margin = 0.05;
                let scaleX = 0.0;
                let scaleY = 0.0;
                const ppu = model.getPixelsPerUnit();
                const maskPixelSize = clipContext.getClippingManager().getClippingMaskBufferSize();
                const physicalMaskWidth = layoutBoundsOnTex01.width * maskPixelSize;
                const physicalMaskHeight = layoutBoundsOnTex01.height * maskPixelSize;
                this._tmpBoundsOnModel.setRect(allClippedDrawRect);
                if (this._tmpBoundsOnModel.width * ppu > physicalMaskWidth) {
                    this._tmpBoundsOnModel.expand(allClippedDrawRect.width * margin, 0.0);
                    scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
                } else {
                    scaleX = ppu / physicalMaskWidth;
                }
                if (this._tmpBoundsOnModel.height * ppu > physicalMaskHeight) {
                    this._tmpBoundsOnModel.expand(0.0, allClippedDrawRect.height * margin);
                    scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
                } else {
                    scaleY = ppu / physicalMaskHeight;
                }
                // マスク生成時に使う行列を求める
                this.createMatrixForMask(isRightHanded, layoutBoundsOnTex01, scaleX, scaleY);
                clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
                clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
            }
        }
    }
    /**
   * マスク作成・描画用の行列を作成する。
   * @param isRightHanded 座標を右手系として扱うかを指定
   * @param layoutBoundsOnTex01 マスクを収める領域
   * @param scaleX 描画オブジェクトの伸縮率
   * @param scaleY 描画オブジェクトの伸縮率
   */ createMatrixForMask(isRightHanded, layoutBoundsOnTex01, scaleX, scaleY) {
        this._tmpMatrix.loadIdentity();
        {
            // Layout0..1 を -1..1に変換
            this._tmpMatrix.translateRelative(-1.0, -1.0);
            this._tmpMatrix.scaleRelative(2.0, 2.0);
        }
        {
            // view to Layout0..1
            this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y); //new = [translate]
            this._tmpMatrix.scaleRelative(scaleX, scaleY); //new = [translate][scale]
            this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y); //new = [translate][scale][translate]
        }
        // tmpMatrixForMask が計算結果
        this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
        this._tmpMatrix.loadIdentity();
        {
            this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y * (isRightHanded ? -1.0 : 1.0)); //new = [translate]
            this._tmpMatrix.scaleRelative(scaleX, scaleY * (isRightHanded ? -1.0 : 1.0)); //new = [translate][scale]
            this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y); //new = [translate][scale][translate]
        }
        this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
    }
    /**
   * クリッピングコンテキストを配置するレイアウト
   * 指定された数のレンダーテクスチャを極力いっぱいに使ってマスクをレイアウトする
   * マスクグループの数が4以下ならRGBA各チャンネルに一つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する。
   *
   * @param usingClipCount 配置するクリッピングコンテキストの数
   */ setupLayoutBounds(usingClipCount) {
        const useClippingMaskMaxCount = this._renderTextureCount <= 1 ? ClippingMaskMaxCountOnDefault : ClippingMaskMaxCountOnMultiRenderTexture * this._renderTextureCount;
        if (usingClipCount <= 0 || usingClipCount > useClippingMaskMaxCount) {
            if (usingClipCount > useClippingMaskMaxCount) {
                // マスクの制限数の警告を出す
                CubismLogError('not supported mask count : {0}\n[Details] render texture count : {1}, mask count : {2}', usingClipCount - useClippingMaskMaxCount, this._renderTextureCount, usingClipCount);
            }
            // この場合は一つのマスクターゲットを毎回クリアして使用する
            for(let index = 0; index < this._clippingContextListForMask.getSize(); index++){
                const clipContext = this._clippingContextListForMask.at(index);
                clipContext._layoutChannelIndex = 0; // どうせ毎回消すので固定
                clipContext._layoutBounds.x = 0.0;
                clipContext._layoutBounds.y = 0.0;
                clipContext._layoutBounds.width = 1.0;
                clipContext._layoutBounds.height = 1.0;
                clipContext._bufferIndex = 0;
            }
            return;
        }
        // レンダーテクスチャが1枚なら9分割する（最大36枚）
        const layoutCountMaxValue = this._renderTextureCount <= 1 ? 9 : 8;
        // 指定された数のレンダーテクスチャを極力いっぱいに使ってマスクをレイアウトする（デフォルトなら1）。
        // マスクグループの数が4以下ならRGBA各チャンネルに1つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する。
        let countPerSheetDiv = usingClipCount / this._renderTextureCount; // レンダーテクスチャ1枚あたり何枚割り当てるか。
        const reduceLayoutTextureCount = usingClipCount % this._renderTextureCount; // レイアウトの数を1枚減らすレンダーテクスチャの数（この数だけのレンダーテクスチャが対象）。
        // 1枚に割り当てるマスクの分割数を取りたいため、小数点は切り上げる
        countPerSheetDiv = Math.ceil(countPerSheetDiv);
        // RGBAを順番に使っていく
        let divCount = countPerSheetDiv / ColorChannelCount; // 1チャンネルに配置する基本のマスク
        const modCount = countPerSheetDiv % ColorChannelCount; // 余り、この番号のチャンネルまでに一つずつ配分する（インデックスではない）
        // 小数点は切り捨てる
        divCount = ~~divCount;
        // RGBAそれぞれのチャンネルを用意していく（0:R, 1:G, 2:B, 3:A）
        let curClipIndex = 0; // 順番に設定していく
        for(let renderTextureIndex = 0; renderTextureIndex < this._renderTextureCount; renderTextureIndex++){
            for(let channelIndex = 0; channelIndex < ColorChannelCount; channelIndex++){
                // このチャンネルにレイアウトする数
                // NOTE: レイアウト数 = 1チャンネルに配置する基本のマスク + 余りのマスクを置くチャンネルなら1つ追加
                let layoutCount = divCount + (channelIndex < modCount ? 1 : 0);
                // レイアウトの数を1枚減らす場合にそれを行うチャンネルを決定
                // divが0の時は正常なインデックスの範囲内になるように調整
                const checkChannelIndex = modCount + (divCount < 1 ? -1 : 0);
                // 今回が対象のチャンネルかつ、レイアウトの数を1枚減らすレンダーテクスチャが存在する場合
                if (channelIndex == checkChannelIndex && reduceLayoutTextureCount > 0) {
                    // 現在のレンダーテクスチャが、対象のレンダーテクスチャであればレイアウトの数を1枚減らす。
                    layoutCount -= !(renderTextureIndex < reduceLayoutTextureCount) ? 1 : 0;
                }
                // 分割方法を決定する
                if (layoutCount == 0) {
                // 何もしない
                } else if (layoutCount == 1) {
                    // 全てをそのまま使う
                    const clipContext = this._clippingContextListForMask.at(curClipIndex++);
                    clipContext._layoutChannelIndex = channelIndex;
                    clipContext._layoutBounds.x = 0.0;
                    clipContext._layoutBounds.y = 0.0;
                    clipContext._layoutBounds.width = 1.0;
                    clipContext._layoutBounds.height = 1.0;
                    clipContext._bufferIndex = renderTextureIndex;
                } else if (layoutCount == 2) {
                    for(let i = 0; i < layoutCount; i++){
                        let xpos = i % 2;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        const cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelIndex = channelIndex;
                        // UVを2つに分解して使う
                        cc._layoutBounds.x = xpos * 0.5;
                        cc._layoutBounds.y = 0.0;
                        cc._layoutBounds.width = 0.5;
                        cc._layoutBounds.height = 1.0;
                        cc._bufferIndex = renderTextureIndex;
                    }
                } else if (layoutCount <= 4) {
                    // 4分割して使う
                    for(let i = 0; i < layoutCount; i++){
                        let xpos = i % 2;
                        let ypos = i / 2;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        ypos = ~~ypos;
                        const cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelIndex = channelIndex;
                        cc._layoutBounds.x = xpos * 0.5;
                        cc._layoutBounds.y = ypos * 0.5;
                        cc._layoutBounds.width = 0.5;
                        cc._layoutBounds.height = 0.5;
                        cc._bufferIndex = renderTextureIndex;
                    }
                } else if (layoutCount <= layoutCountMaxValue) {
                    // 9分割して使う
                    for(let i = 0; i < layoutCount; i++){
                        let xpos = i % 3;
                        let ypos = i / 3;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        ypos = ~~ypos;
                        const cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelIndex = channelIndex;
                        cc._layoutBounds.x = xpos / 3.0;
                        cc._layoutBounds.y = ypos / 3.0;
                        cc._layoutBounds.width = 1.0 / 3.0;
                        cc._layoutBounds.height = 1.0 / 3.0;
                        cc._bufferIndex = renderTextureIndex;
                    }
                } else {
                    // マスクの制限枚数を超えた場合の処理
                    CubismLogError('not supported mask count : {0}\n[Details] render texture count : {1}, mask count : {2}', usingClipCount - useClippingMaskMaxCount, this._renderTextureCount, usingClipCount);
                    // SetupShaderProgramでオーバーアクセスが発生するので仮で数値を入れる
                    // もちろん描画結果は正しいものではなくなる
                    for(let index = 0; index < layoutCount; index++){
                        const cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelIndex = 0;
                        cc._layoutBounds.x = 0.0;
                        cc._layoutBounds.y = 0.0;
                        cc._layoutBounds.width = 1.0;
                        cc._layoutBounds.height = 1.0;
                        cc._bufferIndex = 0;
                    }
                }
            }
        }
    }
    /**
   * マスクされる描画オブジェクト群全体を囲む矩形（モデル座標系）を計算する
   * @param model モデルのインスタンス
   * @param clippingContext クリッピングマスクのコンテキスト
   */ calcClippedDrawTotalBounds(model, clippingContext) {
        // 被クリッピングマスク（マスクされる描画オブジェクト）の全体の矩形
        let clippedDrawTotalMinX = Number.MAX_VALUE;
        let clippedDrawTotalMinY = Number.MAX_VALUE;
        let clippedDrawTotalMaxX = Number.MIN_VALUE;
        let clippedDrawTotalMaxY = Number.MIN_VALUE;
        // このマスクが実際に必要か判定する
        // このクリッピングを利用する「描画オブジェクト」がひとつでも使用可能であればマスクを生成する必要がある
        const clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
        for(let clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++){
            // マスクを使用する描画オブジェクトの描画される矩形を求める
            const drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
            const drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
            const drawableVertexes = model.getDrawableVertices(drawableIndex);
            let minX = Number.MAX_VALUE;
            let minY = Number.MAX_VALUE;
            let maxX = -Number.MAX_VALUE;
            let maxY = -Number.MAX_VALUE;
            const loop = drawableVertexCount * Constant.vertexStep;
            for(let pi = Constant.vertexOffset; pi < loop; pi += Constant.vertexStep){
                const x = drawableVertexes[pi];
                const y = drawableVertexes[pi + 1];
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
                if (y < minY) {
                    minY = y;
                }
                if (y > maxY) {
                    maxY = y;
                }
            }
            // 有効な点が一つも取れなかったのでスキップ
            if (minX == Number.MAX_VALUE) {
                continue;
            }
            // 全体の矩形に反映
            if (minX < clippedDrawTotalMinX) {
                clippedDrawTotalMinX = minX;
            }
            if (minY < clippedDrawTotalMinY) {
                clippedDrawTotalMinY = minY;
            }
            if (maxX > clippedDrawTotalMaxX) {
                clippedDrawTotalMaxX = maxX;
            }
            if (maxY > clippedDrawTotalMaxY) {
                clippedDrawTotalMaxY = maxY;
            }
            if (clippedDrawTotalMinX == Number.MAX_VALUE) {
                clippingContext._allClippedDrawRect.x = 0.0;
                clippingContext._allClippedDrawRect.y = 0.0;
                clippingContext._allClippedDrawRect.width = 0.0;
                clippingContext._allClippedDrawRect.height = 0.0;
                clippingContext._isUsing = false;
            } else {
                clippingContext._isUsing = true;
                const w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
                const h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
                clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
                clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
                clippingContext._allClippedDrawRect.width = w;
                clippingContext._allClippedDrawRect.height = h;
            }
        }
    }
    /**
   * 画面描画に使用するクリッピングマスクのリストを取得する
   * @return 画面描画に使用するクリッピングマスクのリスト
   */ getClippingContextListForDraw() {
        return this._clippingContextListForDraw;
    }
    /**
   * クリッピングマスクバッファのサイズを取得する
   * @return クリッピングマスクバッファのサイズ
   */ getClippingMaskBufferSize() {
        return this._clippingMaskBufferSize;
    }
    /**
   * このバッファのレンダーテクスチャの枚数を取得する
   * @return このバッファのレンダーテクスチャの枚数
   */ getRenderTextureCount() {
        return this._renderTextureCount;
    }
    /**
   * カラーチャンネル（RGBA）のフラグを取得する
   * @param channelNo カラーチャンネル（RGBA）の番号（0:R, 1:G, 2:B, 3:A）
   */ getChannelFlagAsColor(channelNo) {
        return this._channelColors.at(channelNo);
    }
    /**
   * クリッピングマスクバッファのサイズを設定する
   * @param size クリッピングマスクバッファのサイズ
   */ setClippingMaskBufferSize(size) {
        this._clippingMaskBufferSize = size;
    }
    /**
   * コンストラクタ
   */ constructor(clippingContextFactory){
        (0,esm_define_property._)(this, "_clearedFrameBufferFlags", void 0); //マスクのクリアフラグの配列
        (0,esm_define_property._)(this, "_channelColors", void 0);
        (0,esm_define_property._)(this, "_clippingContextListForMask", void 0); // マスク用クリッピングコンテキストのリスト
        (0,esm_define_property._)(this, "_clippingContextListForDraw", void 0); // 描画用クリッピングコンテキストのリスト
        (0,esm_define_property._)(this, "_clippingMaskBufferSize", void 0); // クリッピングマスクのバッファサイズ（初期値:256）
        (0,esm_define_property._)(this, "_renderTextureCount", void 0); // 生成するレンダーテクスチャの枚数
        (0,esm_define_property._)(this, "_tmpMatrix", void 0); // マスク計算用の行列
        (0,esm_define_property._)(this, "_tmpMatrixForMask", void 0); // マスク計算用の行列
        (0,esm_define_property._)(this, "_tmpMatrixForDraw", void 0); // マスク計算用の行列
        (0,esm_define_property._)(this, "_tmpBoundsOnModel", void 0); // マスク配置計算用の矩形
        (0,esm_define_property._)(this, "_clippingContexttConstructor", void 0);
        this._renderTextureCount = 0;
        this._clippingMaskBufferSize = 256;
        this._clippingContextListForMask = new csmVector();
        this._clippingContextListForDraw = new csmVector();
        this._channelColors = new csmVector();
        this._tmpBoundsOnModel = new csmRect();
        this._tmpMatrix = new CubismMatrix44();
        this._tmpMatrixForMask = new CubismMatrix44();
        this._tmpMatrixForDraw = new CubismMatrix44();
        this._clippingContexttConstructor = clippingContextFactory;
        let tmp = new CubismTextureColor();
        tmp.r = 1.0;
        tmp.g = 0.0;
        tmp.b = 0.0;
        tmp.a = 0.0;
        this._channelColors.pushBack(tmp);
        tmp = new CubismTextureColor();
        tmp.r = 0.0;
        tmp.g = 1.0;
        tmp.b = 0.0;
        tmp.a = 0.0;
        this._channelColors.pushBack(tmp);
        tmp = new CubismTextureColor();
        tmp.r = 0.0;
        tmp.g = 0.0;
        tmp.b = 1.0;
        tmp.a = 0.0;
        this._channelColors.pushBack(tmp);
        tmp = new CubismTextureColor();
        tmp.r = 0.0;
        tmp.g = 0.0;
        tmp.b = 0.0;
        tmp.a = 1.0;
        this._channelColors.pushBack(tmp);
    }
}

;// CONCATENATED MODULE: ./framework/src/rendering/cubismshader_webgl.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 




let s_instance; // インスタンス（シングルトン）
const ShaderCount = 10; // シェーダーの数 = マスク生成用 + (通常用 + 加算 + 乗算) * (マスク無の乗算済アルファ対応版 + マスク有の乗算済アルファ対応版 + マスク有反転の乗算済アルファ対応版)
/**
 * WebGL用のシェーダープログラムを生成・破棄するクラス
 */ class CubismShader_WebGL {
    /**
   * デストラクタ相当の処理
   */ release() {
        this.releaseShaderProgram();
    }
    /**
   * 描画用のシェーダプログラムの一連のセットアップを実行する
   * @param renderer レンダラー
   * @param model 描画対象のモデル
   * @param index 描画対象のメッシュのインデックス
   */ setupShaderProgramForDraw(renderer, model, index) {
        if (!renderer.isPremultipliedAlpha()) {
            CubismLogError('NoPremultipliedAlpha is not allowed');
        }
        if (this._shaderSets.getSize() == 0) {
            this.generateShaders();
        }
        // Blending
        let srcColor;
        let dstColor;
        let srcAlpha;
        let dstAlpha;
        // _shaderSets用のオフセット計算
        const masked = renderer.getClippingContextBufferForDraw() != null; // この描画オブジェクトはマスク対象か
        const invertedMask = model.getDrawableInvertedMaskBit(index);
        const offset = masked ? invertedMask ? 2 : 1 : 0;
        let shaderSet;
        switch(model.getDrawableBlendMode(index)){
            case cubismrenderer_CubismBlendMode.CubismBlendMode_Normal:
            default:
                shaderSet = this._shaderSets.at(1 + offset);
                srcColor = this.gl.ONE;
                dstColor = this.gl.ONE_MINUS_SRC_ALPHA;
                srcAlpha = this.gl.ONE;
                dstAlpha = this.gl.ONE_MINUS_SRC_ALPHA;
                break;
            case cubismrenderer_CubismBlendMode.CubismBlendMode_Additive:
                shaderSet = this._shaderSets.at(4 + offset);
                srcColor = this.gl.ONE;
                dstColor = this.gl.ONE;
                srcAlpha = this.gl.ZERO;
                dstAlpha = this.gl.ONE;
                break;
            case cubismrenderer_CubismBlendMode.CubismBlendMode_Multiplicative:
                shaderSet = this._shaderSets.at(7 + offset);
                srcColor = this.gl.DST_COLOR;
                dstColor = this.gl.ONE_MINUS_SRC_ALPHA;
                srcAlpha = this.gl.ZERO;
                dstAlpha = this.gl.ONE;
                break;
        }
        this.gl.useProgram(shaderSet.shaderProgram);
        // 頂点配列の設定
        if (renderer._bufferData.vertex == null) {
            renderer._bufferData.vertex = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, renderer._bufferData.vertex);
        // 頂点配列の設定
        const vertexArray = model.getDrawableVertices(index);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
        this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
        // テクスチャ頂点の設定
        if (renderer._bufferData.uv == null) {
            renderer._bufferData.uv = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, renderer._bufferData.uv);
        const uvArray = model.getDrawableVertexUvs(index);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
        this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
        if (masked) {
            this.gl.activeTexture(this.gl.TEXTURE1);
            // frameBufferに書かれたテクスチャ
            const tex = renderer.getClippingContextBufferForDraw().getClippingManager().getColorBuffer().at(renderer.getClippingContextBufferForDraw()._bufferIndex);
            this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
            this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
            // view座標をClippingContextの座標に変換するための行列を設定
            this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForDraw()._matrixForDraw.getArray());
            // 使用するカラーチャンネルを設定
            const channelIndex = renderer.getClippingContextBufferForDraw()._layoutChannelIndex;
            const colorChannel = renderer.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor(channelIndex);
            this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.r, colorChannel.g, colorChannel.b, colorChannel.a);
        }
        // テクスチャ設定
        const textureNo = model.getDrawableTextureIndex(index);
        const textureId = renderer.getBindedTextures().getValue(textureNo);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
        this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
        //座標変換
        const matrix4x4 = renderer.getMvpMatrix();
        this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, matrix4x4.getArray());
        //ベース色の取得
        const baseColor = renderer.getModelColorWithOpacity(model.getDrawableOpacity(index));
        const multiplyColor = model.getMultiplyColor(index);
        const screenColor = model.getScreenColor(index);
        this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.r, baseColor.g, baseColor.b, baseColor.a);
        this.gl.uniform4f(shaderSet.uniformMultiplyColorLocation, multiplyColor.r, multiplyColor.g, multiplyColor.b, multiplyColor.a);
        this.gl.uniform4f(shaderSet.uniformScreenColorLocation, screenColor.r, screenColor.g, screenColor.b, screenColor.a);
        // IBOを作成し、データを転送
        if (renderer._bufferData.index == null) {
            renderer._bufferData.index = this.gl.createBuffer();
        }
        const indexArray = model.getDrawableVertexIndices(index);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, renderer._bufferData.index);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
        this.gl.blendFuncSeparate(srcColor, dstColor, srcAlpha, dstAlpha);
    }
    /**
   * マスク用のシェーダプログラムの一連のセットアップを実行する
   * @param renderer レンダラー
   * @param model 描画対象のモデル
   * @param index 描画対象のメッシュのインデックス
   */ setupShaderProgramForMask(renderer, model, index) {
        if (!renderer.isPremultipliedAlpha()) {
            CubismLogError('NoPremultipliedAlpha is not allowed');
        }
        if (this._shaderSets.getSize() == 0) {
            this.generateShaders();
        }
        const shaderSet = this._shaderSets.at(0);
        this.gl.useProgram(shaderSet.shaderProgram);
        // 頂点配列の設定
        if (renderer._bufferData.vertex == null) {
            renderer._bufferData.vertex = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, renderer._bufferData.vertex);
        const vertexArray = model.getDrawableVertices(index);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
        this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
        //テクスチャ設定
        if (renderer._bufferData.uv == null) {
            renderer._bufferData.uv = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, renderer._bufferData.uv);
        const textureNo = model.getDrawableTextureIndex(index);
        const textureId = renderer.getBindedTextures().getValue(textureNo);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
        this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
        // テクスチャ頂点の設定
        if (renderer._bufferData.uv == null) {
            renderer._bufferData.uv = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, renderer._bufferData.uv);
        const uvArray = model.getDrawableVertexUvs(index);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
        this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
        // チャンネル
        const context = renderer.getClippingContextBufferForMask();
        const channelIndex = renderer.getClippingContextBufferForMask()._layoutChannelIndex;
        const colorChannel = renderer.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(channelIndex);
        this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.r, colorChannel.g, colorChannel.b, colorChannel.a);
        this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForMask()._matrixForMask.getArray());
        const rect = renderer.getClippingContextBufferForMask()._layoutBounds;
        this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2.0 - 1.0, rect.y * 2.0 - 1.0, rect.getRight() * 2.0 - 1.0, rect.getBottom() * 2.0 - 1.0);
        const multiplyColor = model.getMultiplyColor(index);
        const screenColor = model.getScreenColor(index);
        this.gl.uniform4f(shaderSet.uniformMultiplyColorLocation, multiplyColor.r, multiplyColor.g, multiplyColor.b, multiplyColor.a);
        this.gl.uniform4f(shaderSet.uniformScreenColorLocation, screenColor.r, screenColor.g, screenColor.b, screenColor.a);
        // Blending
        const srcColor = this.gl.ZERO;
        const dstColor = this.gl.ONE_MINUS_SRC_COLOR;
        const srcAlpha = this.gl.ZERO;
        const dstAlpha = this.gl.ONE_MINUS_SRC_ALPHA;
        // IBOを作成し、データを転送
        if (renderer._bufferData.index == null) {
            renderer._bufferData.index = this.gl.createBuffer();
        }
        const indexArray = model.getDrawableVertexIndices(index);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, renderer._bufferData.index);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
        this.gl.blendFuncSeparate(srcColor, dstColor, srcAlpha, dstAlpha);
    }
    /**
   * シェーダープログラムを解放する
   */ releaseShaderProgram() {
        for(let i = 0; i < this._shaderSets.getSize(); i++){
            this.gl.deleteProgram(this._shaderSets.at(i).shaderProgram);
            this._shaderSets.at(i).shaderProgram = 0;
            this._shaderSets.set(i, void 0);
            this._shaderSets.set(i, null);
        }
    }
    /**
   * シェーダープログラムを初期化する
   * @param vertShaderSrc 頂点シェーダのソース
   * @param fragShaderSrc フラグメントシェーダのソース
   */ generateShaders() {
        for(let i = 0; i < ShaderCount; i++){
            this._shaderSets.pushBack(new CubismShaderSet());
        }
        this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(vertexShaderSrcSetupMask, fragmentShaderSrcsetupMask);
        this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(vertexShaderSrc, fragmentShaderSrcPremultipliedAlpha);
        this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(vertexShaderSrcMasked, fragmentShaderSrcMaskPremultipliedAlpha);
        this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(vertexShaderSrcMasked, fragmentShaderSrcMaskInvertedPremultipliedAlpha);
        // 加算も通常と同じシェーダーを利用する
        this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram;
        this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram;
        this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram;
        // 乗算も通常と同じシェーダーを利用する
        this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram;
        this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram;
        this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram;
        // SetupMask
        this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, 'a_position');
        this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, 'a_texCoord');
        this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 's_texture0');
        this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_baseColor');
        this._shaderSets.at(0).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(0).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_screenColor');
        // 通常（PremultipliedAlpha）
        this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, 'a_position');
        this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, 'a_texCoord');
        this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 's_texture0');
        this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_matrix');
        this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_baseColor');
        this._shaderSets.at(1).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(1).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_screenColor');
        // 通常（クリッピング、PremultipliedAlpha）
        this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, 'a_position');
        this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, 'a_texCoord');
        this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 's_texture0');
        this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 's_texture1');
        this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_matrix');
        this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_baseColor');
        this._shaderSets.at(2).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(2).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_screenColor');
        // 通常（クリッピング・反転, PremultipliedAlpha）
        this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, 'a_position');
        this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, 'a_texCoord');
        this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 's_texture0');
        this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 's_texture1');
        this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_matrix');
        this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_baseColor');
        this._shaderSets.at(3).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(3).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_screenColor');
        // 加算（PremultipliedAlpha）
        this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, 'a_position');
        this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, 'a_texCoord');
        this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 's_texture0');
        this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_matrix');
        this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_baseColor');
        this._shaderSets.at(4).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(4).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_screenColor');
        // 加算（クリッピング、PremultipliedAlpha）
        this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, 'a_position');
        this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, 'a_texCoord');
        this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 's_texture0');
        this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 's_texture1');
        this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_matrix');
        this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_baseColor');
        this._shaderSets.at(5).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(5).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_screenColor');
        // 加算（クリッピング・反転、PremultipliedAlpha）
        this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, 'a_position');
        this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, 'a_texCoord');
        this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 's_texture0');
        this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 's_texture1');
        this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_matrix');
        this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_baseColor');
        this._shaderSets.at(6).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(6).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_screenColor');
        // 乗算（PremultipliedAlpha）
        this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, 'a_position');
        this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, 'a_texCoord');
        this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 's_texture0');
        this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_matrix');
        this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_baseColor');
        this._shaderSets.at(7).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(7).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_screenColor');
        // 乗算（クリッピング、PremultipliedAlpha）
        this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, 'a_position');
        this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, 'a_texCoord');
        this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 's_texture0');
        this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 's_texture1');
        this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_matrix');
        this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_baseColor');
        this._shaderSets.at(8).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(8).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_screenColor');
        // 乗算（クリッピング・反転、PremultipliedAlpha）
        this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, 'a_position');
        this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, 'a_texCoord');
        this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 's_texture0');
        this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 's_texture1');
        this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_matrix');
        this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_baseColor');
        this._shaderSets.at(9).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_multiplyColor');
        this._shaderSets.at(9).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_screenColor');
    }
    /**
   * シェーダプログラムをロードしてアドレスを返す
   * @param vertexShaderSource    頂点シェーダのソース
   * @param fragmentShaderSource  フラグメントシェーダのソース
   * @return シェーダプログラムのアドレス
   */ loadShaderProgram(vertexShaderSource, fragmentShaderSource) {
        // Create Shader Program
        let shaderProgram = this.gl.createProgram();
        let vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
        if (!vertShader) {
            CubismLogError('Vertex shader compile error!');
            return 0;
        }
        let fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!fragShader) {
            CubismLogError('Vertex shader compile error!');
            return 0;
        }
        // Attach vertex shader to program
        this.gl.attachShader(shaderProgram, vertShader);
        // Attach fragment shader to program
        this.gl.attachShader(shaderProgram, fragShader);
        // link program
        this.gl.linkProgram(shaderProgram);
        const linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
        // リンクに失敗したらシェーダーを削除
        if (!linkStatus) {
            CubismLogError('Failed to link program: {0}', shaderProgram);
            this.gl.deleteShader(vertShader);
            vertShader = 0;
            this.gl.deleteShader(fragShader);
            fragShader = 0;
            if (shaderProgram) {
                this.gl.deleteProgram(shaderProgram);
                shaderProgram = 0;
            }
            return 0;
        }
        // Release vertex and fragment shaders.
        this.gl.deleteShader(vertShader);
        this.gl.deleteShader(fragShader);
        return shaderProgram;
    }
    /**
   * シェーダープログラムをコンパイルする
   * @param shaderType シェーダタイプ(Vertex/Fragment)
   * @param shaderSource シェーダソースコード
   *
   * @return コンパイルされたシェーダープログラム
   */ compileShaderSource(shaderType, shaderSource) {
        const source = shaderSource;
        const shader = this.gl.createShader(shaderType);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!shader) {
            const log = this.gl.getShaderInfoLog(shader);
            CubismLogError('Shader compile log: {0} ', log);
        }
        const status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!status) {
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    setGl(gl) {
        this.gl = gl;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_shaderSets", void 0); // ロードしたシェーダープログラムを保持する変数
        (0,esm_define_property._)(this, "gl", void 0); // webglコンテキスト
        this._shaderSets = new csmVector();
    }
}
/**
 * GLContextごとにCubismShader_WebGLを確保するためのクラス
 * シングルトンなクラスであり、CubismShaderManager_WebGL.getInstanceからアクセスする。
 */ class CubismShaderManager_WebGL {
    /**
   * インスタンスを取得する（シングルトン）
   * @return インスタンス
   */ static getInstance() {
        if (s_instance == null) {
            s_instance = new CubismShaderManager_WebGL();
        }
        return s_instance;
    }
    /**
   * インスタンスを開放する（シングルトン）
   */ static deleteInstance() {
        if (s_instance) {
            s_instance.release();
            s_instance = null;
        }
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        for(const ite = this._shaderMap.begin(); ite.notEqual(this._shaderMap.end()); ite.preIncrement()){
            ite.ptr().second.release();
        }
        this._shaderMap.clear();
    }
    /**
   * GLContextをキーにShaderを取得する
   * @param gl
   * @returns
   */ getShader(gl) {
        return this._shaderMap.getValue(gl);
    }
    /**
   * GLContextを登録する
   * @param gl
   */ setGlContext(gl) {
        if (!this._shaderMap.isExist(gl)) {
            const instance = new CubismShader_WebGL();
            instance.setGl(gl);
            this._shaderMap.setValue(gl, instance);
        }
    }
    /**
   * Privateなコンストラクタ
   */ constructor(){
        /**
   * GLContextごとのShaderを保持する変数
   */ (0,esm_define_property._)(this, "_shaderMap", void 0);
        this._shaderMap = new csmMap();
    }
}
/**
 * CubismShader_WebGLのインナークラス
 */ class CubismShaderSet {
    constructor(){
        (0,esm_define_property._)(this, "shaderProgram", void 0); // シェーダープログラムのアドレス
        (0,esm_define_property._)(this, "attributePositionLocation", void 0); // シェーダープログラムに渡す変数のアドレス（Position）
        (0,esm_define_property._)(this, "attributeTexCoordLocation", void 0); // シェーダープログラムに渡す変数のアドレス（TexCoord）
        (0,esm_define_property._)(this, "uniformMatrixLocation", void 0); // シェーダープログラムに渡す変数のアドレス（Matrix）
        (0,esm_define_property._)(this, "uniformClipMatrixLocation", void 0); // シェーダープログラムに渡す変数のアドレス（ClipMatrix）
        (0,esm_define_property._)(this, "samplerTexture0Location", void 0); // シェーダープログラムに渡す変数のアドレス（Texture0）
        (0,esm_define_property._)(this, "samplerTexture1Location", void 0); // シェーダープログラムに渡す変数のアドレス（Texture1）
        (0,esm_define_property._)(this, "uniformBaseColorLocation", void 0); // シェーダープログラムに渡す変数のアドレス（BaseColor）
        (0,esm_define_property._)(this, "uniformChannelFlagLocation", void 0); // シェーダープログラムに渡す変数のアドレス（ChannelFlag）
        (0,esm_define_property._)(this, "uniformMultiplyColorLocation", void 0); // シェーダープログラムに渡す変数のアドレス（MultiplyColor）
        (0,esm_define_property._)(this, "uniformScreenColorLocation", void 0); // シェーダープログラムに渡す変数のアドレス（ScreenColor）
    }
}
var cubismshader_webgl_ShaderNames = /*#__PURE__*/ function(ShaderNames) {
    // SetupMask
    ShaderNames[ShaderNames["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
    // Normal
    ShaderNames[ShaderNames["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_NomralMaskedInvertedPremultipliedAlpha"] = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha";
    // Add
    ShaderNames[ShaderNames["ShaderNames_AddPremultipliedAlpha"] = 4] = "ShaderNames_AddPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlpha"] = 5] = "ShaderNames_AddMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlphaInverted"] = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted";
    // Mult
    ShaderNames[ShaderNames["ShaderNames_MultPremultipliedAlpha"] = 7] = "ShaderNames_MultPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlpha"] = 8] = "ShaderNames_MultMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlphaInverted"] = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted";
    return ShaderNames;
}({});
const vertexShaderSrcSetupMask = 'attribute vec4     a_position;' + 'attribute vec2     a_texCoord;' + 'varying vec2       v_texCoord;' + 'varying vec4       v_myPos;' + 'uniform mat4       u_clipMatrix;' + 'void main()' + '{' + '   gl_Position = u_clipMatrix * a_position;' + '   v_myPos = u_clipMatrix * a_position;' + '   v_texCoord = a_texCoord;' + '   v_texCoord.y = 1.0 - v_texCoord.y;' + '}';
const fragmentShaderSrcsetupMask = 'precision mediump float;' + 'varying vec2       v_texCoord;' + 'varying vec4       v_myPos;' + 'uniform vec4       u_baseColor;' + 'uniform vec4       u_channelFlag;' + 'uniform sampler2D  s_texture0;' + 'void main()' + '{' + '   float isInside = ' + '       step(u_baseColor.x, v_myPos.x/v_myPos.w)' + '       * step(u_baseColor.y, v_myPos.y/v_myPos.w)' + '       * step(v_myPos.x/v_myPos.w, u_baseColor.z)' + '       * step(v_myPos.y/v_myPos.w, u_baseColor.w);' + '   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;' + '}';
//----- バーテックスシェーダプログラム -----
// Normal & Add & Mult 共通
const vertexShaderSrc = 'attribute vec4     a_position;' + //v.vertex
'attribute vec2     a_texCoord;' + //v.texcoord
'varying vec2       v_texCoord;' + //v2f.texcoord
'uniform mat4       u_matrix;' + 'void main()' + '{' + '   gl_Position = u_matrix * a_position;' + '   v_texCoord = a_texCoord;' + '   v_texCoord.y = 1.0 - v_texCoord.y;' + '}';
// Normal & Add & Mult 共通（クリッピングされたものの描画用）
const vertexShaderSrcMasked = 'attribute vec4     a_position;' + 'attribute vec2     a_texCoord;' + 'varying vec2       v_texCoord;' + 'varying vec4       v_clipPos;' + 'uniform mat4       u_matrix;' + 'uniform mat4       u_clipMatrix;' + 'void main()' + '{' + '   gl_Position = u_matrix * a_position;' + '   v_clipPos = u_clipMatrix * a_position;' + '   v_texCoord = a_texCoord;' + '   v_texCoord.y = 1.0 - v_texCoord.y;' + '}';
//----- フラグメントシェーダプログラム -----
// Normal & Add & Mult 共通 （PremultipliedAlpha）
const fragmentShaderSrcPremultipliedAlpha = 'precision mediump float;' + 'varying vec2       v_texCoord;' + //v2f.texcoord
'uniform vec4       u_baseColor;' + 'uniform sampler2D  s_texture0;' + //_MainTex
'uniform vec4       u_multiplyColor;' + 'uniform vec4       u_screenColor;' + 'void main()' + '{' + '   vec4 texColor = texture2D(s_texture0, v_texCoord);' + '   texColor.rgb = texColor.rgb * u_multiplyColor.rgb;' + '   texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);' + '   vec4 color = texColor * u_baseColor;' + '   gl_FragColor = vec4(color.rgb, color.a);' + '}';
// Normal （クリッピングされたものの描画用、PremultipliedAlpha兼用）
const fragmentShaderSrcMaskPremultipliedAlpha = 'precision mediump float;' + 'varying vec2       v_texCoord;' + 'varying vec4       v_clipPos;' + 'uniform vec4       u_baseColor;' + 'uniform vec4       u_channelFlag;' + 'uniform sampler2D  s_texture0;' + 'uniform sampler2D  s_texture1;' + 'uniform vec4       u_multiplyColor;' + 'uniform vec4       u_screenColor;' + 'void main()' + '{' + '   vec4 texColor = texture2D(s_texture0, v_texCoord);' + '   texColor.rgb = texColor.rgb * u_multiplyColor.rgb;' + '   texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);' + '   vec4 col_formask = texColor * u_baseColor;' + '   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' + '   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' + '   col_formask = col_formask * maskVal;' + '   gl_FragColor = col_formask;' + '}';
// Normal & Add & Mult 共通（クリッピングされて反転使用の描画用、PremultipliedAlphaの場合）
const fragmentShaderSrcMaskInvertedPremultipliedAlpha = 'precision mediump float;' + 'varying vec2      v_texCoord;' + 'varying vec4      v_clipPos;' + 'uniform sampler2D s_texture0;' + 'uniform sampler2D s_texture1;' + 'uniform vec4      u_channelFlag;' + 'uniform vec4      u_baseColor;' + 'uniform vec4      u_multiplyColor;' + 'uniform vec4      u_screenColor;' + 'void main()' + '{' + '   vec4 texColor = texture2D(s_texture0, v_texCoord);' + '   texColor.rgb = texColor.rgb * u_multiplyColor.rgb;' + '   texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);' + '   vec4 col_formask = texColor * u_baseColor;' + '   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' + '   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' + '   col_formask = col_formask * (1.0 - maskVal);' + '   gl_FragColor = col_formask;' + '}';
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismShaderSet = CubismShaderSet;
    Live2DCubismFramework.CubismShader_WebGL = CubismShader_WebGL;
    Live2DCubismFramework.CubismShaderManager_WebGL = CubismShaderManager_WebGL;
    Live2DCubismFramework.ShaderNames = cubismshader_webgl_ShaderNames;
})(cubismshader_webgl_Live2DCubismFramework || (cubismshader_webgl_Live2DCubismFramework = {}));
var cubismshader_webgl_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/rendering/cubismrenderer_webgl.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 






let s_viewport;
let s_fbo;
/**
 * クリッピングマスクの処理を実行するクラス
 */ class CubismClippingManager_WebGL extends CubismClippingManager {
    /**
   * テンポラリのレンダーテクスチャのアドレスを取得する
   * FrameBufferObjectが存在しない場合、新しく生成する
   *
   * @return レンダーテクスチャの配列
   */ getMaskRenderTexture() {
        // テンポラリのRenderTextureを取得する
        if (this._maskTexture && this._maskTexture.textures != null) {
            // 前回使ったものを返す
            this._maskTexture.frameNo = this._currentFrameNo;
        } else {
            // FrameBufferObjectが存在しない場合、新しく生成する
            if (this._maskRenderTextures != null) {
                this._maskRenderTextures.clear();
            }
            this._maskRenderTextures = new csmVector();
            // ColorBufferObjectが存在しない場合、新しく生成する
            if (this._maskColorBuffers != null) {
                this._maskColorBuffers.clear();
            }
            this._maskColorBuffers = new csmVector();
            // クリッピングバッファサイズを取得
            const size = this._clippingMaskBufferSize;
            for(let index = 0; index < this._renderTextureCount; index++){
                this._maskColorBuffers.pushBack(this.gl.createTexture()); // 直接代入
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._maskColorBuffers.at(index));
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
                this.gl.bindTexture(this.gl.TEXTURE_2D, null);
                this._maskRenderTextures.pushBack(this.gl.createFramebuffer());
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTextures.at(index));
                this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._maskColorBuffers.at(index), 0);
            }
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
            this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, this._maskRenderTextures);
        }
        return this._maskTexture.textures;
    }
    /**
   * WebGLレンダリングコンテキストを設定する
   * @param gl WebGLレンダリングコンテキスト
   */ setGL(gl) {
        this.gl = gl;
    }
    /**
   * クリッピングコンテキストを作成する。モデル描画時に実行する。
   * @param model モデルのインスタンス
   * @param renderer レンダラのインスタンス
   */ setupClippingContext(model, renderer) {
        this._currentFrameNo++;
        // 全てのクリッピングを用意する
        // 同じクリップ（複数の場合はまとめて一つのクリップ）を使う場合は1度だけ設定する
        let usingClipCount = 0;
        for(let clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++){
            // 1つのクリッピングマスクに関して
            const cc = this._clippingContextListForMask.at(clipIndex);
            // このクリップを利用する描画オブジェクト群全体を囲む矩形を計算
            this.calcClippedDrawTotalBounds(model, cc);
            if (cc._isUsing) {
                usingClipCount++; // 使用中としてカウント
            }
        }
        // マスク作成処理
        if (usingClipCount > 0) {
            // 生成したFrameBufferと同じサイズでビューポートを設定
            this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
            // 後の計算のためにインデックスの最初をセット
            this._currentMaskRenderTexture = this.getMaskRenderTexture().at(0);
            renderer.preDraw(); // バッファをクリアする
            this.setupLayoutBounds(usingClipCount);
            // ---------- マスク描画処理 ----------
            // マスク用RenderTextureをactiveにセット
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._currentMaskRenderTexture);
            // サイズがレンダーテクスチャの枚数と合わない場合は合わせる
            if (this._clearedFrameBufferFlags.getSize() != this._renderTextureCount) {
                this._clearedFrameBufferFlags.clear();
                this._clearedFrameBufferFlags = new csmVector(this._renderTextureCount);
            }
            // マスクのクリアフラグを毎フレーム開始時に初期化
            for(let index = 0; index < this._clearedFrameBufferFlags.getSize(); index++){
                this._clearedFrameBufferFlags.set(index, false);
            }
            // 実際にマスクを生成する
            // 全てのマスクをどのようにレイアウトして描くかを決定し、ClipContext, ClippedDrawContextに記憶する
            for(let clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++){
                // --- 実際に1つのマスクを描く ---
                const clipContext = this._clippingContextListForMask.at(clipIndex);
                const allClipedDrawRect = clipContext._allClippedDrawRect; // このマスクを使う、すべての描画オブジェクトの論理座標上の囲み矩形
                const layoutBoundsOnTex01 = clipContext._layoutBounds; // この中にマスクを収める
                const margin = 0.05; // モデル座標上の矩形を、適宜マージンを付けて使う
                let scaleX = 0;
                let scaleY = 0;
                // clipContextに設定したレンダーテクスチャをインデックスで取得
                const clipContextRenderTexture = this.getMaskRenderTexture().at(clipContext._bufferIndex);
                // 現在のレンダーテクスチャがclipContextのものと異なる場合
                if (this._currentMaskRenderTexture != clipContextRenderTexture) {
                    this._currentMaskRenderTexture = clipContextRenderTexture;
                    renderer.preDraw(); // バッファをクリアする
                    // マスク用RenderTextureをactiveにセット
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._currentMaskRenderTexture);
                }
                this._tmpBoundsOnModel.setRect(allClipedDrawRect);
                this._tmpBoundsOnModel.expand(allClipedDrawRect.width * margin, allClipedDrawRect.height * margin);
                //########## 本来は割り当てられた領域の全体を使わず必要最低限のサイズがよい
                // シェーダ用の計算式を求める。回転を考慮しない場合は以下のとおり
                // movePeriod' = movePeriod * scaleX + offX		  [[ movePeriod' = (movePeriod - tmpBoundsOnModel.movePeriod)*scale + layoutBoundsOnTex01.movePeriod ]]
                scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
                scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
                // マスク生成時に使う行列を求める
                {
                    // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                    this._tmpMatrix.loadIdentity();
                    {
                        // layout0..1 を -1..1に変換
                        this._tmpMatrix.translateRelative(-1.0, -1.0);
                        this._tmpMatrix.scaleRelative(2.0, 2.0);
                    }
                    {
                        // view to layout0..1
                        this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                        this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                        this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                    // new = [translate][scale][translate]
                    }
                    // tmpMatrixForMaskが計算結果
                    this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
                }
                //--------- draw時の mask 参照用行列を計算
                {
                    // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                    this._tmpMatrix.loadIdentity();
                    {
                        this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                        this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                        this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                    // new = [translate][scale][translate]
                    }
                    this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
                }
                clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
                clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                const clipDrawCount = clipContext._clippingIdCount;
                for(let i = 0; i < clipDrawCount; i++){
                    const clipDrawIndex = clipContext._clippingIdList[i];
                    // 頂点情報が更新されておらず、信頼性がない場合は描画をパスする
                    if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
                        continue;
                    }
                    renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
                    // マスクがクリアされていないなら処理する
                    if (!this._clearedFrameBufferFlags.at(clipContext._bufferIndex)) {
                        // マスクをクリアする
                        // (仮仕様) 1が無効（描かれない）領域、0が有効（描かれる）領域。（シェーダーCd*Csで0に近い値をかけてマスクを作る。1をかけると何も起こらない）
                        this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
                        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                        this._clearedFrameBufferFlags.set(clipContext._bufferIndex, true);
                    }
                    // 今回専用の変換を適用して描く
                    // チャンネルも切り替える必要がある(A,R,G,B)
                    renderer.setClippingContextBufferForMask(clipContext);
                    renderer.drawMeshWebGL(model, clipDrawIndex);
                }
            }
            // --- 後処理 ---
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo); // 描画対象を戻す
            renderer.setClippingContextBufferForMask(null);
            this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
        }
    }
    /**
   * カラーバッファを取得する
   * @return カラーバッファ
   */ getColorBuffer() {
        return this._maskColorBuffers;
    }
    /**
   * マスクの合計数をカウント
   * @returns
   */ getClippingMaskCount() {
        return this._clippingContextListForMask.getSize();
    }
    /**
   * コンストラクタ
   */ constructor(){
        // @ts-ignore
        super(CubismClippingContext_WebGL), (0,esm_define_property._)(this, "_currentMaskRenderTexture", void 0 // マスク用レンダーテクスチャのアドレス
        ), (0,esm_define_property._)(this, "_maskRenderTextures", void 0 // レンダーテクスチャのリスト
        ), (0,esm_define_property._)(this, "_maskColorBuffers", void 0 // マスク用カラーバッファーのアドレスのリスト
        ), (0,esm_define_property._)(this, "_currentFrameNo", void 0 // マスクテクスチャに与えるフレーム番号
        ), (0,esm_define_property._)(this, "_maskTexture", void 0 // マスク用のテクスチャリソースのリスト
        ), (0,esm_define_property._)(this, "gl", void 0 // WebGLレンダリングコンテキスト
        );
    }
}
/**
 * レンダーテクスチャのリソースを定義する構造体
 * クリッピングマスクで使用する
 */ class CubismRenderTextureResource {
    /**
   * 引数付きコンストラクタ
   * @param frameNo レンダラーのフレーム番号
   * @param texture テクスチャのアドレス
   */ constructor(frameNo, texture){
        (0,esm_define_property._)(this, "frameNo", void 0); // レンダラのフレーム番号
        (0,esm_define_property._)(this, "textures", void 0); // テクスチャのアドレス
        this.frameNo = frameNo;
        this.textures = texture;
    }
}
/**
 * クリッピングマスクのコンテキスト
 */ class CubismClippingContext_WebGL extends CubismClippingContext {
    /**
   * このマスクを管理するマネージャのインスタンスを取得する
   * @return クリッピングマネージャのインスタンス
   */ getClippingManager() {
        return this._owner;
    }
    setGl(gl) {
        this._owner.setGL(gl);
    }
    /**
   * 引数付きコンストラクタ
   */ constructor(manager, clippingDrawableIndices, clipCount){
        super(clippingDrawableIndices, clipCount), (0,esm_define_property._)(this, "_owner", void 0 // このマスクを管理しているマネージャのインスタンス
        );
        this._owner = manager;
    }
}
class CubismRendererProfile_WebGL {
    setGlEnable(index, enabled) {
        if (enabled) this.gl.enable(index);
        else this.gl.disable(index);
    }
    setGlEnableVertexAttribArray(index, enabled) {
        if (enabled) this.gl.enableVertexAttribArray(index);
        else this.gl.disableVertexAttribArray(index);
    }
    save() {
        if (this.gl == null) {
            CubismLogError("'gl' is null. WebGLRenderingContext is required.\nPlease call 'CubimRenderer_WebGL.startUp' function.");
            return;
        }
        //-- push state --
        this._lastArrayBufferBinding = this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING);
        this._lastElementArrayBufferBinding = this.gl.getParameter(this.gl.ELEMENT_ARRAY_BUFFER_BINDING);
        this._lastProgram = this.gl.getParameter(this.gl.CURRENT_PROGRAM);
        this._lastActiveTexture = this.gl.getParameter(this.gl.ACTIVE_TEXTURE);
        this.gl.activeTexture(this.gl.TEXTURE1); //テクスチャユニット1をアクティブに（以後の設定対象とする）
        this._lastTexture1Binding2D = this.gl.getParameter(this.gl.TEXTURE_BINDING_2D);
        this.gl.activeTexture(this.gl.TEXTURE0); //テクスチャユニット0をアクティブに（以後の設定対象とする）
        this._lastTexture0Binding2D = this.gl.getParameter(this.gl.TEXTURE_BINDING_2D);
        this._lastVertexAttribArrayEnabled[0] = this.gl.getVertexAttrib(0, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED);
        this._lastVertexAttribArrayEnabled[1] = this.gl.getVertexAttrib(1, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED);
        this._lastVertexAttribArrayEnabled[2] = this.gl.getVertexAttrib(2, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED);
        this._lastVertexAttribArrayEnabled[3] = this.gl.getVertexAttrib(3, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED);
        this._lastScissorTest = this.gl.isEnabled(this.gl.SCISSOR_TEST);
        this._lastStencilTest = this.gl.isEnabled(this.gl.STENCIL_TEST);
        this._lastDepthTest = this.gl.isEnabled(this.gl.DEPTH_TEST);
        this._lastCullFace = this.gl.isEnabled(this.gl.CULL_FACE);
        this._lastBlend = this.gl.isEnabled(this.gl.BLEND);
        this._lastFrontFace = this.gl.getParameter(this.gl.FRONT_FACE);
        this._lastColorMask = this.gl.getParameter(this.gl.COLOR_WRITEMASK);
        // backup blending
        this._lastBlending[0] = this.gl.getParameter(this.gl.BLEND_SRC_RGB);
        this._lastBlending[1] = this.gl.getParameter(this.gl.BLEND_DST_RGB);
        this._lastBlending[2] = this.gl.getParameter(this.gl.BLEND_SRC_ALPHA);
        this._lastBlending[3] = this.gl.getParameter(this.gl.BLEND_DST_ALPHA);
        // モデル描画直前のFBOとビューポートを保存
        this._lastFBO = this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING);
        this._lastViewport = this.gl.getParameter(this.gl.VIEWPORT);
    }
    restore() {
        if (this.gl == null) {
            CubismLogError("'gl' is null. WebGLRenderingContext is required.\nPlease call 'CubimRenderer_WebGL.startUp' function.");
            return;
        }
        this.gl.useProgram(this._lastProgram);
        this.setGlEnableVertexAttribArray(0, this._lastVertexAttribArrayEnabled[0]);
        this.setGlEnableVertexAttribArray(1, this._lastVertexAttribArrayEnabled[1]);
        this.setGlEnableVertexAttribArray(2, this._lastVertexAttribArrayEnabled[2]);
        this.setGlEnableVertexAttribArray(3, this._lastVertexAttribArrayEnabled[3]);
        this.setGlEnable(this.gl.SCISSOR_TEST, this._lastScissorTest);
        this.setGlEnable(this.gl.STENCIL_TEST, this._lastStencilTest);
        this.setGlEnable(this.gl.DEPTH_TEST, this._lastDepthTest);
        this.setGlEnable(this.gl.CULL_FACE, this._lastCullFace);
        this.setGlEnable(this.gl.BLEND, this._lastBlend);
        this.gl.frontFace(this._lastFrontFace);
        this.gl.colorMask(this._lastColorMask[0], this._lastColorMask[1], this._lastColorMask[2], this._lastColorMask[3]);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._lastArrayBufferBinding); //前にバッファがバインドされていたら破棄する必要がある
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._lastElementArrayBufferBinding);
        this.gl.activeTexture(this.gl.TEXTURE1); //テクスチャユニット1を復元
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._lastTexture1Binding2D);
        this.gl.activeTexture(this.gl.TEXTURE0); //テクスチャユニット0を復元
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._lastTexture0Binding2D);
        this.gl.activeTexture(this._lastActiveTexture);
        this.gl.blendFuncSeparate(this._lastBlending[0], this._lastBlending[1], this._lastBlending[2], this._lastBlending[3]);
    }
    setGl(gl) {
        this.gl = gl;
    }
    constructor(){
        (0,esm_define_property._)(this, "_lastArrayBufferBinding", void 0); ///< モデル描画直前の頂点バッファ
        (0,esm_define_property._)(this, "_lastElementArrayBufferBinding", void 0); ///< モデル描画直前のElementバッファ
        (0,esm_define_property._)(this, "_lastProgram", void 0); ///< モデル描画直前のシェーダプログラムバッファ
        (0,esm_define_property._)(this, "_lastActiveTexture", void 0); ///< モデル描画直前のアクティブなテクスチャ
        (0,esm_define_property._)(this, "_lastTexture0Binding2D", void 0); ///< モデル描画直前のテクスチャユニット0
        (0,esm_define_property._)(this, "_lastTexture1Binding2D", void 0); ///< モデル描画直前のテクスチャユニット1
        (0,esm_define_property._)(this, "_lastVertexAttribArrayEnabled", void 0); ///< モデル描画直前のテクスチャユニット1
        (0,esm_define_property._)(this, "_lastScissorTest", void 0); ///< モデル描画直前のGL_VERTEX_ATTRIB_ARRAY_ENABLEDパラメータ
        (0,esm_define_property._)(this, "_lastBlend", void 0); ///< モデル描画直前のGL_SCISSOR_TESTパラメータ
        (0,esm_define_property._)(this, "_lastStencilTest", void 0); ///< モデル描画直前のGL_STENCIL_TESTパラメータ
        (0,esm_define_property._)(this, "_lastDepthTest", void 0); ///< モデル描画直前のGL_DEPTH_TESTパラメータ
        (0,esm_define_property._)(this, "_lastCullFace", void 0); ///< モデル描画直前のGL_CULL_FACEパラメータ
        (0,esm_define_property._)(this, "_lastFrontFace", void 0); ///< モデル描画直前のGL_CULL_FACEパラメータ
        (0,esm_define_property._)(this, "_lastColorMask", void 0); ///< モデル描画直前のGL_COLOR_WRITEMASKパラメータ
        (0,esm_define_property._)(this, "_lastBlending", void 0); ///< モデル描画直前のカラーブレンディングパラメータ
        (0,esm_define_property._)(this, "_lastFBO", void 0); ///< モデル描画直前のフレームバッファ
        (0,esm_define_property._)(this, "_lastViewport", void 0); ///< モデル描画直前のビューポート
        (0,esm_define_property._)(this, "gl", void 0);
        this._lastVertexAttribArrayEnabled = new Array(4);
        this._lastColorMask = new Array(4);
        this._lastBlending = new Array(4);
        this._lastViewport = new Array(4);
    }
}
/**
 * WebGL用の描画命令を実装したクラス
 */ class CubismRenderer_WebGL extends CubismRenderer {
    /**
   * レンダラの初期化処理を実行する
   * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
   *
   * @param model モデルのインスタンス
   * @param maskBufferCount バッファの生成数
   */ initialize(model) {
        let maskBufferCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        if (model.isUsingMasking()) {
            this._clippingManager = new CubismClippingManager_WebGL(); // クリッピングマスク・バッファ前処理方式を初期化
            this._clippingManager.initialize(model, maskBufferCount);
        }
        this._sortedDrawableIndexList.resize(model.getDrawableCount(), 0);
        super.initialize(model); // 親クラスの処理を呼ぶ
    }
    /**
   * WebGLテクスチャのバインド処理
   * CubismRendererにテクスチャを設定し、CubismRenderer内でその画像を参照するためのIndex値を戻り値とする
   * @param modelTextureNo セットするモデルテクスチャの番号
   * @param glTextureNo WebGLテクスチャの番号
   */ bindTexture(modelTextureNo, glTexture) {
        this._textures.setValue(modelTextureNo, glTexture);
    }
    /**
   * WebGLにバインドされたテクスチャのリストを取得する
   * @return テクスチャのリスト
   */ getBindedTextures() {
        return this._textures;
    }
    /**
   * クリッピングマスクバッファのサイズを設定する
   * マスク用のFrameBufferを破棄、再作成する為処理コストは高い
   * @param size クリッピングマスクバッファのサイズ
   */ setClippingMaskBufferSize(size) {
        // クリッピングマスクを利用しない場合は早期リターン
        if (!this._model.isUsingMasking()) {
            return;
        }
        // インスタンス破棄前にレンダーテクスチャの数を保存
        const renderTextureCount = this._clippingManager.getRenderTextureCount();
        // FrameBufferのサイズを変更するためにインスタンスを破棄・再作成する
        this._clippingManager.release();
        this._clippingManager = void 0;
        this._clippingManager = null;
        this._clippingManager = new CubismClippingManager_WebGL();
        this._clippingManager.setClippingMaskBufferSize(size);
        this._clippingManager.initialize(this.getModel(), renderTextureCount // インスタンス破棄前に保存したレンダーテクスチャの数
        );
    }
    /**
   * クリッピングマスクバッファのサイズを取得する
   * @return クリッピングマスクバッファのサイズ
   */ getClippingMaskBufferSize() {
        return this._model.isUsingMasking() ? this._clippingManager.getClippingMaskBufferSize() : -1;
    }
    /**
   * レンダーテクスチャの枚数を取得する
   * @return レンダーテクスチャの枚数
   */ getRenderTextureCount() {
        return this._model.isUsingMasking() ? this._clippingManager.getRenderTextureCount() : -1;
    }
    /**
   * デストラクタ相当の処理
   */ release() {
        if (this._clippingManager) {
            this._clippingManager.release();
            this._clippingManager = void 0;
            this._clippingManager = null;
        }
        if (this.gl == null) {
            return;
        }
        this.gl.deleteBuffer(this._bufferData.vertex);
        this._bufferData.vertex = null;
        this.gl.deleteBuffer(this._bufferData.uv);
        this._bufferData.uv = null;
        this.gl.deleteBuffer(this._bufferData.index);
        this._bufferData.index = null;
        this._bufferData = null;
        this._textures = null;
    }
    /**
   * モデルを描画する実際の処理
   */ doDrawModel() {
        if (this.gl == null) {
            CubismLogError("'gl' is null. WebGLRenderingContext is required.\nPlease call 'CubimRenderer_WebGL.startUp' function.");
            return;
        }
        //------------ クリッピングマスク・バッファ前処理方式の場合 ------------
        if (this._clippingManager != null) {
            this.preDraw();
            if (this.isUsingHighPrecisionMask()) {
                this._clippingManager.setupMatrixForHighPrecision(this.getModel(), false);
            } else {
                this._clippingManager.setupClippingContext(this.getModel(), this);
            }
        }
        // 上記クリッピング処理内でも一度PreDrawを呼ぶので注意!!
        this.preDraw();
        const drawableCount = this.getModel().getDrawableCount();
        const renderOrder = this.getModel().getDrawableRenderOrders();
        // インデックスを描画順でソート
        for(let i = 0; i < drawableCount; ++i){
            const order = renderOrder[i];
            this._sortedDrawableIndexList.set(order, i);
        }
        // 描画
        for(let i = 0; i < drawableCount; ++i){
            const drawableIndex = this._sortedDrawableIndexList.at(i);
            // Drawableが表示状態でなければ処理をパスする
            if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
                continue;
            }
            const clipContext = this._clippingManager != null ? this._clippingManager.getClippingContextListForDraw().at(drawableIndex) : null;
            if (clipContext != null && this.isUsingHighPrecisionMask()) {
                // 描くことになっていた
                if (clipContext._isUsing) {
                    // 生成したFrameBufferと同じサイズでビューポートを設定
                    this.gl.viewport(0, 0, this._clippingManager.getClippingMaskBufferSize(), this._clippingManager.getClippingMaskBufferSize());
                    this.preDraw(); // バッファをクリアする
                    // ---------- マスク描画処理 ----------
                    // マスク用RenderTextureをactiveにセット
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, clipContext.getClippingManager().getMaskRenderTexture().at(clipContext._bufferIndex));
                    // マスクをクリアする
                    // (仮仕様) 1が無効（描かれない）領域、0が有効（描かれる）領域。（シェーダーCd*Csで0に近い値をかけてマスクを作る。1をかけると何も起こらない）
                    this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
                    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                }
                {
                    const clipDrawCount = clipContext._clippingIdCount;
                    for(let index = 0; index < clipDrawCount; index++){
                        const clipDrawIndex = clipContext._clippingIdList[index];
                        // 頂点情報が更新されておらず、信頼性がない場合は描画をパスする
                        if (!this._model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
                            continue;
                        }
                        this.setIsCulling(this._model.getDrawableCulling(clipDrawIndex) != false);
                        // 今回専用の変換を適用して描く
                        // チャンネルも切り替える必要がある(A,R,G,B)
                        this.setClippingContextBufferForMask(clipContext);
                        this.drawMeshWebGL(this._model, clipDrawIndex);
                    }
                }
                {
                    // --- 後処理 ---
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo); // 描画対象を戻す
                    this.setClippingContextBufferForMask(null);
                    this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
                    this.preDraw(); // バッファをクリアする
                }
            }
            // クリッピングマスクをセットする
            this.setClippingContextBufferForDraw(clipContext);
            this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
            this.drawMeshWebGL(this._model, drawableIndex);
        }
    }
    /**
   * 描画オブジェクト（アートメッシュ）を描画する。
   * @param model 描画対象のモデル
   * @param index 描画対象のメッシュのインデックス
   */ drawMeshWebGL(model, index) {
        // 裏面描画の有効・無効
        if (this.isCulling()) {
            this.gl.enable(this.gl.CULL_FACE);
        } else {
            this.gl.disable(this.gl.CULL_FACE);
        }
        this.gl.frontFace(this.gl.CCW); // Cubism SDK OpenGLはマスク・アートメッシュ共にCCWが表面
        if (this.isGeneratingMask()) {
            CubismShaderManager_WebGL.getInstance().getShader(this.gl).setupShaderProgramForMask(this, model, index);
        } else {
            CubismShaderManager_WebGL.getInstance().getShader(this.gl).setupShaderProgramForDraw(this, model, index);
        }
        {
            const indexCount = model.getDrawableVertexIndexCount(index);
            this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        // 後処理
        this.gl.useProgram(null);
        this.setClippingContextBufferForDraw(null);
        this.setClippingContextBufferForMask(null);
    }
    saveProfile() {
        this._rendererProfile.save();
    }
    restoreProfile() {
        this._rendererProfile.restore();
    }
    /**
   * レンダラが保持する静的なリソースを解放する
   * WebGLの静的なシェーダープログラムを解放する
   */ static doStaticRelease() {
        CubismShaderManager_WebGL.deleteInstance();
    }
    /**
   * レンダーステートを設定する
   * @param fbo アプリケーション側で指定しているフレームバッファ
   * @param viewport ビューポート
   */ setRenderState(fbo, viewport) {
        s_fbo = fbo;
        s_viewport = viewport;
    }
    /**
   * 描画開始時の追加処理
   * モデルを描画する前にクリッピングマスクに必要な処理を実装している
   */ preDraw() {
        if (this.firstDraw) {
            this.firstDraw = false;
        }
        this.gl.disable(this.gl.SCISSOR_TEST);
        this.gl.disable(this.gl.STENCIL_TEST);
        this.gl.disable(this.gl.DEPTH_TEST);
        // カリング（1.0beta3）
        this.gl.frontFace(this.gl.CW);
        this.gl.enable(this.gl.BLEND);
        this.gl.colorMask(true, true, true, true);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null); // 前にバッファがバインドされていたら破棄する必要がある
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
        // 異方性フィルタリングを適用する
        if (this.getAnisotropy() > 0.0 && this._extension) {
            for(let i = 0; i < this._textures.getSize(); ++i){
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._textures.getValue(i));
                this.gl.texParameterf(this.gl.TEXTURE_2D, this._extension.TEXTURE_MAX_ANISOTROPY_EXT, this.getAnisotropy());
            }
        }
    }
    /**
   * マスクテクスチャに描画するクリッピングコンテキストをセットする
   */ setClippingContextBufferForMask(clip) {
        this._clippingContextBufferForMask = clip;
    }
    /**
   * マスクテクスチャに描画するクリッピングコンテキストを取得する
   * @return マスクテクスチャに描画するクリッピングコンテキスト
   */ getClippingContextBufferForMask() {
        return this._clippingContextBufferForMask;
    }
    /**
   * 画面上に描画するクリッピングコンテキストをセットする
   */ setClippingContextBufferForDraw(clip) {
        this._clippingContextBufferForDraw = clip;
    }
    /**
   * 画面上に描画するクリッピングコンテキストを取得する
   * @return 画面上に描画するクリッピングコンテキスト
   */ getClippingContextBufferForDraw() {
        return this._clippingContextBufferForDraw;
    }
    /**
   * マスク生成時かを判定する
   * @returns 判定値
   */ isGeneratingMask() {
        return this.getClippingContextBufferForMask() != null;
    }
    /**
   * glの設定
   */ startUp(gl) {
        this.gl = gl;
        if (this._clippingManager) {
            this._clippingManager.setGL(gl);
        }
        CubismShaderManager_WebGL.getInstance().setGlContext(gl);
        this._rendererProfile.setGl(gl);
        // 異方性フィルタリングが使用できるかチェック
        this._extension = this.gl.getExtension('EXT_texture_filter_anisotropic') || this.gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || this.gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
    }
    /**
   * コンストラクタ
   */ constructor(){
        super(), (0,esm_define_property._)(this, "_textures", void 0 // モデルが参照するテクスチャとレンダラでバインドしているテクスチャとのマップ
        ), (0,esm_define_property._)(this, "_sortedDrawableIndexList", void 0 // 描画オブジェクトのインデックスを描画順に並べたリスト
        ), (0,esm_define_property._)(this, "_clippingManager", void 0 // クリッピングマスク管理オブジェクト
        ), (0,esm_define_property._)(this, "_clippingContextBufferForMask", void 0 // マスクテクスチャに描画するためのクリッピングコンテキスト
        ), (0,esm_define_property._)(this, "_clippingContextBufferForDraw", void 0 // 画面上描画するためのクリッピングコンテキスト
        ), (0,esm_define_property._)(this, "_rendererProfile", void 0), (0,esm_define_property._)(this, "firstDraw", void 0), (0,esm_define_property._)(this, "_bufferData", void 0 // 頂点バッファデータ
        ), (0,esm_define_property._)(this, "_extension", void 0 // 拡張機能
        ), (0,esm_define_property._)(this, "gl", void 0 // webglコンテキスト
        );
        this._clippingContextBufferForMask = null;
        this._clippingContextBufferForDraw = null;
        this._rendererProfile = new CubismRendererProfile_WebGL();
        this.firstDraw = true;
        this._textures = new csmMap();
        this._sortedDrawableIndexList = new csmVector();
        this._bufferData = {
            vertex: WebGLBuffer = null,
            uv: WebGLBuffer = null,
            index: WebGLBuffer = null
        };
        // テクスチャ対応マップの容量を確保しておく
        this._textures.prepareCapacity(32, true);
    }
}
/**
 * レンダラが保持する静的なリソースを開放する
 */ CubismRenderer.staticRelease = ()=>{
    CubismRenderer_WebGL.doStaticRelease();
};
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismClippingContext = CubismClippingContext_WebGL;
    Live2DCubismFramework.CubismClippingManager_WebGL = CubismClippingManager_WebGL;
    Live2DCubismFramework.CubismRenderTextureResource = CubismRenderTextureResource;
    Live2DCubismFramework.CubismRenderer_WebGL = CubismRenderer_WebGL;
})(cubismrenderer_webgl_Live2DCubismFramework || (cubismrenderer_webgl_Live2DCubismFramework = {}));
var cubismrenderer_webgl_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/model/cubismmodeluserdatajson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 


const cubismmodeluserdatajson_Meta = 'Meta';
const cubismmodeluserdatajson_UserDataCount = 'UserDataCount';
const cubismmodeluserdatajson_TotalUserDataSize = 'TotalUserDataSize';
const cubismmodeluserdatajson_UserData = 'UserData';
const cubismmodeluserdatajson_Target = 'Target';
const cubismmodeluserdatajson_Id = 'Id';
const cubismmodeluserdatajson_Value = 'Value';
class CubismModelUserDataJson {
    /**
   * デストラクタ相当の処理
   */ release() {
        CubismJson["delete"](this._json);
    }
    /**
   * ユーザーデータ個数の取得
   * @return ユーザーデータの個数
   */ getUserDataCount() {
        return this._json.getRoot().getValueByString(cubismmodeluserdatajson_Meta).getValueByString(cubismmodeluserdatajson_UserDataCount).toInt();
    }
    /**
   * ユーザーデータ総文字列数の取得
   *
   * @return ユーザーデータ総文字列数
   */ getTotalUserDataSize() {
        return this._json.getRoot().getValueByString(cubismmodeluserdatajson_Meta).getValueByString(cubismmodeluserdatajson_TotalUserDataSize).toInt();
    }
    /**
   * ユーザーデータのタイプの取得
   *
   * @return ユーザーデータのタイプ
   */ getUserDataTargetType(i) {
        return this._json.getRoot().getValueByString(cubismmodeluserdatajson_UserData).getValueByIndex(i).getValueByString(cubismmodeluserdatajson_Target).getRawString();
    }
    /**
   * ユーザーデータのターゲットIDの取得
   *
   * @param i インデックス
   * @return ユーザーデータターゲットID
   */ getUserDataId(i) {
        return CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(cubismmodeluserdatajson_UserData).getValueByIndex(i).getValueByString(cubismmodeluserdatajson_Id).getRawString());
    }
    /**
   * ユーザーデータの文字列の取得
   *
   * @param i インデックス
   * @return ユーザーデータ
   */ getUserDataValue(i) {
        return this._json.getRoot().getValueByString(cubismmodeluserdatajson_UserData).getValueByIndex(i).getValueByString(cubismmodeluserdatajson_Value).getRawString();
    }
    /**
   * コンストラクタ
   * @param buffer    userdata3.jsonが読み込まれているバッファ
   * @param size      バッファのサイズ
   */ constructor(buffer, size){
        (0,esm_define_property._)(this, "_json", void 0);
        this._json = CubismJson.create(buffer, size);
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelUserDataJson = CubismModelUserDataJson;
})(cubismmodeluserdatajson_Live2DCubismFramework || (cubismmodeluserdatajson_Live2DCubismFramework = {}));
var cubismmodeluserdatajson_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/model/cubismmodeluserdata.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 




const ArtMesh = 'ArtMesh';
/**
 * ユーザーデータインターフェース
 *
 * Jsonから読み込んだユーザーデータを記録しておくための構造体
 */ class CubismModelUserDataNode {
    constructor(){
        (0,esm_define_property._)(this, "targetType", void 0); // ユーザーデータターゲットタイプ
        (0,esm_define_property._)(this, "targetId", void 0); // ユーザーデータターゲットのID
        (0,esm_define_property._)(this, "value", void 0); // ユーザーデータ
    }
}
/**
 * ユーザデータの管理クラス
 *
 * ユーザデータをロード、管理、検索インターフェイス、解放までを行う。
 */ class CubismModelUserData {
    /**
   * インスタンスの作成
   *
   * @param buffer    userdata3.jsonが読み込まれているバッファ
   * @param size      バッファのサイズ
   * @return 作成されたインスタンス
   */ static create(buffer, size) {
        const ret = new CubismModelUserData();
        ret.parseUserData(buffer, size);
        return ret;
    }
    /**
   * インスタンスを破棄する
   *
   * @param modelUserData 破棄するインスタンス
   */ static delete(modelUserData) {
        if (modelUserData != null) {
            modelUserData.release();
            modelUserData = null;
        }
    }
    /**
   * ArtMeshのユーザーデータのリストの取得
   *
   * @return ユーザーデータリスト
   */ getArtMeshUserDatas() {
        return this._artMeshUserDataNode;
    }
    /**
   * userdata3.jsonのパース
   *
   * @param buffer    userdata3.jsonが読み込まれているバッファ
   * @param size      バッファのサイズ
   */ parseUserData(buffer, size) {
        let json = new CubismModelUserDataJson(buffer, size);
        if (!json) {
            json.release();
            json = void 0;
            return;
        }
        const typeOfArtMesh = CubismFramework.getIdManager().getId(ArtMesh);
        const nodeCount = json.getUserDataCount();
        for(let i = 0; i < nodeCount; i++){
            const addNode = new CubismModelUserDataNode();
            addNode.targetId = json.getUserDataId(i);
            addNode.targetType = CubismFramework.getIdManager().getId(json.getUserDataTargetType(i));
            addNode.value = new csmString(json.getUserDataValue(i));
            this._userDataNodes.pushBack(addNode);
            if (addNode.targetType == typeOfArtMesh) {
                this._artMeshUserDataNode.pushBack(addNode);
            }
        }
        json.release();
        json = void 0;
    }
    /**
   * デストラクタ相当の処理
   *
   * ユーザーデータ構造体配列を解放する
   */ release() {
        for(let i = 0; i < this._userDataNodes.getSize(); ++i){
            this._userDataNodes.set(i, null);
        }
        this._userDataNodes = null;
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_userDataNodes", void 0); // ユーザーデータ構造体配列
        (0,esm_define_property._)(this, "_artMeshUserDataNode", void 0); // 閲覧リストの保持
        this._userDataNodes = new csmVector();
        this._artMeshUserDataNode = new csmVector();
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelUserData = CubismModelUserData;
    Live2DCubismFramework.CubismModelUserDataNode = CubismModelUserDataNode;
})(cubismmodeluserdata_Live2DCubismFramework || (cubismmodeluserdata_Live2DCubismFramework = {}));
var cubismmodeluserdata_Live2DCubismFramework;

;// CONCATENATED MODULE: ./framework/src/model/cubismusermodel.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */ 















/**
 * ユーザーが実際に使用するモデル
 *
 * ユーザーが実際に使用するモデルの基底クラス。これを継承してユーザーが実装する。
 */ class CubismUserModel {
    /**
   * 初期化状態の取得
   *
   * 初期化されている状態か？
   *
   * @return true     初期化されている
   * @return false    初期化されていない
   */ isInitialized() {
        return this._initialized;
    }
    /**
   * 初期化状態の設定
   *
   * 初期化状態を設定する。
   *
   * @param v 初期化状態
   */ setInitialized(v) {
        this._initialized = v;
    }
    /**
   * 更新状態の取得
   *
   * 更新されている状態か？
   *
   * @return true     更新されている
   * @return false    更新されていない
   */ isUpdating() {
        return this._updating;
    }
    /**
   * 更新状態の設定
   *
   * 更新状態を設定する
   *
   * @param v 更新状態
   */ setUpdating(v) {
        this._updating = v;
    }
    /**
   * マウスドラッグ情報の設定
   * @param ドラッグしているカーソルのX位置
   * @param ドラッグしているカーソルのY位置
   */ setDragging(x, y) {
        this._dragManager.set(x, y);
    }
    /**
   * 加速度の情報を設定する
   * @param x X軸方向の加速度
   * @param y Y軸方向の加速度
   * @param z Z軸方向の加速度
   */ setAcceleration(x, y, z) {
        this._accelerationX = x;
        this._accelerationY = y;
        this._accelerationZ = z;
    }
    /**
   * モデル行列を取得する
   * @return モデル行列
   */ getModelMatrix() {
        return this._modelMatrix;
    }
    /**
   * 不透明度の設定
   * @param a 不透明度
   */ setOpacity(a) {
        this._opacity = a;
    }
    /**
   * 不透明度の取得
   * @return 不透明度
   */ getOpacity() {
        return this._opacity;
    }
    /**
   * モデルデータを読み込む
   *
   * @param buffer    moc3ファイルが読み込まれているバッファ
   */ loadModel(buffer) {
        let shouldCheckMocConsistency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        this._moc = CubismMoc.create(buffer, shouldCheckMocConsistency);
        if (this._moc == null) {
            CubismLogError('Failed to CubismMoc.create().');
            return;
        }
        this._model = this._moc.createModel();
        if (this._model == null) {
            CubismLogError('Failed to CreateModel().');
            return;
        }
        this._model.saveParameters();
        this._modelMatrix = new CubismModelMatrix(this._model.getCanvasWidth(), this._model.getCanvasHeight());
    }
    /**
   * モーションデータを読み込む
   * @param buffer motion3.jsonファイルが読み込まれているバッファ
   * @param size バッファのサイズ
   * @param name モーションの名前
   * @param onFinishedMotionHandler モーション再生終了時に呼び出されるコールバック関数
   * @param onBeganMotionHandler モーション再生開始時に呼び出されるコールバック関数
   * @param modelSetting モデル設定
   * @param group モーショングループ名
   * @param index モーションインデックス
   * @param shouldCheckMotionConsistency motion3.json整合性チェックするかどうか
   * @return モーションクラス
   */ loadMotion(buffer, size, name, onFinishedMotionHandler, onBeganMotionHandler, modelSetting, group, index) {
        let shouldCheckMotionConsistency = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : false;
        if (buffer == null || size == 0) {
            CubismLogError('Failed to loadMotion().');
            return null;
        }
        const motion = CubismMotion.create(buffer, size, onFinishedMotionHandler, onBeganMotionHandler, shouldCheckMotionConsistency);
        if (motion == null) {
            CubismLogError(`Failed to create motion from buffer in LoadMotion()`);
            return null;
        }
        // 必要であればモーションフェード値を上書き
        if (modelSetting) {
            const fadeInTime = modelSetting.getMotionFadeInTimeValue(group, index);
            if (fadeInTime >= 0.0) {
                motion.setFadeInTime(fadeInTime);
            }
            const fadeOutTime = modelSetting.getMotionFadeOutTimeValue(group, index);
            if (fadeOutTime >= 0.0) {
                motion.setFadeOutTime(fadeOutTime);
            }
        }
        return motion;
    }
    /**
   * 表情データの読み込み
   * @param buffer expファイルが読み込まれているバッファ
   * @param size バッファのサイズ
   * @param name 表情の名前
   */ loadExpression(buffer, size, name) {
        if (buffer == null || size == 0) {
            CubismLogError('Failed to loadExpression().');
            return null;
        }
        return CubismExpressionMotion.create(buffer, size);
    }
    /**
   * ポーズデータの読み込み
   * @param buffer pose3.jsonが読み込まれているバッファ
   * @param size バッファのサイズ
   */ loadPose(buffer, size) {
        if (buffer == null || size == 0) {
            CubismLogError('Failed to loadPose().');
            return;
        }
        this._pose = CubismPose.create(buffer, size);
    }
    /**
   * モデルに付属するユーザーデータを読み込む
   * @param buffer userdata3.jsonが読み込まれているバッファ
   * @param size バッファのサイズ
   */ loadUserData(buffer, size) {
        if (buffer == null || size == 0) {
            CubismLogError('Failed to loadUserData().');
            return;
        }
        this._modelUserData = CubismModelUserData.create(buffer, size);
    }
    /**
   * 物理演算データの読み込み
   * @param buffer  physics3.jsonが読み込まれているバッファ
   * @param size    バッファのサイズ
   */ loadPhysics(buffer, size) {
        if (buffer == null || size == 0) {
            CubismLogError('Failed to loadPhysics().');
            return;
        }
        this._physics = CubismPhysics.create(buffer, size);
    }
    /**
   * 当たり判定の取得
   * @param drawableId 検証したいDrawableのID
   * @param pointX X位置
   * @param pointY Y位置
   * @return true ヒットしている
   * @return false ヒットしていない
   */ isHit(drawableId, pointX, pointY) {
        const drawIndex = this._model.getDrawableIndex(drawableId);
        if (drawIndex < 0) {
            return false; // 存在しない場合はfalse
        }
        const count = this._model.getDrawableVertexCount(drawIndex);
        const vertices = this._model.getDrawableVertices(drawIndex);
        let left = vertices[0];
        let right = vertices[0];
        let top = vertices[1];
        let bottom = vertices[1];
        for(let j = 1; j < count; ++j){
            const x = vertices[Constant.vertexOffset + j * Constant.vertexStep];
            const y = vertices[Constant.vertexOffset + j * Constant.vertexStep + 1];
            if (x < left) {
                left = x; // Min x
            }
            if (x > right) {
                right = x; // Max x
            }
            if (y < top) {
                top = y; // Min y
            }
            if (y > bottom) {
                bottom = y; // Max y
            }
        }
        const tx = this._modelMatrix.invertTransformX(pointX);
        const ty = this._modelMatrix.invertTransformY(pointY);
        return left <= tx && tx <= right && top <= ty && ty <= bottom;
    }
    /**
   * モデルの取得
   * @return モデル
   */ getModel() {
        return this._model;
    }
    /**
   * レンダラの取得
   * @return レンダラ
   */ getRenderer() {
        return this._renderer;
    }
    /**
   * レンダラを作成して初期化を実行する
   * @param maskBufferCount バッファの生成数
   */ createRenderer() {
        let maskBufferCount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        if (this._renderer) {
            this.deleteRenderer();
        }
        this._renderer = new CubismRenderer_WebGL();
        this._renderer.initialize(this._model, maskBufferCount);
    }
    /**
   * レンダラの解放
   */ deleteRenderer() {
        if (this._renderer != null) {
            this._renderer.release();
            this._renderer = null;
        }
    }
    /**
   * イベント発火時の標準処理
   *
   * Eventが再生処理時にあった場合の処理をする。
   * 継承で上書きすることを想定している。
   * 上書きしない場合はログ出力をする。
   *
   * @param eventValue 発火したイベントの文字列データ
   */ motionEventFired(eventValue) {
        CubismLogInfo('{0}', eventValue.s);
    }
    /**
   * イベント用のコールバック
   *
   * CubismMotionQueueManagerにイベント用に登録するためのCallback。
   * CubismUserModelの継承先のEventFiredを呼ぶ。
   *
   * @param caller 発火したイベントを管理していたモーションマネージャー、比較用
   * @param eventValue 発火したイベントの文字列データ
   * @param customData CubismUserModelを継承したインスタンスを想定
   */ static cubismDefaultMotionEventCallback(caller, eventValue, customData) {
        const model = customData;
        if (model != null) {
            model.motionEventFired(eventValue);
        }
    }
    /**
   * デストラクタに相当する処理
   */ release() {
        if (this._motionManager != null) {
            this._motionManager.release();
            this._motionManager = null;
        }
        if (this._expressionManager != null) {
            this._expressionManager.release();
            this._expressionManager = null;
        }
        if (this._moc != null) {
            this._moc.deleteModel(this._model);
            this._moc.release();
            this._moc = null;
        }
        this._modelMatrix = null;
        CubismPose["delete"](this._pose);
        CubismEyeBlink["delete"](this._eyeBlink);
        CubismBreath["delete"](this._breath);
        this._dragManager = null;
        CubismPhysics["delete"](this._physics);
        CubismModelUserData["delete"](this._modelUserData);
        this.deleteRenderer();
    }
    /**
   * コンストラクタ
   */ constructor(){
        (0,esm_define_property._)(this, "_moc", void 0); // Mocデータ
        (0,esm_define_property._)(this, "_model", void 0); // Modelインスタンス
        (0,esm_define_property._)(this, "_motionManager", void 0); // モーション管理
        (0,esm_define_property._)(this, "_expressionManager", void 0); // 表情管理
        (0,esm_define_property._)(this, "_eyeBlink", void 0); // 自動まばたき
        (0,esm_define_property._)(this, "_breath", void 0); // 呼吸
        (0,esm_define_property._)(this, "_modelMatrix", void 0); // モデル行列
        (0,esm_define_property._)(this, "_pose", void 0); // ポーズ管理
        (0,esm_define_property._)(this, "_dragManager", void 0); // マウスドラッグ
        (0,esm_define_property._)(this, "_physics", void 0); // 物理演算
        (0,esm_define_property._)(this, "_modelUserData", void 0); // ユーザーデータ
        (0,esm_define_property._)(this, "_initialized", void 0); // 初期化されたかどうか
        (0,esm_define_property._)(this, "_updating", void 0); // 更新されたかどうか
        (0,esm_define_property._)(this, "_opacity", void 0); // 不透明度
        (0,esm_define_property._)(this, "_lipsync", void 0); // リップシンクするかどうか
        (0,esm_define_property._)(this, "_lastLipSyncValue", void 0); // 最後のリップシンクの制御地
        (0,esm_define_property._)(this, "_dragX", void 0); // マウスドラッグのX位置
        (0,esm_define_property._)(this, "_dragY", void 0); // マウスドラッグのY位置
        (0,esm_define_property._)(this, "_accelerationX", void 0); // X軸方向の加速度
        (0,esm_define_property._)(this, "_accelerationY", void 0); // Y軸方向の加速度
        (0,esm_define_property._)(this, "_accelerationZ", void 0); // Z軸方向の加速度
        (0,esm_define_property._)(this, "_mocConsistency", void 0); // MOC3整合性検証するかどうか
        (0,esm_define_property._)(this, "_motionConsistency", void 0); // motion3.json整合性検証するかどうか
        (0,esm_define_property._)(this, "_debugMode", void 0); // デバッグモードかどうか
        (0,esm_define_property._)(this, "_renderer", void 0); // レンダラ
        // 各変数初期化
        this._moc = null;
        this._model = null;
        this._motionManager = null;
        this._expressionManager = null;
        this._eyeBlink = null;
        this._breath = null;
        this._modelMatrix = null;
        this._pose = null;
        this._dragManager = null;
        this._physics = null;
        this._modelUserData = null;
        this._initialized = false;
        this._updating = false;
        this._opacity = 1.0;
        this._lipsync = true;
        this._lastLipSyncValue = 0.0;
        this._dragX = 0.0;
        this._dragY = 0.0;
        this._accelerationX = 0.0;
        this._accelerationY = 0.0;
        this._accelerationZ = 0.0;
        this._mocConsistency = false;
        this._debugMode = false;
        this._renderer = null;
        // モーションマネージャーを作成
        this._motionManager = new CubismMotionManager();
        this._motionManager.setEventCallback(CubismUserModel.cubismDefaultMotionEventCallback, this);
        // 表情マネージャーを作成
        this._expressionManager = new CubismExpressionMotionManager();
        // ドラッグによるアニメーション
        this._dragManager = new CubismTargetPoint();
    }
}
// Namespace definition for compatibility.

(function(Live2DCubismFramework) {
    Live2DCubismFramework.CubismUserModel = CubismUserModel;
})(cubismusermodel_Live2DCubismFramework || (cubismusermodel_Live2DCubismFramework = {}));
var cubismusermodel_Live2DCubismFramework;

;// CONCATENATED MODULE: ./renderer/Live2DCubismUserModel.ts


class Live2DCubismUserModel extends CubismUserModel {
    initialize() {
        this.model.initialize();
        // @ts-ignore
        this.defaultPartOpacities = structuredClone(this.parts.opacities);
    }
    get accelerationX() {
        return this._accelerationX;
    }
    set accelerationX(accelerationX) {
        this._accelerationX = accelerationX;
    }
    get accelerationY() {
        return this._accelerationY;
    }
    set accelerationY(accelerationY) {
        this._accelerationY = accelerationY;
    }
    get accelerationZ() {
        return this._accelerationZ;
    }
    set accelerationZ(accelerationZ) {
        this._accelerationZ = accelerationZ;
    }
    get breath() {
        return this._breath;
    }
    set breath(breath) {
        this._breath = breath;
    }
    get dragManager() {
        return this._dragManager;
    }
    set dragManager(dragManager) {
        this._dragManager = dragManager;
    }
    get dragX() {
        return this._dragX;
    }
    set dragX(dragX) {
        this._dragX = dragX;
    }
    get dragY() {
        return this._dragY;
    }
    set dragY(dragY) {
        this._dragY = dragY;
    }
    get expressionManager() {
        return this._expressionManager;
    }
    set expressionManager(expressionManager) {
        this._expressionManager = expressionManager;
    }
    get eyeBlink() {
        return this._eyeBlink;
    }
    set eyeBlink(eyeBlink) {
        this._eyeBlink = eyeBlink;
    }
    get initialized() {
        return this._initialized;
    }
    set initialized(initialized) {
        this._initialized = initialized;
    }
    get lastLipSyncValue() {
        return this._lastLipSyncValue;
    }
    set lastLipSyncValue(lastLipSyncValue) {
        this._lastLipSyncValue = lastLipSyncValue;
    }
    get lipsync() {
        return this._lipsync;
    }
    set lipsync(lipsync) {
        this._lipsync = lipsync;
    }
    get moc() {
        return this.moc;
    }
    set moc(moc) {
        this._moc = moc;
    }
    get mocConsistency() {
        return this._mocConsistency;
    }
    set mocConsistency(mocConsistency) {
        this._mocConsistency = mocConsistency;
    }
    get modelMatrix() {
        return this._modelMatrix;
    }
    set modelMatrix(modelMatrix) {
        this._modelMatrix = modelMatrix;
    }
    get modelUserData() {
        return this._modelUserData;
    }
    set modelUserData(modelUserData) {
        this._modelUserData = modelUserData;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    get motionManager() {
        return this._motionManager;
    }
    set motionManager(motionManager) {
        this._motionManager = motionManager;
    }
    get opacity() {
        return this._opacity;
    }
    set opacity(opacity) {
        this._opacity = opacity;
    }
    get pose() {
        return this._pose;
    }
    set pose(pose) {
        this._pose = pose;
    }
    get physics() {
        return this._physics;
    }
    set physics(physics) {
        this._physics = physics;
    }
    get updating() {
        return this._updating;
    }
    set updating(updating) {
        this._updating = updating;
    }
    get parameters() {
        const model = this.model;
        return model._model.parameters;
    }
    get parts() {
        const model = this.model;
        return model._model.parts;
    }
    get drawables() {
        const model = this.model;
        return model._model.drawables;
    }
    get width() {
        const model = this.model;
        return model._model.canvasinfo.CanvasWidth;
    }
    get height() {
        const model = this.model;
        return model._model.canvasinfo.CanvasHeight;
    }
    get originX() {
        const model = this.model;
        return model._model.canvasinfo.CanvasOriginX;
    }
    get originY() {
        const model = this.model;
        return model._model.canvasinfo.CanvasOriginY;
    }
    get pixelsPerUnit() {
        const model = this.model;
        return model._model.canvasinfo.PixelsPerUnit;
    }
    constructor(){
        super(), (0,esm_define_property._)(this, "defaultPartOpacities", void 0), (0,esm_define_property._)(this, "getParameterValue", (parameter)=>{
            const index = this.parameters.ids.indexOf(parameter);
            return this.model.getParameterValueByIndex(index);
        }), (0,esm_define_property._)(this, "setParameter", (parameter, value)=>{
            const index = this.parameters.ids.indexOf(parameter);
            this.model.setParameterValueByIndex(index, value);
            this.model.update();
        }), (0,esm_define_property._)(this, "resetParameters", ()=>{
            for(let i = 0; i < this.parameters.defaultValues.length; i++){
                this.model.setParameterValueByIndex(i, this.parameters.defaultValues[i]);
            }
            this.model.update();
        }), (0,esm_define_property._)(this, "getPartOpacity", (part)=>{
            const index = this.parts.ids.indexOf(part);
            return this.model.getPartOpacityByIndex(index);
        }), (0,esm_define_property._)(this, "setPartOpacity", (part, opacity)=>{
            const index = this.parts.ids.indexOf(part);
            this.model.setPartOpacityByIndex(index, opacity);
            this.model.update();
        }), (0,esm_define_property._)(this, "resetPartOpacities", ()=>{
            for(let i = 0; i < this.defaultPartOpacities.length; i++){
                this.model.setPartOpacityByIndex(i, this.defaultPartOpacities[i]);
            }
            this.model.update();
        });
    }
}

;// CONCATENATED MODULE: ./renderer/WavFileController.ts

class WavFileController {
    getRms() {
        return this.rms;
    }
    constructor(model){
        var _this = this;
        (0,esm_define_property._)(this, "model", void 0);
        (0,esm_define_property._)(this, "samples", void 0);
        (0,esm_define_property._)(this, "previousRms", void 0);
        (0,esm_define_property._)(this, "rms", void 0);
        (0,esm_define_property._)(this, "sampleOffset", void 0);
        (0,esm_define_property._)(this, "userTime", void 0);
        (0,esm_define_property._)(this, "numChannels", void 0);
        (0,esm_define_property._)(this, "bitsPerSample", void 0);
        (0,esm_define_property._)(this, "sampleRate", void 0);
        (0,esm_define_property._)(this, "samplesPerChannel", void 0);
        (0,esm_define_property._)(this, "smoothingFactor", void 0);
        (0,esm_define_property._)(this, "volumeNode", void 0);
        (0,esm_define_property._)(this, "sourceNode", void 0);
        (0,esm_define_property._)(this, "start", async function(wavBuffer) {
            let playAudio = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            _this.sampleOffset = 0;
            _this.userTime = 0;
            _this.previousRms = 0;
            _this.rms = 0;
            let decodedAudio = null;
            let cloneAudio = null;
            if (wavBuffer instanceof AudioBuffer) {
                decodedAudio = wavBuffer;
                const offlineContext = new OfflineAudioContext(wavBuffer.numberOfChannels, wavBuffer.length, wavBuffer.sampleRate);
                const bufferSource = offlineContext.createBufferSource();
                bufferSource.buffer = wavBuffer;
                bufferSource.connect(offlineContext.destination);
                bufferSource.start();
                cloneAudio = await offlineContext.startRendering();
            } else {
                const cloneBuffer = new Uint8Array(wavBuffer).slice().buffer;
                decodedAudio = await _this.model.audioContext.decodeAudioData(wavBuffer);
                cloneAudio = await _this.model.audioContext.decodeAudioData(cloneBuffer);
            }
            _this.numChannels = decodedAudio.numberOfChannels;
            _this.sampleRate = decodedAudio.sampleRate;
            _this.samples = Array.from({
                length: _this.numChannels
            }, (v, i)=>decodedAudio.getChannelData(i));
            _this.samplesPerChannel = decodedAudio.length;
            if (playAudio) await _this.play(cloneAudio);
        });
        (0,esm_define_property._)(this, "play", async (audioBuffer)=>{
            this.stop();
            this.sourceNode = this.model.audioContext.createBufferSource();
            this.sourceNode.buffer = audioBuffer;
            if (this.model.connectNode) {
                this.sourceNode.connect(this.model.connectNode);
            } else {
                this.sourceNode.connect(this.volumeNode);
            }
            return new Promise((resolve)=>{
                this.sourceNode.onended = ()=>resolve();
                this.sourceNode.start(this.userTime);
            });
        });
        (0,esm_define_property._)(this, "stop", async ()=>{
            if (this.sourceNode) {
                this.sourceNode.stop();
                this.sourceNode.disconnect();
                this.sourceNode = null;
            }
        });
        (0,esm_define_property._)(this, "update", (deltaTime)=>{
            if (!this.samples || this.sampleOffset >= this.samplesPerChannel) {
                this.rms = 0;
                return;
            }
            this.userTime += deltaTime;
            const goalOffset = Math.min(Math.floor(this.userTime * this.sampleRate), this.samplesPerChannel);
            let rms = 0;
            const samplesToProcess = goalOffset - this.sampleOffset;
            for (const channel of this.samples){
                for(let i = this.sampleOffset; i < goalOffset; i++){
                    rms += channel[i] ** 2;
                }
            }
            this.rms = Math.sqrt(rms / (this.numChannels * samplesToProcess)) * 5;
            this.rms = Math.max(0, Math.min(this.rms, 1));
            if (this.smoothingFactor > 0) {
                this.rms = this.previousRms * (1 - this.smoothingFactor) + this.rms * this.smoothingFactor;
            }
            this.previousRms = this.rms;
            this.sampleOffset = goalOffset;
        });
        this.model = model;
        this.samples = null;
        this.previousRms = 0;
        this.rms = 0;
        this.sampleOffset = 0;
        this.userTime = 0;
        this.smoothingFactor = 0.1;
        this.sourceNode = null;
        this.volumeNode = this.model.audioContext.createGain();
        this.volumeNode.gain.value = 1;
        this.volumeNode.connect(this.model.audioContext.destination);
    }
}

;// CONCATENATED MODULE: ./renderer/TouchController.ts


class TouchController {
    constructor(model){
        (0,esm_define_property._)(this, "model", void 0);
        (0,esm_define_property._)(this, "startX", void 0);
        (0,esm_define_property._)(this, "startY", void 0);
        (0,esm_define_property._)(this, "lastX", void 0);
        (0,esm_define_property._)(this, "lastY", void 0);
        (0,esm_define_property._)(this, "touchStart", (posX, posY)=>{
            this.startX = this.lastX = posX;
            this.startY = this.lastY = posY;
        });
        (0,esm_define_property._)(this, "touchMove", (posX, posY)=>{
            this.lastX = posX;
            this.lastY = posY;
        });
        (0,esm_define_property._)(this, "getFlickDistance", ()=>{
            return this.calculateDistance(this.startX, this.startY, this.lastX, this.lastY);
        });
        (0,esm_define_property._)(this, "calculateDistance", (x1, y1, x2, y2)=>{
            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        });
        (0,esm_define_property._)(this, "calculateMovingAmount", (x1, x2)=>{
            if (x1 > 0 !== x2 > 0) return 0;
            return Math.sign(x1) * Math.min(Math.abs(x1), Math.abs(x2));
        });
        (0,esm_define_property._)(this, "pointerDown", (event)=>{
            if (this.model.paused) return;
            const rect = this.model.canvas.getBoundingClientRect();
            const posX = event.clientX - rect.left;
            const posY = event.clientY - rect.top;
            this.touchStart(posX, posY);
        });
        (0,esm_define_property._)(this, "pointerMove", (event)=>{
            if (this.model.paused) return;
            const rect = this.model.canvas.getBoundingClientRect();
            const posX = event.clientX - rect.left;
            const posY = event.clientY - rect.top;
            const x = this.model.transformX(this.lastX);
            const y = this.model.transformY(this.lastY);
            this.touchMove(posX, posY);
            this.model.setDragging(x, y);
        });
        (0,esm_define_property._)(this, "pointerUp", (event)=>{
            if (this.model.paused) return;
            const rect = this.model.canvas.getBoundingClientRect();
            const posX = event.clientX - rect.left;
            const posY = event.clientY - rect.top;
            this.model.setDragging(0, 0);
            const x = this.model.transformX(posX);
            const y = this.model.transformY(posY);
            if (this.model.tapInteraction) this.tap(x, y);
        });
        (0,esm_define_property._)(this, "tap", (x, y)=>{
            if (this.model.hitTest("Head", x, y)) {
                this.model.setRandomExpression();
            } else if (this.model.hitTest("Body", x, y)) {
                this.model.startRandomMotion("TapBody", /* inlined export .MotionPriority.Normal */ (2));
            }
            let hitAreas = [];
            for(let i = 0; i < this.model.settings.getHitAreasCount(); i++){
                const drawId = this.model.settings.getHitAreaId(i);
                if (this.model.isHit(drawId, x, y)) {
                    hitAreas.push(drawId.getString().s);
                }
            }
            this.model.emit("hit", hitAreas, x, y);
        });
        (0,esm_define_property._)(this, "startInteractions", ()=>{
            if (!this.model.autoInteraction) return;
            document.addEventListener("pointerdown", this.pointerDown, {
                passive: true
            });
            document.addEventListener("pointermove", this.pointerMove, {
                passive: true
            });
            document.addEventListener("pointerup", this.pointerUp, {
                passive: true
            });
            document.addEventListener("pointercancel", this.pointerUp, {
                passive: true
            });
        });
        (0,esm_define_property._)(this, "cancelInteractions", ()=>{
            document.removeEventListener("pointerdown", this.pointerDown);
            document.removeEventListener("pointermove", this.pointerMove);
            document.removeEventListener("pointerup", this.pointerUp);
            document.removeEventListener("pointercancel", this.pointerUp);
        });
        (0,esm_define_property._)(this, "initInteractions", ()=>{
            this.cancelInteractions();
            this.startInteractions();
        });
        this.model = model;
        this.startX = this.startY = 0;
        this.lastX = this.lastY = 0;
    }
}

;// CONCATENATED MODULE: ./renderer/MotionController.ts




class MotionController {
    constructor(model){
        (0,esm_define_property._)(this, "model", void 0);
        (0,esm_define_property._)(this, "load", async ()=>{
            const { motionGroups } = this.model.buffers;
            for(let i = 0; i < motionGroups.length; i++){
                const group = motionGroups[i].group;
                const motionBuffers = motionGroups[i].motionData.motionBuffers;
                const name = `${group}_${i}`;
                for(let i = 0; i < motionBuffers.length; i++){
                    const motionBuffer = motionBuffers[i];
                    const motion = this.model.loadMotion(motionBuffer, motionBuffer.byteLength, name, null, null, this.model.settings, group, i);
                    if (motion !== null) {
                        motion.setEffectIds(this.model.eyeBlinkIds, this.model.lipSyncIds);
                        if (this.model.motions.getValue(name) !== null) {
                            ACubismMotion["delete"](this.model.motions.getValue(name));
                        }
                        this.model.motions.setValue(name, motion);
                    } else {
                        this.model.totalMotionCount--;
                    }
                }
            }
            this.model.motionManager.stopAllMotions();
        });
        (0,esm_define_property._)(this, "update", (deltaTime)=>{
            let motionUpdated = false;
            this.model.model.loadParameters();
            if (this.model.motionManager.isFinished()) {
                if (!this.model.paused && this.model.enableMotion) {
                    if (this.model.randomMotion) {
                        this.startRandomMotion(null, /* inlined export .MotionPriority.Idle */ (1));
                    } else {
                        this.startMotion("Idle", 1, /* inlined export .MotionPriority.Idle */ (1));
                    }
                }
            } else {
                motionUpdated = this.model.motionManager.updateMotion(this.model.model, deltaTime);
            }
            this.model.model.saveParameters();
            return motionUpdated;
        });
        (0,esm_define_property._)(this, "stopMotions", ()=>{
            this.model.motionManager.stopAllMotions();
        });
        (0,esm_define_property._)(this, "startMotion", async (group, i, priority, onStartMotion, onEndMotion)=>{
            if (priority === /* inlined export .MotionPriority.Force */ (3)) {
                this.model.motionManager.setReservePriority(priority);
            } else if (!this.model.motionManager.reserveMotion(priority)) {
                return InvalidMotionQueueEntryHandleValue;
            }
            const { motionGroups } = this.model.buffers;
            const motionGroup = motionGroups.find((motion)=>motion.group === group);
            if (!motionGroup) return;
            const { motionBuffers, wavBuffer } = motionGroup.motionData;
            const name = `${group}_${i}`;
            let motion = this.model.motions.getValue(name);
            let autoDelete = false;
            if (motion === null) {
                const motionBuffer = motionBuffers[i];
                motion = this.model.loadMotion(motionBuffer, motionBuffer.byteLength, null, onEndMotion, onStartMotion, this.model.settings, group, i);
                if (!motion) return;
                motion.setEffectIds(this.model.eyeBlinkIds, this.model.lipSyncIds);
                autoDelete = true;
            } else {
                motion.setBeganMotionHandler(onStartMotion);
                motion.setFinishedMotionHandler(onEndMotion);
            }
            if (wavBuffer) {
                this.model.wavController.start(wavBuffer);
            }
            return this.model.motionManager.startMotionPriority(motion, autoDelete, priority);
        });
        (0,esm_define_property._)(this, "startRandomMotion", async (group, priority, onStartMotion, onEndMotion)=>{
            var _motionGroups_find;
            if (!this.model.loaded) return;
            const { motionGroups } = this.model.buffers;
            if (!group) {
                var _motionGroups_randGroup;
                const randGroup = Math.floor(Math.random() * motionGroups.length);
                group = (_motionGroups_randGroup = motionGroups[randGroup]) === null || _motionGroups_randGroup === void 0 ? void 0 : _motionGroups_randGroup.group;
            }
            let motionCount = (_motionGroups_find = motionGroups.find((g)=>g.group === group)) === null || _motionGroups_find === void 0 ? void 0 : _motionGroups_find.motionData.motionBuffers.length;
            if (!motionCount) return;
            const rand = Math.floor(Math.random() * motionCount);
            return this.startMotion(group, rand, priority, onStartMotion, onEndMotion);
        });
        this.model = model;
    }
}

;// CONCATENATED MODULE: ./renderer/ExpressionController.ts


class ExpressionController {
    constructor(model){
        (0,esm_define_property._)(this, "model", void 0);
        (0,esm_define_property._)(this, "load", async ()=>{
            const { expressionBuffers } = this.model.buffers;
            for(let i = 0; i < expressionBuffers.length; i++){
                const name = this.model.expressionIds[i];
                const expressionBuffer = expressionBuffers[i];
                const motion = this.model.loadExpression(expressionBuffer, expressionBuffer.byteLength, name);
                if (this.model.expressions.getValue(name) !== null) {
                    ACubismMotion["delete"](this.model.expressions.getValue(name));
                    this.model.expressions.setValue(name, null);
                }
                this.model.expressions.setValue(name, motion);
            }
        });
        (0,esm_define_property._)(this, "update", (deltaTime)=>{
            if (this.model.expressionManager != null && this.model.enableExpression) {
                this.model.expressionManager.updateMotion(this.model.model, deltaTime);
            }
        });
        (0,esm_define_property._)(this, "setExpression", (expression)=>{
            const motion = this.model.expressions.getValue(expression);
            if (motion !== null) this.model.expressionManager.startMotion(motion, false);
        });
        (0,esm_define_property._)(this, "setRandomExpression", ()=>{
            if (!this.model.expressions.getSize()) return;
            const rand = Math.floor(Math.random() * this.model.expressions.getSize());
            const name = this.model.expressions._keyValues[rand].first;
            this.setExpression(name);
        });
        this.model = model;
    }
}

;// CONCATENATED MODULE: ./renderer/CameraController.ts

class CameraController {
    constructor(model){
        var _this = this;
        (0,esm_define_property._)(this, "model", void 0);
        (0,esm_define_property._)(this, "x", void 0);
        (0,esm_define_property._)(this, "y", void 0);
        (0,esm_define_property._)(this, "scale", void 0);
        (0,esm_define_property._)(this, "minScale", void 0);
        (0,esm_define_property._)(this, "maxScale", void 0);
        (0,esm_define_property._)(this, "zoomStep", void 0);
        (0,esm_define_property._)(this, "panSpeed", void 0);
        (0,esm_define_property._)(this, "isPanning", void 0);
        (0,esm_define_property._)(this, "lastPosition", void 0);
        (0,esm_define_property._)(this, "zoomEnabled", void 0);
        (0,esm_define_property._)(this, "enablePan", void 0);
        (0,esm_define_property._)(this, "doubleClickReset", void 0);
        (0,esm_define_property._)(this, "zoomIn", function() {
            let factor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1;
            if (!_this.zoomEnabled) return;
            const zoomFactor = 1 + factor;
            const newScale = Math.min(_this.scale * zoomFactor, _this.maxScale);
            const worldX = (_this.x - _this.model.canvas.width / 2) / _this.scale;
            const worldY = _this.y / _this.scale;
            _this.scale = newScale;
            _this.x = _this.model.canvas.width / 2 + worldX * _this.scale;
            _this.y = worldY * _this.scale;
        });
        (0,esm_define_property._)(this, "zoomOut", function() {
            let factor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1;
            if (!_this.zoomEnabled) return;
            const zoomFactor = 1 - factor;
            const newScale = Math.max(_this.scale * zoomFactor, _this.minScale);
            const worldX = (_this.x - _this.model.canvas.width / 2) / _this.scale;
            const worldY = _this.y / _this.scale;
            _this.scale = newScale;
            _this.x = _this.model.canvas.width / 2 + worldX * _this.scale;
            _this.y = worldY * _this.scale;
        });
        (0,esm_define_property._)(this, "handleMouseDown", (event)=>{
            if (!this.enablePan) return;
            this.isPanning = true;
            this.lastPosition = {
                x: event.clientX,
                y: event.clientY
            };
        });
        (0,esm_define_property._)(this, "handleMouseMove", (event)=>{
            if (!this.enablePan) return;
            if (this.isPanning) {
                const dx = event.clientX - this.lastPosition.x;
                const dy = event.clientY - this.lastPosition.y;
                this.x -= dx * this.panSpeed;
                this.y += dy * this.panSpeed;
                this.lastPosition = {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        });
        (0,esm_define_property._)(this, "handleMouseUp", ()=>{
            if (!this.enablePan) return;
            this.isPanning = false;
        });
        (0,esm_define_property._)(this, "handleWheel", (event)=>{
            if (!this.zoomEnabled) return;
            event.preventDefault();
            const delta = event.deltaY;
            const scaleFactor = Math.pow(2, -delta * this.zoomStep);
            const newScale = Math.max(this.minScale, Math.min(this.scale * scaleFactor, this.maxScale));
            const bounds = this.model.canvas.getBoundingClientRect();
            const mouseX = bounds.width - (event.clientX - bounds.left);
            const mouseY = event.clientY - bounds.top - bounds.height / 2;
            const worldX = (mouseX - this.x) / this.scale;
            const worldY = (mouseY - this.y) / this.scale;
            this.scale = newScale;
            this.x = mouseX - worldX * newScale;
            this.y = mouseY - worldY * newScale;
        });
        (0,esm_define_property._)(this, "handleDoubleClick", ()=>{
            if (this.doubleClickReset) {
                this.x = this.model.canvas.width / 2;
                this.y = 0;
                this.isPanning = false;
                this.lastPosition = {
                    x: 0,
                    y: 0
                };
                this.scale = 1;
                this.model.centerModel();
            }
        });
        (0,esm_define_property._)(this, "addListeners", ()=>{
            this.model.canvas.addEventListener("wheel", this.handleWheel);
            this.model.canvas.addEventListener("mousedown", this.handleMouseDown);
            window.addEventListener("mousemove", this.handleMouseMove);
            window.addEventListener("mouseup", this.handleMouseUp);
            this.model.canvas.addEventListener("dblclick", this.handleDoubleClick);
            this.model.canvas.addEventListener("contextmenu", (event)=>event.preventDefault());
        });
        (0,esm_define_property._)(this, "removeListeners", ()=>{
            this.model.canvas.removeEventListener("wheel", this.handleWheel);
            this.model.canvas.removeEventListener("mousedown", this.handleMouseDown);
            window.removeEventListener("mousemove", this.handleMouseMove);
            window.removeEventListener("mouseup", this.handleMouseUp);
            this.model.canvas.removeEventListener("dblclick", this.handleDoubleClick);
            this.model.canvas.removeEventListener("contextmenu", (event)=>event.preventDefault());
        });
        (0,esm_define_property._)(this, "initListeners", ()=>{
            this.removeListeners();
            this.addListeners();
        });
        this.model = model;
        this.x = model.canvas.width / 2;
        this.y = 0;
        this.scale = 1;
        this.minScale = 0.1;
        this.maxScale = 10;
        this.isPanning = false;
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.zoomStep = 0.005;
        this.panSpeed = 1;
    }
}

;// CONCATENATED MODULE: ./renderer/WebGLRenderer.ts

class WebGLRenderer {
    constructor(model){
        (0,esm_define_property._)(this, "model", void 0);
        (0,esm_define_property._)(this, "shader", void 0);
        (0,esm_define_property._)(this, "createShader", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            const vertexShaderString = `
            precision mediump float;
            attribute vec3 position;
            attribute vec2 uv;
            varying vec2 vuv;
            void main(void) {
               gl_Position = vec4(position, 1.0);
               vuv = uv;
            }`;
            gl.shaderSource(vertexShader, vertexShaderString);
            gl.compileShader(vertexShader);
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            const fragmentShaderString = `
            precision mediump float;
            varying vec2 vuv;
            uniform sampler2D texture;
            void main(void) {
               gl_FragColor = texture2D(texture, vuv);
            }`;
            gl.shaderSource(fragmentShader, fragmentShaderString);
            gl.compileShader(fragmentShader);
            const shader = gl.createProgram();
            gl.attachShader(shader, vertexShader);
            gl.attachShader(shader, fragmentShader);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.linkProgram(shader);
            gl.useProgram(shader);
            return shader;
        });
        (0,esm_define_property._)(this, "deleteShader", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            gl.deleteProgram(this.shader);
        });
        (0,esm_define_property._)(this, "start", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            this.model.getRenderer().startUp(gl);
        });
        (0,esm_define_property._)(this, "loadTexture", (index, image)=>{
            const gl = this.model.canvas.getContext("webgl2");
            const maxTextureSize = this.model.maxTextureSize ?? gl.getParameter(gl.MAX_TEXTURE_SIZE);
            let resized = image;
            if (image.width > maxTextureSize || image.height > maxTextureSize) {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const aspectRatio = image.width / image.height;
                if (image.width > image.height) {
                    canvas.width = maxTextureSize;
                    canvas.height = maxTextureSize / aspectRatio;
                } else {
                    canvas.height = maxTextureSize;
                    canvas.width = maxTextureSize * aspectRatio;
                }
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                resized = canvas;
            }
            const tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            if (this.model.premultipliedAlpha) gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, resized);
            if ((resized.width & resized.width - 1) === 0 && (resized.height & resized.height - 1) === 0) {
                gl.generateMipmap(gl.TEXTURE_2D);
            }
            gl.bindTexture(gl.TEXTURE_2D, null);
            this.model.getRenderer().bindTexture(index, tex);
            this.model.getRenderer().setIsPremultipliedAlpha(this.model.premultipliedAlpha);
        });
        (0,esm_define_property._)(this, "deleteTextures", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            for(let i = 0; i < this.model.textures.getSize(); i++){
                gl.deleteTexture(this.model.textures.at(i));
                this.model.textures.set(i, null);
            }
            this.model.textures.clear();
        });
        (0,esm_define_property._)(this, "deleteTexture", (texture)=>{
            const gl = this.model.canvas.getContext("webgl2");
            for(let i = 0; i < this.model.textures.getSize(); i++){
                if (this.model.textures.at(i) === texture) {
                    gl.deleteTexture(this.model.textures.at(i));
                    this.model.textures.set(i, null);
                    this.model.textures.remove(i);
                    break;
                }
            }
        });
        (0,esm_define_property._)(this, "resize", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        });
        (0,esm_define_property._)(this, "contextLost", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            return gl.isContextLost();
        });
        (0,esm_define_property._)(this, "prepare", ()=>{
            const gl = this.model.canvas.getContext("webgl2");
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.clearDepth(1);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.useProgram(this.shader);
            gl.flush();
        });
        (0,esm_define_property._)(this, "draw", ()=>{
            if (!this.model.loaded) return;
            this.model.projection.multiplyByMatrix(this.model.modelMatrix);
            this.model.getRenderer().setMvpMatrix(this.model.projection);
            const gl = this.model.canvas.getContext("webgl2");
            const viewport = [
                0,
                0,
                gl.canvas.width,
                gl.canvas.height
            ];
            const frameBuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
            this.model.getRenderer().setRenderState(frameBuffer, viewport);
            this.model.getRenderer().drawModel();
        });
        this.model = model;
        this.shader = this.createShader();
    }
}

// EXTERNAL MODULE: ./node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(975);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);
;// CONCATENATED MODULE: ./renderer/Live2DCubismModel.ts




















let Live2DCubismModel_id = null;
const isLive2DZip = async (arrayBuffer)=>{
    var _fileType;
    let fileType;
    let JSZip;
    try {
        fileType = await __webpack_require__.e(/* import() */ "817").then(__webpack_require__.t.bind(__webpack_require__, 48, 23)).then((r)=>r.default);
        JSZip = await __webpack_require__.e(/* import() */ "355").then(__webpack_require__.t.bind(__webpack_require__, 710, 23)).then((r)=>r.default);
    } catch  {
        return Promise.reject("jszip and magic-bytes.js required");
    }
    let isZip = false;
    const result = ((_fileType = fileType(new Uint8Array(arrayBuffer))) === null || _fileType === void 0 ? void 0 : _fileType[0]) || {
        mime: ""
    };
    if (result.mime === "application/zip") isZip = true;
    if (!isZip) return false;
    const zip = await JSZip.loadAsync(arrayBuffer);
    let hasModel = false;
    let hasMoc3 = false;
    let hasTexture = false;
    for (const [relativePath, file] of Object.entries(zip.files)){
        if (relativePath.startsWith("__MACOSX") || file.dir) continue;
        if (relativePath.endsWith('model3.json')) hasModel = true;
        if (relativePath.endsWith("moc3")) hasMoc3 = true;
        if (relativePath.match(/\.(png|jpg|webp|avif)$/)) hasTexture = true;
    }
    return hasModel && hasMoc3 && hasTexture;
};
const compressLive2DTextures = async function(arrayBuffer) {
    let maxSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8192, quality = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.8, format = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "webp";
    var _fileType;
    let fileType;
    let JSZip;
    try {
        fileType = await __webpack_require__.e(/* import() */ "817").then(__webpack_require__.t.bind(__webpack_require__, 48, 23)).then((r)=>r.default);
        JSZip = await __webpack_require__.e(/* import() */ "355").then(__webpack_require__.t.bind(__webpack_require__, 710, 23)).then((r)=>r.default);
    } catch  {
        return Promise.reject("jszip and magic-bytes.js required");
    }
    const result = ((_fileType = fileType(new Uint8Array(arrayBuffer))) === null || _fileType === void 0 ? void 0 : _fileType[0]) || {
        mime: ""
    };
    if (result.mime !== "application/zip") return arrayBuffer;
    const zip = await JSZip.loadAsync(arrayBuffer);
    const newZip = new JSZip();
    for (const [relativePath, file] of Object.entries(zip.files)){
        if (relativePath.startsWith("__MACOSX") || file.dir) continue;
        if (relativePath.endsWith("model3.json")) {
            var _json_FileReferences_Textures;
            const json = JSON.parse(await file.async("string"));
            for(let i = 0; i < ((_json_FileReferences_Textures = json.FileReferences.Textures) === null || _json_FileReferences_Textures === void 0 ? void 0 : _json_FileReferences_Textures.length); i++){
                const texture = json.FileReferences.Textures[i];
                json.FileReferences.Textures[i] = texture.replace(/\.(png|jpg|webp|avif)$/, `.${format}`);
            }
            newZip.file(relativePath, JSON.stringify(json, null, 4));
        } else if (relativePath.match(/\.(png|jpg|webp|avif)$/)) {
            const blob = await file.async("blob");
            const image = await createImageBitmap(blob);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (image.width > maxSize || image.height > maxSize) {
                const aspectRatio = image.width / image.height;
                if (image.width > image.height) {
                    canvas.width = maxSize;
                    canvas.height = maxSize / aspectRatio;
                } else {
                    canvas.height = maxSize;
                    canvas.width = maxSize * aspectRatio;
                }
            } else {
                canvas.width = image.width;
                canvas.height = image.height;
            }
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const newBlob = await new Promise((resolve)=>canvas.toBlob(resolve, `image/${format}`, quality));
            newZip.file(relativePath.replace(/\.(png|jpg|webp|avif)$/, `.${format}`), newBlob);
        } else {
            newZip.file(relativePath, await file.async("arraybuffer"));
        }
    }
    const newBuffer = await newZip.generateAsync({
        type: "arraybuffer"
    });
    return newBuffer;
};
class Live2DCubismModel_Live2DCubismModel extends Live2DCubismUserModel {
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    emit(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (this.events[event]) {
            this.events[event].forEach((listener)=>listener(...args));
        }
    }
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter((l)=>l !== listener);
        }
    }
    get zoomEnabled() {
        return this.cameraController.zoomEnabled;
    }
    set zoomEnabled(zoomEnabled) {
        this.cameraController.zoomEnabled = zoomEnabled;
    }
    get minScale() {
        return this.cameraController.minScale;
    }
    set minScale(minScale) {
        this.cameraController.minScale = minScale;
    }
    get maxScale() {
        return this.cameraController.maxScale;
    }
    set maxScale(maxScale) {
        this.cameraController.maxScale = maxScale;
    }
    get panSpeed() {
        return this.cameraController.panSpeed;
    }
    set panSpeed(panSpeed) {
        this.cameraController.panSpeed = panSpeed;
    }
    get zoomStep() {
        return this.cameraController.zoomStep;
    }
    set zoomStep(zoomStep) {
        this.cameraController.zoomStep = zoomStep;
    }
    get scale() {
        return this.cameraController.scale;
    }
    set scale(scale) {
        this.cameraController.scale = scale;
    }
    get x() {
        return this.cameraController.x;
    }
    set x(x) {
        this.cameraController.x = x;
    }
    get y() {
        return this.cameraController.y;
    }
    set y(y) {
        this.cameraController.y = y;
    }
    get lipsyncSmoothing() {
        return this.wavController.smoothingFactor;
    }
    set lipsyncSmoothing(lipsyncSmoothing) {
        this.wavController.smoothingFactor = lipsyncSmoothing;
    }
    get volume() {
        return this.wavController.volumeNode.gain.value;
    }
    set volume(volume) {
        this.wavController.volumeNode.gain.value = volume;
    }
    get doubleClickReset() {
        return this.cameraController.doubleClickReset;
    }
    set doubleClickReset(doubleClickReset) {
        this.cameraController.doubleClickReset = doubleClickReset;
    }
    get paused() {
        return this._paused;
    }
    set paused(paused) {
        if (paused) this.stopMotions();
        this._paused = paused;
    }
    constructor(canvas, options){
        var _this;
        if (!options) options = {};
        super(), _this = this, (0,esm_define_property._)(this, "events", {}), (0,esm_define_property._)(this, "_paused", void 0), (0,esm_define_property._)(this, "buffers", void 0), (0,esm_define_property._)(this, "motions", void 0), (0,esm_define_property._)(this, "expressions", void 0), (0,esm_define_property._)(this, "expressionIds", void 0), (0,esm_define_property._)(this, "motionIds", void 0), (0,esm_define_property._)(this, "textures", void 0), (0,esm_define_property._)(this, "eyeBlinkIds", void 0), (0,esm_define_property._)(this, "lipSyncIds", void 0), (0,esm_define_property._)(this, "settings", void 0), (0,esm_define_property._)(this, "vtubeSettings", void 0), (0,esm_define_property._)(this, "displayInfo", void 0), (0,esm_define_property._)(this, "viewMatrix", void 0), (0,esm_define_property._)(this, "projection", void 0), (0,esm_define_property._)(this, "deviceToScreen", void 0), (0,esm_define_property._)(this, "canvas", void 0), (0,esm_define_property._)(this, "deltaTime", void 0), (0,esm_define_property._)(this, "currentFrame", void 0), (0,esm_define_property._)(this, "lastFrame", void 0), (0,esm_define_property._)(this, "queueManager", void 0), (0,esm_define_property._)(this, "premultipliedAlpha", void 0), (0,esm_define_property._)(this, "cubismCorePath", void 0), (0,esm_define_property._)(this, "autoAnimate", void 0), (0,esm_define_property._)(this, "autoInteraction", void 0), (0,esm_define_property._)(this, "tapInteraction", void 0), (0,esm_define_property._)(this, "randomMotion", void 0), (0,esm_define_property._)(this, "keepAspect", void 0), (0,esm_define_property._)(this, "speed", void 0), (0,esm_define_property._)(this, "logicalLeft", void 0), (0,esm_define_property._)(this, "logicalRight", void 0), (0,esm_define_property._)(this, "logicalBottom", void 0), (0,esm_define_property._)(this, "logicalTop", void 0), (0,esm_define_property._)(this, "audioContext", void 0), (0,esm_define_property._)(this, "connectNode", void 0), (0,esm_define_property._)(this, "wavController", void 0), (0,esm_define_property._)(this, "touchController", void 0), (0,esm_define_property._)(this, "motionController", void 0), (0,esm_define_property._)(this, "expressionController", void 0), (0,esm_define_property._)(this, "cameraController", void 0), (0,esm_define_property._)(this, "webGLRenderer", void 0), (0,esm_define_property._)(this, "enablePhysics", void 0), (0,esm_define_property._)(this, "enableEyeblink", void 0), (0,esm_define_property._)(this, "enableBreath", void 0), (0,esm_define_property._)(this, "enableLipsync", void 0), (0,esm_define_property._)(this, "enableMotion", void 0), (0,esm_define_property._)(this, "enableExpression", void 0), (0,esm_define_property._)(this, "enableMovement", void 0), (0,esm_define_property._)(this, "enablePose", void 0), (0,esm_define_property._)(this, "size", void 0), (0,esm_define_property._)(this, "maxTextureSize", void 0), (0,esm_define_property._)(this, "scaledYPos", void 0), (0,esm_define_property._)(this, "appendYOffset", void 0), (0,esm_define_property._)(this, "totalMotionCount", 0), (0,esm_define_property._)(this, "needsResize", false), (0,esm_define_property._)(this, "loaded", false), (0,esm_define_property._)(this, "cubismLoaded", false), (0,esm_define_property._)(this, "destroy", function() {
            let destroyCubism = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            cancelAnimationFrame(Live2DCubismModel_id);
            _this.motions.clear();
            _this.expressions.clear();
            _this.eyeBlinkIds.clear();
            _this.lipSyncIds.clear();
            _this.webGLRenderer.deleteTextures();
            _this.webGLRenderer.deleteShader();
            _this.touchController.cancelInteractions();
            _this.cameraController.removeListeners();
            _this.expressionIds = [];
            _this.motionIds = [];
            Object.keys(_this.events).forEach((event)=>{
                _this.events[event] = [];
            });
            if (_this.buffers) {
                _this.buffers.modelBuffer = null;
                _this.buffers.expressionBuffers = [];
                _this.buffers.physicsBuffer = null;
                _this.buffers.poseBuffer = null;
                _this.buffers.userDataBuffer = null;
                _this.buffers.motionGroups = [];
                _this.buffers.textureImages = [];
            }
            _this.buffers = null;
            _this.loaded = false;
            _this.cubismLoaded = false;
            _this.model.release();
            if (destroyCubism) CubismFramework.dispose();
        }), (0,esm_define_property._)(this, "loadCubismCore", async ()=>{
            await new Promise(async (resolve, reject)=>{
                if (document.querySelector(`script[src="${this.cubismCorePath}"]`)) {
                    return resolve();
                }
                const script = document.createElement("script");
                script.src = this.cubismCorePath;
                document.body.appendChild(script);
                script.onload = ()=>resolve();
                script.onerror = (err)=>reject(err);
            });
        }), (0,esm_define_property._)(this, "loadFramework", async ()=>{
            CubismFramework.startUp({
                logFunction: (msg)=>console.log(msg),
                loggingLevel: 5
            });
            CubismFramework.initialize();
        }), (0,esm_define_property._)(this, "initializeCubism", async ()=>{
            await this.loadCubismCore().catch(()=>null);
            await this.loadFramework().catch(()=>null);
            this.cubismLoaded = true;
        }), (0,esm_define_property._)(this, "loadBuffers", async (link)=>{
            let fileType;
            let JSZip;
            try {
                fileType = await __webpack_require__.e(/* import() */ "817").then(__webpack_require__.t.bind(__webpack_require__, 48, 23)).then((r)=>r.default);
                JSZip = await __webpack_require__.e(/* import() */ "355").then(__webpack_require__.t.bind(__webpack_require__, 710, 23)).then((r)=>r.default);
            } catch  {
                fileType = null;
                JSZip = null;
            }
            let isZip = false;
            let arrayBuffer = link instanceof ArrayBuffer ? link : new ArrayBuffer(0);
            if (typeof link === "string") {
                isZip = path_browserify_default().extname(link).replace(".", "") === "zip";
                arrayBuffer = await fetch(link).then((r)=>r.arrayBuffer()).catch(()=>new ArrayBuffer(0));
            }
            if (!arrayBuffer.byteLength) return Promise.reject(`Failed to load ${link}`);
            if (fileType) {
                var _fileType;
                const result = ((_fileType = fileType(new Uint8Array(arrayBuffer))) === null || _fileType === void 0 ? void 0 : _fileType[0]) || {
                    mime: ""
                };
                if (result.mime === "application/zip") isZip = true;
            }
            let files = {};
            let basename = link instanceof ArrayBuffer ? "." : path_browserify_default().dirname(link);
            if (isZip && JSZip) {
                const zip = await JSZip.loadAsync(arrayBuffer);
                this.size = arrayBuffer.byteLength;
                for (const [relativePath, file] of Object.entries(zip.files)){
                    if (relativePath.startsWith("__MACOSX") || file.dir) continue;
                    const key = relativePath.split("/").slice(1).join("/");
                    const contents = await file.async("arraybuffer");
                    files[key] = contents;
                    if (!this.settings && key.endsWith("model3.json")) this.settings = new CubismModelSettingJson(contents, contents.byteLength);
                    if (!this.vtubeSettings && key.endsWith("vtube.json")) this.vtubeSettings = JSON.parse(await file.async("string"));
                    if (!this.displayInfo && key.endsWith("cdi3.json")) this.displayInfo = JSON.parse(await file.async("string"));
                }
            } else {
                this.settings = new CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);
            }
            const getBuffer = async (filename)=>{
                if (isZip) {
                    let name = filename.startsWith(".") ? filename.split("/").slice(2).join("/") : filename;
                    let buffer = null;
                    for (const [key, value] of Object.entries(files)){
                        if (key.includes(name)) {
                            buffer = value;
                            break;
                        }
                    }
                    if (!(buffer === null || buffer === void 0 ? void 0 : buffer.byteLength)) return Promise.reject(`Failed to load ${name}`);
                    return buffer;
                } else {
                    const filePath = path_browserify_default().join(basename, filename);
                    const buffer = await fetch(filePath).then((r)=>r.arrayBuffer()).catch(()=>new ArrayBuffer(0));
                    if (!buffer.byteLength) return Promise.reject(`Failed to load ${filePath}`);
                    return buffer;
                }
            };
            const getBufferOptional = async (getFilenameFn)=>{
                try {
                    const filename = getFilenameFn();
                    return filename ? await getBuffer(filename) : null;
                } catch  {
                    return null;
                }
            };
            const getBufferArray = async (count, getFilenameFn)=>{
                const buffers = [];
                for(let i = 0; i < count; i++){
                    buffers.push(await getBuffer(getFilenameFn(i)));
                }
                return buffers;
            };
            const modelBuffer = await getBuffer(this.settings.getModelFileName());
            this.size = modelBuffer.byteLength;
            const physicsBuffer = await getBufferOptional(()=>this.settings.getPhysicsFileName());
            const poseBuffer = await getBufferOptional(()=>this.settings.getPoseFileName());
            const userDataBuffer = await getBufferOptional(()=>this.settings.getUserDataFile());
            const expressionBuffers = [];
            if (this.settings.getExpressionCount()) {
                expressionBuffers.push(...await getBufferArray(this.settings.getExpressionCount(), (i)=>this.settings.getExpressionFileName(i)));
                this.expressionIds = Array.from({
                    length: this.settings.getExpressionCount()
                }).map((_, i)=>this.settings.getExpressionFileName(i));
            } else if (this.vtubeSettings) {
                this.expressionIds = this.vtubeSettings.Hotkeys.filter((h)=>h.Action === "ToggleExpression").map((e)=>e.File);
                expressionBuffers.push(...await getBufferArray(this.expressionIds.length, (i)=>this.expressionIds[i]));
            }
            const motionGroups = [];
            if (this.settings.getMotionGroupCount()) {
                for(let i = 0; i < this.settings.getMotionGroupCount(); i++){
                    const group = this.settings.getMotionGroupName(i);
                    const motionBuffers = await getBufferArray(this.settings.getMotionCount(group), (i)=>this.settings.getMotionFileName(group, i));
                    const wavBuffer = await getBufferOptional(()=>this.settings.getMotionSoundFileName(group, i));
                    motionGroups.push({
                        group,
                        motionData: {
                            motionBuffers,
                            wavBuffer
                        }
                    });
                    this.motionIds.push(...Array.from({
                        length: this.settings.getMotionCount(group)
                    }).map((_, i)=>`${group}_${i}`));
                }
            } else if (this.vtubeSettings) {
                const motions = [
                    this.vtubeSettings.FileReferences.IdleAnimation
                ];
                motions.push(...this.vtubeSettings.Hotkeys.filter((h)=>h.Action === "TriggerAnimation").map((e)=>e.File));
                for(let i = 0; i < motions.length; i++){
                    const buffer = await getBuffer(motions[i]);
                    motionGroups.push({
                        group: motions[i],
                        motionData: {
                            motionBuffers: [
                                buffer
                            ],
                            wavBuffer: null
                        }
                    });
                    this.motionIds.push(`${motions[i]}_0`);
                }
            }
            const textureImages = [];
            for(let i = 0; i < this.settings.getTextureCount(); i++){
                const filename = this.settings.getTextureFileName(i);
                const buffer = await getBuffer(filename);
                const blob = new Blob([
                    buffer
                ]);
                const url = URL.createObjectURL(blob);
                const img = new Image();
                img.src = url;
                await new Promise((resolve, reject)=>{
                    img.onload = ()=>resolve();
                    img.onerror = (err)=>reject(err);
                });
                URL.revokeObjectURL(url);
                textureImages.push(img);
            }
            this.buffers = {
                modelBuffer,
                expressionBuffers,
                physicsBuffer,
                poseBuffer,
                userDataBuffer,
                motionGroups,
                textureImages
            };
            return this.buffers;
        }), (0,esm_define_property._)(this, "load", async (link)=>{
            var _CubismFramework_getIdManager;
            if (!this.cubismLoaded) await this.initializeCubism();
            const { modelBuffer, physicsBuffer, poseBuffer, userDataBuffer } = await this.loadBuffers(link);
            this.touchController.initInteractions();
            this.cameraController.initListeners();
            this.loadModel(modelBuffer, this._mocConsistency);
            this.initialize();
            await this.expressionController.load();
            if (physicsBuffer) {
                this.loadPhysics(physicsBuffer, physicsBuffer.byteLength);
            }
            if (poseBuffer) {
                this.loadPose(poseBuffer, poseBuffer.byteLength);
            }
            if (this.settings.getEyeBlinkParameterCount() > 0) {
                this.eyeBlink = CubismEyeBlink.create(this.settings);
            }
            this.breath = CubismBreath.create();
            const breathParameters = new csmVector();
            const manager = CubismFramework === null || CubismFramework === void 0 ? void 0 : (_CubismFramework_getIdManager = CubismFramework.getIdManager) === null || _CubismFramework_getIdManager === void 0 ? void 0 : _CubismFramework_getIdManager.call(CubismFramework);
            const paramAngleX = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamAngleX);
            const paramAngleY = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamAngleY);
            const paramAngleZ = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamAngleZ);
            const paramBodyAngleX = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamBodyAngleX);
            const paramBreath = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamBreath);
            if (paramAngleX) breathParameters.pushBack(new BreathParameterData(paramAngleX, 0.0, 15.0, 6.5345, 0.5));
            if (paramAngleY) breathParameters.pushBack(new BreathParameterData(paramAngleY, 0.0, 8.0, 3.5345, 0.5));
            if (paramAngleZ) breathParameters.pushBack(new BreathParameterData(paramAngleZ, 0.0, 10.0, 5.5345, 0.5));
            if (paramBodyAngleX) breathParameters.pushBack(new BreathParameterData(paramBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
            if (paramBreath) breathParameters.pushBack(new BreathParameterData(paramBreath, 0.5, 0.5, 3.2345, 1));
            this.breath.setParameters(breathParameters);
            if (userDataBuffer) {
                this.loadUserData(userDataBuffer, userDataBuffer.byteLength);
            }
            const eyeBlinkCount = this.settings.getEyeBlinkParameterCount();
            for(let i = 0; i < eyeBlinkCount; ++i){
                this.eyeBlinkIds.pushBack(this.settings.getEyeBlinkParameterId(i));
            }
            const lipSyncCount = this.settings.getLipSyncParameterCount();
            for(let i = 0; i < lipSyncCount; ++i){
                this.lipSyncIds.pushBack(this.settings.getLipSyncParameterId(i));
            }
            if (!lipSyncCount) {
                const index = this.parameters.ids.indexOf("ParamMouthOpenY");
                if (index !== -1) this.lipSyncIds.pushBack(this.model.getParameterId(index));
                this.lipsync = Boolean(this.lipSyncIds.getSize());
            }
            const layout = new csmMap();
            this.settings.getLayoutMap(layout);
            this.modelMatrix.setupFromLayout(layout);
            await this.motionController.load();
            this.createRenderer();
            await this.loadTextures();
            this.loaded = true;
            this.webGLRenderer.start();
            this.resize();
            this.animationLoop();
            this.centerModel();
        }), (0,esm_define_property._)(this, "loadTextures", async ()=>{
            const { textureImages } = this.buffers;
            for(let i = 0; i < textureImages.length; i++){
                const img = textureImages[i];
                this.webGLRenderer.loadTexture(i, img);
            }
        }), (0,esm_define_property._)(this, "resize", ()=>{
            if (this.keepAspect) {
                const ratio = this.width / this.height;
                if (this.canvas.width / this.canvas.height >= ratio) {
                    this.canvas.height = this.canvas.height;
                    this.canvas.width = this.canvas.height * ratio;
                } else {
                    this.canvas.width = this.canvas.width;
                    this.canvas.height = this.canvas.width / ratio;
                }
            } else {
                this.canvas.width = this.canvas.clientWidth ? this.canvas.clientWidth : this.canvas.width;
                this.canvas.height = this.canvas.clientHeight ? this.canvas.clientHeight : this.canvas.height;
            }
            const aspectRatio = this.canvas.width / this.canvas.height;
            const logicalHeight = 2;
            const logicalWidth = logicalHeight * aspectRatio;
            this.logicalLeft = -logicalWidth / 2;
            this.logicalRight = logicalWidth / 2;
            this.logicalBottom = -logicalHeight / 2;
            this.logicalTop = logicalHeight / 2;
            this.viewMatrix.setScreenRect(this.logicalLeft, this.logicalRight, this.logicalBottom, this.logicalTop);
            this.viewMatrix.scale(1, 1);
            this.deviceToScreen.loadIdentity();
            const screenScale = logicalHeight / this.canvas.height;
            this.deviceToScreen.scaleRelative(screenScale, -screenScale);
            this.deviceToScreen.translateRelative(-this.canvas.width * 0.5, -this.canvas.height * 0.5);
            this.viewMatrix.setMinScale(this.minScale);
            this.viewMatrix.setMaxScale(this.maxScale);
            this.viewMatrix.setMaxScreenRect(this.logicalLeft, this.logicalRight, this.logicalBottom, this.logicalTop);
        }), (0,esm_define_property._)(this, "updateTime", ()=>{
            this.currentFrame = performance.now();
            this.deltaTime = (this.currentFrame - this.lastFrame) / 1000;
            this.lastFrame = this.currentFrame;
        }), (0,esm_define_property._)(this, "updateCamera", ()=>{
            const { x, y, scale } = this.cameraController;
            const logicalX = this.logicalLeft + x / this.canvas.width * (this.logicalRight - this.logicalLeft);
            const logicalY = this.logicalTop + y / this.canvas.height * (this.logicalTop - this.logicalBottom);
            const centerX = (this.logicalLeft + this.logicalRight) / 2;
            this.viewMatrix.scale(scale, scale);
            this.viewMatrix.translate(centerX - logicalX, this.logicalTop - logicalY * (this.scaledYPos ? scale : 1));
        }), (0,esm_define_property._)(this, "updateProjection", ()=>{
            const { width, height } = this.canvas;
            const projection = new CubismMatrix44();
            const canvasAspect = width / height;
            if (this.model.getCanvasWidth() > 1 && width < height) {
                this.modelMatrix.setWidth(2);
                projection.scale(1, canvasAspect);
            } else {
                projection.scale(1 / canvasAspect, 1);
            }
            if (this.viewMatrix) {
                projection.multiplyByMatrix(this.viewMatrix);
            }
            this.projection = projection;
        }), (0,esm_define_property._)(this, "update", ()=>{
            if (!this.model || this.webGLRenderer.contextLost()) return;
            this.updateTime();
            this.updateCamera();
            this.updateProjection();
            this.webGLRenderer.prepare();
            this.deltaTime *= this.speed;
            if (this.needsResize) {
                this.resize();
                this.needsResize = false;
            }
            this.model.saveParameters();
            let motionUpdated = this.motionController.update(this.deltaTime);
            this.expressionController.update(this.deltaTime);
            if (!this.paused) {
                this.dragManager.update(this.deltaTime);
                this.dragX = this.dragManager.getX();
                this.dragY = this.dragManager.getY();
                if (!motionUpdated) {
                    if (this.eyeBlink !== null && this.enableEyeblink) {
                        this.eyeBlink.updateParameters(this.model, this.deltaTime);
                    }
                }
                if (this.enableMovement) {
                    var _CubismFramework_getIdManager;
                    const manager = (_CubismFramework_getIdManager = CubismFramework.getIdManager) === null || _CubismFramework_getIdManager === void 0 ? void 0 : _CubismFramework_getIdManager.call(CubismFramework);
                    const paramAngleX = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamAngleX);
                    const paramAngleY = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamAngleY);
                    const paramAngleZ = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamAngleZ);
                    const paramBodyAngleX = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamBodyAngleX);
                    const paramEyeBallX = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamEyeBallX);
                    const paramEyeBallY = manager === null || manager === void 0 ? void 0 : manager.getId(CubismDefaultParameterId.ParamEyeBallY);
                    if (paramAngleX) this.model.addParameterValueById(paramAngleX, this.dragX * 30);
                    if (paramAngleY) this.model.addParameterValueById(paramAngleY, this.dragY * 30);
                    if (paramAngleZ) this.model.addParameterValueById(paramAngleZ, this.dragX * this._dragY * -30);
                    if (paramBodyAngleX) this.model.addParameterValueById(paramBodyAngleX, this._dragX * 10);
                    if (paramEyeBallX) this.model.addParameterValueById(paramEyeBallX, this.dragX);
                    if (paramEyeBallY) this.model.addParameterValueById(paramEyeBallY, this.dragY);
                }
                if (this.breath !== null && this.enableBreath) {
                    this.breath.updateParameters(this.model, this.deltaTime);
                }
                if (this.physics !== null && this.enablePhysics) {
                    this.physics.evaluate(this.model, this.deltaTime);
                }
                if (this.lipsync && this.enableLipsync) {
                    this.wavController.update(this.deltaTime);
                    let value = this.wavController.getRms();
                    for(let i = 0; i < this.lipSyncIds.getSize(); ++i){
                        const parameterIndex = this.model.getParameterIndex(this.lipSyncIds.at(i));
                        const minValue = this.model.getParameterMinimumValue(parameterIndex);
                        const maxValue = this.model.getParameterMaximumValue(parameterIndex);
                        const scaledValue = minValue + (maxValue - minValue) * value;
                        this.model.addParameterValueById(this.lipSyncIds.at(i), scaledValue, 0.8);
                    }
                }
                if (this.pose !== null && this.enablePose) {
                    this.pose.updateParameters(this.model, this.deltaTime);
                }
            }
            this.model.update();
            this.model.loadParameters();
            this.webGLRenderer.draw();
        }), (0,esm_define_property._)(this, "animationLoop", ()=>{
            this.update();
            if (!this.autoAnimate) return;
            const loop = async ()=>{
                this.update();
                Live2DCubismModel_id = window.requestAnimationFrame(loop);
            };
            loop();
        }), (0,esm_define_property._)(this, "stopMotions", ()=>{
            if (!this.loaded) return;
            this.motionController.stopMotions();
        }), (0,esm_define_property._)(this, "startMotion", async (group, i, priority, onStartMotion, onEndMotion)=>{
            return this.motionController.startMotion(group, i, priority, onStartMotion, onEndMotion);
        }), (0,esm_define_property._)(this, "startRandomMotion", async (group, priority, onStartMotion, onEndMotion)=>{
            return this.motionController.startRandomMotion(group, priority, onStartMotion, onEndMotion);
        }), (0,esm_define_property._)(this, "getExpressions", ()=>{
            return this.expressionIds;
        }), (0,esm_define_property._)(this, "getMotions", ()=>{
            return this.motionIds;
        }), (0,esm_define_property._)(this, "hasLipsync", ()=>{
            return this.lipsync;
        }), (0,esm_define_property._)(this, "setExpression", (expression)=>{
            return this.expressionController.setExpression(expression);
        }), (0,esm_define_property._)(this, "setRandomExpression", ()=>{
            return this.expressionController.setRandomExpression();
        }), (0,esm_define_property._)(this, "inputAudio", async function(wavBuffer) {
            let playAudio = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return _this.wavController.start(wavBuffer, playAudio);
        }), (0,esm_define_property._)(this, "stopAudio", ()=>{
            return this.wavController.stop();
        }), (0,esm_define_property._)(this, "hitTest", (areaName, x, y)=>{
            if (!this.loaded) return;
            if (this.opacity < 1) return;
            for(let i = 0; i < this.settings.getHitAreasCount(); i++){
                if (this.settings.getHitAreaName(i) == areaName) {
                    const drawId = this.settings.getHitAreaId(i);
                    return this.isHit(drawId, x, y);
                }
            }
        }), (0,esm_define_property._)(this, "isMocConsistent", ()=>{
            const { modelBuffer } = this.buffers;
            return CubismMoc.hasMocConsistency(modelBuffer);
        }), (0,esm_define_property._)(this, "transformX", (pointX)=>{
            const screenX = this.deviceToScreen.transformX(pointX);
            return this.viewMatrix.invertTransformX(screenX);
        }), (0,esm_define_property._)(this, "transformY", (pointY)=>{
            const screenY = this.deviceToScreen.transformY(pointY);
            return this.viewMatrix.invertTransformY(screenY);
        }), (0,esm_define_property._)(this, "takeScreenshot", async function() {
            let format = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "png", faceCrop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            _this.centerModel();
            _this.update();
            if (faceCrop) {
                const clonedCanvas = document.createElement("canvas");
                const cropSize = _this.canvas.width / 4;
                clonedCanvas.width = cropSize;
                clonedCanvas.height = cropSize;
                const ctx = clonedCanvas.getContext("2d");
                const startX = (_this.canvas.width - cropSize) / 2;
                ctx.drawImage(_this.canvas, startX, 0, cropSize, cropSize, 0, 0, cropSize, cropSize);
                return clonedCanvas.toDataURL(`image/${format}`);
            } else {
                return _this.canvas.toDataURL(`image/${format}`);
            }
        }), (0,esm_define_property._)(this, "zoomIn", function() {
            let factor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1;
            return _this.cameraController.zoomIn(factor);
        }), (0,esm_define_property._)(this, "zoomOut", function() {
            let factor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1;
            return _this.cameraController.zoomOut(factor);
        }), (0,esm_define_property._)(this, "centerModel", ()=>{
            this.x = this.canvas.width / 2;
            this.y = 0;
            this.update();
            const clonedCanvas = document.createElement("canvas");
            clonedCanvas.width = this.canvas.width / this.scale;
            clonedCanvas.height = this.canvas.height / this.scale;
            const ctx = clonedCanvas.getContext("2d");
            ctx.scale(1 / this.scale, 1 / this.scale);
            ctx.drawImage(this.canvas, 0, 0);
            const imageData = ctx.getImageData(0, 0, clonedCanvas.width, clonedCanvas.height).data;
            let firstNonTransparentY = clonedCanvas.height;
            let lastNonTransparentY = 0;
            for(let y = 0; y < clonedCanvas.height; y++){
                for(let x = 0; x < clonedCanvas.width; x++){
                    if (imageData[(y * clonedCanvas.width + x) * 4 + 3] !== 0) {
                        firstNonTransparentY = Math.min(firstNonTransparentY, y);
                        lastNonTransparentY = Math.max(lastNonTransparentY, y);
                    }
                }
            }
            const characterHeight = lastNonTransparentY - firstNonTransparentY;
            let marginHeight = this.canvas.height / 15 / this.scale;
            let centerOffset = characterHeight / 2 * (this.scale - 1) * this.scale;
            let offsetY = firstNonTransparentY * (1.5 * this.scale ** this.scale) * (this.scale - 1);
            if (this.scaledYPos) {
                this.y = -firstNonTransparentY * 1.1 + marginHeight + this.appendYOffset;
            } else {
                if (this.scale === 1) {
                    offsetY = firstNonTransparentY - this.canvas.height / 15;
                    marginHeight = 0;
                }
                this.y = centerOffset - marginHeight - offsetY + this.appendYOffset;
            }
        }), (0,esm_define_property._)(this, "characterPosition", ()=>{
            const savedX = this.x;
            const savedY = this.y;
            this.x = this.canvas.width / 2;
            this.y = 0;
            this.update();
            const clonedCanvas = document.createElement("canvas");
            clonedCanvas.width = this.canvas.width / this.scale;
            clonedCanvas.height = this.canvas.height / this.scale;
            const ctx = clonedCanvas.getContext("2d");
            ctx.scale(1 / this.scale, 1 / this.scale);
            ctx.drawImage(this.canvas, 0, 0, clonedCanvas.width, clonedCanvas.height);
            this.x = savedX;
            this.y = savedY;
            const imageData = ctx.getImageData(0, 0, clonedCanvas.width, clonedCanvas.height).data;
            let firstNonTransparentY = clonedCanvas.height;
            let lastNonTransparentY = 0;
            for(let y = 0; y < clonedCanvas.height; y++){
                for(let x = 0; x < clonedCanvas.width; x++){
                    if (imageData[(y * clonedCanvas.width + x) * 4 + 3] !== 0) {
                        firstNonTransparentY = Math.min(firstNonTransparentY, y);
                        lastNonTransparentY = Math.max(lastNonTransparentY, y);
                    }
                }
            }
            const characterHeight = lastNonTransparentY - firstNonTransparentY;
            let marginHeight = this.canvas.height / 15;
            return {
                firstNonTransparentY,
                lastNonTransparentY,
                characterHeight,
                marginHeight
            };
        }), (0,esm_define_property._)(this, "getParameterName", (parameter)=>{
            var _this_displayInfo_Parameters_find;
            if (!this.displayInfo) return parameter;
            return ((_this_displayInfo_Parameters_find = this.displayInfo.Parameters.find((p)=>p.Id === parameter)) === null || _this_displayInfo_Parameters_find === void 0 ? void 0 : _this_displayInfo_Parameters_find.Name) ?? parameter;
        }), (0,esm_define_property._)(this, "getPartName", (part)=>{
            var _this_displayInfo_Parts_find;
            if (!this.displayInfo) return part;
            return ((_this_displayInfo_Parts_find = this.displayInfo.Parts.find((p)=>p.Id === part)) === null || _this_displayInfo_Parts_find === void 0 ? void 0 : _this_displayInfo_Parts_find.Name) ?? part;
        }), (0,esm_define_property._)(this, "getParameterNames", ()=>{
            return this.parameters.ids.map((id)=>this.getParameterName(id));
        }), (0,esm_define_property._)(this, "getPartNames", ()=>{
            return this.parts.ids.map((id)=>this.getPartName(id));
        });
        this.canvas = canvas;
        this.motions = new csmMap();
        this.expressions = new csmMap();
        this.expressionIds = [];
        this.motionIds = [];
        this.textures = new csmVector();
        this.eyeBlinkIds = new csmVector();
        this.lipSyncIds = new csmVector();
        this.viewMatrix = new CubismViewMatrix();
        this.projection = new CubismMatrix44();
        this.deviceToScreen = new CubismMatrix44();
        this.queueManager = new CubismMotionQueueManager();
        this.cubismCorePath = options.cubismCorePath ?? "/live2dcubismcore.min.js";
        this.mocConsistency = options.checkMocConsistency ?? true;
        this.premultipliedAlpha = options.premultipliedAlpha ?? true;
        this.autoAnimate = options.autoAnimate ?? true;
        this.autoInteraction = options.autoInteraction ?? true;
        this.tapInteraction = options.tapInteraction ?? true;
        this.keepAspect = options.keepAspect ?? false;
        this.randomMotion = options.randomMotion ?? true;
        this._paused = options.paused ?? false;
        this.speed = options.speed ?? 1;
        this.audioContext = options.audioContext ?? new AudioContext();
        this.scaledYPos = options.scaledYPos ?? false;
        this.appendYOffset = options.appendYOffset ?? 0;
        if (options.maxTextureSize) this.maxTextureSize = options.maxTextureSize;
        if (options.connectNode) this.connectNode = options.connectNode;
        this.wavController = new WavFileController(this);
        this.touchController = new TouchController(this);
        this.motionController = new MotionController(this);
        this.expressionController = new ExpressionController(this);
        this.cameraController = new CameraController(this);
        this.webGLRenderer = new WebGLRenderer(this);
        this.cameraController.zoomEnabled = options.zoomEnabled ?? true;
        this.cameraController.enablePan = options.enablePan ?? true;
        this.cameraController.doubleClickReset = options.doubleClickReset ?? true;
        this.cameraController.minScale = options.minScale ?? 0.1;
        this.cameraController.maxScale = options.maxScale ?? 10;
        this.cameraController.panSpeed = options.panSpeed ?? 1;
        this.cameraController.zoomStep = options.zoomStep ?? 0.005;
        this.cameraController.scale = options.scale ?? 1;
        this.cameraController.x = options.x ?? this.canvas.width / 2;
        this.cameraController.y = options.y ?? 0;
        this.wavController.smoothingFactor = options.lipsyncSmoothing ?? 0.1;
        this.wavController.volumeNode.gain.value = options.volume ?? 1;
        this.enablePhysics = options.enablePhysics ?? true;
        this.enableBreath = options.enableBreath ?? true;
        this.enableEyeblink = options.enableEyeblink ?? true;
        this.enableLipsync = options.enableLipsync ?? true;
        this.enableMotion = options.enableMotion ?? true;
        this.enableExpression = options.enableExpression ?? true;
        this.enableMovement = options.enableMovement ?? true;
        this.enablePose = options.enablePose ?? true;
        this.updateTime();
    }
}

;// CONCATENATED MODULE: ./live2dcubism.ts










/* ESM default export */ const live2dcubism = ((/* unused pure expression or super */ null && (Live2DCubismModel)));

;// CONCATENATED MODULE: ./demo/components/styles/live2dmodel.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./demo/components/Live2DModel.tsx














const audioContext = new window.AudioContext();
const Live2DModel_Live2DModel = (props)=>{
    const [ignored, forceUpdate] = (0,react.useReducer)((x)=>x + 1, 0);
    const { model, setModel } = (0,react.useContext)(ModelContext);
    const { audio, setAudio } = (0,react.useContext)(demo_AudioContext);
    const { live2D, setLive2D } = (0,react.useContext)(Live2DContext);
    const [controlHover, setControlHover] = (0,react.useState)(false);
    const [speed, setSpeed] = (0,react.useState)(1);
    const [paused, setPaused] = (0,react.useState)(false);
    const [enableZoom, setEnableZoom] = (0,react.useState)(true);
    const [canvasSize, setCanvasSize] = (0,react.useState)(Math.min(window.innerWidth, 700));
    const rendererRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const handleResize = ()=>setCanvasSize(Math.min(window.innerWidth, 700));
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const load = async ()=>{
        let cubismCorePath = "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js";
        const live2DModel = new Live2DCubismModel_Live2DCubismModel(rendererRef.current, {
            cubismCorePath,
            scale: 1,
            scaledYPos: false
        });
        live2DModel.canvas.width = 700;
        live2DModel.canvas.height = 700;
        /*
        const arrayBuffer = await fetch(model).then((r) => r.arrayBuffer())
        const newBuffer = await compressLive2DTextures(arrayBuffer)
        console.log(URL.createObjectURL(new Blob([new Uint8Array(newBuffer)])))*/ await live2DModel.load(model);
        setLive2D(live2DModel);
    };
    (0,react.useEffect)(()=>{
        load();
    }, [
        model
    ]);
    const loadAudio = async ()=>{
        if (!live2D || !audio) return;
        const arrayBuffer = await fetch(audio).then((r)=>r.arrayBuffer());
        live2D.inputAudio(arrayBuffer, true);
    };
    (0,react.useEffect)(()=>{
        loadAudio();
    }, [
        live2D,
        audio
    ]);
    (0,react.useEffect)(()=>{
        if (!live2D) return;
        live2D.paused = paused;
        live2D.speed = speed;
        live2D.zoomEnabled = enableZoom;
        forceUpdate();
    }, [
        live2D,
        paused,
        speed,
        enableZoom
    ]);
    const changeSpeed = ()=>{
        if (speed === 0.5) setSpeed(1);
        if (speed === 1) setSpeed(2);
        if (speed === 2) setSpeed(0.5);
    };
    const zoomLockIcon = ()=>{
        return enableZoom ? zoomlock_namespaceObject : zoomlocked_namespaceObject;
    };
    const speedIcon = ()=>{
        if (speed === 0.5) return _0_5x_namespaceObject;
        if (speed === 1) return _1x_namespaceObject;
        if (speed === 2) return _2x_namespaceObject;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "live2d-model-container",
        children: [
            live2D ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `live2d-controls ${controlHover ? "live2d-controls-visible" : ""}`,
                onMouseEnter: ()=>setControlHover(true),
                onMouseLeave: ()=>setControlHover(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "live2d-control-icon",
                        src: zoomLockIcon(),
                        onClick: ()=>setEnableZoom((prev)=>!prev)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "live2d-control-icon",
                        src: zoomout_namespaceObject,
                        onClick: ()=>live2D.zoomOut()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "live2d-control-icon",
                        src: zoomin_namespaceObject,
                        onClick: ()=>live2D.zoomIn()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "live2d-control-icon",
                        src: live2D.paused ? play_namespaceObject : pause_namespaceObject,
                        onClick: ()=>setPaused((prev)=>!prev)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "live2d-control-icon",
                        src: speedIcon(),
                        onClick: changeSpeed
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
                ref: rendererRef,
                width: canvasSize,
                height: canvasSize
            })
        ]
    });
};
/* ESM default export */ const Live2DModel = (Live2DModel_Live2DModel);

;// CONCATENATED MODULE: ./assets/parameters.png
const parameters_namespaceObject = __webpack_require__.p + "static/image/parameters.png";
;// CONCATENATED MODULE: ./assets/parts.png
const parts_namespaceObject = __webpack_require__.p + "static/image/parts.png";
;// CONCATENATED MODULE: ./assets/expression.png
const expression_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAANpklEQVR4nO3de+wmVX3H8fcaqwVvywKuFK1yERKrJ5pWLQ2rUhVkYVHjLVJxURQ1cfdgbZOG1trUyz+NdGfRSLyVXbzEVg1ycS/0orKtrjEKh2A0LNKAgriwrFagtQ3bP87z8/ldz+/3zPmeOTPPfl7JhoSdc+Y7+8znmXlmzsxZdejQIURkcY+qXYBInykgIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJDy6dgFmvDsB+H3gFOBU4JnAscDjZ/0RO7+a9Wc/cBdwG3AL8B2acEfF2sysGuz0B96tBc4FXg6sA36nbkEyz93AjcANwHU04d7K9bQyvIB4dwHwBuCc2qXIRK4HvkgTrqpdyCSGERDv1gB/STxaPKdyNZLnFmA38GGacKB2Mcvpd0C8OwK4DHhn7VKkiCuAP6UJD9cuZCn9DYh3m4FNwMm1S5Gi9gFbacLltQtZTP8C4t3JwOXAK2qXIp3aAWymCftqFzJbv+6DeHcREFA4DkdnA2G0D/RGP44g3q0C/gHYWLsU6YVtwFtpwiO1C6kfEO+OBbajo4bMtRPYSBN+XrOIugHx7mnAPwEvrFeE9Nhe4HU04a5aBdQLiHdPBa4mDg8RWcr3gFfVCkmdgHi3GrgWOL37lcsA7QE20ISDXa+41lWs7SgcsnKnA9tHF3M61f1oXu+uBDZ0sKYDwI+A+xiPOhU7MyOkjyGOnl5TeH0biFc6Lyy8njm6PcXy7m3AJwv1fhtx9OgO4Ju1r34cdrx7MvAi4v2MdcTHDUp4O034VKG+F+guIN6dSLwJ+DjjnncDV9KELxj3Kzm8eyPx2/5M454fBBxN+LFxv4vqMiBfI367WLkB2EITvmbYp1jzbj1wCXEktpUdNGG9YX9L6iYg3r2bOL7KwkPA39CEvzPqT7rg3Z8D78fuDGJzFwMcywckDlkP2IzK/TfiOejtBn1J1+Jp9qeAMwx620c81So6VL6Ly7yXYROOrwDrFY4Bi78b1hM/y1wnE/etosoeQbw7ini5NdfnacKfGPQjfeHd54DzDXpaQxMeMOhnUaWPIH9l0MeXFI4pFD/TLxn0ZLGPLalcQOJdz9xLfF8HLsgvRnrqAuLvyhxnlrzDXvIIcjHw7Iz2vyI+E/DfRvVI38TP9iLyRjk8G3iHTUELlQzIqzPbv29aXj4mCfEzfl9mL68yqGRRZX6ke/cU4J6MHnbThLOsypEB8G4nkPOZH0cTfmZVzoxSR5CXZbbfalKFDEnuZ567zy2qVED+OKPtbppwvVklMgxxyNDujB5ealXKbKUCsi6j7ZVWRcjgXJnRtsjzRfa/QeJz5ne2bH0bTTjFshwZGO9+SHy+pI2n04S2+96iShxBcl7AcKNZFTJUezLanmZWxUiJgDw3o+0OqyJksK7JaGv+YvMSAckZmPh1qyJksP49o635U4wlnkk/oWW7e2jCfaaVWPDOE0egriOeAl5DEz5Wt6iWFm7Ldb17aXQT7se7u2k3IdIzjKspcgQ5qmW7Th6hnIh324EtxDFlR4z++9HRiyeGxbttLNyWrT3dlrb7Qtt9b0klAvKElu3M74Jm8e4vWHqg5Ea829RlOVni03xvXuJvN+LdJR1WsxJtp2szn4eyREDaFvkL0ypyeHcMsHmZpd6Dd/2fGDTOzuWXWeo9ePekLspZoYMt27X9cl5SnwLya9Mq8lwKHLfMMicAf91BLbkuBY5fZpnfJU5x1xf/27LdII4g02ClIwGG8HbIadqWzikg83l3HvAHK1z6NLzLGVZTlnfnAi9Y4dKn4Z3la5mmggKy0KSvRX1lkSpsnDvh8l28EnZQFJCFJj0i9PcIMnltOs2aRwGZzbvjmXyg3Avwbm2JcrLEbXnWhK2eM3rYTUYUkLnaDnbr4wxZK/3tMd8fmlYxcArIXG13qj7OktV2R1/pBYrDggIy1/NbtjMfZm2g7bb08WhYjQIy1/NatnOmVdhouy3PtSxi6BSQGXF4SdvhFmvx7omW5WTx7mhgdcvWx4zmkBQUkNlynyU40aQKGydVbj81FJCx3J3C4g32VnJr6dO2VKWAjOUeAdo+KFZCbi192paqFJCxNk+wzbbciNku5W7LciOZDxsKyFju3fA+3YHO3cFzAzY1FJCxoyu3t5RbS+k5zwdDARnL3SnMn4fOsDqzfZ+2pSoFZCz3cc0+7VSrK7efGgrIWO6NvhKvUGord6rlI0yqmAIKyNhjK7e3lFvLkSZVTAEFZCz3W7NP37q5Ly/o09GwKgXEzjT9W+oIMjJNH2pt/X9HlkxMAbGTM1Or9JQCYueR2gUYeqh2AX2hgIw9XLm9pdyj2f+ZVDEFFJCx/6nc3lJuLTqCjCggY7/MbN+nb90HM9v36WhYlQIy9l+Z7R8wqcLGwcrtp4YCMnYgs32fApJbS5+2pSoFZOz+yu0tTdO2VKWAjOXOcNWnGbJya7nHpIopoICM5e4UPzWpwsbdme0VkBEFZGxfZvs7TKqwkVtLn7alKgVkLHeW3dyAWcqt5TaTKqaAAjKWu1P1aRrr3G253aSKKaCAzGjCfbSfafdempB7o9FOEw7Q/rL1fprQnxmHK1NA5vpey3Y3WRZh5OaO200lBWSu77Zst9e0Chtta+rjtlSjgMz1nZbt2garpLbb0rbdVFJA5vpWy3bfNq3ChgJiQAGZrQk/BX4wYau9NGF/iXKyxG25dcJWt9CEPo0IqE4BWWjPhMvfWKQKG5PW1udtqUIBWei6CZf/apEqbEy6LdcUqWLAFJD5mnAtKz8P30MTJj3idKcJ17Pyq1L/QRN2lSxniBSQxa30VOMbRauwsdJt0enVIhSQxX0I+Mkyy+wbLdd3HwTuXGaZO0bLyTwKyGKa8ACwZZmlttCE/j+7HYeN/P0yS11GE/Rer0UoIEtpwkeAbUv87Taa8LEuy8nShC2kt+WjHVYzKApIShMuBDYBNxDf9HEDcPHo/w9LrPndzN2WdwxyWzqkt3gvJ367Tsc3bDzqDefI1wM6gogkKCAiCQqISIICIpKggIgkKCAiCQqISIICIpKggIgkKCAiCQqISIICIpJQIiBtnyt4jGkVMmS/1bKd+TMtfQrIk0yrkCFb3bLdIALSdjLMp5hWIUO2tmW73IlYFygRkLYTQJ5oWoUM2Qkt25lPPloiIG1nJzoO7442rUSGJ+4Dx7ds/Z+GlQBlApIzectLrIqQwfqjjLbmM2OVCMhNGW3PtipCBuu8jLa3mFUxUiIgOW8HP92sChmqdRlt276df0n2AWnCnbQ/zToV795oWY4MSPzsT23Zet9o3zNV6k56zmssL7QqQgbnwoy2Rd6RXCog/5rR9ky8W29WiQxD/MzPzOjhX6xKma1UQP45s/1mkypkSDZlts/d5xZVJiBxlqKcV+mfhXeXGFUjfRc/61dk9LCr1MxYJUfzXp3Z/gN41/aOqgxF/Iz/NrOXqw0qWVTJgHyCyefIm+3xwGfw7reN6pG+iZ/tp4EnZPRyK3FfK6JcQJrwCLA7s5eXAFflFyM9dRVwRmYfu0b7WhGlH5j6gEEfr8W7zxn0I30SP9PXGvRUdOKfVYcOHSrZP3j3ceCdBj19GTifJvzaoC+pxbvHAJ8HXmPQ2xU04V0G/Sypi0du3wvcbtDPa4CdePcMg76khvjZ7cQmHD8G/sygn6TyAWnCQ0Bj1NsZwM14V/wfRozFz+xm8n9zzGhowoNGfS2p/CnWDO92kHete77dxHkCdxj2Kda8Oxu4hLy75PPtpAmdjPzuMiAnAQE40rjnXcR59r5g3K/kiAMPNwJnGff8EOBogsVp+7K6CwiAd2+n3DXrHxEHrO0EvkET9hdajyzGu2OBFxPPEk6n/ajc5VxMEz5ZqO8Fug0IgHfbgDd3sKYDxNDsJ77tovj56mHmccSbuccSw7Cmg3VupwkbO1jPb9SYxPMtwFHAhsLrWQOcVngd0p1rgbd2vdLujyAA3q0mbrCeIJSV2ANsoAkHu15xnVePxg09H/h+lfXLkNxEvEF8sMbK672btwl3Aa8E9larQfpuL3DeaF+pou7Lq+OGn0e88iQy2y4qhwNqBwSgCT8HzkWjdmXsKuCc0b5RVZ0f6Uvx7iLgcuCI2qVIFQ8Dm2jCp2sXMqP+EWS2+A/j0CnX4Wgn8Q55b8IBfTuCzObdZuLLG06qXYoUdTuwlSZsrV3IYvobEADvjgQ+gs3zJNI/VwDvHY347qV+B2RGfOP3pcSBb79XuRrJcyvxCtWHacL9tYtZzjACMsO7RwFvAl4PnFO5GpnM9cA/Ap8t+Qy5tWEFZDbv1hIvD59FfOGxZqjql58RX0G7C7iOJtxbuZ5WhhuQ+eLzJs8jjiw9FTgFOA54InH+w1X1iptKh4BfAL8khuFO4vwcNwPf7ep5jdKmJyAiBfTrPohIzyggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJCggIgkKiEiCAiKSoICIJPw/6YvgTqYmFusAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./assets/motion.png
const motion_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAPL0lEQVR4nO3debjUVR3H8TegoIVS4oZBiFpakEumLYRpaVpqmFlqttlCWZlly9Oela0+VlqWLT6WmWWWuym5pKWluVCoWW6JmZaCisoacPvjc5Fh7twzv/md81tm5vN6Hh7v3Dtz5oD3M7/lnPM9IwYGBjCz1kZW3QGzOnNAzAIcELMAB8QswAExC3BAzAIcELMAB8QswAExC3BAzAIcELMAB8QswAExC3BAzAIcELMAB8QswAExC3BAzAIcELMAB8QswAExC3BAzAIcELMAB8QswAExC3BAzAIcELMAB8QswAExC3BAzALWWevRUdtX1A3rY+sBk4GXAwcBmwNPBzYAxg7zmkXA48BCYD5wETAbuB14IrpHJ8x98st1Ak8zK9KmwCuBA4D9gdEdvPapg382B7YFpgNfAv4MnAJcBvwzRScdECvbGODtwCHAbgnbHQG8cPDPX4BfAN9BR5vcfA1iZdoNuAY4ibThaLYj8FV0RDkwpiEHxMqwEToFuhjYGX3al+G5wK+BHwJb5GnAAbGibQWcCnwSeEpFfXgnOuXasdMXOiBWpO2BnwKvqbojwAzgXGCvTl7kgFhRdgLOAF5SdUcaTAZOp4OQOCBWhO2AHwBTq+5IC5sCpwG7Z3myA2KpbQR8C3hBxf0I2Rz4NrB1uyc6IJbascDeVXcig2nAcbQZC3RALKX9gfdU3YkOvBb4cOgJDoilMgEdPcoa40jlCOD5w/3QAbFUZqHbut1mMvAuNGlyCAfEUpgIfKzqTkR4B5r0OOTo54BYCm+lulHyFNYFjgYGmn/ggFisDYA3Vd2JBPahxXwtB8RizQSmVN2JBDYBDm3+pgNisXZHazy63QjgRcCoxm86IBZjHJpW0it2pOnv44BYjB3QpMResQ0OiCW0Ad1996qVzRofeE26dWoLNO7xErSuvNds1fjAAbEsdgV2QRP89kSnIr1qrVu9DogNZxJwMLAHmkIysdrulOYZjQ8cEGs0ARVVeDtaorpxtd2phI8gNsROwOuAV9Nbd6XyeGrjAwekf41CE/Q+hNZoT662O7WxqvGBA9KfdgXejGaxrl9xX+rmP40PHJD+sjVwJHAY/Xl9kcU9jQ8ckP6wITpaHElvTCws0r8aHzggvW9P4BNoewFr787GBw5I7xqHVvm9Hx1BLJuHGh84IL1pBvAN6l2bqo7uBG5r/IYnK/ae9wHn4XDkMQe4tfEbDkjv2AhtGPMdtIWZdWYFcDUeB+lJU4DjUSE0y2cB8Mvmb/oI0v12An5FdeG4A/htRe+d0iU0DRKCjyDdbjraf6PMsY1VwP3AWcB1wI1oZ9nZdGfhuNW+2eqbDkj3ehn6Jd2kpPe7DYXhNGAu8N+mn58IfA/VmOo2JwJ/b/UDB6Q7vRQ4k3LCcQFwIXAOTWMETc5FBeRmlNCnlO5BNzaWtfqhA9J9XoyuOTZr98QIi9F1xcnAH4HHM7xmAXAM6ls33UX7CrqOaskX6d1l9Z5/RYVjKRpD2QutN59NtnCsdgXwhQL6VZTTgR+FnuCAdI8paFuztrsi5XQZ8EbgAHTUaHnKkcHJ6ChSd9ehqTirQk/yKVZ3GAd8DXhhAW0/NNj2D4HHErS3FC3C2piM+wBW4G9oX5AH2j3RR5D6G4HOk19fQNtno4vq40kTjtXuQ3uTX5uwzVTuQH2bk+XJDkj9vQd92qW0CPgU8DbgH4nbXu0utDDrioLaz+NmtJLyT1lf4IDU227A5xO3+Xc06v5lOrsAz+NudOT7LprrVKWrgDega4/MHJD62gRNWU851vEn4EDg0oRttvMwmmE8C43Al20xOoWcyTCDgSEOSH0dg2pUpXIhcBBN6x1KdCpa3XgGsLKk97wK/Z0/AizM00AVARmFpiOsS9NeDPakmej6IJXT0KlOFZ/gjW5DRelmooHIok7x5gDvBfYDLo5pKOVt3lGohMwEVJ1uyuDXWw6+z0hgLGsHYyWwHE12G0C3CO9At9/uRv9D/0v1569lmoiuO1JVTf8+8EH0b1sHy4CL0CDkPuiosg+q0RVjKZoO8zs0DSfJXbm8AVkf1TCdAExF+0zvgtY+PwVVp9sgol8r0V9wETqHvA7dDZkL3AvMj2i7zkaiT74dErX3E7QmvY4fMCvQad+F6MP0uWh28n7oA3YM+jAdiT5QR6IP0RXoQ3Up+t24GJ1K3QrcQuLTtxEDAw0bex417GzlsWjdwY6oqPHOaElnFcUAbkIXmX9F/zBVnzak9ALgz7TYjjiH2eiCfHGCtso0Bq2OnAiMB0ajD9z10C//QjS4OQ/N/0p/ZDxh7pNfho4go9EeELNQKLalvKnVIc8f/AMKyfVoFHgu9TmNyGME8FnShOM6NBjWbeEAnYI9QIZR7jIMF5AtWDN6W+fSlDsM/jkEuAHdb/8d3XkK9mZg/wTtzEOnVfclaKvvtbqLNRnNGH0L9Q5Ho7Fo3s8v0bqEd9FdW4ONRxvZxxpAtzRvSNCWMTQgo4DP0d1V+KajWa+XAK9Cp4p1NhJ9GKW4MD+J7phJ2zWaA7IvcHgVHSnADOB8NN//ORX3JWQ88MkE7fwRnRZbQs0BeWklvSjOOujcfjbwAeo5MHkUCkmM5cBn6K07erXQHJA9KulF8SYB30IDSbEDUilthW7Fxt65Ool6zZrtGc0BKWq1Wh2MQHeJLkLbjdXBgcSf/t0BHJegL9ZCc0AWVNKLcm0N/Bj4NNWWqBmPqoDEWAF8lZqMGfSi5oDcVEkvyjcW+CKq41TV1gCvQPuOx/gDKjxgBWkOyO8r6UV13gGcQrEldFoZjS7OYwygCiLL47tjw2kVkLur6EiFDkK3gsvc5XU68eMe56Jq5Fag5qkmN6PVVyclaHsJmgu0dPDrlehTbxWaqTuGNSP1o9BktPWBp7XoV9H2Q9cjs9Bs4aIdStN+3B1agmrJ1nGWbk9p9Yv4XTQX66NkH4V+HC2G+SeaB3U7ursyH134L0CT0FahoKxEd5XWbfjveFQqZis0a3gy8KzBr8sYDd8bTXo8nGLHE7ZFayBinEP/XC9WarhP6k+zprDWi5qetwr4HyrpcgUKwl3o1KyTSYIDrDl/XoYWTc1DBZLPGvz+xug26E7AwWjNSZF3nl6JxkuOoLg7ersTV439cbRsdVGS3lhQ6FTmAhSA7dEv5hQUgDlo8fuD6Je6SPPRnZo/oE/3acC7UWXzbQp6z9ejwM5CpzIpbYhOr2LcgMZyrATtzvUXoUoYmesIFWgJWvtxPfBMFJTD0arG1N6Epot/InG7k1C4Y5yQoiOWTbdWNbkXFT7bm0Dp+kgfRwUGUjok8vW30n+34ivVrQFZ7WbgSHQXqqOCYBkdi4q3pVjlNwZ4TWQbpwKPJOiLZdTtAVntMvTLl+L2dKMJg21umqCt3Ygba/k3cE2CflgHeiUgoJsG70drsVN+yk5DkwFjp8rvgaq053U1KuhgJeqlgKx2CqrBemfCNg8mbiHZOOKqJC5D5W2Ce1lYer0YENAp12FkLHGfwWh0PTI15+unEbcY7SG0VYGVrFcDAjodeQvpChhshpa05hnVn0pcEYkiy3RaQC8HBFRp73B0tyuF/el8r47RaLuBGGdEvt5y6vWAgELybjRPLIWjUZnMrDZCs3fzup3qKrL3vX4ICGgmwAdJM6D4TDSRM+ucsF2Jqy92CS7GUJl+CQioBNCnErV1GLptm2UA8UDipu/Pbf8UK0o/BQTg27TZFzujddHYyJg2zxsNPDvife5CBbqtIv0WkOVomWqKaSnT0KBkyFR0SpbXPSgkVpF+CwjAv9CFduz1yEhUA3hS4Dm7EDfb+Fq0bsYq0o8BAZXp/FyCdrZHo+zDeQ75/42X4MHByvVrQEAFri9P0M7RtF4hOA54XkS7C0k7XcZy6OeAPIL2Anwwsp0J6FSr2SS0AVFeV1L8ik1ro58DAlrK+4ME7bwVFZto9Azixj88ObEG+j0gACcSP1K9BUPvaMXWvZoX+XpLwAFRYYivE3+36FDWjHmMRKsc87oFFcawijkgCsZ5aMZsjC2BmWh0fQxDT7k6cT3aH94q5oDII6haSOyusEegiokTUaXIvByOmnBA1rgY7UQVYwqae7UdqiCfx3J0imU14ICs7Tji91o/BG2C2m6e1nAewGvPa8MBWduNwJmRbUwH3hbx+ocpp4C2ZeCArG052n3qsYg2NkQV6vN6mGIK4VkODshQvyfNFJS8PL29RhyQoVYBJ1PN3hsDpKvEYgk4IK1dTjX7b6zAExRrxQFpbSXwtQredwW6BrGacECGdy0a0S7T9bg4da04IMO7H211VqYb0e5dVhMOSNh5qKp6WVLV7rJEHJCwv1HuqPYDJb6XZeCAtPfNkt7nf8RPlrTEHJD25lLOLd97UZlRqxEHpL2FwGklvM/9aJsDqxEHJJsriS/u0M6DeIuD2nFAsvkrxe8u+ygu0lA7Dkh2l1LsGEXsOhQrgAOS3dkUdxt2AN1StppxQLKbj3aaLcJSPEmxlhyQzvykoHYX4UINteSAdOZWVB0+taXAggLatUgOSGfuB84qoN2l6C6W1YwD0pkBtPnO8sTtrsCFqmvJAencNaTfdfYxsu13aCVzQDr3bzRwmNIcvJNULTkg+ZxP2tMsT3OvKQckn6vQJMZUHk3YliXkgOTzCNrnMBUfQWrKAclnJfDzhO15Fm9NOSD53YJGwFN4NFE7lpgDkt8/gN8kaivl9Ywl5IDktwJNPUlhZaJ2LDEHJM61xJ8eLSH9yLwl4oDEuYb4WlZ3o6n0VkMOSJwn0C94jAdxNcXackDinUncWvLFka+3Ajkg8WJn9z6BL9JrywGJNx+4IeL1C3BAassBibcYTV7Mq8zi2NYhBySNm8h3HfEE8Je0XbGUHJA0ribfUeRy4LeJ+2IJOSBpLAO+SGe1de8DvkA1m4VaRg5IOjcBh6Eq7e3cC7yTajYKtQ44IGldCuwF/AyYx9BltPehXav2BWaX2zXLY52qO9CDbgeOAWYA+wA7D37/ThSOK0lf9MEKMmJgwLUCzIbjUyyzAAfELMABMQtwQMwCHBCzAAfELMABMQtwQMwCHBCzAAfELMABMQtwQMwCHBCzAAfELMABMQtwQMwCHBCzAAfELMABMQtwQMwCHBCzAAfELMABMQtwQMwCHBCzAAfELMABMQtwQMwCHBCzgP8DIg2I56yWr4QAAAAASUVORK5CYII=";
// EXTERNAL MODULE: ./node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs
var ReactSlider = __webpack_require__(86);
;// CONCATENATED MODULE: ./demo/components/styles/parameters.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./demo/components/Parameters.tsx











const Parameters_Parameters = (props)=>{
    const [ignored, forceUpdate] = (0,react.useReducer)((x)=>x + 1, 0);
    const { live2D, setLive2D } = (0,react.useContext)(Live2DContext);
    const [defaultOpacities, setDefaultOpacities] = (0,react.useState)(new Float32Array());
    const [motionValues, setMotionValues] = (0,react.useState)([]);
    const [motionButtonHover, setMotionButtonHover] = (0,react.useState)(false);
    const [motionMode, setMotionMode] = (0,react.useState)("auto");
    (0,react.useEffect)(()=>{
        if (live2D) {
            setDefaultOpacities(structuredClone(live2D.parts.opacities));
            const loop = ()=>{
                forceUpdate();
                setTimeout(()=>{
                    loop();
                }, 5);
            };
            loop();
        }
    }, [
        live2D
    ]);
    const toggleMotionMode = ()=>{
        if (motionMode === "auto") {
            setMotionMode("manual");
        } else {
            setMotionMode("auto");
        }
    };
    (0,react.useEffect)(()=>{
        if (!live2D) return;
        live2D.enableMotion = motionMode === "auto";
    }, [
        motionMode
    ]);
    const getParameterDialogJSX = ()=>{
        if (!live2D) return null;
        let jsx = [];
        let parameters = live2D.parameters;
        let parameterNames = live2D.getParameterNames();
        const resetParameters = ()=>{
            live2D.resetParameters();
            forceUpdate();
        };
        for(let i = 0; i < parameters.ids.length; i++){
            const name = parameterNames[i];
            const id = parameters.ids[i];
            const value = parameters.values[i];
            const defaultValue = parameters.defaultValues[i];
            const min = parameters.minimumValues[i];
            const max = parameters.maximumValues[i];
            const keys = parameters.keyValues[i];
            const step = Math.abs(max - min) / 100 || 0.01;
            const updateParameter = (value)=>{
                live2D.setParameter(id, value);
                forceUpdate();
            };
            jsx.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "parameters-dialog-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "parameters-dialog-text",
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ReactSlider/* ["default"] */.A, {
                        className: "parameters-slider",
                        trackClassName: "parameters-slider-track",
                        thumbClassName: "parameters-slider-thumb",
                        onChange: (value)=>updateParameter(value),
                        min: min,
                        max: max,
                        step: step,
                        value: value
                    })
                ]
            }));
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "parameters-dialog-box",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "parameters-dialog-row-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            draggable: false,
                            className: "parameters-dialog-icon",
                            src: parameters_namespaceObject
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "parameters-dialog-title",
                            children: "Parameters"
                        })
                    ]
                }),
                jsx,
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "parameters-dialog-row-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "parameters-button",
                        onClick: ()=>resetParameters(),
                        children: "Reset"
                    })
                })
            ]
        });
    };
    const getPartsDialogJSX = ()=>{
        if (!live2D) return null;
        let jsx = [];
        let parts = live2D.parts;
        let partNames = live2D.getPartNames();
        const resetParts = ()=>{
            live2D.resetPartOpacities();
            forceUpdate();
        };
        for(let i = 0; i < parts.ids.length; i++){
            const name = partNames[i];
            const id = parts.ids[i];
            const opacity = parts.opacities[i];
            const updateOpacity = (opacity)=>{
                live2D.setPartOpacity(id, opacity);
                forceUpdate();
            };
            jsx.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "parameters-dialog-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "parameters-dialog-text",
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ReactSlider/* ["default"] */.A, {
                        className: "parameters-slider",
                        trackClassName: "parameters-slider-track",
                        thumbClassName: "parameters-slider-thumb",
                        onChange: (opacity)=>updateOpacity(opacity),
                        min: 0,
                        max: 1,
                        step: 0.01,
                        value: opacity
                    })
                ]
            }));
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "parts-dialog-box",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "parameters-dialog-row-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            draggable: false,
                            className: "parameters-dialog-icon",
                            src: parts_namespaceObject
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "parameters-dialog-title",
                            children: "Parts"
                        })
                    ]
                }),
                jsx,
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "parameters-dialog-row-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "parameters-button",
                        onClick: ()=>resetParts(),
                        children: "Reset"
                    })
                })
            ]
        });
    };
    const getExpressionsDialogJSX = ()=>{
        if (!live2D) return null;
        let jsx = [];
        let expressions = live2D.getExpressions();
        for (const id of expressions){
            const setExpression = ()=>{
                live2D.setExpression(id);
            };
            jsx.push(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "parameters-dialog-row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "parameters-dialog-text",
                    onClick: setExpression,
                    children: id
                })
            }));
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "parts-dialog-box",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "parameters-dialog-row-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            draggable: false,
                            className: "parameters-dialog-icon",
                            src: expression_namespaceObject
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "parameters-dialog-title",
                            children: "Expressions"
                        })
                    ]
                }),
                jsx
            ]
        });
    };
    const getMotionsDialogJSX = ()=>{
        if (!live2D) return null;
        let jsx = [];
        let motions = live2D.getMotions();
        for(let i = 0; i < motions.length; i++){
            const name = motions[i];
            const onStartMotion = ()=>{
                motionValues.fill(false);
                motionValues[i] = true;
            };
            const onEndMotion = ()=>{
                motionValues[i] = false;
            };
            const startMotion = ()=>{
                const [group, idx] = name.split("_");
                live2D.stopMotions();
                live2D.startMotion(group, Number(idx), MotionPriority.Force, onStartMotion, onEndMotion);
            };
            jsx.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "parameters-dialog-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "parameters-dialog-text",
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        draggable: false,
                        className: "parameters-dialog-icon",
                        src: motionValues[i] ? pause_namespaceObject : play_namespaceObject,
                        onClick: startMotion
                    })
                ]
            }));
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "parts-dialog-box",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "parameters-dialog-row-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            draggable: false,
                            className: "parameters-dialog-icon",
                            src: motion_namespaceObject
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "parameters-dialog-title",
                            children: "Motions"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "parameters-dialog-row",
                    style: {
                        width: "max-content",
                        marginLeft: "5px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "parameters-button",
                        onClick: ()=>toggleMotionMode(),
                        children: motionMode === "auto" ? "Auto" : "Manual"
                    })
                }),
                jsx
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "parameters-container",
                children: [
                    getParameterDialogJSX(),
                    getPartsDialogJSX()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "parameters-container-right",
                children: [
                    getExpressionsDialogJSX(),
                    getMotionsDialogJSX()
                ]
            })
        ]
    });
};
/* ESM default export */ const Parameters = (Parameters_Parameters);

;// CONCATENATED MODULE: ./demo/demo.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./demo/demo.tsx








const ModelContext = /*#__PURE__*/ react.createContext({
    model: "",
    setModel: ()=>null
});
const demo_AudioContext = /*#__PURE__*/ react.createContext({
    audio: "",
    setAudio: ()=>null
});
const Live2DContext = /*#__PURE__*/ react.createContext({
    live2D: null,
    setLive2D: ()=>null
});
const App = (props)=>{
    const [model, setModel] = (0,react.useState)("assets/Hiyori.zip");
    const [audio, setAudio] = (0,react.useState)("");
    const [live2D, setLive2D] = (0,react.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "app",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(demo_AudioContext.Provider, {
            value: {
                audio,
                setAudio
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ModelContext.Provider, {
                value: {
                    model,
                    setModel
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Live2DContext.Provider, {
                    value: {
                        live2D,
                        setLive2D
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_TitleBar, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Parameters, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Live2DModel, {})
                    ]
                })
            })
        })
    });
};
react_dom.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* .BrowserRouter */.Kd, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(App, {})
}), document.getElementById("root"));


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "static/js/async/" + chunkId + ".js"
}
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "live2d-renderer:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		
    script = document.createElement('script');
    
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;
		
    
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"410": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (true) {
			// setup Promise in chunk cache
			var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} 
	}
}

        }
        __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunklive2d_renderer"] = self["webpackChunklive2d_renderer"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["783", "535", "678"], function() { return __webpack_require__(781) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;