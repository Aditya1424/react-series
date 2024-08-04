import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Applying tailwind css to h1 tag */}
      <h1 className='bg-green-500 text-black rounded p-4 mb-6'>Tailwind Test</h1>
      <Card username='MaLong' btnText ='Vist me'/>
      
      <Card username='FanZhendong'/>
      
    </>
  )
}

export default App
