
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import burgerMenu from '../../assets/bars-staggered-solid.webp';
import logo from '../../assets/rick-and-morty-logo.webp';
import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";

export default function Nav(props) {
  const {logOut} = props
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  }, [])
 return (

  <div className={styles.navContainer}>
    <Link to='/home'>
    <img src={logo} alt="Rick And Morty" />
    </Link>
    <SearchBar
     onSearch={props.onSearch}
    />
    {(toggleMenu || screenWidth > 800) && (
   <ul className={styles.nav}>
    <li className={styles.navItem}>
    <NavLink to='/home'>Home</NavLink>
    </li>
    <li className={styles.navItem}>
     <NavLink to='/about'>About</NavLink>
     </li>
     <li className={styles.navItem}>
      <NavLink to='/favorites'>Favorites</NavLink>
     </li>
     <li>
   <button className={`${styles.logOut} ${styles.navItem}`} onClick={logOut}>LogOut</button>
     </li>
   </ul>
   )}
   <button onClick={toggleNav} className={styles.toggle}><img src={burgerMenu} alt="Rick And Morty" /></button>
  </div>
 )
}


