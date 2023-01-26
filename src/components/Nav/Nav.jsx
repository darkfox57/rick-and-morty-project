import SearchBar from "../SearchBar/SearchBar"
import styles from './nav.modules.css'

export default function Nav() {
 return (
  <>
  <div className={styles.navContainer}>
   <div>
    <SearchBar
     onSearch={(characterID) => window.alert(characterID)}
    />
   </div>
  </div>
  </>
 )
}


