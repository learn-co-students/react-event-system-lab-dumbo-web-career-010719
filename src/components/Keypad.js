// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  handleKeyUp = () => {
    console.log("Entering password...");
  }

  render(){
    return (
      <form>
        <label>Password:</label>
        <input type="password" onKeyUp={ this.handleKeyUp } />
      </form>
    )
  }
}

export default Keypad
