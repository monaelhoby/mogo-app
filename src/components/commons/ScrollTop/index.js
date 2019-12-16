import React, { Component } from 'react';
import Styles from "./index.module.css";
import fixed from "../../../img/fixed.png";
import fixedtop from "../../../img/fixedtop.png";
import FontAwesome from 'react-fontawesome';

class ScrollTopButton extends Component {

    state = {
        show: false
    }

    scrollStep = () => {
        if (window.pageYOffset >= 1000) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollStep);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollStep);
    }

    handleScroll = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // window.pageYOffset = 0;
    }
    render() {
        return (
            <div className={Styles.scrolltop} onClick={this.handleScroll}>
                {/* <img className={`${Styles.arrowfixed} ${!this.state.show ? 'showarrow' : ''} `} src={fixed} alt="..."
                /> */}
                <FontAwesome name='arrow-circle-up' className={`${Styles.arrowfixed} ${this.state.show ? Styles.showarrow : ''} `} />
                {/* <img className={Styles.topfixed} src={fixedtop} alt=".."
                /> */}
            </div>
        )
    }
}

export default ScrollTopButton;
