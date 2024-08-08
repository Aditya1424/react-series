
import { useCallback, useEffect, useState, useRef} from 'react';

function App() {
 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword]= useState("")

  const ref = useRef(null)

  // Concept of useCallback hook

  // useCallBack is a hook that let you cache a function between re-renders
  // cache a function means that it will stores the result of that function so that it can be
  // reused instead of re-computing.

  const generator= useCallback(()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()'
    
    for(let i=1; i<=length; i++){
      pass+= str.charAt(Math.floor(Math.random()*str.length+1))
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  

  useEffect(()=>{
    generator()
  }, [length, numberAllowed, charAllowed, generator])
  return (
    <>
    <div className='w-full max-w-md mx-auto  text-orange-700 shadow-md rounded-lg  px-4 py-3 my-8 bg-gray-700'>

        <h1 className='text-white text-center my-4 text-3xl'>Password Generator</h1>

        <div className='rounded-lg flex shadow overflow-hidden mb-4'>
          <input type="text" className='p-1 px-3 w-full  text-2xl outline-none'
          value={password} readOnly placeholder='Password' ref={ref}/>

          <button
           onClick={()=>{navigator.clipboard.writeText(password)
            ref.current?.select()
          }}
          
           className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          {/* length */}
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={50} 
            value={length} 
            onChange={(e)=>{setLength(e.target.value)}}

            className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>

          {/* number allowed */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e)=>{setNumberAllowed((prev)=> !prev)}}
            />
            <label>Number</label>
          </div>

          {/* charAllowed */}

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={(e)=>{setCharAllowed((prev)=> !prev)}}
            />
            <label>Character</label>
          </div>

        </div>
    </div>
    </>
  )
}

export default App
