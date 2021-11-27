import React, {Fragment, useState, useEffect} from "react";
import Planet from "../planet";


async function getPlanets() {
     let response = await fetch('http://localhost:3000/api/planets.json')
     let data = await response.json()
     return data;
}

const Planets = () => {
     const [planets, setPlanets] = useState([
 
     ])

     useEffect( () => {
          getPlanets().then(data => {
           setPlanets(data['planets'])
          })
     }, [])

     const duplicateLast = () => {
          let last_planet = planets[planets.length - 1];
          setPlanets([...planets, last_planet]);
     }

     const removelast = () => {
          let new_planets = [...planets];
          new_planets.pop();
          setPlanets(new_planets);
     }

 
          return (
               <Fragment> 
                    <h4>Planet List</h4>
                    <hr/>
                    <button onClick={removelast}>Remove Last</button>
                    <button onClick={duplicateLast}>Duplicate Last</button>
                    <hr/>
               {planets.map((planet, index) =>
                    
                    <Planet 
                         id ={planet.id}
                         name={planet.name}
                         description={planet.description}
                         img_url={planet.img_url}
                         link={planet.link}
                         key={index}
                       
                                       
                    />  
                 )}                               
          
               </Fragment>
               )
          
}
export default Planets