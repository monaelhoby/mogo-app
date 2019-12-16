import React from "react";
const CollectionComponent = (props) =>{
  return (
    <div>
              <div className="overlay">
                <div className="text">
                  <h5><strong>{props.heading}</strong></h5>
                  <p><strong className="all"><span>{props.numb}</span> <span>{props.product}</span></strong></p>
                </div>
              </div>
              <h3>{props.heading}</h3>
              <a href="#">
              <img className="img-fluid" src={props.src}
                  alt=""/>
                  </a>
            </div>
  )
}

export default CollectionComponent;
