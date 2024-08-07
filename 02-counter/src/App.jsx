
import {useState} from 'react'
import viteLogo from '/vite.svg'
import './App.css'


// Note: Batching concept
// useState hook does not send the data one by one, it first stores all updates in the batches
// then encounter it.
function App() {
 
  // let counter = 5

  // using useState hook to manage the state of counter
  // this hook return an array with 2 arguments ,
  // one is the state/value and another one is the function that helps to change the value/state
  let [counter, setCounter]= useState(10)


  const addValue = () => {
    // by simply increasing the counter value, we are not able to upadate the value in our UI
    // instead, we will update the value using the useState hook

    if(counter>=20){
      return
    }
    setCounter(counter+1)
    // counter++
    
  }

  const decValue = () => {
    if (counter <= 0) {
      return
    }

    setCounter(counter-1)
    // counter--;
 
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>

      <br />

      <button
      onClick={decValue}
      >Dec value</button>

    </>
  )
}

export default App
