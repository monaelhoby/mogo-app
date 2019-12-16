import React from "react";
import { NavLink} from 'reactstrap';
import style from './index.module.css';
import UserLogin from "../../../../containers/commons/header/UserLogin/UserLogin";

class iconsnavComponent extends React.Component{
  state ={
    currency : "USD",
    language: "English",
    show:false
  }

  handleLanguage = (evt) => {
    this.setState({language : evt.target.innerText})
  }
  handleCurrency = (evt) => {
    this.setState({currency : evt.target.innerText})
  }
  handleChange = () => {
    this.setState({show: !this.state.show})
  }
  render(){
  return (
    <div className="icons">
      <NavLink href="#">
      <input type="search" className={`${style.inputsearch} ${this.state.show?style.unvisibility:""}`} />
        <i className="fas fa-search" onClick={this.handleChange}></i>
      </NavLink>
      <UserLogin />
      <NavLink href="#">
        <i className="far fa-heart"></i>
      </NavLink>
      <NavLink href="#">
        <i className="fas fa-luggage-cart"></i>
      </NavLink>
      <div className="cog-dropdown">
        <NavLink href="#" >
          <i className="fas fa-cog dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
          <div className="dropdown-menu  main-menu cog-settings" aria-labelledby="navbarDropdown">
            <div className="choose-language">
              <h5>Language is :
                <span className="_val">{this.state.language}</span>
                <span className="arrow"></span>
              </h5>
              <ul className="list-unstyled choose">
                <li className="active" onClick={this.handleLanguage}>English</li>
                <li onClick={this.handleLanguage}>Arabic</li>
                <li onClick={this.handleLanguage}>France</li>
                <li onClick={this.handleLanguage}>English</li>
                <li onClick={this.handleLanguage}>English</li>
              </ul>
            </div>
            <div className="choose-currency">
              <h5>Currency is :
                <span className="_val">{this.state.currency}</span>
                <span className="arrow"></span>
              </h5>
              <ul className="list-unstyled choose">
                <li onClick={this.handleCurrency}>Eru</li>
                <li onClick={this.handleCurrency}>GBP</li>
                <li onClick={this.handleCurrency} className="active">USD</li>
                <li onClick={this.handleCurrency}>AUD</li>
                <li onClick={this.handleCurrency}>JPY</li>
              </ul>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
  }
}

export default iconsnavComponent ;
