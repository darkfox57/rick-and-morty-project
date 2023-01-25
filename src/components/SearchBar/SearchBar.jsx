import styles from './SearchBar.module.css'

export default function SearchBar (props) {
   const {onSearch} = props
   return(
   <div className={styles.searchBar}>
    <input className={styles.searchInput} type="search" />
    <button className={styles.searchButton} onClick={() => onSearch(1)}>Agregar</button>
   </div>
   )
  }
