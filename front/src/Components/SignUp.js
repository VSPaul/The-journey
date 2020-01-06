import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            firstName: "James",
            lastName: "Bond"

            // email: "",
            // password: "",
            // irstName: "",
            // lastName: ""
    };

        
        this.updateEmailField=this.updateEmailField.bind(this);
        this.updatePasswordField=this.updatePasswordField.bind(this);
        this.updateFirstNameField=this.updateFirstNameField.bind(this);
        this.updateLastNameField=this.updateLastNameField.bind(this);
        this.submitForm = this.submitForm.bind(this);
}
    


      updateEmailField(event){
        this.setState({email: event.target.value});
      }

        updatePasswordField(event){
          this.setState({password: event.target.value});
        }

      updateFirstNameField(event){
        this.setState({firstName: event.target.value});
      }

      updateLastNameField(event){
        this.setState({lastName: event.target.value});
      }


      submitForm(e) {
        e.preventDefault();
        JSON.stringify(this.state,1,1)
        console.log(JSON.stringify(this.state,1,1))
        }



  render() {
    return(
    <div>
        <h1 className='title'>{this.state.lastName===''? 'SignUp': 'Hello, ' + this.state.lastName}</h1>
        {/* <h1 className='dsp'> Hello, {this.state.lastName}</h1> */}
        <form className='formfields' onSubmit={this.submitForm}>
            <input className='textfields' value={this.state.email} placeholder="E-mail" onChange={this.updateEmailField} type="email" name="email"/>
            <input className='textfields' value={this.state.password} placeholder="Password" onChange={this.updatePasswordField} type="password" name="password"/>
            <input className='textfields' value={this.state.password} placeholder="Confirm Password" onChange={this.updatePasswordField} type="password" name="password"/>
            <input className='textfields' value={this.state.firstName} placeholder="First Name" onChange={this.updateFirstNameField} type="firstName" name="firstName"/>
            <input className='textfields' value={this.state.lastName} placeholder="Last Name" onChange={this.updateLastNameField} type="lastName" name="lastName"/>
            <input className='btn'   type="submit" value="Submit"/>
        </form>

    </div>
    )
  }
}

export default SignUp;