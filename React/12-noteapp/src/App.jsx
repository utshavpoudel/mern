import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

        <form className='flex items-start p-10 justify-between'>

            <div className='flex items-start flex-col w-1/2 gap-5'>

              <input type="text" placeholder='Enter heading name' className='px-5 py-2 h-20 border-2 rounded w-full outline-none font-medium'/>
              <textarea type="text" className='px-5 py-2 h-30 border-2 rounded w-full outline-none font-medium' placeholder='start writing ' />
              <button className='bg-white text-black px-5 py-5 rounded w-full font-medium'>Add Notes</button>
            </div>


<img className='h-80' src="https://static.vecteezy.com/system/resources/thumbnails/019/887/472/small/note-paper-file-free-png.png" alt="" />

        </form>



    </div>
  )
}

export default App 