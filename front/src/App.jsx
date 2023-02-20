import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Favorites from "./components/Favorites/Favorites";
import LoginForm from "./components/LoginForm/LoginForm";
import Nav from "./components/Nav/Nav";
import Social from "./components/Social/Social";
import "./css/normalize.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [successLogin, setSuccessLogin] = useState("");
  let username = "user@rickymorty.com";
  let password = "123asd";
  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
      setSuccessLogin("");
    } else {
      setSuccessLogin("Acceso invalido");
      navigate("/");
    }
  };
  const logOut = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters((characters) => {
      return characters.filter((character) => character.id !== id);
    });
  };
  return (
    <div className="App">
      <Social />
      {location.pathname === "/" ? (
        <div className="animated-bg">
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
        </div>
      ) : (
        ""
      )}
      {location.pathname === "/" ? (
        ""
      ) : (
        <Nav onSearch={onSearch} logOut={logOut} />
      )}
      <Routes>
        <Route
          path="/"
          element={<LoginForm login={login} successLogin={successLogin} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
