import React from "react";
import cartImage from '../../../../img/cart.png';
import cartImageHover from '../../../../img/cart-hover.png';


const SliderComponent = (props) => {
  return(
        <div>
          <h5>{props.header}<br/>{props._header}<br/>{props.remheader}</h5>
          <p>{props.captions}</p>
          <button>
            <a href="#">
              <img src={cartImage} />
              <img src={cartImageHover} />
            </a>
          </button>
        </div>
  )
}

export default SliderComponent;
