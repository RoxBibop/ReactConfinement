import React, { Component } from 'react';
import '../style/login.css'

class Login extends React.Component {

  render(){
    return (
      <div className="login">
        <p>Emargement numérique Simplon</p>
        <div className="button" onClick={this.props.teacher}>Formateur</div>
        <div className="button" onClick={this.props.sign}>Apprenant</div>
      </div>
    );
  }
}

export default Login;
