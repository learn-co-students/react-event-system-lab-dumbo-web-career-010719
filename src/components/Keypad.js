// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

  pass =()=>{
    console.log('Entering password...');
  }

  render(){
    return(
      <div>
        Keypad:
        <input type="password" onKeyUp={this.pass}>
        </input>
      </div>
    )
  }
}

export default Keypad
