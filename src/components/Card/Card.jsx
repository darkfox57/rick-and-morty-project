
import React from "react";
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import styles from './card.module.css';

export default function Card(props) {
   const {id, name, species, gender, image, onClose} = props;
   
   return (
   <div className={styles.card}>
      <div className={styles.buttonsDiv}>
         <Counter count={0}/>
         <button className={styles.close} onClick={onClose}>X</button>
      </div>
      <img src={image} alt={name} className={styles.image} />
      <Link to={`/detail/${id}`} >
      <h2 className={styles.title}>{name}</h2>
      </Link>
      <div className={styles.contentDiv}>
      <p className={styles.content}>{species}</p>
      <p className={styles.content}>{gender}</p>
      </div>
   </div>
   );
   }
