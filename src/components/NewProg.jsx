import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import CreatePormo from './CreatePromo';
import AddUser from './AddUser'

class NewProg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : true
    }
  }

  render() { 
    return ( 
      <div>
      <AddUser></AddUser>
      
      <div>Suivant</div>
      </div>
    );
  }
}

export default NewProg;