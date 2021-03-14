import React, { useState, useEffect } from "react";
import "./RegisterForm.scss";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { register, setSession } from "../../services/api";

function RegisterForm({ close }) {
  const { mutate, isError, isSuccess, error, data } = useMutation(formData =>
      register(formData)
    ),
    [formValue, setFormValue] = useState({}),
    [passwordMatch, setPasswordMatch] = useState(true),
    registerForm = e => {
      e.preventDefault();
      if (formValue.password === formValue.confirmPassword) {
        setPasswordMatch(true);
        mutate(formValue);
      } else {
        setPasswordMatch(false);
      }
    };
  useEffect(() => {
    if (isSuccess) {
      setSession(data?.data?.access);
      close("OTP", { mobile_no: data?.data?.mobile_no });
    }
  }, [isSuccess]);
  return (
    <Form className="registerForm" onSubmit={registerForm}>
      <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
        {error?.data?.username}
      </Form.Control.Feedback>
      <Form.Group controlId="name" className="registerForm__email">
        <Form.Label>Email ID</Form.Label>
        <Form.Control
          placeholder="Enter Email ID"
          required
          name="email"
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, username: value })
          }
        />
      </Form.Group>
      <Form.Group controlId="password" className="registerForm__password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          required
          isInvalid={!passwordMatch}
          autoComplete="new-password"
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, password: value })
          }
        />
      </Form.Group>
      <Form.Group controlId="repassword" className="registerForm__repassword">
        <Form.Label>Reenter Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Re enter Password"
          required
          isInvalid={!passwordMatch}
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, confirmPassword: value })
          }
        />
        {!passwordMatch && (
          <p className="registerForm__password__error">
            Passwords does not match
          </p>
        )}
      </Form.Group>
      <Form.Group controlId="phone" className="registerForm__phone">
        <Form.Label>Phone No</Form.Label>
        <Form.Control
          placeholder="Enter Phone No"
          required
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, mobile_no: value })
          }
        />
      </Form.Group>
      <Button className="registerForm__submit" type="submit">
        REGISTER NOW
      </Button>
      <p className="registerForm__links">
        Already a Member?
        <Link
          className="registerForm__links__login"
          onClick={() => close("LOGIN")}
        >
          Login
        </Link>
      </p>
    </Form>
  );
}

export default RegisterForm;
