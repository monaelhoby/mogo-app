import React from "react" ;
import style from "./index.module.css";
const SocialLink = (props) => {
    return(
          <a href="#">
          <i className={props.iconclass}></i>
          </a>
    )
}

export default SocialLink ;