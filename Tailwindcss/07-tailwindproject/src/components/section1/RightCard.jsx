import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden rounded-4xl relative' >
<img className='h-full w-full object-cover' src="https://thumbs.dreamstime.com/b/young-gentleman-fancy-suit-full-length-portrait-black-walking-cane-isolated-white-background-71304309.jpg" alt="" />
<div className='absolute top-0 left-0 h-full w-full bg-amber-500 p-10 flex flex-col justify-between'>
    <h2 className='bg-white rounded-full h-11 w-11 flex justify-center items-center text-2xl font-bold'>1</h2>
    <div>
        <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, vero. </p>
        
        <div ><button className='bg-blue-600 text-white px-7 py-3 rounded-full font-semibold text-lg'>satisfied</button>
        <button><i className="ri-arrow-right-line"></i></button>
        
        </div> 
        </div>
    
    </div>
    </div>
  )
}

export default RightCard