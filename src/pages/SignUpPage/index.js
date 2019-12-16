import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from'./index.module.css';
import SignUpFormContainer from '../../containers/signUp';

const SignUpPage = ({}) => (
  <Container className={styles.loginpage}>
  <Row className={styles.login_header}>
    <Col xs="12">
    <a href="#"><i className={`${styles.fas} ${styles.fa_home}`}></i></a> | <span>Account</span>
    </Col>
  </Row>
  <Row>
    <Col xs="12" className={styles.login_content}>
    <h1>SignUp <samp>/</samp> <a href="#">Create Account</a></h1>
    <SignUpFormContainer/>
      </Col>
  </Row>

  </Container>
);

export default SignUpPage;
