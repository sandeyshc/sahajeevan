import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OTPForm.scss";

function OTPForm({ close }) {
  return (
    <section className="otp">
      <p className="otp__title">
        PLEASE ENTER THE ONE TIME PASSWORD TO VERIFY YOUR ACCOUNT
      </p>
      <p className="otp__subtitle">
        A One Time Password Has Been Sent To +91 123456 7891
      </p>
      <Form>
        <Form.Group controlId="otp" className="otp__controls">
          <Form.Control type="text" className="otp__controls__control" maxLength={1} required />
          <Form.Control type="text" className="otp__controls__control" maxLength={1} required />
          <Form.Control type="text" className="otp__controls__control" maxLength={1} required />
          <Form.Control type="text" className="otp__controls__control" maxLength={1} required />
        </Form.Group>
        <Button className="otp__submit" onClick={() => close('STEP')}>CONTINUE</Button>
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
