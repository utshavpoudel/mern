import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
  <div className='parent'>
    
    <Card user='simon' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQFpMiwn7uOcvTrO9Q-goT5lsvijcA_6i3Cao5CJNJA&s=10'/>
    <Card user='rajat' img='https://ichef.bbci.co.uk/images/ic/480xn/p0g8jnrr.png'/>
    <Card user='swoch' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg6S5tyYkuDbI79g8OhcoA8m-L4N_PG8cEJoICU7hAJTP7vcwYSEwj8w&s=10'/>
    <Card user='sami' img='https://cdn.britannica.com/34/180334-138-4235A017/subordinate-meerkat-pack.jpg?w=800&h=450&c=crop'/>
    <Card user='sumit' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurW4373vTqGk1y1E8mJjwuGreX3SM_-PjbIHQ63n52SuzQDkipt6h5HI&s=10'/>
    <Card user='prabhav' img='https://i.insider.com/55f71bd7bd86ef1c008ba234?width=700'/>
    

  </div>
  )
}

export default App