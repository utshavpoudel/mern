import React, { useState } from 'react'

const App = () => {

  const [a, seta] = useState(10)
  const [name, setname] = useState('utshav')

function changenum(){
  seta(40)
  console.log(a)
}

const changename=()=>{
  setname('ram')

}


const [num, setnum] = useState({user:'utshav',age:22})

const btnclicked=()=>
{
  const newNum ={...num};
  newNum.user='xyz'
  console.log(newNum)
  setnum(newNum)
}


  return (
    <div>the number is {a} <br />
    the name is {name}. <br />
     advance state managemnt eg <br />
     {num.user},{num.age}

  
    <button onClick={()=>{
      changename()
      changenum()
      btnclicked()
    }}>press</button>
    </div>
  )
}

export default App