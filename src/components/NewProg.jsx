import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import CreatePromo from './CreatePromo';
import AddUser from './AddUser';

class NewProg extends React.Component {
  constructor(props) {
    super(props);
    this.stepper = 1;
    this.state = {
      loading : true,
      currentStepper : this.stepper,
      total: 2,
      nextHidden: false,
      previousHidden: true,
      saveHidden: true,
    }
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
  }
  
  clickNext()
  {
    this.stepper ++
    this.setState({
      currentStepper: this.stepper
    })
    switch (this.stepper){
      case 2:
      this.setState({
        nextHidden: true,
        previousHidden: false,
        saveHidden: false,
      })
      break
    }
  }

  clickPrevious()
  {
    this.stepper --
    this.setState({
      currentStepper: this.stepper
    })
    switch (this.stepper){
      case 1:
      this.setState({
        nextHidden: false,
        previousHidden: true,
        saveHidden: true,
      })
      break
    }
  }

  clickSave()
  {
    // send json with POST
  }

  render() { 
    return ( 
      <div className="formContainer">
        {(()=> {
          switch (this.state.currentStepper) {
            case 1 :
            return <CreatePromo></CreatePromo>
            case 2 :
            return <AddUser></AddUser>
          }
        })()}
        <div className="btnsForm">
          <button id="next" hidden={this.state.nextHidden} onClick={this.clickNext}>Suivant</button>
          <button id="previous" hidden={this.state.previousHidden} onClick={this.clickPrevious}>Précédent</button>
          <button id="save" hidden={this.state.saveHidden} onClick={this.clickSave}>Enregistrer</button>
        </div>
      </div>
    );
  }
}

export default NewProg;