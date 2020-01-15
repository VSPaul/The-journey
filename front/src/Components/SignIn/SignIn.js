import React from 'react';
import './SignIn.css';
import {Link} from "react-router-dom";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd"
        }
        this.updateEmailField = this.updateEmailField.bind(this);
        this.updatePasswordField = this.updatePasswordField.bind(this);
    }

    updateEmailField(event) {
        this.setState({ email: event.target.value });
    }

    updatePasswordField(event) {
        this.setState({ password: event.target.value });
    }

    submitForm(e) {
        e.preventDefault();
        fetch("/auth/signin",
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state),
          })
          .then(res => res.json())
          .then(
            res => this.setState({ "flash": res.flash, open: true }),
            err => this.setState({ "flash": err.flash, open: true })
          )
      }


    render() {
        return (
            <div>

                <form className='formfields' onSubmit={this.submitForm}>

                    <input className='textfields' value={this.state.email} placeholder="E-mail" onChange={this.updateEmailField} type="email" name="email" />
                    <input className='textfields' value={this.state.password} placeholder="Password" onChange={this.updatePasswordField} type="password" name="password" />
                   <Link to="/Profile"><input className='btn' type="submit" value="Sign In" /></Link>
                <br></br>
                <h5>Press <Link to="/SignUp">here</Link> to register!</h5>
                </form>

            </div>
        )
    }
}

export default SignIn;