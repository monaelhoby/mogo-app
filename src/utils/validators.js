import validator from 'validator';
import React, { Component } from 'react';
export const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return <span style={{color: "red",fontWeight: "bold",float:"right",marginLeft:"50px"}}>**this field is require</span>;
  }
};

export const email = (value) => {
  if (!validator.isEmail(value)) {
    return <span style={{color: "red",fontWeight: "bold",float:"right"}}>** {value} is not a valid email.</span>;
  }
};
