import React from 'react';
import styles from './card.module.css';

export default class Contador extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   contador: this.props.numero,
  }
  // this.onButtonClick = this.onButtonClick.bind(this)
 }
 onButtonClick = () => {
  console.log('this', this)
  this.setState({
   contador: this.state.contador +1
  })
 }
 render(){
  return(
   <div className={styles.counter}>
   <button onClick={this.onButtonClick}>❤</button>
   <span>{this.state.contador}</span>
   </div>
  )
 }
}