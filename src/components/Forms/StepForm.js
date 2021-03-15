import React, { useState, useEffect } from "react";
import "./StepForm.scss";
import Stepper from "react-stepper-horizontal";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import {
  getOptions,
  createProfile,
  updateProfile
} from "../../services/profile";

import BackIcon from "../../assets/icons/svg icon/next (1).svg";
import NextIcon from "../../assets/icons/svg icon/next (-1.svg";
import SkipIcon from "../../assets/icons/svg icon/skip.svg";
import SaveIcon from "../../assets/icons/svg icon/save-file.svg";

function StepForm({ setActive, close }) {
  const [activeStep, setActiveStep] = useState(0),
    [profileData, setProfileData] = useState(0),
    {
      data: {
        results: {
          religion,
          marital_status,
          occupation,
          mother_tongue,
          qualification,
          caste,
          height,
          age,
          location
        }
      }
    } = useQuery("getOptions", getOptions),
    history = useHistory(),
    {
      mutate: CreateProfile,
      error: CreateProfileError,
      isSuccess: CreateProfileSuccess,
      data: CreateProfileData
    } = useMutation(formData => createProfile(formData)),
    {
      mutate: UpdateProfile,
      error: UpdateProfileError,
      isSuccess: UpdateProfileSuccess,
      data: UpdateProfileData
    } = useMutation((id, formData) => updateProfile(id, formData)),
    steps = [
      { title: "Step 1" },
      { title: "Step 2" },
      { title: "Step 3" },
      { title: "Step 4" }
    ],
    nextStep = () => {
      if (activeStep < steps.length) {
        setActiveStep(activeStep + 1);
        setActive(activeStep + 1);
      } else {
        close();
      }
    },
    backStep = () => {
      setActiveStep(activeStep - 1);
      setActive(activeStep - 1);
    },
    handleChange = ({ target: { name, value } }) => {
      setProfileData({ ...profileData, [name]: value });
    },
    handleSubmit = e => {
      e.preventDefault();
      switch (activeStep) {
        case 0:
          CreateProfile({
            first_name: profileData.first_name,
            last_name: profileData.last_name,
            birth_date: profileData.birth_date
              .split("-")
              .reverse()
              .join("-"),
            age: profileData.age,
            location: profileData.location,
            height: +profileData.height,
            marital_status: profileData.marital_status,
            gender: 1
          });
          break;
        case 1:
          UpdateProfile([
            CreateProfileData?.id,
            {
              religion: religion?.filter(
                val => val.value === profileData.religion
              )[0]?.id,
              caste: profileData.caste,
              mother_tongue: profileData.mother_tongue,
              occupation: profileData.occupation,
              qualification: profileData.qualification
            }
          ]);
          break;
        case 2:
          nextStep();
          break;
        case 3:
          history.push("/home");
          close();
          break;
      }
    };

  useEffect(() => {
    if (CreateProfileSuccess || UpdateProfileSuccess) {
      nextStep();
    }
  }, [CreateProfileSuccess, UpdateProfileSuccess]);
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

      <Form className="stepForm" onSubmit={handleSubmit}>
        {activeStep === 0 && (
          <>
            <Form.Row className="stepForm__group">
              {!!CreateProfileError && (
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  {CreateProfileError?.data}
                </Form.Control.Feedback>
              )}
              <Form.Group as={Col} controlId="firstname">
                <Form.Label className="stepForm__label">First Name</Form.Label>
                <Form.Control
                  name="first_name"
                  className="stepForm__control"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastname">
                <Form.Label className="stepForm__label">Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  className="stepForm__control"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="birth">
                <Form.Label className="stepForm__label">Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  className="stepForm__control"
                  name="birth_date"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="age">
                <Form.Label className="stepForm__label">Age</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  name="age"
                  onChange={handleChange}
                  required
                >
                  <option></option>
                  {age?.map(opt => (
                    <option key={opt?.key}>{opt?.value}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group">
              <Form.Group as={Col} controlId="residing">
                <Form.Label className="stepForm__label">Location</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Enter Residing at"
                  name="location"
                  onChange={handleChange}
                  required
                >
                  <option></option>
                  {location?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="height">
                <Form.Label className="stepForm__label">Height</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  name="height"
                  onChange={handleChange}
                  required
                >
                  <option></option>
                  {height?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
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
              <Form.Control
                as="select"
                className="stepForm__control"
                name="marital_status"
                onChange={handleChange}
                required
              >
                <option></option>
                {marital_status?.map(opt => (
                  <option key={opt?.key} value={opt?.key}>
                    {opt?.value}
                  </option>
                ))}
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
                  name="religion"
                  onChange={handleChange}
                >
                  <option></option>
                  {religion.map(opt => (
                    <option key={opt?.key} value={opt?.value}>
                      {opt?.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="caste">
                <Form.Label className="stepForm__label">Caste</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Enter Caste"
                  name="caste"
                  onChange={handleChange}
                  disabled={!profileData?.religion}
                >
                  <option></option>
                  {profileData?.religion &&
                    caste[profileData?.religion].map(opt => (
                      <option key={opt?.key} value={opt?.key}>
                        {opt?.value}
                      </option>
                    ))}
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
                  name="mother_tongue"
                  onChange={handleChange}
                >
                  <option></option>
                  {mother_tongue?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="occupation">
                <Form.Label className="stepForm__label">Occupation</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  name="occupation"
                  onChange={handleChange}
                >
                  <option></option>
                  {occupation?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
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
              <Form.Control
                as="select"
                className="stepForm__control"
                name="qualification"
                onChange={handleChange}
              >
                <option></option>
                {qualification?.map(opt => (
                  <option key={opt?.key} value={opt?.key}>
                    {opt?.value}
                  </option>
                ))}
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
            className="stepForm__save"
            onClick={nextStep}
            disabled={activeStep < 2}
          >
            SKIP
            <Image src={SkipIcon} alt="skip" height={15} />
          </Button>
          <Button className="stepForm__submit" type="submit">
            {activeStep === 3 ? "Search" : "SAVE & Next"}
            <Image src={SaveIcon} alt="save" height={20} />
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
