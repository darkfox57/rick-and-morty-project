// import styles from './about.modules.css'
import React from 'react'
import andres from '../../assets/andres-pinto.webp'
import styles from './about.module.css'

export default function About() {
 return (
  <div className={styles.container}>
  <div className={styles.aboutContainer}>
  <h2>About Me</h2>
  <div className={styles.profile}>
   <div className={styles.profileContent}>
    <p>💻 Soy Andrés, Desarrollador y diseñador web autodidacta con pasión por el posicionamiento web, el marketing digital y el comercio electrónico. Tengo habilidades en tecnologías como HTML, CSS, JavaScript, React, PHP, MySQL, entre otros. Además, tengo experiencia en herramientas como WordPress, Prestashop, Shopify, Mailchimp, Search Console, Tag Manager, Analytics, Schema, Moz, Semrush, Google Ads y Merchant Center. También tengo conocimientos en Plesk, WHM y Cloudflare. Aún con mucho por aprender y camino que recorrer</p>
    <p>
    🎮 Soy un Gamer apasionado desde la beta , especialmente de shooter tácticos, MMORPG y juegos competitivos. Adoro una buena historia en un juego, pero mi verdadera pasión es la competición y el rankeo. Conocido como DarkFox en los bajos mundos de algunos juegos.</p>
<p>
🎬 Soy fanático de Breaking bad, Mr. Robot, Game of Thrones y del buen cine, pero mi verdadera pasión es Star Wars {`(amor infinito a Asohka Tano)`}. Aunque no soy un gran lector, he leído Sherlock Holmes al menos tres veces y la Canción de Hielo y Fuego.</p>
<p>
🎧 En cuanto a la música, soy un amante del buen rock 🤘, la electrónica, el jazz, el country, el rap, la salsa y la música protesta. Sin embargo, mi corazón siempre pertenecerá al punk.</p>
   </div>
   <div className={styles.profileImg}>
   <img src={andres} alt="Andrés Pinto" />
   <h2>Andrés Pinto</h2>
   <code>DarkFox</code>
   </div>
   </div>

<div class={styles.aboutProjetc}>
    <h2>About this project.</h2>
    <p>Este proyecto es una Single Page App {`(SPA)`} desarrollada en React, Html, Css y Javascript donde se aplicaron herramientas como React-Router, Redux, Hooks, Styled Modules, entre otras.</p>
    <p>La página funciona de la siguiente manera:</p>
    <ul>
      <li>Te diríges al search y pones un "ID" que puede ser un numero entre el 1 y el 826, luego pulsas "Agregar" para que te renderice la tarjeta de cada personaje, la cual podras añadir a favoritos o dar click en el nombre para ver sus detalles o eliminarla dandole a la x para que te la borre del listado de cards que haz buscado.</li>
      <li>Puedes seguir agregando las "Cards" que desées y jugando con ellas .</li>
      <li>Puedes navegar en "Details Cards", donde encontrarás mas información detallada sobre las "Cards" y en "About We" , que ésta última es dónde te encuentras..</li>
    </ul>
</div>
  </div>
  </div>
 )
}

