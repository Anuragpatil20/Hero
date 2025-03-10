import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Heropage from './Pages/Heropage'
import Workpage from './Pages/Workpage'



function App() {
  return (
   <Routes>

       <Route path='' element = {<Navbar/>}/>
       <Route path='/hero' element = {<Heropage/>}/>
       <Route path='/works' element ={<Workpage/>}/>
      
      
       
   
   </Routes>
  )
}

export default App