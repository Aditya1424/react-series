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

// Using React.createElement
// have 3 parameters in it ('tag', {attributes:'eg'}, 'Text')
const reactElement = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, React!'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  reactElement
 
)
