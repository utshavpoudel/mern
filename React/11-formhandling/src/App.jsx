import React from 'react'

const App = () => {

  const xyz =(u)=>{
    u.preventDefault()
    console.log('sucessful')
  }

  return (
    <div>
      <form onSubmit={
        (u)=>{
          xyz(u)
        }
      }>
        <input type="text" placeholder='enter your location'/>
        <button >submmit</button>
      </form>
    </div>
  )
}

export default App