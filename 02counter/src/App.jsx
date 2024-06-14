import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] =useState(5)
 
 const addValue=()=>{
  setCounter(counter+1)
 }

  return (
    <>
     <h1>Hello React</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>add value</button>
     <br />
     <button>remove vlue</button>
    </>
  )
}

export default App
