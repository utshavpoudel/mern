import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
    <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>1</h2>
    <div>
        <p className='text-lg leading-normal text-white mb-14'  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ipsam? </p>
        
        <div className='flex justify-between'>
        <button className='bg-blue-600 text-white px-8 py-2 rounded-full font-medium text-lg'>satisfied</button>
        <button className='bg-blue-600 text-white px-3 py-3 rounded-full font-medium text-lg'><i className="ri-arrow-right-line"></i></button>
        
        </div> 
        </div>
        
    
    </div>
  )
}

export default RightCardContent