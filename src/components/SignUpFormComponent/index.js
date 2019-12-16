import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {email,required} from '../../utils/validators';
import styles from'./index.module.css'
import {inject,observer} from 'mobx-react';
import { compose } from 'recompose';
class SignUpFormComponent extends Component {

state={
  username:'',
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
  this.setState({password:event.target.value});
  console.log('password from '+this.state.password);

}
setEmail=(event) => {
  this.setState({email:event.target.value});
  console.log('password from '+this.state.email);

}
setUsername=(event) => {
  this.setState({username:event.target.value})
}
   render(){
     console.log("the sign up props is : ",this.props);
        return (
      <Container>
        <Row >
          <Col xs="12" >
            <Form className={styles.login_form} action="index.html" method="post">
              <div className={styles.name_div}>
                <label htmlFor="fname" className={styles.name_label}>First Name:</label>
                <Input type="text" name="email" placeholder="Enter Your First Name" validations={[required]} onChange={this.setUsername}/>
              </div>
              <div className={styles.name_div}>
                <label htmlFor="lname" className={styles.name_label}>Last Name:</label>
                <Input type="text" name="email" placeholder="Enter Your Last Name" validations={[required]} />
              </div>
              <div className={styles.email_div}>
                <label htmlFor="email" className={styles.email_label}>Email:<span className={styles.star}>*</span></label>
                <Input name="email" type="text" placeholder="Enter Your email"
                        validations={[required, email]} onChange={this.setEmail}/>
              </div>
              <div className={styles.email_div}>
                <label htmlFor="password" className={styles.password_label}>Password:<span className={styles.star}>*</span></label>
                <Input type="password" name="password" placeholder="Enter Your Password" validations={[required]} onChange={this.setPassword}/>
              </div>
              <div className={styles.footer_form}>
                <button type="button" name="button" className={`${styles.btn} ${styles.sginin_btn}`} onClick={()=>this.props.register(this.state.username,this.state.email,this.state.password)}>Creat</button> or <a href="#">Return to Store</a><br></br>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SignUpFormComponent;
