import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter,Link ,Switch , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionAudioPage'
import LoginPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import SingleProductPage from './pages/SingleProductPage'
import FooterContainer from './containers/commons/FooterContainer'
import NavbarContainer from './containers/commons/header/navbarContainer/optimized'
import PopupContainer from './containers/commons/PopupContainer'
import  '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Provider } from 'mobx-react';
import Collections from './stores/Collections'
import user from './stores/UserStore';
import vendors from './stores/Vendors';
import HotProducts from './stores/Hotproducts';
import cartStore from "./stores/ShopingCartStore";
import productDetails from  './stores/selectedProduct';


class App extends Component {
  render() {
    return (
      <Provider collections={Collections} user={user} vendors={vendors} hotProducts={HotProducts} cart={cartStore} productDetails={productDetails}>
       <div>
       <PopupContainer/>
        <NavbarContainer/>
        <HashRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/collection"  component={CollectionPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/shoppingcart" component={ShoppingCartPage} />
          <Route path="/singleproduct" component={SingleProductPage} />
        </Switch>
      </HashRouter>

        <FooterContainer/>
       </div>
      </Provider>
    );
  }
}

export default App;
