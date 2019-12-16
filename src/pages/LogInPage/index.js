import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from'./index.module.css'
import FontAwesome from 'react-fontawesome';
import LoginContainer from '../../containers/login';

const LoginPage = ({}) => (
  <Container className={styles.loginpage}>
    <Row className={styles.login_header}>
      <Col xs="12">
        <a href="#"><i className={`${styles.fas} ${styles.fa_home}`}></i></a> | <span>Account</span>
      </Col>
    </Row>
    <Row>
      <Col xs="12" className={styles.login_content}>
          <h1>Login <samp>/</samp> <a href="#">Create Account</a></h1>
          <LoginContainer/>
        </Col>
    </Row>
  </Container>
);

export default LoginPage;
