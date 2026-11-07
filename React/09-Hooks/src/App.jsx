import React,{useState} from 'react'

const App = () => {

  const [a, seta] = useState(10)
  const [name, setname] = useState('utshav')

  //for array//
  const [users, setusers] = useState(['ram','shyam','xyz'])

  function changenum(){
  seta(30);
  setname('abhdsbfir');
  setusers(['abc','jdbf','dsfv'])
  }

 
  const [num, setnum] = useState(0)

  function increase(){
    setnum(num+1)
    console.log('increasing')
  }

  function decrease(){
    setnum(num-1)
    console.log('decreasing')
  }

  function jump(){
    setnum(num+5)
  }

  return (
    <div >
      Hooks. <br />
      Hook is a special JavaScript function that lets you use React features inside functional components.<br/>
      
<ol>
  <li>use-state </li>
  <li>use-effect</li>
  <li>use-ref</li>
  <li>use-context</li>
  <li>use-reducer</li>
  <li>use-memo</li>
  <li>use-callback</li>
</ol>


<h1>1. use-state basic</h1>

<h1>value of NUM is  {a}</h1>
<h1>my name is {name}</h1>
<h1>name changing using array is {users}</h1>
<button onClick={changenum}>Click</button>




<h2>{num}</h2>
<button onClick={increase}>increase</button>
<button onClick={decrease}>decrease</button>
<button onClick={jump}>jump by 5</button>

    </div>
  )
}

export default App