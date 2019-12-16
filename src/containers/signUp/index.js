import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import SignUpFormComponent from '../../components/SignUpFormComponent';
import {Alert,Col,Row} from "reactstrap";

// removeItem={items => cart.removeItem(item)}
const SignUpFormContainer = ({user}) => {
    let {state,message}=user;
    return (
      <div>
      {
        state === "done" || state === "error" ?<Row><Col xs="12"> <Alert color={ state === "done" ? "success" : "danger"}> {message}</Alert></Col></Row>:''
       }
      <SignUpFormComponent register={user.register}/>
      </div>
    );

}

export default inject("user")(observer(SignUpFormContainer));
