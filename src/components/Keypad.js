// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
    keyUpHandle = () => {
        console.log("Entering password...")
    };
  render() {
    return <input type="password" onKeyUp={this.keyUpHandle} />
  }
}

export default Keypad
