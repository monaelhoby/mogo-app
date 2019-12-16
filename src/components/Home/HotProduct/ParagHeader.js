import React from "react" ;


const ParagHeader = (props) => {
   return(
       <div>
        <div className={props.paragarph}>
        <p>{props.parag}<br/>{props._parag}<small>{props.wordsm}</small>{props._wordsm}</p>
        </div>
        <div className={props.hi3}>
            <h3>{props.header}</h3>
        </div>
       </div>
   )
}

export default ParagHeader ;