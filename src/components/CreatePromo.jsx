import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';

class CreatePromo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formDatas : {
        name: "",
        localisation: "",
        start: "",
        end: "",
        users: "",
        exceptions: "",
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.leconsole = this.leconsole.bind(this);
  }


  handleChange(event) {
    const target = event.target,
          value = target.value,
          inputName = target.name;

    this.setState(prevState => ({
      formDatas: {
        ...prevState.formDatas,
        [inputName]: value
      }
    }), this.leconsole);
  }
  
  leconsole () {
    console.log('LECONSOLE')
    console.log(this.state.formDatas)
    this.props.promoData(this.state.formDatas)
    console.log('LECONSOLE')
  }

  render() { 
    return ( 
      <form className="new_Prog">
          <p onClick={this.leconsole}>TEST</p>
          <h2>Nouvelle formation</h2>
          <div className="prog_name">
            <div>
              <label>Nom de la formation :</label>
              <input  type="text" 
                      name="name"
                      placeholder="ex: Ma formation"
                      value={this.state.formDatas.name}
                      onChange={this.handleChange}>
              </input>
            </div>
          </div>
          <div className="prog_name">
            <div>
              <label>Localisation :</label>
              <input  type="text" 
                      name="localisation"
                      placeholder="ex: Calais"
                      value={this.state.formDatas.localisation}
                      onChange={this.handleChange}>
              </input>
            </div>
          </div>
          <div className="dates">
            <div className="debut">
              <label>Début de formation :</label>
              <input  type="date"
                      name="start"
                      value={this.state.formDatas.start}
                      onChange={this.handleChange}
              />
            </div>
            <div className="end">
              <label>Fin de formation :</label>
              <input  type="date"
                      name="end"
                      value={this.state.formDatas.end}
                      onChange={this.handleChange}/>
            </div>
          </div>
          
        </form>
    );
  }
}
  
  export default CreatePromo;