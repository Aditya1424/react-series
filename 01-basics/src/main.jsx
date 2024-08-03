import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>My First React App</h1>
      <p>This is a simple React application!!</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 
    MyApp()
 
)
