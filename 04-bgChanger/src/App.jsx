import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [color, setColor] = useState("olive")

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='justify-center flex flex-wrap gap-3 bg-white px-3 py-2 rounded-3xl'>
            <button className='bg-red-700 text-white px-4 py-1 rounded-full shadow-xl'
            onClick={() => setColor("red")}>
              Red
            </button>

            <button className='bg-green-700 outline-none text-white px-4 py-1 rounded-full shadow-xl'
            onClick={() => setColor("green")}>
              Green
            </button>

            <button className='bg-blue-700 outline-none text-white px-4 py-1 rounded-full shadow-xl'
            onClick={()=> setColor('blue')}>
              Blue
            </button>

            <button className='bg-black outline-none text-white px-4 py-1 rounded-full shadow-xl'
            onClick={()=> setColor('black')}>
              Black
            </button>

            <button className='bg-pink-700 outline-none text-white px-4 py-1 rounded-full shadow-xl'
            onClick={()=> setColor('pink')}>
              Pink
            </button>

            <button className='bg-yellow-700 outline-none text-white px-4 py-1 rounded-full shadow-xl'
            onClick={()=> setColor('yellow')}>
              Yellow
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
