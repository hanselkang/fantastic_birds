<div align="center">
  
  <img width="500" alt="Screenshot 2022-06-08 at 14 58 11" src="https://user-images.githubusercontent.com/43307207/172636514-5e348d33-7d68-482d-8f1a-606d7a3457b3.png">

  
  
# Children Educatioin App
## Learn about 6 Fantastic Birds! (4 Members' Group Project)

</div>
  
## Features

Group Aims
* Education App for Children Stage 1
* 4 Activities
* Interact Design

My works
* Wireframe, Outline Design
* Odd One Out Activity to pick the animal which is not a bird
* Transform Vector image(SVG) to JavaScript file to make Colouring Book App
* Manage quiz activity to change each answer's colour when user clicks

## Technology

* JavaScript 
* React
* HTML
* CSS
* SVG data

<div align="center">

  
![cards2](https://user-images.githubusercontent.com/43307207/172644156-85297acf-3533-4ab9-83ed-8759d358d554.gif)



  Birds Information Card Demo
  
  
  <br>
  <br>
  <br>
  <br>
  
  
![activity2](https://user-images.githubusercontent.com/43307207/172643822-0bf3a881-cb1c-4c60-904d-60751e0b1df6.gif)


  
  Activity Demo
  
  
  <br>
  <br>
  <br>
  <br>
  

  ![colouringbook2](https://user-images.githubusercontent.com/43307207/172644584-0a117acd-a034-493f-a2ca-4a57be5b4210.gif)



  Colouring Book Demo
  
  
  <br>
  <br>
  <br>
  <br>
  


  

  
  
  <img width="700" alt="Screenshot 2022-06-08 at 15 01 47" src="https://user-images.githubusercontent.com/43307207/172636413-131c1ee0-c577-43a8-bed8-d8823109ccc1.png">
  
Wireframe Design
  
  
  <br>
  <br>
            
</div>


## Deployment

### To deploy this project run

```

Your local machine terminal:
- git clone https://github.com/hanselkang/fantastic_birds
- npm install
- npm start

```

## Code for Pallete in Colouring Book


```

const [fillColors, setFillColors] = useState(Array(30).fill("white"))
const [currentColor, setCurrentColor] = useState('white')

const paintColor = (event) => {
        const newColors = [...fillColors]
        newColors[event.target.id] = currentColor
        return setFillColors(newColors)
    }



const Palette = ({ setCurrentColor }) => {

    const colors = [
        'WHITE', 'RED', 'BLUE', 'NAVY', 'OLIVE', 'GREEN', 'TEAL', 'LIME', 'YELLOW', 'ORANGE', 'CORAL', 'PINK', 'PURPLE', 'FUCHSIA', 'BROWN', 'MAROON', 'BLACK'
    ]

    const changeColor = (event) => {
        return setCurrentColor(event.target.outerText)   
    }
    const changeColorPicker = (event) => {
        return setCurrentColor(event.target.value)
    }

    

    
    return (
        <div id="color-box">
            <div onClick={changeColorPicker}>
                <input id="color-input" type="color" name="head" />
            </div>
            {colors.map(color => {
                return <div onClick={changeColor} style={{ backgroundColor: color, color: color }}>{color}</div>
            })}
        </div>)
}

   
```

## Arrays of background colours

<img alt="array explain" src="https://user-images.githubusercontent.com/43307207/172636077-6443259c-e1c5-4dc5-92ae-70bef2ed6bd3.png">



## Code for Showing Current Colour 


```

<div id="current-color" style={{ background: currentColor }} ></div>


```



## Codes inside SVG data


```

<path id="0" fill={fillColors[0]} onClick={paintColor} d="M396.702, ... "/>
<path id="1" fill={fillColors[1]} onClick={paintColor} d="M498.795, ... "/>
<path id="2" fill={fillColors[2]} onClick={paintColor} d="M577.513, ... "/>
 ...
<path id="29" fill={fillColors[29]} onClick={paintColor} d="M417.8, ... "/>      

 
```



## Contributors

* [@emma-dougherty](https://github.com/emma-dougherty)
* [@mwdfn](https://github.com/mwdfn)
* [@sapphireflygon](https://github.com/sapphireflygon)


