import React from "react";
import "./RegisterForm.scss";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterForm({ close }) {
  return (
    <Form className="registerForm">
      <Form.Group controlId="name" className="registerForm__email">
        <Form.Label>Email ID</Form.Label>
        <Form.Control placeholder="Enter Email ID" />
      </Form.Group>
      <Form.Group controlId="password" className="registerForm__password">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Enter Password" />
      </Form.Group>
      <Form.Group controlId="repassword" className="registerForm__repassword">
        <Form.Label>Reenter Password</Form.Label>
        <Form.Control placeholder="Re enter Password" />
      </Form.Group>
      <Form.Group controlId="phone" className="registerForm__phone">
        <Form.Label>Phone No</Form.Label>
        <Form.Control placeholder="Enter Phone No" />
      </Form.Group>
      <Button className="registerForm__submit" onClick={() => close('OTP')}>REGISTER NOW</Button>
      <p className="registerForm__links">
        Already a Member?
        <Link className="registerForm__links__login">
          Login
        </Link>
      </p>
    </Form>
  );
}

export default RegisterForm;
