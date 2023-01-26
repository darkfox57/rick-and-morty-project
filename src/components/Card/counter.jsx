import React, { useState } from 'react';
import styles from './card.module.css';


function ShowCount(props) {
 return(
     <>
     <span>{props.count}</span>
     </>
 )
}

export default function Counter(props) {
 const [ count, setCount ] = useState(props.count);
 const handleClick =() => {
 setCount(count + 1 )
 }

 return(
     <div className={styles.counter}>
     <button onClick={handleClick}>❤</button>
     <ShowCount count={count} />
     </div>
 )
}



