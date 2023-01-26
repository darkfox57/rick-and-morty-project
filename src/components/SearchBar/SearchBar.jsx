import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar (props) {
   const {  onSearch } = props
   const [ search, setSearch ] = useState('')
   const handleInputValue =(event)=>{
      console.log(event.target.value);
      setSearch(event.target.value)
   }

   return(
   <div className={styles.searchBar}>
    <input className={styles.searchInput} name={search} type="text" onChange={handleInputValue}/>
    <button className={styles.searchButton} onClick={()=>{onSearch()}}>Agregar</button>
   </div>
   )
  }
