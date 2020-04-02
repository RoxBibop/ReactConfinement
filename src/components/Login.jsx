import React, { Component } from 'react';
import '../style/login.css'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      disabled: true,
    }
    this.verif = this.verif.bind(this);
  }

  verif = () => {
    const password = document.querySelector('#password'),
    mail = document.querySelector('#mail'),
    error = document.querySelector('#error'),
    regexMail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/,
    regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    let verifMail = regexMail.test(mail.value),
    verifPassword = regexPassword.test(password.value);
    
    console.log("change");

    if(verifMail === true && verifPassword === true)
    {
      this.setState({
        disabled: false
      })
      error.innerHTML ="";
    }
    if(verifMail === false || verifPassword === false)
    {
      this.setState({
        disabled: true
      })
      error.innerHTML ="Vérifiez bien votre email ou votre mot de passe";
      error.style.color = "#BD242E";
    }
  }

  render(){
    return (
      <div className="login">

        <p>Emargement numérique Simplon</p>

        <form onSubmit={this.props.submit} className="login">
          <p id="error"></p>
          <div className="input">
            <label>Votre e-mail:</label>
            <input id="mail" type="email" name="email" onChange={this.verif}></input>
          </div>
          <div className="input">
            <label>Votre mot de passe (doit contenir au moins une majuscule, un chiffre et un caractère spécial):</label>
            <input id="password" type="password" name="password" onChange={this.verif}></input>
          </div>
          <input disabled={this.state.disabled} type="submit" value="S'enregistrer" onClick={this.props.click}/>
        </form>

        <div className="button" onClick={this.props.teacher}>Formateur</div>
        <div className="button" onClick={this.props.sign}>Apprenant</div>

      </div>
    );
  }
}

export default Login;
