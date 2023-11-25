import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewPaperForm from './NewPaperForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{marginTop:0, paddingTop:0}}>Question Paper Generator Application</h1>
      <NewPaperForm/>
    </>
  )
}

export default App
