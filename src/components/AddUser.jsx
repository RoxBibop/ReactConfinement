import React, { Children } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
// import '../style/adduser.css';

class AddUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputs : [],
    }
  }

  addUser () {
    this.setState({inputs: [...this.state.inputs, ""]})
  }



  
  render () { 
    return ( 
      <div className ="stepperTwo">
        {
          this.state.inputs.map((inp, index)=>{
            return (
              <div key={index}>
                <input></input>
                <input></input> 
              </div>
            )
          })
        }
        <p onClick={(e) => this.addUser(e)}>AJOUTER</p>
      </div>
    );
  }
}
  
  export default AddUser;