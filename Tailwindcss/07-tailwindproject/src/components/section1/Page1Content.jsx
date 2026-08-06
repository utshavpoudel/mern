import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='gap-10 py-10 px-18 itemcenter flex justify-between h-[90vh] '>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content