import React from "react" ;
import Styles from "./index.module.css";


const ImagesLink = (props) => {
    return (
        <a href="#">
         <img src={props.src1} alt="...." className={Styles.fisrtimg} />
         <img src={props.src2} alt="...." className={Styles.secondimg} />
        </a>
    )
}

export default ImagesLink ;
