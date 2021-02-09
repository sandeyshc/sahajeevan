import React, { useState } from "react";
import "./StepForm.scss";
import Stepper from "react-stepper-horizontal";
import { Form, Button, Row, Col, Image, Select } from "react-bootstrap";
import { Link } from "react-router-dom";

import BackIcon from "../../assets/icons/svg icon/next (1).svg";
import NextIcon from "../../assets/icons/svg icon/next (-1.svg";
import SkipIcon from "../../assets/icons/svg icon/skip.svg";
import SaveIcon from "../../assets/icons/svg icon/save-file.svg";

function StepForm({ setActive }) {
  const [activeStep, setActiveStep] = useState(0),
    steps = [
      { title: "Step 1" },
      { title: "Step 2" },
      { title: "Step 3" },
      { title: "Step 4" },
    ],
    nextStep = () => {
      setActiveStep(activeStep + 1);
      setActive(activeStep + 1);
    },
    backStep = () => {
      setActiveStep(activeStep - 1);
      setActive(activeStep - 1);
    };
  return (
    <>
      <div className="stepper">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          size={48}
          circleFontSize={18}
          activeColor="#ffffff"
          defaultColor="#ffffff"
          defaultBorderWidth={1}
          circleFontColor="#fcb432"
          activeBorderStyle="solid"
          defaultBorderStyle="solid"
          activeBorderColor="#fcb432"
          defaultBorderColor="#dfdfdf"
          completeColor="#fcb432"
          defaultBarColor="#eae9ee"
          completeBarColor="#fcb432"
        />
      </div>

      <Form className="stepForm">
        {activeStep === 0 && (
          <>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="firstname">
                <Form.Label className="stepForm__label">First Name</Form.Label>
                <Form.Control
                  className="stepForm__control"
                  placeholder="Enter First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastname">
                <Form.Label className="stepForm__label">Last Name</Form.Label>
                <Form.Control
                  className="stepForm__control"
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="birth">
                <Form.Label className="stepForm__label">Birth Date</Form.Label>
                <Form.Control
                  className="stepForm__control"
                  placeholder="DD, MM, YYYY"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="age">
                <Form.Label className="stepForm__label">Age</Form.Label>
                <Form.Control as="select" className="stepForm__control">
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="residing">
                <Form.Label className="stepForm__label">Residing at</Form.Label>
                <Form.Control
                  className="stepForm__control"
                  placeholder="Enter Residing at"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="height">
                <Form.Label className="stepForm__label">Height</Form.Label>
                <Form.Control as="select" className="stepForm__control">
                  <option>4'10"</option>
                  <option>4'11"</option>
                  <option>5'10"</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group
              as={Col}
              controlId="marital"
              className="stepForm__group"
            >
              <Form.Label className="stepForm__label">
                Marital Status
              </Form.Label>
              <Form.Control as="select" className="stepForm__control">
                <option>Never Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </Form.Control>
            </Form.Group>
          </>
        )}
        {activeStep === 1 && (
          <>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="religion">
                <Form.Label className="stepForm__label">Religion</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Enter Religion"
                >
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="caste">
                <Form.Label className="stepForm__label">Caste</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Enter Caste"
                >
                  <option>Rajput</option>
                  <option>Ashokans</option>
                  <option>Cholas</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="mothertongue">
                <Form.Label className="stepForm__label">
                  Mother Tongue
                </Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Enter Mother Tongue"
                >
                  <option>Tamil</option>
                  <option>English</option>
                  <option>Hindi</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="occupation">
                <Form.Label className="stepForm__label">Occupation</Form.Label>
                <Form.Control as="select" className="stepForm__control">
                  <option>IT Software</option>
                  <option>Business</option>
                  <option>Government Sector</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group
              as={Col}
              controlId="qualification"
              className="stepForm__group"
            >
              <Form.Label className="stepForm__label">
                Highest Qualification
              </Form.Label>
              <Form.Control as="select" className="stepForm__control">
                <option>B.Sc</option>
                <option>B.E/B.Tech</option>
                <option>MBA</option>
              </Form.Control>
            </Form.Group>
          </>
        )}
        {activeStep === 2 && (
          <>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="father">
                <Form.Label className="stepForm__label">Father Is</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Father Occupation"
                >
                  <option>Retired</option>
                  <option>Government Sector</option>
                  <option>Private Sector</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="mother">
                <Form.Label className="stepForm__label">Mother Is</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Mother Occupation"
                >
                  <option>House wife</option>
                  <option>Working</option>
                  <option>Retired</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="brother">
                <Form.Label className="stepForm__label">Brothers</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="brother occupation"
                >
                  <option>Retired</option>
                  <option>Government Sector</option>
                  <option>Private Sector</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="sister">
                <Form.Label className="stepForm__label">Sisters</Form.Label>
                <Form.Control as="select" className="stepForm__control">
                  <option>House wife</option>
                  <option>Working</option>
                  <option>Retired</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group
              as={Col}
              controlId="location"
              className="stepForm__group"
            >
              <Form.Label className="stepForm__label">Located At</Form.Label>
              <Form.Control
                className="stepForm__control"
                placeholder="Lorem Ipsum is simply dummy text"
              />
            </Form.Group>
          </>
        )}
        {activeStep === 3 && (
          <>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="looking_for">
                <Form.Label className="stepForm__label">Looking For</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="gender"
                >
                  <option>Man</option>
                  <option>Woman</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="looking_occupation">
                <Form.Label className="stepForm__label">Occupation</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Occupation"
                >
                  <option>House wife</option>
                  <option>Working</option>
                  <option>Retired</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="looking_income">
                <Form.Label className="stepForm__label">Income</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="brother occupation"
                >
                  <option>0-2 lakhs</option>
                  <option>3-5 lakhs</option>
                  <option>6-10 lakhs</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="looking_age">
                <Form.Label className="stepForm__label">Age</Form.Label>
                <Form.Control as="select" className="stepForm__control">
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group
              as={Col}
              controlId="looking_location"
              className="stepForm__group"
            >
              <Form.Label className="stepForm__label">Location</Form.Label>
              <Form.Control as="select" className="stepForm__control">
                <option>Madhya Pradesh</option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="looking_qualification"
              className="stepForm__group"
            >
              <Form.Label className="stepForm__label">
                Highest Qualification
              </Form.Label>
              <Form.Control as="select" className="stepForm__control">
                <option>BE/BTech</option>
                <option>BSc</option>
                <option>MBA</option>
              </Form.Control>
            </Form.Group>
          </>
        )}
        <Row className="stepForm__actions col-lg-10">
          <Button
            className="stepForm__back"
            onClick={backStep}
            disabled={activeStep < 1}
          >
            <Image src={BackIcon} alt="back" height={15} />
          </Button>
          <Button className="stepForm__save">
            SKIP
            <Image src={SkipIcon} alt="skip" height={15} />
          </Button>
          <Button className="stepForm__submit">
            SAVE
            <Image src={SaveIcon} alt="save" height={20} />
          </Button>
          <Button
            className="stepForm__next"
            onClick={nextStep}
            disabled={activeStep > steps.length - 2}
          >
            <Image src={NextIcon} alt="next" height={15} />
          </Button>
        </Row>
        <p className="stepForm__postscript">
          Lorem ipsum is simply a dummy text of printing.
        </p>
        <p className="stepForm__links">
          <Link href="javascript:void(0)" className="stepForm__links__terms">
            Terms of Use
          </Link>
          and
          <Link href="javascript:void(0)" className="stepForm__links__privacy">
            Privacy Policy
          </Link>
        </p>
      </Form>
    </>
  );
}

export default StepForm;
