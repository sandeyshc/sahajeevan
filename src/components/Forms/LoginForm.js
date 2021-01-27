import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

function LoginForm({ close }) {
  return (
    <Form className="loginForm">
      <Form.Group controlId="name" className="loginForm__email">
        <Form.Label>Email ID / Phone No.</Form.Label>
        <Form.Control placeholder="Enter Email ID / Phone No" />
      </Form.Group>
      <Form.Group controlId="password" className="loginForm__password">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Enter Password" />
      </Form.Group>
      <Row className="loginForm__options">
        <Form.Group controlId="stay" className="loginForm__options__check">
          <Form.Check label="Stay Logged in" />
        </Form.Group>
        <Link className="loginForm__options__forgot">Forgot Password?</Link>
      </Row>
      <Button className="loginForm__submit">Login</Button>
      <p className="loginForm__postscript">
        Lorem ipsum is simply a dummy text of printing.
      </p>
      <p className="loginForm__links">
        <Link href="javascript:void(0)" className="loginForm__links__terms">
          Terms of Use
        </Link>
        and
        <Link href="javascript:void(0)" className="loginForm__links__privacy">
          Privacy Policy
        </Link>
      </p>
    </Form>
  );
}

export default LoginForm;
