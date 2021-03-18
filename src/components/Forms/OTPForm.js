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
    handleKeyUp = ({ target: { name, value }, keyCode }) => {
      setOtp({ ...otp, [name]: value });
      if (keyCode !== 8 && keyCode !== 46 && +name < 4)
        document.getElementById("otp" + (+name + 1)).focus();
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
        <div className="otp__controls">
          {[1, 2, 3, 4].map(c => (
            <Form.Group controlId={"otp" + c}>
              <Form.Control
                type="number"
                name={c}
                className="otp__controls__control"
                onKeyUp={handleKeyUp}
                maxLength={1}
                required
              />
            </Form.Group>
          ))}
        </div>
        {isError && !error?.data?.otp_verified && (
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
