// import styles from './detail.module.css'
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Details () {
 const { id } = useParams()
 const navigate = useNavigate()
 const [character, setCharacter] = useState({})
 useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [id]);
const handleClick = () => navigate('/home')

console.log(character);
 return (
  <>
  <button onClick={handleClick}>Back to home</button>
  {
   character ? (
    <div>
     <div>
      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h3>{character.specie}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.origin?.name}</h3>
     </div>
     <div>
      <img src={character.image} alt={character.name} />
     </div>
    </div>
   ) : ("")
  }
  </>
 )
}