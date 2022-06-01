import React, { useState, useEffect } from "react"
import Palette from "./Palette"

const Eric = () => {

    const [fillColors, setFillColors] = useState(Array(30).fill("white"))
    const [currentColor, setCurrentColor] = useState('white')

    useEffect = (() => paintColor)

    const paintColor = (event) => {
        const newColors = [...fillColors]
        newColors[event.target.id] = currentColor
        return setFillColors(newColors)
    }


    return (
        <div id="eric">

            <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} />
            <div id="box-current-color">
                <div id="color-text">Current<br /> Color</div>
                <div id="current-color" style={{ background: currentColor }} />
            </div>

            <div id="svg">
                <svg viewBox="-140 -50 1000 1000" preserveAspectRatio="xMinYMin" width="50em" height="50em" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                    <title>Eric Template</title>
                    <g id="svg_001" transform="translate(0 0)" display="inline">
                        <g id="svg_002" transform="matrix(0.849029 0 0 0.849029 65.2874 25.9633)">


                            <path id="0" fill={fillColors[0]} onClick={paintColor} d="M396.702,49.218C397.313,36.895 415.202,37.08 423.772,38.67C442.155,42.08 458.644,49.617 474.815,59.008C484.09,64.395 492.318,72.965 501.822,78.026C527.589,91.75 555.671,94.002 583.844,87.468C595.572,84.748 603.59,74.662 615.636,72.461C616.137,72.369 614.943,73.265 614.837,73.763C614.24,76.568 614.208,79.479 613.55,82.271C612.436,86.999 611.09,91.679 609.533,96.28C602.951,115.734 595.508,134.894 589.14,154.419C582.037,176.201 583.541,199.809 573.067,220.646C557.217,252.177 514.031,255.131 483.591,254.698C475.62,254.585 467.644,254.1 459.722,253.209C451.758,252.314 443.846,250.936 435.99,249.349C421.937,246.509 407.067,242.153 396.388,232.032C390.207,226.174 381.119,212.18 376.948,207.261C367.16,195.718 352.2,189.389 338.323,184.676C329.841,181.795 321.501,181.442 312.658,181.917C311.397,181.985 310.206,182.531 309.008,182.93C308.144,183.218 306.482,183.064 306.482,183.976L396.702,49.218Z" />
                            <g transform="matrix(0.993883,-0.110438,0.110438,0.993883,-11.1001,51.3153)">
                                <path id="1" fill={fillColors[1]} onClick={paintColor} d="M498.795,130.793C501.656,125.485 502.776,130.613 514.578,132.131C524.154,133.362 531.961,130.07 530.254,135.624C526.19,148.847 519.237,141.157 515.85,146.188C511.743,152.288 508.94,167.97 504.933,178.87C500.874,189.912 490.541,217.877 489.719,219.434C487.296,224.027 492.867,224.019 494.753,224.109C495.136,224.127 497.684,224.205 497.732,226.154C497.941,234.533 484.911,229.782 479.459,229.258C474.15,228.749 468.694,229.359 463.499,228.158C461.633,227.726 463.305,223.169 465.15,222.654C466.929,222.158 468.809,223.347 470.655,223.284C476.109,223.097 477.239,216.662 479.098,212.104C484.74,198.269 491.545,176.902 491.735,176.392C495.566,166.107 500.21,154.939 503.865,144.59C506.254,137.825 493.217,141.142 498.795,130.793Z" />
                            </g>
                            <g transform="matrix(0.871129,0.0982568,-0.114004,1.01074,98.4295,-73.3329)">
                                <path id="2" fill={fillColors[2]} onClick={paintColor} d="M577.513,162.426C580.902,157.628 578.195,150.35 575.346,146.22C567.765,135.232 554.461,133.298 542.882,138.625C528.947,145.037 529.041,169.007 525.901,180.154C523.493,188.701 519.744,196.824 517.156,205.319C514.761,213.184 511.194,224.478 518.257,231.46C519.845,233.029 525.304,234.003 527.338,233.936C539.322,233.543 551.431,229.002 559.532,219.903C562.474,216.598 566.052,211.177 563.935,206.42C562.32,202.79 557.31,205.587 555.68,207.245C550.871,212.137 538.417,233.089 530.521,218.597C528.064,214.088 529.074,206.877 529.801,202.641C531.749,191.291 533.779,178.093 539.873,167.706C541.727,164.548 547.762,155.398 552.858,153.723C561.17,150.992 563.429,173.095 572.74,166.245L577.513,162.426Z" />
                            </g>
                            <path id="3" fill={fillColors[3]} onClick={paintColor} d="M222.588,277.091C228.14,275.697 229.718,269.157 232.711,265.296C240.929,254.693 249.849,244.648 258.102,234.072C309.389,168.341 312.461,163.821 359.666,95.107C369.33,81.04 378.799,66.839 388.145,52.559C389.347,50.723 394.388,37.69 400.233,39.784C409.425,43.076 398.522,54.834 396.407,58.141C388.968,69.771 382.043,81.728 374.486,93.282C359.592,116.052 344.024,138.376 329.059,161.1C325.242,166.895 322.087,173.116 318.148,178.829C302.316,201.795 285.901,224.354 269.768,247.11C269.571,247.388 270.147,246.545 270.339,246.263C270.339,246.263 263.421,255.529 259.588,259.849C255.981,263.915 251.831,267.472 248.151,271.472C247.167,272.541 241.019,281.423 238.887,281.423L222.588,277.091Z" />
                            <g id="head" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="4" fill={fillColors[4]} onClick={paintColor} d="M224.43,4.13C268.81,1.91 292,29.22 299.71,46.59C307.42,63.96 322.87,100.64 295.84,166.27C268.81,231.9 266.75,237.62 267.78,243.44C267.89,244.04 268,244.67 268.12,245.33C269.19,251.2 270.74,259.33 270.53,259.46C265.68,263.28 194.92,268.12 198.02,258.92C201.26,249.27 210.91,212.59 209.02,197.15C207.13,181.71 205.16,162.41 182.02,150.82C158.88,139.23 106.74,127.66 137.63,75.55C168.52,23.44 185.82,6.06 224.43,4.13Z" />
                            </g>
                            <g id="bottom_beak" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="5" fill={fillColors[5]} onClick={paintColor} d="M126,145C106.45,140.12 85,127.75 77.75,98.68C75.82,87.1 73.89,73.59 89.33,89.03C104.77,104.47 136.89,80.81 141.1,79.13C145.31,77.45 147.24,77.45 153.03,83.24C158.82,89.03 172.33,114.12 183.91,116.05C195.49,117.98 187.78,117.77 193.56,117.98C197.98,118.14 210.97,114.74 214.8,112.19C214.8,113.31 214.74,113.7 210.93,117.98C205.251,124.005 198.754,129.202 191.63,133.42C182.9,138.66 177.87,142.07 166.54,145C153.84,148.31 138.21,148.09 126,145Z" />
                            </g>
                            <g id="top_beak" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="6" fill={fillColors[6]} onClick={paintColor} d="M214.78,112.22C212.05,117.68 199.33,131.52 158.78,139.22C137.93,141.09 93.15,135.36 79.64,110.27C66.13,85.18 71.94,77.48 75.8,75.55C79.66,73.62 87.38,91 110.54,87.13C133.7,83.26 137.92,73.69 138.54,73.85C145.732,75.92 152.557,79.098 158.77,83.27C169.62,90.38 177.04,106.56 187.72,112.27C191.16,114 207.05,114.15 214.78,112.22Z" />
                            </g>
                            <ellipse id="7" fill={fillColors[7]} onClick={paintColor} cx="92.96" cy="111.65" rx="7.72" ry="3.86" />
                            <circle id="8" fill={fillColors[8]} onClick={paintColor} cx="157.54" cy="71.25" r="22.29" />
                            <circle id="9" fill={fillColors[9]} onClick={paintColor} cx="148.64" cy="64.46" r="5.61" />
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="10" fill={fillColors[10]} onClick={paintColor} d="M220.57,602.5C216.71,608.29 198.44,623.91 193.57,625.66C188.7,627.41 191.64,625.66 191.64,625.66L189.71,628.75C189.71,628.75 199.36,637.24 201.29,643.03C203.22,648.82 207.08,642.62 207.08,646.89C207.08,651.16 245.69,641.1 264.99,633.38C284.29,625.66 293.99,617.94 293.99,617.94C293.99,617.94 288.78,609.65 287.53,608C286.28,606.35 255.39,600.57 255.39,600.57L220.57,602.5Z" />
                            </g>
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="11" fill={fillColors[11]} onClick={paintColor} d="M342.17,484.76C357.61,484.76 376.01,488.55 371.64,494.37C367.27,500.19 366.5,512.37 357.23,528.47C347.96,544.57 339.84,564.7 333.29,576.84C326.74,588.98 327.62,592.14 328.14,599.25C328.66,606.36 337.14,613.4 332.52,616.01C327.9,618.62 322.87,616.01 319.01,614.08C311.29,616.01 318.66,612.37 303.57,621.8C288.12,631.45 280.4,637.24 247.57,643.03C214.74,648.82 196.36,649.44 199.31,646.89C202.26,644.34 216.69,639.17 224.41,637.24C232.13,635.31 262.87,623.64 266.87,623.73C269.53,623.79 235.99,623.73 230.2,623.73C224.41,623.73 186.26,629.68 183.87,627.59C181.48,625.5 216.69,616.01 224.41,614.08C232.13,612.15 259.15,606.36 259.15,606.36C259.15,606.36 216.69,602.5 214.76,600.57C212.83,598.64 247.3,596 261,597.32C274.7,598.64 294,598.64 294,600.57C294,602.5 291,600.5 305,583.16C319,565.82 319,554.76 322.86,540.73C326.72,526.7 328.66,484.76 342.17,484.76Z" />
                            </g>
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="12" fill={fillColors[12]} onClick={paintColor} d="M270.75,656.55C268.16,662.37 250.84,678.01 243.75,679.71C238.69,680.92 241.82,679.71 241.82,679.71L239.89,682.8C239.89,682.8 249.54,691.29 251.47,697.08C253.4,702.87 255.33,703.98 255.33,708.25C255.33,712.52 293.93,706.73 313.24,699.01C332.55,691.29 344.12,672.01 344.12,672.01C344.12,672.01 338.91,663.71 337.66,662.07C336.41,660.43 305.52,654.64 305.52,654.64L270.75,656.55Z" />
                            </g>
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="13" fill={fillColors[13]} onClick={paintColor} d="M392.36,538.8C407.8,538.8 426.19,542.6 421.82,548.42C417.45,554.24 416.69,566.42 407.42,582.52C398.15,598.62 390,618.75 383.47,630.89C376.94,643.03 377.8,646.19 378.32,653.3C378.84,660.41 388.1,674.5 383.47,677.1C378.84,679.7 378.84,675.85 374.98,673.92C371.12,671.99 368.49,672.39 363.98,677.98C359.47,683.57 324.76,702.87 291.98,708.66C259.2,714.45 241.68,717.6 244.64,715.06C247.6,712.52 266.89,700.94 274.64,699.06C282.39,697.18 307.17,687.41 311.17,687.45C315.17,687.49 272.71,689.45 253.41,685.55C234.11,681.65 233.68,683.83 234.11,681.69C234.54,679.55 255.34,675.9 274.64,673.97C293.94,672.04 315.18,670.11 315.18,670.11C315.18,670.11 266.89,656.55 265,654.62C263.11,652.69 297.52,650.05 311.18,651.37C324.84,652.69 344.18,652.69 344.18,654.62C344.18,656.55 341.29,654.55 355.28,637.21C369.27,619.87 369.28,608.8 373.13,594.78C376.98,580.76 378.84,538.8 392.36,538.8Z" />
                            </g>
                            <g id="body" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="14" fill={fillColors[14]} onClick={paintColor} d="M189.68,270.5C179.58,285.65 162.68,314.89 143.36,345.78C124.04,376.67 108.61,424.92 124.05,465.45C139.49,505.98 234.05,577.45 346.05,585.13C458.05,592.81 500.19,575.48 541.83,563.89C583.47,552.3 666.47,403.69 629.83,384.38C593.19,365.07 589.29,353.5 506.29,332.27C423.29,311.04 324.8,297.52 309.36,291.73C293.92,285.94 273.6,272.41 269.28,254.08C228.28,258.92 201.28,249.27 201.28,249.27C198.085,256.694 194.202,263.801 189.68,270.5Z" />
                            </g>
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="15" fill={fillColors[15]} onClick={paintColor} d="M270.75,328.41C263.44,341.81 232.15,365.69 257.24,417.2C282.33,468.71 241.77,440.33 249.52,446.15C257.27,451.97 261.1,457.73 270.75,459.66C270.75,465.45 257.55,470.23 264.96,477.03C268.11,479.93 275.2,480.35 276.54,482.82C278.36,486.17 271.54,500.19 264.93,504.42C253.38,511.78 221.93,509.78 218.33,517.54C214.73,525.3 233.1,546.24 223.94,542.54C214.78,538.84 126.81,511.46 119.64,449.86C112.47,388.26 138.43,354.9 152.48,331C166.53,307.1 193.62,263 195.48,261C197.34,259 216.64,266.64 233.06,264.71C249.48,262.78 267.13,260.64 267.13,260.64C267.13,260.64 263.85,255.84 275.97,267.99C283.507,275.49 291.816,282.17 300.76,287.92C309.704,293.67 277.24,316.51 270.75,328.41Z" />
                            </g>
                            <g id="tail1" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="16" fill={fillColors[16]} onClick={paintColor} d="M722.43,357.36C720.5,353.5 682.76,369.52 638.9,368.27C595.04,367.02 652.9,386.27 600.82,453.87C548.74,521.47 456.57,583.36 413.59,587.06C474.33,588.67 510.1,579.34 564.15,556.17C618.2,533 658.73,504.06 678.03,473.17C660.66,475.1 645.22,478.96 651.03,475.1C656.84,471.24 687.7,463.52 708.93,413.34C730.16,363.16 722.43,357.36 722.43,357.36Z" />
                            </g>
                            <g id="tail2" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="17" fill={fillColors[17]} onClick={paintColor} d="M680,407.55C676.14,419.13 658.77,444.22 643.33,455.8C627.89,467.38 627.88,469.31 620.16,473.17L612.4,477C612.4,477 617.98,478.36 627.84,475.07C633.64,473.14 643.29,469.28 643.29,469.28C643.29,469.28 641.36,480.86 627.84,492.45C614.32,504.04 600.77,516.19 572.84,533.27C544.91,550.35 533.92,552.76 510.13,563.86C481.13,577.38 475.39,583.17 475.39,583.17C475.39,583.17 517.85,579.31 564.18,558.07C610.51,536.83 648.69,513.47 676.87,475C681.12,469.45 656.8,477 651.01,475.12C645.22,473.24 653.92,477.31 672.73,462.71C691.54,448.11 716.64,403.71 722.43,376.71C728.22,349.71 722.43,355.45 722.43,355.45C722.43,355.45 700.34,362.45 692.08,362.82C689.61,378.59 680,407.55 680,407.55Z" />
                            </g>
                            <g id="neck_band" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="18" fill={fillColors[18]} onClick={paintColor} d="M195.51,261C195.82,261.7 198.42,264.71 220.57,264.71C243.62,264.71 268.29,263.08 270.66,259.82C270.87,259.53 268.24,245.53 268.12,245.55C259.44,247.37 264.28,247.39 237.94,249.27C212.94,251.05 202.99,247.71 201.37,247.35C201.24,247.33 195.47,260.9 195.51,261Z" />
                            </g>
                            <g id="wingbase" transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="19" fill={fillColors[19]} onClick={paintColor} d="M249.52,333.52C278.02,271.28 332.52,264.71 346.03,262.78C359.54,260.85 423.24,245.41 535.19,326.48C556.43,339.99 579.56,337.38 598.89,332.27C618.22,327.16 654.89,297.52 662.58,304.63C666.21,309.22 665.48,312.48 662.58,316.82C658.72,322.62 652.93,328.41 651,332.27C649.07,336.13 652.93,338.06 660.65,332.27C668.37,326.48 674.16,320.69 678.02,324.55C681.88,328.41 676.67,341.43 671.55,347.46C666.43,353.49 660.65,357.36 662.55,361.22C664.45,365.08 676.62,355.43 679.92,361.22C683.22,367.01 674.13,374.73 662.55,382.45C650.97,390.17 649.04,388.24 650.97,392.1C652.9,395.96 668.34,388.24 670.27,394.03C672.2,399.82 666.41,409.48 650.97,415.27C635.53,421.06 618.15,422.99 618.15,426.85C618.15,430.71 633.68,427.12 627.8,436.5C625.51,440.16 614.29,446.15 593.06,453.87C571.83,461.59 558.32,459.66 554.46,463.52C550.6,467.38 558.32,469.31 560.25,475.1C562.18,480.89 556.39,488.62 517.78,496.34C479.17,504.06 371.08,523.34 301.6,475.1C232.12,426.86 232.15,371.45 249.52,333.52Z" />
                            </g>
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="20" fill={fillColors[20]} onClick={paintColor} d="M334.45,272.43C359.54,262.78 415.52,270.5 438.68,280.15C461.84,289.8 524.36,318.53 526.88,320.57C529.4,322.61 523.61,330.34 512.03,328.41C500.45,326.48 483.08,324.55 467.64,318.76C452.2,312.97 440.64,309.1 438.64,312.96C436.64,316.82 448.29,322.62 457.94,330.34C467.59,338.06 479.18,349.64 473.39,357.34C467.6,365.04 437.29,366.99 417.7,357.34C398.11,347.69 384.6,339.97 382.7,341.9C380.8,343.83 384.52,346.43 387.01,351.44C390.01,357.44 392.7,365.44 388.49,372.78C380.77,386.29 357.6,382.43 340.23,374.71C322.86,366.99 309.35,357.34 305.49,361.2C301.63,365.06 309.06,368.86 311.13,375.65C313.2,382.44 314.85,388.16 311.13,396.88C307.41,405.6 295.83,411.39 276.53,409.46C257.23,407.53 247.53,401.74 245.65,399.8C243.77,397.86 237.93,388.8 239.86,371.14C241.79,353.48 263.02,316.8 282.32,301.36C301.62,285.92 309.36,282.08 334.45,272.43Z" />
                            </g>
                            <g transform="matrix(1,0,0,1,-69.69,-2.5)">
                                <path id="21" fill={fillColors[21]} onClick={paintColor} d="M564.15,368.94C559.15,379.01 531.33,386.31 515.89,380.52C500.45,374.73 492.73,372.8 490.8,372.8C488.87,372.8 506.24,382.45 504.31,388.24C502.38,394.03 506.93,410.48 460.26,407.08C442.2,406.08 434.82,399.82 432.89,399.82C430.96,399.82 456.05,417.2 446.4,424.92C436.75,432.64 415.52,428.78 398.15,421.06C380.78,413.34 376.91,409.48 376.91,409.48C376.91,409.48 392.36,426.85 388.5,434.57C384.64,442.29 382.71,448.08 322.87,438.43C263.03,428.78 249.59,415.15 249.55,418.1C255.31,432.64 265.81,444.49 273.45,451.53C277.32,455.11 317.08,469.31 347.96,473.17C378.84,477.03 424.46,482.82 427.71,473.17C430.96,463.52 419.38,453.87 421.31,450.01C423.24,446.15 438.68,455.8 463.78,453.87C488.88,451.94 508.17,446.15 512.03,436.5C515.89,426.85 512.03,421.06 512.03,419.13C512.03,417.2 523.61,422.99 558.36,415.27C593.11,407.55 597,399.76 597,395.93C597,392.1 595.07,387.32 597,387.78C598.93,388.24 625.95,386.31 631.75,378.59C637.55,370.87 644.58,363.15 629.82,353.5C615.06,343.85 608.58,349.64 610.51,345.78C612.44,341.92 625.51,340.52 622.85,320.95C622.09,318.76 620.16,326.48 594.78,333.31C568.56,340.37 539.51,328.97 539.51,328.97C539.51,328.97 573.8,349.64 564.15,368.94Z" />
                            </g>
                            <path id="22" fill={fillColors[22]} onClick={paintColor} d="M222.138,277.649C221.959,277.647 222.074,277.627 222.074,277.991" />
                            <path id="23" fill={fillColors[23]} onClick={paintColor} d="M405.607,74.827C400.89,74.78 398.885,85.351 396.358,88.923C389.344,98.838 381.995,108.512 374.895,118.366C366.86,129.517 346.942,155.006 345.73,159.078C344.634,162.762 370.146,180.927 373.307,182.491C380.869,186.233 392.081,178.53 388.924,169.825C385.25,159.697 371.981,162.271 366.365,154.138C365.426,152.778 372.796,142.788 375.164,139.486C377.506,136.22 379.901,132.962 382.677,130.055C385.985,126.588 408.881,152.201 417.988,139.95C419.099,138.456 420.788,137.012 420.848,135.151C420.914,133.079 395.516,123.898 394.432,117.265C393.591,112.116 402.242,98.613 407.744,96.538C416.53,93.225 417.858,100.361 423.326,105.042C426.142,107.453 434.785,115.771 438.58,111.608C439.553,110.541 445.654,104.065 442.896,99.891C441.683,98.057 410.573,74.878 405.607,74.827Z" />
                            <g transform="matrix(0.891181,-0.0852197,0.0853699,0.892751,35.5216,52.1782)">
                                <path id="24" fill={fillColors[24]} onClick={paintColor} d="M455.046,105.726C440.681,131.083 424.013,152.393 405.619,174.871C399.033,182.919 397.158,182.099 391.062,190.536C387.386,195.623 398.359,203.256 399.66,203.668C404.218,205.11 410.774,189.246 417.922,178.782C421.616,173.372 424.049,171.013 429.941,167.192C430.818,166.623 428.166,174.352 427.716,176.446C426.984,179.856 425.923,184.548 425.284,187.977C423.629,196.845 418.476,218.36 418.371,220.453C418.334,221.192 429.081,228.576 433.23,229.258C434.897,229.532 435.349,226.037 435.432,225.406C435.959,221.379 436.275,217.325 436.808,213.299C437.743,206.226 438.565,199.131 439.834,192.111C440.129,190.484 440.47,172.944 440.66,165.695C440.707,163.913 446.733,167.068 448.089,168.171C450.949,170.497 453.386,173.318 456.284,175.595C461.431,179.637 468.788,179.745 472.719,173.932C477.008,167.589 480.925,160.996 484.717,154.344C487.327,149.765 490.136,145.226 491.912,140.263C493.036,137.123 493.592,133.677 493.304,130.354C492.306,118.837 478.436,117.816 470.653,114.239C465.269,111.763 460.349,108.371 455.046,105.726Z" />
                            </g>
                            <g transform="matrix(0.912939,-0.151953,0.146476,0.880032,16.9761,84.4718)">
                                <path id="25" fill={fillColors[25]} onClick={paintColor} d="M467.156,132.475C466.861,132.338 456.687,127.86 456.496,128.085C455.896,128.79 455.242,129.452 454.693,130.198C451.888,134.012 443.455,141.809 444.032,145.552C444.558,148.96 462.297,156.568 464.727,155.861C467.846,154.954 473.675,144.319 476.157,141.205C477.042,140.094 478.323,138.8 477.227,137.311C475.019,134.312 470.537,134.036 467.156,132.475Z" />
                            </g>
                            <path id="26" fill={fillColors[26]} onClick={paintColor} d="M417.596,620.769C417.596,620.769 410.127,627.445 409.655,627.652C407.015,628.805 404.828,630.414 401.882,630.538C398.88,630.665 398.847,626.527 397.718,624.682C397.109,623.685 395.546,622.734 396.065,621.298C396.335,620.552 397.06,620.031 397.75,619.738C400.332,618.641 404.715,618.022 406.813,617.645C409.106,617.234 411.43,616.995 413.714,616.533C414.678,616.338 417.615,613.822 417.683,616.001C417.733,617.59 417.596,619.179 417.596,620.769Z" />
                            <path id="27" fill={fillColors[27]} onClick={paintColor} d="M633.76,556.566C633.331,555.939 624.548,542.771 622.377,541.973C616.616,539.854 604.301,542.292 604.27,532.91C604.262,530.492 606.179,521.345 608.076,520.375C618.643,514.972 628.469,514.956 643.132,528.989C653.888,539.283 654.667,542.691 655.078,546.103C655.513,549.709 653.464,562.617 653.169,564.885C652.966,566.44 651.505,569.298 649.813,569.846C648.744,570.192 643.905,570.739 642.516,569.263C639.572,566.134 636.156,560.073 633.76,556.566Z" />
                            <path id="28" fill={fillColors[28]} onClick={paintColor} d="M401.663,630.725C401.808,629.998 401.256,632.26 401.536,632.946C402.078,634.276 418.974,658.673 430.833,668.596C437.413,674.102 466.804,692.657 491.719,698.598C516.379,704.478 536.49,700.296 548.17,699.357C557.647,698.595 571.885,695.045 580.576,691.169C618.367,674.32 624.967,629.899 634.671,594.473C638.48,580.567 644.815,566.106 642.966,551.234C642.342,546.221 634.177,548.943 632.63,550.897C627.89,556.884 624.581,563.878 620.729,570.471C606.205,595.328 592.861,627.666 562.136,635.947C546.472,640.168 530.608,643.608 514.839,647.418C507.563,649.176 502.643,650.84 495.038,650.433C484.953,649.893 485.047,648.279 476.012,644.418C460.019,637.582 443.847,631.167 427.905,624.212C426.817,623.738 417.596,616.416 417.596,623.24L401.663,630.725Z" />
                            <path id="29" fill={fillColors[29]} onClick={paintColor} d="M417.8,622.176C417.381,622.186 418.746,621.501 419.008,621.828C420.39,623.554 420.64,626.07 422.185,627.652C425.167,630.704 428.695,633.223 432.328,635.461C450.345,646.559 469.312,656.978 489.967,662.286C504.941,666.134 511.396,667.067 526.87,666.197C564.998,664.054 595.883,635.067 614.511,603.838C621.389,592.308 629.159,571.753 633.083,559C633.907,556.319 634.005,553.467 634.494,550.705C634.652,549.819 635.755,548.583 635.024,548.058C633.309,546.825 630.828,547.379 628.847,546.646C627.607,546.187 626.776,544.207 625.494,544.528C624.428,544.795 625.08,546.711 624.611,547.705C623.6,549.85 622.446,551.942 621.082,553.882C617.555,558.896 613.656,563.637 609.963,568.53C588.874,596.469 567.5,628.599 532.134,639.3C506.362,647.097 479.555,630.709 456.246,623.593C447.77,621.005 438.98,619.575 430.303,617.769C427.387,617.162 424.381,617.03 421.479,616.357C420.298,616.083 416.913,614.945 418.126,614.945L417.8,622.176Z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Eric