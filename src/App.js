import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';



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
      <Routes>
        <Route path='/about' element={<About />} >About</Route>
        {/* <Route path='/cards' element={<Cards />} >Cards</Route> */}
        <Route path='/nav' element={<Nav />} >Nav</Route>
      </Routes>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App
