import React, {Fragment} from "react";
import Planet from "../planet";

const clickOnPlanet = (name) => {
     console.log(`Planeta ${name} clicado!`)
}

const Planets = () => {
    return (
       <Fragment> 
            <h4>Planet List</h4>
            <hr/>
            <Planet name="Mercúrio"
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            title_with_underline= {true}
            gray={true}
            clickOnPlanet={clickOnPlanet}

       />  

            <Planet name="Plutão"
            description="é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol.  "
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
            clickOnPlanet={clickOnPlanet}
            gray={false}
            
       />
     
          </Fragment>
    )
}

export default Planets