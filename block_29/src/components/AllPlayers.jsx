import React, { useState, useEffect } from 'react';
import { useGetPuppiesQuery } from '../API/puppyApi'; 
import './../app.css';


export default function AllPlayers() {
 const [players, setPlayers] = useState([]);

 const { data ={}, error, isLoading } = useGetPuppiesQuery();
 console.log(data);


useEffect(() => {
    if (data && data.data && Array.isArray(data.data.players)) {
        setPlayers(data.data.players);
    }
}, [data]);

if (isLoading) {
    return <h1>...loading</h1>;
}
if (error) {
    return <h1>Error</h1>;
}

    return (
    <div className='players'>
       <h3 className='intro'>Here are our current players!</h3>
        {data.data.players.map(player => (
            <div key={player.id}
            className='player-card'>
                <img className='player-image'
                src={player.imageUrl} alt={player.name}/>
                <div className="player-details">
                <h4>Name: {player.name}</h4>
                <p>Breed: {player.breed}</p>
                <p>Status: {player.status}</p>
            </div>
            </div>
        ))}
        

    </div>
    );
};