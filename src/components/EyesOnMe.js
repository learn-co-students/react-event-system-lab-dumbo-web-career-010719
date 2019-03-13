// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  focusHandler = () => {
    console.log("Good!")
  }

  blurHandler = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return(
      <button onFocus={this.focusHandler} onBlur={this.blurHandler}>THE BUTTON</button>
    )
  }
}

export default EyesOnMe;
