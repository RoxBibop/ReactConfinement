import React, { Children } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// import '../style/adduser.css';

class AddUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputs : [{ index: Math.random(), userName: "", userLastName: "", userMail: ""}],
    }
  }

  addUser () {
    this.setState((prevState) => ({
      inputs: [...prevState.inputs, {index: Math.random(), userName: "", userLastName: "", userMail: ""}]
    }));
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
            let userName = `username${index}`, 
                userLastName = `userlast${index}`,
                userMail = `usermail${index}`;

            return (
              <div className="inputs" key={index}>
                <span className="num">{index + 1}</span>
                <div className="inputContainer">
                  <div>
                    <label>Nom :</label>
                    <input type="text" name="username" data-id={index} id={userName}/>
                  </div>
                  <div>
                    <label>Prénom :</label>
                    <input type="text" name="userlast" data-id={index} id={userLastName}/>
                  </div>
                  <div>
                    <label>Mail :</label>
                    <input type="text" name="usermail" data-id={index} id={userMail}/>
                  </div>
                </div>
                <p className="trash">
                  <FontAwesomeIcon onClick={() => this.deleteUser(index)} icon={faTrash}/>
                </p>
              </div>
            )
          })
        }
        <FontAwesomeIcon className="btnAdd" onClick={(e) => this.addUser(e)} icon={faPlus}/>
      </div>
    );
  }
}
  
  export default AddUser;