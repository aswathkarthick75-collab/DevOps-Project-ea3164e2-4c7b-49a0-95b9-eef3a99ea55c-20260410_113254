import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>DevOps-Project-ea3164e2-4c7b-49a0-95b9-eef3a99ea55c</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}