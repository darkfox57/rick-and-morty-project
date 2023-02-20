
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addFavoriteCharacter, deleteFavoriteCharacter } from "../../redux/actions/actions";
// import Counter from '../Counter/Counter';
import styles from './card.module.css';

export default function Card(props) {
   const {id, name, species, gender, image, onClose} = props;
   const [isFav, setIsFav] = useState(false)
   const myFavorites = useSelector((state) => state.myFavorites)
   const dispatch = useDispatch()

   const handleFavorite = (props) => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavoriteCharacter(props.id));
      } else {
         setIsFav(true);
         dispatch(addFavoriteCharacter(props));
      }
    };

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myFavorites]);
      

   return (
   <div className={styles.card}>
      <div className={styles.buttonsDiv}>
         {/* <Counter count={0}/> */}
         {isFav ? (
            <button onClick={() => handleFavorite(props)}>❤️</button>
         ) : (
            <button onClick={() => handleFavorite(props)}>🤍</button>
         )}

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
