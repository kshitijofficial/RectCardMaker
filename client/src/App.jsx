import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [cards,setCards]=useState([{title:"Card 1",content:"content 1"}]) 
  
  const cardGenerator =(title,content)=>{
    
     const newObject ={
      title:`${title}`,
      content:`${content}`
     }
     setCards([...cards,newObject]);
  }
  return (
    <>
    <div className='app'>
    <button onClick={cardGenerator}>Card Generator</button>
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