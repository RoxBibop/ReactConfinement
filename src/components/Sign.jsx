import React from 'react';
import SignatureCanvas from 'react-signature-canvas'
import '../style/sign.css'
import logout from '../res/logoutLogo.png'

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currDate : this.date() };
    this.trim = this.trim.bind(this);
  }

  state = { trimmedDataURL: null }

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }

  async trim(){
    try {
      var url = "https://ancient-journey-28500.herokuapp.com/api/presences";
      var result = await fetch(url, {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "date": this.state.currDate,
          "signature": this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
          "user": ""
        })
      });
      console.log(result)
    } catch (e) {
      console.log(e)
    }
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

  componentDidMount() {
    setInterval(() => {
      this.setState({ currDate : this.date()})
    }, 1000);
  }
  
  render() {   
    const { trimmedDataURL } = this.state;
    return (
      <div className="sign">
        <div className="logout" onClick={this.props.logout}>
          <img src={logout} alt="Logo de déconnexion" className="logoutLogo"/>
          <p className="deco">Déconnexion</p>
        </div>
        <div onClick={this.props.signhisto} className="btnSign btnHisto">
          <p className="histoTxt">Voir l'historique<br/>des signatures</p>
        </div>
        <div>
          <div className="blockSign">
            <div className="date">
              <div className="hello">Bonjour --Prénom--.</div>
              {this.state.currDate}
            </div>
            <div className="extSign">
              <p className="signText">Signature :</p>
              <SignatureCanvas
                penColor='rgb(59, 44, 32)'
                canvasProps={{
                  width: 500, 
                  height: 200, 
                  className: 'sigCanvas'
                }}
                backgroundColor='rgb(221, 221, 221)'
                ref={(ref) => { this.sigPad = ref }}
              />,
            </div>
            {/* {trimmedDataURL ?<img className="preview" src={trimmedDataURL} /> : null} */}
          </div>
          <div className="btnBlock">
            <button className="btnSign" onClick={this.clear}>
              Effacer
            </button>
            <button className="btnSign btnSave" onClick={this.trim}>
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign;
