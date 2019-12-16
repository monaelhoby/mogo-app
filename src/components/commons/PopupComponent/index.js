import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Form from "../Form";
import SocialLink from "../SocialLinks"
import Styles from './index.module.css';



class OffersPopUp extends React.Component{


  state={
    show:true
  }

  close=()=>{
console.log('closed');
    this.setState({show:false});

  }

  render = ()=>{
  return (<div className={`${Styles.popup} text-center ${!this.state.show?Styles.hide:''}` }  >
    <div className={`${Styles.box} text-center wow zoomIn`} data-wow-duration="1s">
      <span className={Styles.close} onClick={this.close}>
      <i className="fas fa-times"></i></span>
          <div className={Styles.content}>
            <h2 className="h1 d-inline-flex">
              <span className={Styles.parent}>15</span><span className={Styles.middle}><sup>%</sup><sub>o</sub></span><span className={Styles.end}>FF</span>
            </h2>
            <p>Your Next Purchase When You Sign Up.</p>
            <p>By signing up, you accept the terms & Privacy Policy.</p>
            <Form />
            <div className={Styles.socailLinks}>
            <SocialLink iconclass="fab fa-facebook-f" />
            <SocialLink iconclass="fab fa-google-plus-g" />
            <SocialLink iconclass="fab fa-twitter" />
            <SocialLink iconclass="fab fa-youtube" />
            <SocialLink iconclass="fab fa-behance" />
        </div>
            <label className={Styles.container}> Don't show this popup again
              <input type="checkbox"/>
              <span className={Styles.checkmark}></span>
            </label>
          </div>
        </div>
        </div>
  )
}
}



OffersPopUp.propTypes = {
  onSubscribe: PropTypes.func.isRequired
}

export default OffersPopUp;
