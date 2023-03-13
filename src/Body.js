import React from 'react';
import './Body.css';
import Header from './Header';

function Body( {spotify} ) {
  return (
    <div className='body'>
        <Header spotify={spotify} />

        <div>
          <h1>Trending</h1>
        </div>
        <div className='body_info'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/4/4d/On_Top_of_The_World.JPG'
          alt='On top of the world' width={250} height={250} />
          <div className='body_infoText'>
          <strong>My PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>discover_weekly?.description</p>
          </div>
        </div>
    </div>
  )
}

export default Body;
