import React, { Children } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
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

  change(e, index) {
    this.state.inputs[index] = e.target.value;

    this.setState({inputs: this.state.inputs})
  }

  deleteUser (index) {
    this.state.inputs.splice(index, 1);

    this.setState({inputs: this.state.inputs})
  }
  
  render () { 
    return ( 
      <div className ="stepperTwo">
        {
          this.state.inputs.map((inp, index)=>{
            return (
              <div className="inputs" key={index}>
                <div>
                  <label>Nom :</label>
                  <input onChange={(e) => this.change(e, index)} id="name" type="name" value={inp}/>
                </div>
                <div>
                  <label>Prénom :</label>
                  <input onChange={(e) => this.change(e, index)} id="lastname" type="lastname" value={inp}/>
                </div>
                <div>
                  <label>Mail :</label>
                  <input onChange={(e) => this.change(e, index)} id="email" type="mail" name="email" value={inp}/>
                </div>
                <p className="trash">
                  <FontAwesomeIcon onClick={() => this.deleteUser(index)} icon={faTrash}/>
                </p>
              </div>
            )
          })
        }
        <p>
          <FontAwesomeIcon className="btnAdd" onClick={(e) => this.addUser(e)} icon={faPlus}/>
        </p>
      </div>
    );
  }
}
  
  export default AddUser;