import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from "./components/Form/Form";
import Nav from './components/Nav/Nav';


function App() {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [success, setSuccess] = useState('')
  let username = 'user@rickymorty.com'
  let password = '123asd'
  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true)
      navigate('/home')
      setSuccess('')
    } else {
      setSuccess('Acceso invalido')
    }
  }
  const logOut = () => {
    setAccess(false)
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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
      {location.pathname === '/' ? (
        ''
      ) : (
        <Nav onSearch={onSearch} logOut={logOut} />
      )}
      <Routes>
        <Route path='/' element={<Form login={login} success={success} />}>Form</Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} >Home</Route>
        <Route path='/about' element={<About />} >About</Route>
        <Route path='/detail/:id' element={<Detail />} >Detail</Route>
      </Routes>
    </div>
  )
}

export default App
