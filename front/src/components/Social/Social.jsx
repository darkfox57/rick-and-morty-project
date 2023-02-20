import React from 'react'
import { Link } from "react-router-dom"
import github from './icons/github.webp'
import instagram from './icons/instagram.webp'
import linkedin from './icons/linkedin.webp'
import twitch from './icons/twitch.webp'
import twitter from './icons/twitter.webp'
import styles from './social.module.css'

 const Social = () => {
  return (
    <div className={styles.socialContent} >
     <ul className={styles.iconsList}>
      <li className={styles.icon}>
       <Link to='https://github.com/darkfox57/rick-and-morty-project' target='_blank' >
       <img src={github} alt="github" />
       </Link>
      </li>
      <li className={styles.icon}>
      <Link to='https://www.linkedin.com/in/andrespintonoguera/' target='_blank' >
       <img src={linkedin} alt="linkedin" />
       </Link>
      </li>
      <li className={styles.icon}>
      <Link to='https://www.instagram.com/andres.pinto.n/' target='_blank' >
       <img src={instagram} alt="instagram" />
       </Link>
      </li>
      <li className={styles.icon}>
      <Link to='https://twitter.com/andrespinto57' target='_blank' >
       <img src={twitter} alt="twitter" />
       </Link>
      </li>
      <li className={styles.icon}>
      <Link to='https://www.twitch.tv/darkfoxgames' target='_blank' >
       <img src={twitch} alt="twitch" />
       </Link>
      </li>
     </ul>
    </div>
  )
}

export default Social