import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className="max-w-screen">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
