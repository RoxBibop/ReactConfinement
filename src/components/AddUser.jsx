import React, { Children } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
// import '../style/adduser.css';

class AddUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      delUsers :this.delUsers(),
      addUsers : this.addUsers()
    }
    this.addUsers = this.addUsers.bind(this);
  }
  
    addUsers = () => {
      // Add user with button "+"/ duplicate input : name/lastname/mail
    console.log("coucou");
    let i = 0;
    const formAdduser = document.querySelector("#inputRow");
    const clone = formAdduser.cloneNode(true);
    const cloneId = formAdduser + ++i;
    cloneId.parentNode.appendChild(clone);
    
    return 
  }

    delUsers = () => {
      // delete user 
      console.log("delete");
      return
    }

    infoRegister = () => {
      console.log("bouh");
    }

  
  render() { 
    return ( 
      <div className ="stepperTwo">
          <form>
            <h2>Ajoutez des apprenants</h2>
            <div id="inputRow">
              <input id="name" type="name" value="Nom"/>
              <input id="lastname" type="lastname" value="Prénom"/>
              <input id="email" type="mail" name="email" value="e-mail"/>
              <div className= "button del" onClick={this.delUsers}>-</div>
            </div>
            <div>
              <div className="button add" onClick={this.addUsers}>+</div>
            </div>
          </form>
      </div>
    );
  }
}
  
  export default AddUser;