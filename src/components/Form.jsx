import React from 'react';
import '../style/form.css'
import NewProg from './NewProg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import logout from '../res/logoutLogo.png'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isShow: "new_prog",
      font: faSortDown,
      currDate : this.date()
    }
    this.clickUl = this.clickUl.bind(this);
  }

  date = () => {
    let globalDate = new Date(),
        months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"],
        days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        year = globalDate.getFullYear(),
        month = globalDate.getMonth(),
        day = globalDate.getDay(),
        dayNb = globalDate.getDate(),
        hour = this.formatedDate(globalDate.getHours()),
        min = this.formatedDate(globalDate.getMinutes()),
        sec = this.formatedDate(globalDate.getSeconds());
  
    return `Nous sommes le ${days[day]} ${dayNb} ${months[month]} ${year} - ${hour} : ${min} : ${sec}`;
  }

  formatedDate(number) {
    if(number.toString().length < 2){
      return "0"+number;
    }else{
      return number;
    }
  }

  clickUl = ()=> {
    const myProms = document.querySelector("#myProms");
    if(this.state.font == faSortDown)
    {
      this.setState({
        font: faSortUp
      })
      myProms.classList.add('ulAppear')
    }
    else
    {
      this.setState({
        font: faSortDown
      })
      myProms.classList.remove('ulAppear')
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currDate : this.date()})
    }, 1000);
  }

  render(){
    return (
      <div className="form">
        <div className="date bjr">
          <div className="hello">Bonjour --Prénom--.</div>
          {this.state.currDate}
        </div>
        <div className="dashboard_T">
          <div className="menu_dash">
            <p id="new">+ Créer une promotion</p>
            <div className="proms">
              <p onClick={this.clickUl}>Mes promotions <FontAwesomeIcon icon={this.state.font}/></p>
              <ul id="myProms">
                <li>truc</li>
                <li>machin</li>
                <li>bidule</li>
              </ul>
            </div>
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
        <div className="logout" onClick={this.props.logout}>
          <img src={logout} alt="Logo de déconnexion" className="logoutLogo"/>
          <p className="deco">Déconnexion</p>
        </div>
      </div>
    );
  }
}

export default Form;