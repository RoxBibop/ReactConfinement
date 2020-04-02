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
          errorMail = document.querySelector('#errorMail'),
          errorPassword = document.querySelector('#errorPassword'),
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
      this.setState({
        disabled: false
      })
    }
    if(verifMail === false && verifPassword === false)
    {
      this.setState({
        disabled: true
      })
    }
    if(verifMail === true)
    {
      errorMail.innerHTML ="Votre email est correct";
      errorMail.style.color = "#22A742";
    }
    if(verifMail === false)
    {
      errorMail.innerHTML ="Vérifiez bien votre email";
      errorMail.style.color = "#BD242E";
    }
    if(verifPassword === true)
    {
      errorPassword.innerHTML ="Votre mot de passe est correct";
      errorPassword.style.color = "#22A742";
    }
    if(verifPassword === false)
    {
      errorPassword.innerHTML ="Votre mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial";
      errorPassword.style.color = "#BD242E";
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
            <p id="errorMail"></p>
          </div>
          <div className="input">
            <label>Votre mot de passe:</label>
            <input id="password" type="password" name="password" onChange={this.verif}></input>
            <p id="errorPassword"></p>
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
