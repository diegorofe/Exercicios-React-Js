import React, {Fragment} from "react";
import Planet from "../planet";


class Planets extends React.Component {
     constructor(props){
          super(props);
          this.state = {
               planets: [
                    {
                    name: "Mercúrio",
                    description: "Mercúrio é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol.  ",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                    link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    },

                    {
                    name: "Plutão",
                    description: "é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o ",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                    link:"https://pt.wikipedia.org/wiki/Plut%C3%A3o"              
                    }
               ]
          }
     }


     duplicateLast = () => {
          let last_planet = this.state.planets[this.state.planets.length - 1]
          this.setState(state => ({
               planets: [...this.state.planets, last_planet]
          }))
     }

     removelast = () => {
          let new_planets = [...this.state.planets]
          new_planets.pop()
          this.setState(state => ({
               planets: new_planets
          }))
     }

     render(){
          return (
               <Fragment> 
                    <h4>Planet List</h4>
                    <hr/>
                    <button onClick={this.removelast}>Remove Last</button>
                    <button onClick={this.duplicateLast}>Duplicate Last</button>
                    <hr/>
               {this.state.planets.map((planet) =>
                    
                    <Planet 
                         name={planet.name}
                         description={planet.description}
                         img_url={planet.img_url}
                         link={planet.link}
                                       
                    />  
                 )}                               
          
               </Fragment>
               )
          }
}
export default Planets