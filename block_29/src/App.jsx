import { useState } from 'react'
import './App.css'
// import { Link, Routes, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'



function App() {

  return (
    <div>
    <NavBar />
      <Routes>
      <Route path='/' element={<AllPlayers />} />
      <Route path='/newplayerform' element={<NewPlayerForm />} />
      <Route path='/singleplayer/:id' element={<SinglePlayer/>} />
    </Routes>
    </div>
  );
} 

export default App 
