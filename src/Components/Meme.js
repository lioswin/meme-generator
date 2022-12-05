import React from 'react'
import dataMeme from '../memesData.js'

export default function Meme(){

   const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1ooaki.jpg");



function getMeme(){
const memesArray = dataMeme.data.memes;
const randomNumber = Math.floor(Math.random() * memesArray.length);
setMemeImage(memesArray[randomNumber].url);

console.log(memesArray[randomNumber].url);

}



    return(
        <main>
            <div className='form'>
             <input 
             type="text"
             placeholder='Top text'
             className='form--input'/>
             <input 
             type="text"
             placeholder='Bottom text'
             className='form--input'/>
             <button className='form--button'
             onClick={getMeme}>
                Get a new meme button
             </button>
            </div>
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}