import React, { useState, useEffect } from "react";
import "./StepForm.scss";
import Stepper from "react-stepper-horizontal";
import { Form, Button, Row, Col, Image, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import {
  getOptions,
  createProfile,
  updateProfile,
  saveFilter
} from "../../services/profile";

import BackIcon from "../../assets/icons/svg icon/next (1).svg";
import NextIcon from "../../assets/icons/svg icon/next (-1.svg";
import SkipIcon from "../../assets/icons/svg icon/skip.svg";
import SaveIcon from "../../assets/icons/svg icon/save-file.svg";
import SaveSearch from "../../assets/icons/svg icon/search-interface-symbol.svg";
import { DateTime } from "luxon";
import BasicSearch from "./BasicSearch"

function StepForm({ setActive, close }) {
  const [activeStep, setActiveStep] = useState(0),
    [profileData, setProfileData] = useState({}),
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
          gender,
          location,
          income
        }
      },
      isSuccess: optionsSuccess
    } = useQuery("getOptions", getOptions),
    history = useHistory(),
    {
      mutate: CreateProfile,
      isLoading: CreateProfileLoading,
      error: CreateProfileError,
      isSuccess: CreateProfileSuccess,
      data: CreateProfileData
    } = useMutation(formData => createProfile(formData)),
    {
      mutate: UpdateProfile,
      isLoading: UpdateProfileLoading,
      error: UpdateProfileError,
      isSuccess: UpdateProfileSuccess,
      data: UpdateProfileData
    } = useMutation((id, formData) => updateProfile(id, formData)),

    steps = [
      { title: "Step 1" },
      { title: "Step 2" },
      { title: "Step 3" }
    ],
    fatherOcc = [
      {
        key: "government_sector",
        value: "Government Sector"
      },
      {
        key: "private_sector",
        value: "Private Sector"
      },
      {
        key: "business_man",
        value: "Business man"
      },
      {
        key: "retired",
        value: "Retired"
      },
      {
        key: "no_more",
        value: "No More"
      }
    ],
    motherOcc = [
      {
        key: "house_wife",
        value: "House Wife"
      },
      {
        key: "government_sector",
        value: "Government Sector"
      },
      {
        key: "private_sector",
        value: "Private Sector"
      },
      {
        key: "business_woman",
        value: "Business woman"
      },
      {
        key: "retired",
        value: "Retired"
      },
      {
        key: "no_more",
        value: "No More"
      }
    ],
    initializeDefaults = () => {
      setProfileData({
        location: location[0].key,
        height: height[0].key,
        marital_status: marital_status[0].key,
        gender: gender[0].key,
        religion: religion[0].value,
        caste: caste[religion[0].value][0].key,
        mother_tongue: mother_tongue[0].key,
        occupation: occupation[0].key,
        qualification: qualification[0].key,
        partner_gender: 1,
        partner_occupation: 1,
        partner_income: 2,
        partner_age: 12,
        partner_location: 2,
        partner_qualification: 2
      });
    },
    nextStep = () => {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
        setActive(activeStep + 1);
      }
      else {
        close();
        history.push("/home");
      }
    },
    backStep = () => {
      setActiveStep(activeStep - 1);
      setActive(activeStep - 1);
    },
    handleChange = ({ target: { name, value } }) => {
      setProfileData({ ...profileData, [name]: value });
    },
    populateAge = () => {
      setProfileData({
        ...profileData,
        age: parseInt(
          DateTime.fromJSDate(new Date())
            .diff(DateTime.fromISO(profileData.birth_date), ["years"])
            .toObject().years
        )
      });
    },
    handleSubmit = e => {
      e.preventDefault();
      switch (activeStep) {
        case 0:
          CreateProfile({
            first_name: profileData.first_name,
            last_name: profileData.last_name,
            birth_date: DateTime.fromISO(profileData.birth_date).toFormat(
              "dd-MM-yyyy"
            ),
            age: profileData.age,
            location: profileData.location,
            height: +profileData.height,
            marital_status: profileData.marital_status,
            gender: profileData.gender
          });
          break;
        case 1:
          UpdateProfile([
            CreateProfileData?.id,
            {
              religion: religion?.filter(
                val => val.value === profileData.religion
              )[0]?.key,
              caste: profileData.caste,
              mother_tongue: profileData.mother_tongue,
              occupation: profileData.occupation,
              qualification: profileData.qualification
            }
          ]);
          break;

        case 2:
          saveFilter({
            gender: profileData.partner_gender,
            occupation: [profileData.partner_occupation],
            qualification: [profileData.partner_qualification],
            income: [profileData.partner_income],
            age: {
              from: profileData.partner_age,
              to: +profileData.partner_age + 50
            },
            location: [profileData.location],
            height: {
              from: 4.5,
              to: 5.5
            },
            marital_status: marital_status.filter(v => v.key),
            mother_tongue: [profileData.mother_tongue],
            religion: religion?.filter(
              val => val.value === profileData.religion
            )[0]?.key,
            caste: caste[profileData.religion].map(v => v.key)
          });
          history.push("/searchresults");
          break;
      }
    };

  useEffect(() => {
    if (CreateProfileSuccess || UpdateProfileSuccess ) {
      nextStep();
    }
    if (optionsSuccess) {
      initializeDefaults();
    }
  }, [
    CreateProfileSuccess,
    UpdateProfileSuccess,
    optionsSuccess,
  ]);
  return (
    <>
      <div className="stepper">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          size={35}
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


        {activeStep === 0 && (
          <>
           <Form className="stepForm" onSubmit={handleSubmit}>
            <Form.Row className="stepForm__group flex-column flex-lg-row">
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
                  onBlur={populateAge}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="age">
                <Form.Label className="stepForm__label">Age</Form.Label>
                <Form.Control
                  className="stepForm__control"
                  name="age"
                  value={profileData.age}
                  disabled
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group flex-column flex-lg-row">
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
                  {height?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group flex-column flex-lg-row">
              <Form.Group as={Col} controlId="gender">
                <Form.Label className="stepForm__label">Gender</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  name="gender"
                  onChange={handleChange}
                  required
                >
                  {gender?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
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
                  {marital_status?.map(opt => (
                    <option key={opt?.key} value={opt?.key}>
                      {opt?.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
             <Row className="stepForm__actions flex-column flex-sm-row col-12 col-lg-10">
              <Button className="stepForm__submit" type="submit">
              {CreateProfileLoading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    &nbsp; &nbsp; &nbsp; Loading...
                  </>
                ) : (
                  <>
                     SAVE & Next
                        <Image
                          src={SaveIcon}
                          alt="save"
                          height={20}
                        />
                  </>
                )}
              </Button>
        </Row>
        </Form>
          </>
        )}

        {activeStep === 1 && (
          <>
          <Form className="stepForm" onSubmit={handleSubmit}>
            <Form.Row className="stepForm__group flex-column flex-lg-row">
              <Form.Group as={Col} controlId="religion">
                <Form.Label className="stepForm__label">Religion</Form.Label>
                <Form.Control
                  as="select"
                  className="stepForm__control"
                  placeholder="Enter Religion"
                  name="religion"
                  onChange={handleChange}
                >
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
                  {profileData?.religion &&
                    caste[profileData?.religion].map(opt => (
                      <option key={opt?.key} value={opt?.key}>
                        {opt?.value}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="stepForm__group flex-column flex-lg-row">
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
                {qualification?.map(opt => (
                  <option key={opt?.key} value={opt?.key}>
                    {opt?.value}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>


              <Row className="stepForm__actions flex-column flex-sm-row col-12 col-lg-10">
              <Button className="stepForm__submit" type="submit">
               {UpdateProfileLoading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    &nbsp; &nbsp; &nbsp; Loading...
                  </>
                ) : (
                  <>
                     SAVE & Next
                        <Image
                          src={SaveIcon}
                          alt="save"
                          height={20}
                        />
                  </>
                )}
              </Button>
            </Row>
            </Form>


          </>
        )}

        {activeStep === 2 && (
          <>
            <BasicSearch />
          </>
        )}

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
    </>
  );
}

export default StepForm;
