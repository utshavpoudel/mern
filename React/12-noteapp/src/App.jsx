import React from 'react'

const App = () => {

const submitHandler=(e)=>
{
  e.preventDefault()
  console.log('form submitted');
  e.target.reset();
}


  return (
    <div className='h-screen lg:flex bg-black text-white'>

        <form onSubmit={(e)=>{ 
          submitHandler(e)
          }
          }
        className='flex items-start p-10 lg:w-1/2'>

            <div className='flex items-start flex-col w-full gap-5 '>

              <input type="text" placeholder='Enter heading' className='px-5 py-2 h-20 border-2 rounded w-full outline-none font-medium'/>
              <textarea type="text" className='px-5 py-2 h-30 border-2 rounded w-full outline-none font-medium' placeholder='start writing ' />
              <button className='bg-white text-black px-5 py-5 rounded w-full font-medium'>Add Notes</button>
            </div>



        </form>

<div className=' p-10 bg-red-600 lg:w-1/2'>
<h1 className='text-3xl font-bold'>All Notes</h1>

<div className='flex flex-wrap  gap-6 mt-5 overflow-auto h-full'>

<div className="h-52 w-40 rounded-2xl bg-white"></div>
<div className="h-52 w-40 rounded-2xl bg-white"></div>
<div className="h-52 w-40 rounded-2xl bg-white"></div>



</div>
</div>



    </div>
  )
}

export default App 