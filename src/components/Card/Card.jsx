
import styles from './card.module.css';

export default function Card(props) {
   const {name, species, gender, image, onClose} = props;
   return (
   <div className={styles.card}>
      <div className={styles.buttonsDiv}>
      <button className={styles.close} onClick={onClose}>X</button>
      </div>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.contentDiv}>
      <p className={styles.content}>{species}</p>
      <p className={styles.content}>{gender}</p>
      </div>
   </div>
   );
   }
