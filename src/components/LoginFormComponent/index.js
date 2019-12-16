import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {email,required} from '../../utils/validators';
import {inject,observer} from 'mobx-react';
import { compose } from 'recompose';
import styles from'./index.module.css';

class LogInFormComponent extends Component {
state={
  email:'',
  password:''
}
  handleSubmit = (event) => {
       event.preventDefault();

       // Emulate async API call
       setTimeout(() => {
           this.form.showError(this.userInput, <span>API error</span>);
       }, 1000);
   };
   removeApiError = () => {
       this.form.hideError(this.userInput);
   };

   setPassword=(event) => {
     this.setState({password:event.target.value})
   }
   setEmail=(event) => {
     this.setState({email:event.target.value})
   }

   render(){
        return (
          <Container>
            <Row >

              <Col xs="12">
                <Form className={styles.login_form} action="index.html" method="post">
                  <div className={styles.email_div}>
                    <label htmlFor="email" className={styles.email_label}>Email:<span className={styles.star}>*</span></label>
                    <Input name="email" type="text" placeholder="Enter Your email"
                            validations={[required, email]} onChange={this.setEmail}/>
                  </div>
                  <div className={`${styles.email_div} ${styles.email_di}`}>
                    <label htmlFor="password" className={styles.password_label}>Password:<span className={styles.star}>*</span></label>
                    <Input type="password" name="password" placeholder="Enter Your Password" validations={[required]} onChange={this.setPassword}/>
                  </div>
                  <div className={styles.footer_form}>
                    <button type="button" name="button" class={`${styles.btn} ${styles.sginin_btn}`} onClick={()=>this.props.login(this.state.email,this.state.password)}>Sign In</button> or <a href="/">Return to Store</a><br></br>
                    <div><a href="#">Forgot your password?</a></div>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        );
      }
}

export default LogInFormComponent;
