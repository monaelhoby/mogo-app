import React , {Component} from 'react';
import ImagesLink from "./ImagesLink";
import ShopingCartModel from "./ShopingCartModel";
import Heart from "../../../img/heart.png";
import HeartHover from "../../../img/hearthover.png";
import Eye from "../../../img/eye.png";
import EyeHover from "../../../img/eyehover.png";
import Styles from "./index.module.css";

class ImagesLinkContainer extends Component{
    render(){
        return(
        <div className={Styles.commits} style={{textAlign : "center"}}>
         <ShopingCartModel />
         <ImagesLink src1={Heart} src2={HeartHover}/>
         <ImagesLink src1={Eye} src2={EyeHover}/>
        </div>
        );
    }
}

export default ImagesLinkContainer;
