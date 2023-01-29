
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/rick-and-morty-logo.webp';
import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";

export default function Nav(props) {
  const {logOut} = props
 return (

  <div className={styles.navContainer}>
    <Link to='/home'>
    <img src={logo} alt="Rick And Morty" />
    </Link>
    <SearchBar
     onSearch={props.onSearch}
    />
   <ul className={styles.nav}>
    <li className={styles.navItem}>
    <NavLink to='/home'>Home</NavLink>
    </li>
    <li className={styles.navItem}>
     <NavLink to='/about'>About</NavLink>
     </li>
     <li>
   <button className={styles.logOut} onClick={logOut}>LogOut</button>
     </li>
   </ul>
  </div>
 )
}


