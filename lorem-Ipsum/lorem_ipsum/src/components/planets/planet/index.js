import React, { Component, useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink/descriptionWithLink";
import Form from "../../planet/form";

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
    
}

const Planet = (props) =>{

        
    let title;
    if(props.title_with_underline)
        title =  <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
    return(
    <div>        
        {title}
        <DescriptionWithLink description={props.description} link={props.link}/>            
        <GrayImg img_url={props.img_url} gray={props.gray}/>
    </div>
    )
    
}

export default Planet

