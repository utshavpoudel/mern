import React from 'react'
import Card from './component/card' 
import Name from './component/name'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar/>

      my name is  { <Name/> }
   
      <Card/>
      <Card/>

    </div>

    


  )
}

export default App