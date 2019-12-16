import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import LoginForm from '../../components/LoginFormComponent';
import {Alert,Col,Row} from "reactstrap";

class LoginFormContainer extends Component {

  render() {
    let {state , message} = this.props.user;
    return (
      <div>
      {
        state === "done" || state === "error" ?<Row><Col xs="12"> <Alert color={ state === "done" ? "success" : "danger"}> {message}</Alert></Col></Row>:''
       }
       <LoginForm login={this.props.user.login}/>
        </div>
    );
  }
}

export default inject("user")(observer(LoginFormContainer));
