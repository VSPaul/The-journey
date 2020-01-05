import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.updateEmailField=this.updateEmailField.bind(this);
      }

      updateEmailField(event){
        this.setState({value: event.target.value});
      }

  render() {
    return(
    <div>
        <h1 className='title'>SignUp</h1>
        <h1 className='dsp'>{this.state.value}</h1>
        <input className='email' onChange={this.updateEmailField} placeholder="example@gmail.com" type="email" name="email"/>
        
    </div>
    )
  }
}

export default SignUp;