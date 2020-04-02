import React from 'react';
import '../style/signhisto.css';
import '../style/sign.css';
import arrow from '../res/arrow.png';
import logout from '../res/logoutLogo.png';

class SignHisto extends React.Component {
	render() {   
    return (
			<div className='signhisto'>
				<div onClick={this.props.back} className="backBtn">
					<img src={arrow} alt="flêche retour" className="backArrow"/>
					<p>Retour</p>
				</div>
				<div className="logout" onClick={this.props.logout}>
          <img src={logout} alt="Logo de déconnexion" className="logoutLogo"/>
          <p className="deco">Déconnexion</p>
        </div>
				<div className="mainCtn blockSign">

				</div>
			</div>
		)
	}
}

export default SignHisto