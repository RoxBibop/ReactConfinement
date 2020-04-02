import React from 'react';
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
        <form onSubmit={this.props.submit}>
          <h2>Connexion</h2>
          <div className="input">
            <input id="mail" type="email" name="email" onChange={this.verif} placeholder="Email"></input>
          </div>
          <div className="input">
            <input placeholder="Mot de passe" id="password" type="password" name="password" onChange={this.verif}></input>
          </div>
          <p id="error"></p>
          <input disabled={this.state.disabled} type="submit" value="Se connecter" onClick={this.props.click}/>
          <div className="btns">
            <div className="button teacher" onClick={this.props.teacher}>Formateur</div>
            <div className="button student" onClick={this.props.sign}>Apprenant</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
