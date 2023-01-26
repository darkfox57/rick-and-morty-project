import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
// import characters from './data.js'



function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = () => {
    setCharacters(
      ...characters,
      {
        name: 'Morty Smith',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      }
    )
  }
  const onClose = () => window.alert('Emulamos que se cierra la card')
  return (
    console.log(characters),
    <div className='App' >
      <Nav onSearch={onSearch} />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App
