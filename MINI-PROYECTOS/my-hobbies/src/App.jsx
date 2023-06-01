import React from 'react';
import Read from './components/Read/Read';
import Sports from './components/Sports/Sports';
import Movies from './components/Movies/Movies';
import SongsHeard from './components/SongsHeard/SongsHeard';
import Lenguages from './components/Lenguages/Lenguages';


const App = () => {
  return (
    <div>
      <h1>My Hobbies</h1>
      <Read />
      <Sports />
      <Movies />
      <Lenguages />
      <SongsHeard />
    </div>
  );
}

export default App;
