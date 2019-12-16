import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styles from'./index.module.css'

class SingleProductTabsDescraption extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem className={styles.NavItem}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              DESCRIPTION
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItem}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              TEXT
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItem}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              HTML
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItem}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              ADDITIONAL
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItem}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              TAGS
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItem}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              REVIEWS
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className={styles.description}>
                <h6>Now you will have the Moon at your fingertips! </h6>
                <p>Bring a piece of Space into your home with this elegant and extraordinary rechargeable 3D<strong> Moon
                    Light Lamp</strong>. A perfect addition to your or your children's bedroom – it features two Dimmable
                  LED bulbs for a soft white light or a yellow light; meaning it can be used as a night light or a
                  reading lamp. And finally, you won't have to use your phone's torch anymore when wandering around the
                  house at night!
                </p>
                <ul className={styles.firstTabFirstul}>
                  <li>3D Technology - This lamp is made using innovative 3D printing technology, which allows the lamp to
                    have a real moon-like appearance.</li>
                  <li>Wireless – A built-in USB rechargeable battery lets you use the Moon Lamp not only as a bedside
                    lamp but also as a portable light!</li>
                  <li> Light variations - You can switch between white and yellow light, facilitating the use of the Moon
                    Lamp in a variety of different environments. Make it lighter or dimmer as you wish with a click of a
                    button.</li>
                  <li> Safe and Eco-Friendly - Our lamps are made of non-toxic, odourless, environmentally friendly PLDM
                    material making them safe for people of all ages! Get one for yourself, your husband/wife, children,
                    grandad – the list is endless!</li>
                </ul>
                <samp className={styles.firstTabSmap}>BUY 2 OR MORE TO GET 20% OFF - Use code:
                  MOONLIGHT</samp><br></br>
                <div className={styles.Details}>
                  <div className={styles.Details_title}>Details:</div>
                  Wattage: 0.5W<br/>
                  Brightness: Adjustable<br/>
                  Color temperature: 3000K / 6000K<br/>
                  Bulb: 1X White LED bulb and 1X Yellow LED bulb<br/>
                  Battery capacity: 1 x 240mAh li-po battery (built-in)<br/>
                  Charging time: 6 - 8 hours<br/>
                  Working time: 8 - 30 hours (depending on brightness)<br/>
                  Power supply: USB DC 5V<br/>
                  Wood holder INCLUDED<br/>

                </div>
                <div className={styles.instructions}><span>Instructions of use:</span></div>
                <ul>
                  <li>Touch the metal ring at the bottom of the moon lamp to turn on / off the light and change color
                    from white to yellow.</li>
                  <li>Long press the metal ring to adjust brightness - the lamp has a brightness memory function.</li>
                  <li> The white LED won't work when the battery is low.</li>
                  <li> Insert the DC Charger connector into the metal ring at the bottom of the moon lamp to charge, the
                    red light will remain on while charging.</li>
                  <li>The red light will turn off automatically when fully charged.</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12" className={styles.description}>
                Tab's Text Content goes here!<br/><br/>
                You can make text <b>bold</b>, <i>italic</i> or add <a href="#">link</a> using rich text editor.
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12" className={styles.description}>
                Tab's HTML<br/>
                            content
                            <br/><br/>
                            goes here!
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12" className={styles.description}>
                <Row>
                  <Col xs="3" className={styles.first_word}>
                    Headphone Fit
                  </Col>
                  <Col xs="3" className={styles.second_word}>
                    Over-the-Ear
                  </Col>
                </Row>

                <Row>
                  <Col xs="3" className={styles.first_word}>
                    Wireless
                  </Col>
                  <Col xs="3" className={styles.second_word}>
                    yes
                  </Col>
                </Row>

                <Row>
                  <Col xs="3" className={styles.first_word}>
                    Headphone Fit
                  </Col>
                  <Col xs="3" className={styles.second_word}>
                    yes
                  </Col>
                </Row>

                <Row>
                  <Col xs="3" className={styles.first_word}>
                    Built-In Bluetooth
                  </Col>
                  <Col xs="3" className={styles.second_word}>
                    Yes
                  </Col>
                </Row>

                <Row>
                  <Col xs="3" className={styles.first_word}>
                    Built-In Microphone
                  </Col>
                  <Col xs="3" className={styles.second_word}>
                    Yes
                  </Col>
                </Row>

                <Row>
                  <Col xs="3" className={styles.first_word}>
                    Behind The Neck
                  </Col>
                  <Col xs="3" className={styles.second_word}>
                    Yes
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12" className={styles.description}>
                <div className={styles.tags}>
                  <div>$100-$200</div>
                  <div>Ankle</div>
                  <div>Audio</div>
                  <div>Beats</div>
                  <div>Black</div>
                  <div>Bluetooth Speaker</div>
                  <div>Built-In - Item #2</div>
                  <div>Built-In - Item #3.1</div>
                  <div>Built-In - Item #3.3</div>
                  <div>Built-In - Item #4</div>
                  <div>Built-In Microphone</div>
                  <div>Free Shipping</div>
                  <div>Power Banks</div>
                  <div>Rechargeable</div>
                  <div>Rechargeable Banks</div>
                  <div>Rechargeable Watches</div>
                  <div>rprice-0-200</div>
                  <div>rprice-0-300</div>
                  <div>rprice-0-400</div>
                  <div>rprice-0-500</div>
                  <div>rprice-100-200</div>
                  <div>rprice-100-300</div>
                  <div>rprice-100-400</div>
                  <div>rprice-100-500</div>
                  <div>rprice-200</div>
                  <div>rprice-200-300</div>
                  <div>rprice-200-400</div>
                  <div>rprice-200-500</div>
                  <div>Smart Home</div>
                  <div>Trackers</div>
                  <div>USB Device Charging</div>
                  <div>Watches</div>
                  <div>Water Resistant</div>
                  <div>Wrist</div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12" className={styles.description}>
                <div className={styles.review_Customer}><strong>Customer Reviews</strong></div>
                <div className={styles.review}>
                  <div className={styles.no}>No reviews yet <a href="#">Write a review</a></div>
                </div>
                <br/>
                <hr/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default SingleProductTabsDescraption;
