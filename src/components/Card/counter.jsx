import React from 'react';

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
   contador: this.state.contador + 1
  })
 }
 render(){
  return(
   <>
   <button onClick={this.onButtonClick}></button>
   <h2>Total: {this.state.contador}</h2>
   </>
  )
 }
}