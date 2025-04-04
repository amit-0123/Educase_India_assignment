// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Welcome from './pages/Welcome'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>

    </>
  )
}

export default App
