import React from "react" ;
var FontAwesome = require('react-fontawesome');

const ContactComponent = (props) => {
   return(
       <a href="#" >
       <img src={props.src} alt="..." />
        <h3>{props.header}</h3>
        <p>{props.parag}<strong>{props.strongparag}</strong> <span>{props.spanparag}</span></p>
       </a>
   )
}

export default ContactComponent;