import './App.css'
import React, { useEffect, useState } from "react";
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Title from './components/Title/Title';

function App() {

  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      <Header>
        <Title></Title>
      </Header>
      <Main>
        {characterList.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </Main>
    </>
  )
}

export default App
