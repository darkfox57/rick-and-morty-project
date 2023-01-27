import { useState } from 'react'
import styles from './SearchBar.module.css'


export default function SearchBar (props) {
   const {  onSearch } = props
   const [ search, setSearch ] = useState('')
   const handleInputValue =(event)=>{
      setSearch(event.target.value)
   }
   const handleSumbit =(e)=>{
      e.preventDefault()
      if(Object.keys(search).length) {
         e.target.reset()
      }
   }
   return(
      <form onSubmit={handleSumbit} className={styles.searchBar} >
         <input className={styles.searchInput} placeholder='Busca tu personaje con el ID' name={search} type="text" onChange={handleInputValue}/>
         <button className={styles.searchButton} type='submit' onClick={()=>{onSearch(search)}}>Agregar</button>
      </form>

   )
  }
