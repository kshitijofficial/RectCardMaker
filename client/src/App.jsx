import { useState } from 'react'
import Card from './Card'
import './App.css'
import Form from './form'

function App() {
  const [cards,setCards]=useState([]) 
  
  const cardGenerator =(name,age)=>{
    
     const newObject ={
      title:`${name}`,
      content:`${age}`
     }
     setCards([...cards,newObject]);
  }
  return (
    <>
    <Form cardGenerator={cardGenerator}/>
    <div className='app'>
    {/* <button onClick={cardGenerator}>Card Generator</button> */}
      <div className='card-container'>
          {cards.map((card,index)=>{
            return(
              <Card key={index} title={card.title} content={card.content}/>
            )
          })}
        </div>
      </div>
     
    </>
  )
}

export default App