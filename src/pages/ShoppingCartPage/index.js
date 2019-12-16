import React , {Component} from 'react';
import BreadCrumbComponent from "../../components/ShoppingCart/BreadCrumbComponent";
import CartContainer from "../../containers/ShoppingCard/cartContainer";

class ShoppingCartPage extends Component {
    render(){
        return(
              <div>
                 <BreadCrumbComponent />
                 <CartContainer />
              </div>
        )
    }
}

export default ShoppingCartPage
