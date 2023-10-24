import React from 'react';
import './../app.css';
import { Link } from 'react-router-dom'
import AllPlayers from './AllPlayers';
import NewPlayerForm from './NewPlayerForm';
import SinglePlayer from './SinglePlayer';

export default function NavBar() {

    return (
    <div className='nav'>
    <h1 className='site-title'>PUPPY BOWL</h1>
   <ul>
    <li>
    <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/newplayerform'>Create A New Player</Link>
      </li>
      <li>
      <Link to='/singleplayer/1'>More Player Details</Link>
      </li>
    </ul>
    </div>
    )
};