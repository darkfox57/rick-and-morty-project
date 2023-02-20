import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from '../../redux/actions/actions';
import Card from "../Card/Card";
import styles from './favorites.module.css';


export default function Favorites (props){
 const dispatch = useDispatch()
 const myFavorites = useSelector((state) => state.myFavorites)
 const selectOptions = [
  {
    id: 1,
    value: "Ascendent",
    label: "Ascendent",
  },
  {
    id: 2,
    value: "Descendent",
    label: "Descendent",
  },
];

const selectGender = [
 {
   id: 1,
   value: "Male",
   label: "Male",
 },
 {
   id: 2,
   value: "Female",
   label: "Female",
 },
 {
   id: 3,
   value: "unknown",
   label: "unknown",
 },
 {
   id: 4,
   value: "Genderless",
   label: "Genderless",
 },
];

const handleClick = (e) => {
 e.preventDefault()
 const {value, name } = e.target
 if(name === 'filter') {
  return dispatch(filterCards(value))
 }
 if (name === 'order') {
  return dispatch(orderCards(value))
 }
}


 return (
  <div className={styles.favorites}>
   <div className={styles.selectors}>
     <select className={styles.selector} onChange={handleClick} defaultValue={'default'} name='order'>
      <option value="default" disabled>Select option ...</option>
      {selectOptions.map((element)=> (
       <option key={element.id} value={element.value}>
        {element.label}
       </option>
      ))}
     </select>
     <select className={styles.selector} onChange={handleClick} defaultValue={'default'} name='filter'>
      <option value="default" disabled>Select gender ...</option>
      {selectGender.map((element)=>(
       <option key={element.id} value={element.value}>
        {element.label}
       </option>
      ))}
     </select>
    </div>
    <div className={styles.cards}>
     {myFavorites?.map((char, index)=>(
      <Card 
      key={index}
      id={char.id}
      name={char.name}
      species={char.species}
      gender={char.gender}
      image={char.image}
      onClose={() => props.onClose(char.id)}
      />
     ))}
    </div>
  </div>
 )
}