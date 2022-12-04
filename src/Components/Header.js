import React from "react"
import image from "../images/troll.png"
export default function Header(){
    return(
        <header className="header">
            <img src={image} alt="" className="header--image"/>
            <h2 className="header--title">MemeGenerator</h2>
            <h3 className="header--project">React Course-Project 3</h3>
        </header>
    )
}