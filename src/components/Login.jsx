import React from 'react';
import '../style/login.css';
import simplon from '../res/simplon.png';
import jwt from 'jwt-decode';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      email : "",
      password : "",
      loginError : "",
      disabled: true,
      role : ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const url = 'https://ancient-journey-28500.herokuapp.com/authentication_token';
      let result = await fetch(url, {
        method : 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-type': 'application/json',
        },
        body:  JSON.stringify({
          "email": email,
          "password": password
        })
      }).then( (res) => {
        console.log('response: ', res);

        return res.json();
      }).then( (result) =>{
        const user = jwt(result.token);
        console.log(user);
        this.setState({
          role : user.roles
        })
      });

    } catch(e) {
      console.log("%c ERROR :", "color : red; font-size:20px;")
      console.log(e);
    }

    this.props.callback(this.state.role)
  }

  render(){
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h2>Connexion</h2>
          <div className="input">
            <input 
              id="mail" 
              type="email"
              name="email" 
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              required>
            </input>
          </div>
          <div className="input">
            <input 
              placeholder="Mot de passe"
              id="password"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              required>
            </input>
          </div>
          <p id="error"></p>
          <input type="submit" value="Se connecter"/>
          <div className="btns">
            <div className="button teacher" onClick={this.props.teacher}>Formateur</div>
            <div className="button student" onClick={this.props.sign}>Apprenant</div>
          </div>
        </form>
        <img src={simplon} alt="logo Simplon" className="logoSimplon"/>
      </div>
    );
  }
}

export default Login;


// 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTA1ODY1MjMsImV4cCI6MTU5MDU5MDEyMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIn0.fxI-fH6aE_LZRB10pfl085aP3OCK8eMct7gX8vu9viGSE9JoyTHx0V2T9btGwp6qlRYC2zVn7IN1Jn5SZCQFsuZeELrNkGHjAs7zabvMwjUUZNdU-uDxsf8flBopcHzL0cy2D4qZ6E5sdmbpc_jeDD5QDSL5zvJ88SJRWN6wrtVBH1lrwpj7JJ5gvFzrzAtypmE5fDW-0e8hKxsywYj_1NOe1RslvQQIHNLnowF2wHoB3yD6t-rSpP8wAGpwnckAQxOuHkPF-7XHdaHLAg6qT6Idpc5igVpmb3H83x3YfGgi2E2NSlFec-qizOwA2Ypz95m0uJcOmwaVOSsSYaqCVPd6cblExC5Y0FDjJy3lreS8nCIz87jB1QQf40zTdRzm4-a9MZDtXJaIXFLG3cIU1C1lsIULK1GxkV5H3bHqvNoplZhiDzXhh9SBJKs7IQrEDYzT7J8sLudCPU3I1R-4boYOJk9HAYCaCP3oeGyc6RfTom1AKfX5WKg1YE6FAA85kbrRF9ojvEY3-xleQlC6EYbKLo9cFIX4uhu9XpHsUIwlimICrMpMW7PmhbOltOvdSxTYdv_goU9h10Qnj1LV_oVnZYjKTpc2qQ9KsvOgOIHX2Gkf5ehpnjSi1BJLoqRZZXRinvkjBVMdVRBlCLtPCMcfP2-JsUm9So3puJ_mo2Q',