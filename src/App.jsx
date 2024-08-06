import React from 'react'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { View } from './components/View'
import Navbar from './components/Navbar'
import SwiperSlider from './components/SwiperSlide'
import Cards from './components/Cards'
import Auth from './components/Auth'
import Authenticate from './components/Authenticate'
import UserAuthContextProvider from './context/Authcontext'
import Phonesign from './components/Phonesign'
import PhoneSignUp from './components/PhoneNum'

const App = () => {
  return (
    <div>
    <UserAuthContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        {/* <Route path='/' element={<Auth/>} /> */}
        <Route path='/phone' element={<Authenticate/>} />
        <Route path='/' element={<Phonesign/>} />
        <Route path='/phoneSignUp' element={<PhoneSignUp/>} />
        {/* <Route path='cards' element={<Cards/>} /> */}

        {/* <Route path='/view/:serviceName' element={<View/>} /> */}

      </Routes>
    </BrowserRouter>
    </UserAuthContextProvider>
    </div>
  )
}

export default App