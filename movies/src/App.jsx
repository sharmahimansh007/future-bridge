import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { MoviesCard } from './components/MoviesCard'
import { Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MoviesCard />
    </div>
  )
}

export default App
