import Card from "../Card/Card"
import styles from './Cards.module.css'

export default function Cards(props) {
 const {characters} = props
 return (
  <div className={styles.cards}>
   {characters.map(element => 
    <Card name = {element.name} species = {element.species} gender = {element.gender} image = {element.image} onClose = {() => window.alert('Emulamos que se cierra la card')}/>
    )}
  </div>
 )
}
