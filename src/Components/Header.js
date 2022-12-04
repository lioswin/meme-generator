import React from "react"
import image from "../images/troll.png"
export default function Header(){
    return(
        <header className="header">
            <img src={image} alt=""/>
            <h2>MemeGenerator</h2>
            <h3>React Course-Project 3</h3>
        </header>
    )
}