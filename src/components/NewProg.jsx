import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { DateTimePicker } from 'react-widgets'

class NewProg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() { 

    return ( 
      <form className="new_Prog">
        <h2>Nouvelle formation</h2>
        <input type="text" name="prog_name" placeholder="Nom de la formation"></input>
        <div className="dates">
          <div className="debut">
            <label>Début de formation:</label>
            <input type="date" name="" id=""/>
          </div>
          <div className="end">
            <label>Fin de formation:</label>
            <input type="date" name="" id=""/>
          </div>
          <div className=""></div>
        </div>
      </form>
    );
  }
}

export default NewProg;