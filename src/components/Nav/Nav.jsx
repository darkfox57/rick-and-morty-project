import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";


export default function Nav(props) {

 return (
  <div className={styles.navContainer}>
   <div>
    <SearchBar
     onSearch={props.onSearch}
    />
   </div>
  </div>
 )
}


