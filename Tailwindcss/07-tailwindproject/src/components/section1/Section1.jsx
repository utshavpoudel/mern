import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

/* const Section1 = (props) => {
  
  return (
    <div className='h-screen w-full '>

      <Navbar />
      <Page1Content users={props.users}/>
    </div>

  )
}
*/

const Section1 = (props) => {
  console.log("Section1 props:", props);

  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
};

export default Section1