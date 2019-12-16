import React from "react" ;

const FooterUL = (props) =>{
    return(
          <ul className="list-unstyled">
           <li><a href="#">{props.item1}</a></li>
           <li><a href="#">{props.item2}</a></li>
           <li><a href="#">{props.item3}</a></li>
           <li><a href="#">{props.item4}</a></li>
           <li><a href="#">{props.item5}</a></li>
           <li><a href="#">{props.item6}</a></li>
           <li><a href="#">{props.item7}</a></li>
           <li><a href="#">{props.item8}</a></li>
          </ul>
    )
}

export default FooterUL;