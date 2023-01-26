import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
// import characters from './data.js'



function App() {
  const [characters, setCharacters] = useState([])
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setCharacters((characters) => {
      return characters.filter((character) =>
        character.id !== id
      )
    })
  }
  return (
    <div className='App' >
      <Nav onSearch={onSearch} />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App
