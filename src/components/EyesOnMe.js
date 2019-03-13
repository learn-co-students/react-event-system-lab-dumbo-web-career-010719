// Code EyesOnMe Component Here
// Code Keypad Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

  handleBlur = (event) => {

    console.log('Hey! Eyes on me!')

  };

  handleFocus = (event) => {
    console.log('Good!')
  }

  render() {
    return <button type="password" onBlur={this.handleBlur} onFocus={this.handleFocus}/>
  };

}

export default EyesOnMe
