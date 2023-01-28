
import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";

export default function Nav(props) {
  const {logOut} = props
 return (
  <div className={styles.navContainer}>
   <div>
    <SearchBar
     onSearch={props.onSearch}
    />
   </div>
   <ul className={styles.nav}>
    <li className={styles.navItem}>
    <NavLink to='/home'>Home</NavLink>
    </li>
    <li className={styles.navItem}>
     <NavLink to='/about'>About</NavLink>
     </li>
   </ul>
   <button className={styles.logOut} onClick={logOut}>LogOut</button>
  </div>
 )
}


