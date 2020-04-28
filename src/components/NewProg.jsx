import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';

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
        <div className="prog_name">
          <label>Nom de la formation</label>
          <input type="text" name="prog_name" placeholder="ex: Ma formation"></input>
        </div>
        <div className="dates">
          <div className="debut">
            <label>Début de formation:</label>
            <input type="date" name="" id=""/>
          </div>
          <div className="end">
            <label>Fin de formation:</label>
            <input type="date" name="" id=""/>
          </div>
        </div>
        <div className="time">
          <div>
            <label>Signature du matin:</label>
            <input type="time" id="" name="" min="09:00" max="12:00"></input>
            <input type="time" id="" name="" min="09:00" max="12:00"></input>
          </div>
          <div>
            <label>Signature de l'après-midi:</label>
            <input type="time" id="" name="" min="13:00" max="17:00"></input>
            <input type="time" id="" name="" min="13:00" max="17:00"></input>
          </div>
        </div>
        <input type="submit"></input>
      </form>
    );
  }
}

export default NewProg;