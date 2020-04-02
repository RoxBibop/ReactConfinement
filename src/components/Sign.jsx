import React from 'react';
import SignatureCanvas from 'react-signature-canvas'
import '../style/home.css'

class Sign extends React.Component {
  
  state = { trimmedDataURL: null }

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }

  trim = () => {
    this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png') })
  }

  render() {   

    const { trimmedDataURL } = this.state

    return (
      <div className="home">
        <SignatureCanvas
          penColor='blue'
          canvasProps={{
            width: 500, 
            height: 200, 
            className: 'sigCanvas'
          }}
          backgroundColor='#FFF'
          ref={(ref) => { this.sigPad = ref }}
        />,
        <button onClick={this.clear}>
          Effacer
        </button>
        <button onClick={this.trim}>
          Enregistrer
        </button>
        {trimmedDataURL ?<img className="preview" src={trimmedDataURL} /> : null}
      </div>
    );
  }
}

export default Sign;
