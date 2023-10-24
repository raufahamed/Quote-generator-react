import React, { useEffect, useState } from 'react'
import './Board.css'
const RANDOM_QUOTE = 'https://inspo-quotes-api.herokuapp.com/quotes/random'
const colors = ()=>{

    const r = Math.floor(Math.random()*256 +1)
    const g = Math.floor(Math.random()*256 +1)
    const b = Math.floor(Math.random()*256 +1)
    return `rgb(${r},${g},${b})`
    
}


const Quote = () => {
const [quote,setquote] = useState({text : "",author:""}) 
const[loading,setloading] = useState(true)
const [color,setcolor] = useState(colors())



useEffect(() =>{
fetchquote()
       },[]);
   
    async function fetchquote(){
    const response = await fetch(RANDOM_QUOTE)
    const json = await response.json()
    const randomquote = json.quote
   setquote(randomquote)
   setloading(false)
  setcolor(()=>{
     let val = colors()
    document.body.style.backgroundColor = val
    return val 
  })
 
}


    return (
    <div className='board'>
        <div className='loading'>{loading && 'loading the quote for you'}</div>
        <p className='quote' style={{color: color}}>{quote.text}</p>
        <p className='quoteauthor' style={{color:color}}>{quote.author}</p>
         <button onClick={fetchquote} >get quote</button>
    </div>
  )
}

export default Quote