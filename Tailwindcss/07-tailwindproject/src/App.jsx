import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'



const App = () => {

  const users = [
    {
      img:'https://www.shutterstock.com/image-photo/female-student-headphones-using-laptop-260nw-2330530537.jpg',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://www.shutterstock.com/image-photo/full-body-young-teen-girl-260nw-2495457967.jpg',
      intro:'',
      tag:'Unsatisfied'
    },
    {
      img:'https://www.shutterstock.com/image-photo/indian-college-student-boy-studying-260nw-2554949415.jpg',
      intro:'',
      tag:'Underbanked'
    }
    
  ]
  return (
    
    <div>
      <Section1 users={users}/>
      <Section2 />
 

       
    </div>
  )
}

export default App