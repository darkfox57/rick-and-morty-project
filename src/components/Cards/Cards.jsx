import Card from "../Card/Card";
import styles from './Cards.module.css';

export default function Cards(props) {
 const {characters, onClose} = props
 return (
  <div className={styles.cards}>
    {characters.map((char, index) => (
        <Card
          key={index}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
  </div>
 )
}


