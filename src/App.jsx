import { useState } from 'react'


import './App.css'
import Home from './components/Home/Home'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Home></Home>
      
    </>
  );
}

export default App;
