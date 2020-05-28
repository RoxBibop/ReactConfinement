import React from 'react';
import Login from './Login.jsx'
import Sign from './Sign.jsx'
import Form from './Form.jsx'
import SignHisto from './SignHisto.jsx'

import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow : "login" ,
      role : ""
    };
  }

  callbackFunction = (childData) => {
    this.setState({role: childData})
    if(this.state.role.includes('ROLE_ADMIN')) {
      this.setState({isShow: "teach"})
    }else if (!this.state.role.includes('ROLE_USER')){
      this.setState({isShow: "login"})
    }else {
      this.setState({isShow: "sign"})
    }
  }

  toggleTeacher = () => {
    this.setState(state => ({ isShow: "teach"}));
  }

  toggleSign = () => {
    this.setState(state => ({ isShow: "sign"}));
  }

  closeSign = () => {
    this.setState(state => ({ isShow: "login"}));
  }

  signHisto = () => {
    this.setState(state => ({ isShow: "signHisto"}));
  }
  render() {
    return (
      <div className="app">
        {(() => {
          switch(this.state.isShow){
            case 'login':
              return <Login teacher={this.toggleTeacher} sign={this.toggleSign} callback={this.callbackFunction}/>;
            case 'teach' :
              return <Form logout={this.closeSign}/>;
            case 'sign' : 
              return <Sign logout={this.closeSign} signhisto={this.signHisto}/>;
            case 'signHisto' : 
              return <SignHisto logout={this.closeSign} back={this.toggleSign}/>;
          }
        })()}
      </div>
    );
  }
}

export default App;