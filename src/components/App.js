import React from 'react';
import Login from './Login.jsx'
import Sign from './Sign.jsx'
import Form from './Form.jsx'
import SignHisto from './SignHisto.jsx'

import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow : "teach" };
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
              return <Login teacher={this.toggleTeacher} sign={this.toggleSign}/>;
            case 'teach' :
              return <Form/>;
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