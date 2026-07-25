import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
    <nav className='bg-purple-300 text-white '>
<ul className='flex gap-40'>
  <li className='hover:bg-sky-700'>home</li>
    <li className='dark:md:hover:bg-fuchsia-600'>about</li>
      <li className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 '>login</li>
</ul>
    </nav>

    <main className="flex-1 flex justify-center items-center" >
         <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, aliquid.</h1>
      </main>

<footer className='bg-amber-600 text-white p-4'>
    <h2>hello world</h2>
</footer>
   
</div>
  )
}

export default App