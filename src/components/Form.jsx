import React from 'react';
import '../style/form.css'
import NewProg from './NewProg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isShow: "new_prog",
      font: faSortDown
    }
    this.click = this.click.bind(this);
  }

  click = ()=> {
    const new_Prog = document.querySelector("#new");
    if(this.state.font == faSortDown)
    {
      this.setState({
        font: faSortUp
      })
    }
    else
    {
      this.setState({
        font: faSortDown
      })
    }
  }
  render(){
    return (
      <div className="form">
        <p className="bjr">Bonjour ...</p>
        <div className="dashboard_T">
          <div className="menu_dash">
            <p id="new">+ Créer une promotion</p>
            <div className="proms">
              <p onClick={this.click}>Mes promotions <FontAwesomeIcon icon={this.state.font}/></p>
              <ul>
                <li>truc</li>
                <li>machin</li>
                <li>bidule</li>
              </ul>
            </div>
            <p className="deconnection">Déconnexion</p>
          </div>
          <div className="dash">
            {(()=> {
              switch (this.state.isShow) {
                case 'new_prog':
                return <NewProg></NewProg>
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
