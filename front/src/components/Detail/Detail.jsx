import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './detail.module.css';

export default function Details (props) {
  
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




 return (
  <div className={styles.detail}>
  <button className={styles.goBack} onClick={handleClick}>Back to home</button>
  {
   character ? (
    <div className={styles.cardContainer}>
       <div className={styles.cardImg}>
      <img src={character.image} alt={character.name} />
     </div>
     <div className={styles.cardContent}>
      <h2>{character.name}</h2>
      <p>Estado: {character.status}</p>
      <p>Especie: {character.specie}</p>
      <p>Genero: {character.gender}</p>
      <p>Origen: {character.origin?.name}</p>
      <p>Ubicación: {character.location?.name}</p>
     </div>
    
    </div>
   ) : ("")
  }
  </div>
 )
}