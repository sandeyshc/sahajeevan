import React, { useState, useEffect } from "react";
import "./RegisterForm.scss";
import { Button, Form, InputGroup, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import {
  register,
  setSession,
  checkUsernameAvailability
} from "../../services/api";

function RegisterForm({ close }) {
  const { mutate, isError, isSuccess, error, data } = useMutation(formData =>
      register(formData)
    ),
    [formValue, setFormValue] = useState({}),
    {
      isError: usernameAvailabilityStatus,
      refetch,
      error: usernameAvailabilityData,
      isSuccess: usernameAvailabilitySuccess,
      isLoading: usernameAvailabilityLoading
    } = useQuery(
      ["checkUsername", formValue?.username],
      () => checkUsernameAvailability(formValue?.username),
      {
        refetchOnWindowFocus: false,
        enabled: false
      }
    ),
    [passwordMatch, setPasswordMatch] = useState(true),
    [emailError, setEmailError] = useState(""),
    [passwordError, setPasswordError] = useState(""),
    [mobileError, setMobileError] = useState(""),
    registerForm = e => {
      e.preventDefault();
      if (formValue.password === formValue.confirmPassword) {
        setPasswordMatch(true);
        mutate(formValue);
      } else {
        setPasswordMatch(false);
      }
    },
    validateEmail = () => {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          formValue.username
        )
      ) {
        refetch();
      } else {
        setEmailError("Please enter a valid email");
      }
    },
    validatePassword = () => {
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(
          formValue.password
        )
      )
        setPasswordError("");
      else
        setPasswordError(
          "Password must contain an uppercase, a lowercase, a number and a special character."
        );
    },
    validateMobile = () => {
      if (/[0-9]{10}/.test(formValue.mobile_no)) setMobileError("");
      else setMobileError("Please enter a valid mobile number.");
    };
  useEffect(() => {
    if (isSuccess) {
      setSession(data?.data?.access);
      close("OTP", { mobile_no: data?.data?.mobile_no });
    }
    if (usernameAvailabilityStatus) {
      setEmailError(usernameAvailabilityData?.data);
    } else {
      setEmailError("");
    }
  }, [isSuccess, usernameAvailabilityStatus]);
  return (
    <Form className="registerForm" onSubmit={registerForm}>
      <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
        {error?.data?.username}
      </Form.Control.Feedback>
      {(!!emailError || !!passwordError || !!mobileError) && (
        <Alert variant="danger">
          {emailError || passwordError || mobileError}
        </Alert>
      )}
      <Form.Group controlId="name" className="registerForm__email">
        <Form.Label>Email ID</Form.Label>
        {usernameAvailabilityLoading && (
          <Spinner className="registerForm__email__loader" animation="border" />
        )}
        <Form.Control
          placeholder="Enter Email ID"
          required
          name="email"
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, username: value })
          }
          onBlur={validateEmail}
        />
      </Form.Group>
      <Form.Group controlId="password" className="registerForm__password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          required
          isInvalid={!passwordMatch || !!passwordError}
          autoComplete="new-password"
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, password: value })
          }
          onBlur={validatePassword}
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
      <Form.Label>Phone No</Form.Label>
      <InputGroup controlId="phone" className="registerForm__phone">
        <InputGroup.Prepend className="mr-0">
          <InputGroup.Text>+91</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          placeholder="Enter Phone No"
          required
          isInvalid={mobileError}
          onBlur={validateMobile}
          onChange={({ target: { value } }) =>
            setFormValue({ ...formValue, mobile_no: value })
          }
        />
      </InputGroup>
      <Button
        className="registerForm__submit"
        type="submit"
        disabled={!!emailError || !!passwordError}
      >
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
