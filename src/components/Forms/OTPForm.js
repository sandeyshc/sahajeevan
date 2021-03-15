import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OTPForm.scss";
import { useMutation } from "react-query";
import { otp as otpAPI } from "../../services/api";

function OTPForm({ close, modalData }) {
  const { mutate, isError, isSuccess, error, data } = useMutation(formData =>
      otpAPI(formData)
    ),
    [otp, setOtp] = useState({}),
    submit = e => {
      e.preventDefault();
      mutate(+Object.values(otp).join(""));
    },
    handleChange = ({ target: { name, value } }) => {
      setOtp({ ...otp, [name]: value });
    };

  useEffect(() => {
    if (isSuccess) {
      close("STEP");
    }
  }, [isSuccess]);
  return (
    <section className="otp">
      <p className="otp__title">
        PLEASE ENTER THE ONE TIME PASSWORD TO VERIFY YOUR ACCOUNT
      </p>
      <p className="otp__subtitle">
        A One Time Password Has Been Sent To {modalData?.mobile_no}
      </p>
      <Form onSubmit={submit}>
        <Form.Group controlId="otp" className="otp__controls">
          <Form.Control
            controlId="otp1"
            type="number"
            name="1"
            className="otp__controls__control"
            onChange={handleChange}
            maxLength={1}
            required
          />
          <Form.Control
            controlId="otp2"
            type="number"
            name="2"
            className="otp__controls__control"
            onChange={handleChange}
            maxLength={1}
            required
          />
          <Form.Control
            controlId="otp3"
            type="number"
            name="3"
            className="otp__controls__control"
            onChange={handleChange}
            maxLength={1}
            required
          />
          <Form.Control
            controlId="otp4"
            type="number"
            name="4"
            className="otp__controls__control"
            onChange={handleChange}
            maxLength={1}
            required
          />
        </Form.Group>
        {(isError && !error?.data?.otp_verified) && (
          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            OTP is incorrect
          </Form.Control.Feedback>
        )}
        <Button className="otp__submit" type="submit">
          CONTINUE
        </Button>
        <p className="otp__links">
          Didn't receive OTP yet?
          <Link href="javascript:void(0)" className="otp__links__resend">
            Resend OTP
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default OTPForm;
