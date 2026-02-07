import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto '>
      {/* <h1 className='text-2xl text-white underline'>hello three js</h1> */}
      <Navbar />
      <Hero />
    </main>
  )
}

export default App