import React, { useState } from "react"

const Bird = () => {

    const [fillColors, setFillColors] = useState(Array(22).fill("white"))
    const [currentColor, setCurrentColor] = useState('white')

    const changeColor = (event) => {
        return setCurrentColor(event.target.outerText)
    }

    const paintColor = (event) => {
        const newColors = [...fillColors]
        newColors[event.target.id] = currentColor
        return setFillColors(newColors)
    }

    console.log(fillColors)
    console.log(currentColor)

    return (
        <div>
            <div id="color-box">
                <div onClick={changeColor} style={{ backgroundColor: '#DEDEDE' }}>WHITE</div>
                <div onClick={changeColor} style={{ backgroundColor: 'red' }}>RED</div>
                <div onClick={changeColor} style={{ backgroundColor: 'blue', color: '#DEDEDE' }} >BLUE</div>
                <div onClick={changeColor} style={{ backgroundColor: 'navy', color: '#DEDEDE' }} >NAVY</div>
                <div onClick={changeColor} style={{ backgroundColor: 'olive' }} >OLIVE</div>
                <div onClick={changeColor} style={{ backgroundColor: 'green' }} >GREEN</div>
                <div onClick={changeColor} style={{ backgroundColor: 'teal' }} >TEAL</div>
                <div onClick={changeColor} style={{ backgroundColor: 'lime' }} >LIME</div>
                <div onClick={changeColor} style={{ backgroundColor: 'yellow' }} >YELLOW</div>
                <div onClick={changeColor} style={{ backgroundColor: 'orange' }} >ORANGE</div>
                <div onClick={changeColor} style={{ backgroundColor: 'coral' }}>CORAL</div>
                <div onClick={changeColor} style={{ backgroundColor: 'pink' }}>PINK</div>
                <div onClick={changeColor} style={{ backgroundColor: 'purple', color: '#DEDEDE' }} >PURPLE</div>
                <div onClick={changeColor} style={{ backgroundColor: 'Fuchsia' }}>FUCHSIA</div>
                <div onClick={changeColor} style={{ backgroundColor: 'maroon', color: '#DEDEDE' }} >MAROON</div>
                <div onClick={changeColor} style={{ backgroundColor: 'grey' }} >GREY</div>
                <div onClick={changeColor} style={{ backgroundColor: 'black', color: '#DEDEDE' }} >BLACK</div>
            </div>

            <div id="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700">
                    <title>Sun Flower Template</title>
                    <g id="svg_001" transform="translate(0 0)" display="inline">
                        <g id="svg_002" transform="matrix(0.849029 0 0 0.849029 65.2874 25.9633)">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80% 80%">
                                <path id="0" fill={fillColors[0]} onClick={paintColor} data-name="leg R" d="M294.42,516.23a23.82,23.82,0,0,0-2-8.1H280.26l-14.17,10.12s3.89,15.51,10.12,18.22,2.09,1.71,8.09,14.17,27.39,63.39,32.39,74.89,4.91,15.67-10.12,22.27-30.17,5.41-38.46,6.07-10.7.45-16.19,6.08-.54,6,2,2,4-2.72,8.1-4.05,3.14,4.3,16.19,6.07,25.12-3.34,32.39-8.09,13.5-4.42,18.22-4,17.19,10.21,26.31,18.22,13,8.81,18.22,8.09,7.17,1.74,10.12,6.08,4.51,4,4.05,0S378,673.63,369.32,668s-12.79-12.38-10.12-12.14,37.57,19.58,50.61,22.26,12.14-4,12.14-4,8.07-.35,12.15,0,9,8,8.09,4-5.53-7.49-10.12-8.09a74.19,74.19,0,0,0-12.14,0s2-1.56-4.05-2-12.86-4.1-32.39-12.14-28.79-11.21-26.31-12.15,20.9-1.9,28.33-2,4.56-5.18,8.1-6.07,10.12,6.07,10.12,6.07a20.91,20.91,0,0,0-6.07-8.1c-4.2-3.22-10.39-1.44-26.31,0s-29.75,3.68-34.42,2-8.73-14.89-18.21-36.44S293.85,548,292.4,538.49C292.61,524,294.46,520,294.42,516.23Z" transform="translate(-80.2 -56.5)" />
                                <path id="1" fill={fillColors[1]} onClick={paintColor} data-name="leg L" d="M371.35,538.49c-3.32-4.43-8.31-5.31-12.15-10.12s-6.07-16.19-6.07-16.19,1.91-4.88,14.17-4c30.82,2.09,22.26,10.12,22.26,10.12a21.49,21.49,0,0,0-4.05,8.1c-1.24,4.9,1.47,9.75,4.05,16.19S419,609.05,424,613.39s14.17,2,14.17,2,15.6-1.79,22.27-2,14.23-6,20.24-4c7.47,2.49,8.57,10.87,6.08,8.1a16.75,16.75,0,0,0-6.08-4.05,31.1,31.1,0,0,1-6.07,6.07c-3.74,2.8-7.84.58-24.29,2s17.44,9.43,26.31,12.14,23.63,8,26.32,8.1,12.18-3.2,20.24,2,6.63,7.94,0,4-12.14-2-12.14-2-1.38,1-6.08,4.05-10.68,1.31-22.26-4.05-27.14-11.21-34.41-12.15,11.53,10.75,22.26,16.2c10,8.94,4.05,8.09,4.05,8.09s-6-5.66-10.12-6.07-4.1.7-10.12,0-12.38-9.49-16.2-12.15-13.25-9.47-20.24-10.12-9.91,5.16-22.26,10.12-24.17,5-34.42,4-5-4-8.09-6.07-3-2.22-10.12,0-5.29.22,2-2,10,.4,12.15,0,6.95-.2,14.17,0,17-1.92,28.33-6.08,11.84-12.52,10.13-16.19-28.34-56.68-28.34-56.68C377.33,550.51,374.66,542.93,371.35,538.49Z" transform="translate(-80.2 -56.5)" />
                                <path id="2" fill={fillColors[2]} onClick={paintColor} data-name="Body outer" d="M511,77c67.33,49.14,32.69,75.35,24.29,123.48s36.25,95.82,2,216.59S313.91,535.13,231.67,510.15s-89.09-56.2-74.89-74.89S283.9,175.73,298.47,151.87,340.05,71.22,434.1,60.78C449.87,59,481.55,58.92,511,77Z" transform="translate(-80.2 -56.5)" />
                                <path id="3" fill={fillColors[3]} onClick={paintColor} d="M521.14,99.24c-20.41.52-37.77-1-56.68,2-12,1.94-22.8,2.59-30.36,12.15-7.05,8.91-10.69,25.71-18.22,34.41-13.07,15.11-29.86,27-34.41,40.48-10.44,30.85-10.12,68.83-10.12,68.83s3.42-7.17-18.22,32.38S280.43,404.83,260,425.14s-98.3,51.12-103.23,48.58c-20.33-10.48-10.75-26.76,0-40.49s46.89-95,70.85-145.74,71.21-146.41,99.18-176.11,60.33-58.44,129.55-52.63c65.61,5.51,78,42,89.07,54.66C551.93,120.9,537.71,98.82,521.14,99.24Z" transform="translate(-80.2 -56.5)" />
                                <path id="4" fill={fillColors[4]} onClick={paintColor} d="M294.42,402.87c-90.49,76.15-206.6,86.29-212.54,85s136.49-159.56,164-196.35,66.82-72.32,103.24-50.61C367.34,251.82,384.92,326.72,294.42,402.87Z" transform="translate(-80.2 -56.5)" />
                                <path id="5" fill={fillColors[5]} onClick={paintColor} d="M146.66,473.87c72-34.71,168-109.46,168-109.46" transform="translate(-80.2 -56.5)" />
                                <path id="6" fill={fillColors[6]} onClick={paintColor} d="M108.2,481.82c29.41-12.15,164-121.46,164-121.46" transform="translate(-80.2 -56.5)" />
                                <path id="7" fill={fillColors[7]} onClick={paintColor} d="M85.93,483.84c34.78-14.48,147.77-125.5,147.77-125.5" transform="translate(-80.2 -56.5)" />
                                <path id="8" fill={fillColors[8]} onClick={paintColor} d="M114.27,449.43c42.41-29.61,101.21-103.24,101.21-103.24" transform="translate(-80.2 -56.5)" />
                                <path id="9" fill={fillColors[9]} onClick={paintColor} d="M535.31,99.24c3.52,1.41,6.08,7.09,16.19,22.27,12.13,18.21-5,53.85-8.1,60.72s-10.34,15.42-2,72.87C563.86,335.22,547,375.66,547,375.66s-3.61,1.06-9.71-3.15c-10.05-6.93-16-4.05-44.53,16.19s-55.23,23.85-87-18.22-53.16-131-16.2-200.39c3-5.63,26.39-55.21,60.73-66.8,21.34-7.21,61-7.16,66.8-6.08C530,99.62,533.12,98.37,535.31,99.24Z" transform="translate(-80.2 -56.5)" />
                                <path id="10" fill={fillColors[10]} onClick={paintColor} data-name="beak bottom" d="M618.25,138.57c-.53-3.85-10.63-4-23.28-5.44-8-.89-16.77-1.86-26.34-2.76-4.44-.42-9.18-1.26-13.86-1.29a9.4,9.4,0,0,1-1.25,4.57c-1,1.66-.52,4.52-7.56,10.54-4.19,3.58-13,6.55-16.82,8.05-5,2-17.77,2.92-22.83.87-.56-.22,4.66,2.79,8.75,4.83,3,1.34,5.1,2.92,8.51,4.36,7.69,3.25,18.58,3.72,19.83,3.74,20.94.37,34.74-4,69-22.53C613.48,142.92,618.44,139.92,618.25,138.57Z" transform="translate(-80.2 -56.5)" />
                                <path id="11" fill={fillColors[11]} onClick={paintColor} data-name="beak top" d="M585.33,131.57c16,1.71,32.15,2.75,32.62,5.91s3.5-.66-22.43,9.85c-39.62,13.17-79.23,11.19-89.25,5.47,19.6,1.66,30.54-4.35,36.24-7.44s12.26-16.28,12.26-16.28S569.28,129.86,585.33,131.57Z" transform="translate(-80.2 -56.5)" />
                                <circle id="12" fill={fillColors[12]} onClick={paintColor} cx="382.72" cy="86.65" r="23.81" />
                                <circle id="13" fill={fillColors[13]} onClick={paintColor} cx="392.23" cy="79.39" r="5.99" />
                            </svg>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}


export default Bird