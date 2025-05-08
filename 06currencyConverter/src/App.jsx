import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inputbox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  // const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0) ;
  const [from, setFrom] = useState("usd") ;
  const [to, setTo] = useState("inr") ;
  const [convertedAmount, setconvertedAmount] = useState(0) ;

  const currencyInfo = useCurrencyInfo(from) ;
   const options = Object.keys(currencyInfo) ;

  const swap = () => {
    setFrom(to) ;
    setTo(from) ;
    setconvertedAmount(amount) ;
    setAmount(convertedAmount) ;
  }
  setconvertedAmount(amount * currencyInfo[to])
  return (
    <>
      {/* <div className="text-3xl bg-orange-500">currency app woth chai</div> */}


    </>
  )
}

export default App
