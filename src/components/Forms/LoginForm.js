import React, { useState, useEffect } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { login, setSession } from "../../services/api";
import "./LoginForm.scss";
import { useMutation } from "react-query";

function LoginForm({ close, modalData }) {
  const [formValue, setFormValue] = useState({ username: "", password: "" }),
    submit = (e) => {
      e.preventDefault();
      mutate(formValue);
    },
    { mutate, isError, isSuccess, error, data } = useMutation((formData) =>
      login(formData)
    ),
    history = useHistory();
  useEffect(() => {
    if (isSuccess) {
      setSession(data?.data?.access);
      history.push(modalData?.url ? modalData?.url : "/home");
      close();
    }
  }, [isSuccess]);
  return (
    <Form className="loginForm" onSubmit={submit}>
      <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
        {error?.data?.detail}
      </Form.Control.Feedback>
      <Form.Group controlId="name" className="loginForm__email">
        <Form.Label>Email ID</Form.Label>
        <Form.Control
          placeholder="Enter Email ID / Phone No"
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, username: value })
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="password" className="loginForm__password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, password: value })
          }
          required
        />
      </Form.Group>
      <Row className="loginForm__options">
        <Form.Group controlId="stay" className="loginForm__options__check">
          <Form.Check label="Remember me" />
        </Form.Group>
        <Link className="loginForm__options__forgot">Forgot Password?</Link>
      </Row>
      <Button type="submit" className="loginForm__submit">
        Login
      </Button>
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
