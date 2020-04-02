import React from 'react';
import Login from './Login.jsx'
import Sign from './Sign.jsx'
import Form from './form.jsx'

import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow : "login" };
  }

  toggleTeacher = () => {
    this.setState(state => ({ isShow: "teach"}));
  }

  toggleSign = () => {
    this.setState(state => ({ isShow: "sign"}));
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
              return <Sign/>;
          }
        })()}
      </div>
    );
  }
}

export default App;