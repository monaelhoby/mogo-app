import React, { Component } from 'react';
import SliderContainer from "../../containers/Home/SliderContainer";
import CollectionsContainer from "../../containers/Home/CollectionsContainer";
import HotProductsContainer from "../../containers/Home/HotProductsContainer";
import ContactContainer from "../../containers/Home/ContactContainer";
import ScrollTop from "../../components/commons/ScrollTop";

class HomePage extends Component {
    render() {
        return (
            <div>
                <SliderContainer />
                <CollectionsContainer />
                <HotProductsContainer lg="3" sm="6" />
                <ContactContainer />
                <ScrollTop />
            </div>
        )
    }
}
export default HomePage;
