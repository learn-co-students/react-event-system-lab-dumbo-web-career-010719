// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
  blurHandler = () => {
    console.log('Hey! Eyes on me!')
  }

  focusHandler = () => {
    console.log('Good!')
  }
  render() {
    return(
      <button onBlur={this.blurHandler} onFocus={this.focusHandler}>button</button>
    )
  }
}



export default EyesOnMe;
