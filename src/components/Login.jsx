import React, { Component } from 'react';
import '../style/login.css'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      disabled: true,
      valueMail : '',
      valuePassword : '',
    }
    this.verif = this.verif.bind(this);
  }

  verif = () => {
    const password = document.querySelector('#password'),
          mail = document.querySelector('#mail'),
          submit = document.querySelector('#submit'),
          regexMail = /^[^\W][a-zA-Z0-9]+(.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(.[a-zA-Z0-9]+).[a-zA-Z]{2,4}$/,
          regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let verifMail = regexMail.test(this.state.valueMail),
        verifPassword = regexPassword.test(this.state.valuePassword);

    this.setState({
      valueMail:mail.value,
      valuePassword:password.value
    })

    if(verifMail === true && verifPassword === true)
    {
      console.log('cest good');
      this.setState({
        disabled: false
      })
    }

    else
    {
      console.log("c'est pas good");
      this.setState({
        disabled: true
      })
    }
    
    submit.disabled = this.state.disabled;
  }

  render(){
    return (
      <div className="login">

        <p>Emargement numérique Simplon</p>

        <form onSubmit={this.props.submit} className="login">
          <div className="input">
            <label>Votre e-mail:</label>
            <input id="mail" type="email" name="email" onChange={this.verif}></input>
          </div>
          <div className="input">
            <label>Votre mot de passe:</label>
            <input id="password" type="password" name="password" onChange={this.verif}></input>
          </div>
          <input id="submit" disabled type="submit" value="S'enregistrer" onClick={this.props.click}/>
        </form>

        <div className="button" onClick={this.props.teacher}>Formateur</div>
        <div className="button" onClick={this.props.sign}>Apprenant</div>

      </div>
    );
  }
}

export default Login;
