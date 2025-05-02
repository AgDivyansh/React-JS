import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <h1 className='bg-green-400 p-4 rounded-xl' >welcome to our page</h1>
    <Card username = "Divyansh Agarwal" btnText = "click here" />
    <Card />
    </>
  )
}

export default App
