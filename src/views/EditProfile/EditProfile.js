import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { Card, Col, Image, Nav, Row } from "react-bootstrap";
import { TextField, Select, MenuItem } from "@material-ui/core";

import { Layout, EditCard } from "../../components";
import EditIcon from "../../assets/icons/svg icon/edit.svg";
import "./EditProfile.scss";
import Hero from "../../assets/images/Profile/hero.png";

import About from "../../assets/icons/svg icon/about.svg";
import Education from "../../assets/icons/svg icon/Page-4.svg";
import Family from "../../assets/icons/svg icon/family.svg";
import Partner from "../../assets/icons/svg icon/partner.svg";
import Details from "../../assets/icons/svg icon/your Basic details.svg";
import EducationImg from "../../assets/icons/svg icon/Education & Career.svg";
import FamilyImg from "../../assets/icons/svg icon/Family Details.svg";
import AboutMe from "../../assets/icons/svg icon/About me.svg";
import PreferenceImg from "../../assets/icons/svg icon/partner preferences.svg";

import ProImg from "../../assets/images/Profile/img.png";
import {
  viewMyProfile,
  getOptions,
  updateProfile,
  updateFamilyDetails
} from "../../services/profile";

function EditProfile() {
  const [edit, setEdit] = useState({
      basic: false
    }),
    [editForm, setEditForm] = useState({
      basic: {}
    }),
    heroData = {
      title: "Make Profile your profile more interesting",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isSmallBanner: true,
      profileView: true
    },
    { mutate: BasicUpdate } = useMutation(formData =>
      updateProfile([data?.id, formData])
    ),
    { mutate: FamilyUpdate } = useMutation(formData =>
      updateFamilyDetails(formData)
    ),
    handleEdit = name => {
      switch (name) {
        case "basic":
          edit[name] &&
            BasicUpdate({
              mother_tongue: editForm?.basic?.mother_tongue,
              religion: editForm?.basic?.religion?.key,
              caste: editForm?.basic?.caste,
              emailID: editForm?.basic?.emailID,
              address: editForm?.basic?.address,
              alternate_emailID: editForm?.basic?.alternate_email,
              mobile_no: editForm?.basic?.mobile_no,
              alternate_mobile_no: editForm?.basic?.alternate_mobile_no
            });
          break;
        case "education":
          edit[name] &&
            BasicUpdate({
              qualification: editForm?.esucation?.qualification,
              other_degree: editForm?.education?.other_degree,
              org_name: editForm?.education?.org_name,
              employed_in: editForm?.education?.occupation,
              occupation: editForm?.education?.occupation,
              annual_income: editForm?.education?.annual_income
            });
          break;
        case "family":
          edit[name] &&
            FamilyUpdate({
              father_is: editForm?.family?.father,
              mother_is: editForm?.family?.mother,
              brothers: +editForm?.family?.brothers,
              sisters: +editForm?.family?.sisters,
              type: editForm?.family?.type,
              based: editForm?.family?.based
            });
          break;
        case "about":
          FamilyUpdate({
            about_family: editForm?.about?.me
          });
          break;
        case "partner":
          break;
      }
      setEdit({ ...edit, [name]: !edit[name] });
    },
    { data, isSuccess } = useQuery("profileData", viewMyProfile, {
      refetchOnWindowFocus: false
    }),
    { data: Options, isSuccess: OptionsSuccess } = useQuery(
      "options",
      getOptions,
      {
        refetchOnWindowFocus: false
      }
    ),
    getOptionsValue = (name, value) => {
      return Options?.results[name].filter(v => v.value === value)[0];
    },
    handleChange = newValue => {
      setEditForm({ ...editForm, ...newValue });
    },
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
    ];
  useEffect(() => {
    OptionsSuccess &&
      setEditForm({
        basic: {
          mother_tongue: getOptionsValue(
            "mother_tongue",
            data?.basic_info?.mother_tongue
          )?.key,
          religion: getOptionsValue("religion", data?.basic_info?.religion),
          address: data?.basic_info?.address,
          mobile_no: data?.basic_info?.contact_number,
          caste: Options?.results?.caste[data?.basic_info?.religion]?.filter(
            v => v.value === data?.basic_info?.caste
          )[0]?.key
        },
        education: {
          occupation: getOptionsValue(
            "occupation",
            data?.education_and_career?.occupation
          )?.key
        },
        family: {
          father: fatherOcc?.filter(
            v => v.key === data?.family_details?.father
          )[0]?.key,
          mother: motherOcc?.filter(
            v => v.key === data?.family_details?.mother
          )[0]?.key,
          brothers: data?.family_details?.brother,
          sisters: data?.family_details?.sister,
          type: data?.family_details?.type,
          based: data?.family_details?.based
        },
        about: {
          me: data?.about?.me
        }
      });
  }, [OptionsSuccess]);
  return (
    <Layout heroImg={Hero} heroData={heroData}>
      <section className="edit-profileCard col-xl-10 col-lg-12 col-md-12 col-sm-12 p-xl-0">
        {isSuccess && (
          <EditCard
            isFullCard
            card={{
              ...data?.basic_info,
              birth_date: data?.basic_info?.dob,
              profile_photo_url: data?.basic_info?.photo_url
            }}
          ></EditCard>
        )}
      </section>
      <section className="edit-profileView col-xl-10 col-lg-12 col-md-12 col-sm-12">
        <Nav
          className="edit-profileView__nav"
          defaultActiveKey="#edit-profileView__about"
        >
          <Nav.Item className="edit-profileView__nav__item">
            <Nav.Link
              className="edit-profileView__nav__item__link"
              href="#edit-profileView__about"
            >
              <Image
                className="edit-profileView__nav__item__link__img"
                height={25}
                src={About}
                alt="About"
              />
              <p className="edit-profileView__nav__item__link__text">About</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="edit-profileView__nav__item">
            <Nav.Link
              className="edit-profileView__nav__item__link"
              href="#edit-profileView__education"
            >
              <Image
                height={25}
                className="edit-profileView__nav__item__link__img"
                src={Education}
                alt="Education"
              />
              <p className="edit-profileView__nav__item__link__text">
                Education & Career
              </p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="edit-profileView__nav__item">
            <Nav.Link
              className="edit-profileView__nav__item__link"
              href="#edit-profileView__family"
            >
              <Image
                height={25}
                className="edit-profileView__nav__item__link__img"
                src={Family}
                alt="Family"
              />
              <p className="edit-profileView__nav__item__link__text">
                Family Details
              </p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="edit-profileView__nav__item">
            <Nav.Link
              className="edit-profileView__nav__item__link"
              href="#edit-profileView__preferences"
            >
              <Image
                height={25}
                className="edit-profileView__nav__item__link__img"
                src={Partner}
                alt="Preference"
              />
              <p className="edit-profileView__nav__item__link__text">
                Partner Preferences
              </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Card className="edit-profileView__card" id="edit-profileView__about">
          <div className="edit-profileView__card__header">
            <Image
              className="edit-profileView__card__header__img"
              src={Details}
              alt="details"
              height={50}
            />
            <div className="edit-profileView__card__header__content">
              <p className="edit-profileView__card__header__content__title">
                BASIC DETAILS
              </p>
              <p className="edit-profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
            <div className="d-flex ml-auto">
              <button
                className="border align-items-center bg-white border-danger d-flex px-md-4 px-2 py-1 rounded-pill text-danger"
                onClick={() => handleEdit("basic")}
              >
                <Image src={EditIcon} alt="Edit" height={18} className="mr-1" />
                {edit?.basic ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <Row className="edit-profileView__card__content">
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Mother Tongue
                </p>
                <Select
                  labelId="mother_tongue"
                  className="col-8 my-2"
                  id="mother_tongue"
                  name="mother_tongue"
                  disabled={!edit?.basic}
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    }
                  }}
                  label=""
                  value={editForm?.basic?.mother_tongue || ""}
                  onChange={({ target: { name, value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, [name]: value }
                    })
                  }
                >
                  {Options?.results?.mother_tongue.map(loc => (
                    <MenuItem key={loc.key} value={loc.key}>
                      {loc.value}
                    </MenuItem>
                  ))}
                </Select>
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label m-0">
                  Religion
                </p>
                <Select
                  labelId="religion"
                  disabled={!edit?.basic}
                  className="col-8 my-2"
                  id="religion"
                  name="religion"
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    }
                  }}
                  label=""
                  value={editForm?.basic?.religion || ""}
                  onChange={({ target: { name, value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, [name]: value }
                    })
                  }
                >
                  {Options?.results?.religion.map(loc => (
                    <MenuItem key={loc.key} value={loc}>
                      {loc.value}
                    </MenuItem>
                  ))}
                </Select>
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label m-0">
                  Caste
                </p>
                <Select
                  labelId="caste"
                  className="col-8 my-2"
                  disabled={!edit?.basic}
                  id="caste"
                  name="caste"
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    }
                  }}
                  label=""
                  value={editForm?.basic?.caste || ""}
                  onChange={({ target: { name, value } }) =>
                    handleChange({
                      basic: { ...editForm?.basic, [name]: value }
                    })
                  }
                >
                  {editForm?.basic?.religion?.value &&
                    Options?.results?.caste[
                      editForm?.basic?.religion?.value
                    ].map(loc => (
                      <MenuItem key={loc.key} value={loc.key}>
                        {loc.value}
                      </MenuItem>
                    ))}
                </Select>
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Email ID
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.basic?.email}
                  disabled={!edit?.basic}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, email: value }
                    })
                  }
                />
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item align-items-center">
                <p className="edit-profileView__card__content__item__label m-0">
                  Contact Address
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.basic?.address}
                  disabled={!edit?.basic}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, address: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center">
                <p className="edit-profileView__card__content__item__label m-0">
                  Alternate Email ID
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.basic?.alternate_email}
                  disabled={!edit?.basic}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, alternate_email: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center">
                <p className="edit-profileView__card__content__item__label m-0">
                  Mobile No.
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.basic?.mobile_no}
                  disabled={!edit?.basic}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, mobile_no: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center">
                <p className="edit-profileView__card__content__item__label m-0">
                  Alternate No.
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.basic?.alternate_mobile_no}
                  disabled={!edit?.basic}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      basic: { ...editForm.basic, alternate_mobile_no: value }
                    })
                  }
                />
              </Row>
            </Col>
            <Col className="col-12 col-lg-2 p-0 pl-md-1 pr-0 col">
              <Card className="info__card m-0 rounded">
                <div className="completeness align-items-center completeness d-flex font-weight-bolder justify-content-center rounded-circle">
                  {data?.basic_info?.completeness + "%"}
                </div>
                <p className="completeness__text font-weight-light mb-0 mt-3 text-nowrap">
                  Basic Details +{data?.basic_info?.completeness}%
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          className="edit-profileView__card"
          id="edit-profileView__education"
        >
          <div className="edit-profileView__card__header">
            <Image
              className="edit-profileView__card__header__img"
              src={EducationImg}
              alt="education"
              height={50}
            />
            <div className="edit-profileView__card__header__content">
              <p className="edit-profileView__card__header__content__title">
                EDUCATION & CAREER
              </p>
              <p className="edit-profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
            <div className="d-flex ml-auto">
              <button
                className="border align-items-center bg-white border-danger d-flex px-md-4 px-2 py-1 rounded-pill text-danger"
                onClick={() => handleEdit("education")}
              >
                <Image src={EditIcon} alt="Edit" height={18} className="mr-1" />
                {edit?.education ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <Row className="edit-profileView__card__content">
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Highest Education
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.education?.qualification}
                  disabled={!edit?.education}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      education: { ...editForm.education, qualification: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Other Degreee
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.education?.other_degree}
                  disabled={!edit?.education}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      education: { ...editForm.education, other_degree: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Organization Name
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.education?.org_name}
                  disabled={!edit?.education}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      education: { ...editForm.education, org_name: value }
                    })
                  }
                />
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Employed In
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.education?.employed_in}
                  disabled={!edit?.education}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      education: { ...editForm.education, employed_in: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Occupation
                </p>
                <Select
                  labelId="occupation"
                  disabled={!edit?.education}
                  className="col-8 my-2"
                  id="occupation"
                  name="occupation"
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    }
                  }}
                  label=""
                  value={editForm?.education?.occupation || ""}
                  onChange={({ target: { name, value } }) =>
                    handleChange({
                      education: { ...editForm.education, [name]: value }
                    })
                  }
                >
                  {Options?.results?.occupation.map(loc => (
                    <MenuItem key={loc.key} value={loc.key}>
                      {loc.value}
                    </MenuItem>
                  ))}
                </Select>
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Annual Income
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.education?.annual_income}
                  disabled={!edit?.education}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      education: { ...editForm.education, annual_income: value }
                    })
                  }
                />
              </Row>
            </Col>

            <Col className="col-12 col-lg-2 p-0 pl-md-1 pr-0 col">
              <Card className="info__card m-0 rounded">
                <div className="completeness align-items-center completeness d-flex font-weight-bolder justify-content-center rounded-circle">
                  {data?.education_and_career?.completeness + "%"}
                </div>
                <p className="completeness__text font-weight-light mb-0 mt-3 text-nowrap">
                  Education Details +{data?.education_and_career?.completeness}%
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card className="edit-profileView__card" id="edit-profileView__family">
          <div className="edit-profileView__card__header">
            <Image
              className="edit-profileView__card__header__img"
              src={FamilyImg}
              alt="family"
              height={50}
            />
            <div className="edit-profileView__card__header__content">
              <p className="edit-profileView__card__header__content__title">
                FAMILY DETAILS
              </p>
              <p className="edit-profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>

            <div className="d-flex ml-auto">
              <button
                className="border align-items-center bg-white border-danger d-flex px-md-4 px-2 py-1 rounded-pill text-danger"
                onClick={() => handleEdit("family")}
              >
                <Image src={EditIcon} alt="Edit" height={18} className="mr-1" />
                {edit?.family ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <Row className="edit-profileView__card__content">
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Father is
                </p>
                <Select
                  labelId="mother_tongue"
                  className="col-8 my-2"
                  id="father"
                  name="father"
                  disabled={!edit?.family}
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    }
                  }}
                  label=""
                  value={editForm?.family?.father || ""}
                  onChange={({ target: { name, value } }) =>
                    handleChange({
                      family: { ...editForm.family, [name]: value }
                    })
                  }
                >
                  {fatherOcc?.map(loc => (
                    <MenuItem key={loc.key} value={loc.key}>
                      {loc.value}
                    </MenuItem>
                  ))}
                </Select>
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Mother is
                </p>
                <Select
                  labelId="mother_tongue"
                  className="col-8 my-2"
                  id="mother"
                  name="mother"
                  disabled={!edit?.family}
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    }
                  }}
                  label=""
                  value={editForm?.family?.mother || ""}
                  onChange={({ target: { name, value } }) =>
                    handleChange({
                      family: { ...editForm.family, [name]: value }
                    })
                  }
                >
                  {motherOcc?.map(loc => (
                    <MenuItem key={loc.key} value={loc.key}>
                      {loc.value}
                    </MenuItem>
                  ))}
                </Select>
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Sister(s)
                </p>
                <TextField
                  type="number"
                  className="col-8 my-2"
                  label=""
                  value={editForm?.family?.sisters}
                  disabled={!edit?.family}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      family: { ...editForm.family, sisters: value }
                    })
                  }
                />
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Brother(s)
                </p>
                <TextField
                  type="number"
                  className="col-8 my-2"
                  label=""
                  value={editForm?.family?.brothers}
                  disabled={!edit?.family}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      family: { ...editForm.family, brothers: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Family Type
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.family?.type}
                  disabled={!edit?.family}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      family: { ...editForm.family, type: value }
                    })
                  }
                />
              </Row>
              <Row className="edit-profileView__card__content__item align-items-center mr-lg-5">
                <p className="edit-profileView__card__content__item__label">
                  Family Based
                </p>
                <TextField
                  className="col-8 my-2"
                  label=""
                  value={editForm?.family?.based}
                  disabled={!edit?.family}
                  onChange={({ target: { value } }) =>
                    handleChange({
                      family: { ...editForm.family, based: value }
                    })
                  }
                />
              </Row>
            </Col>
            <Col className="col-12 col-lg-2 p-0 pl-md-1 pr-0 col">
              <Card className="info__card m-0 rounded">
                <div className="completeness align-items-center completeness d-flex font-weight-bolder justify-content-center rounded-circle">
                  {data?.family_details?.completeness + "%"}
                </div>
                <p className="completeness__text font-weight-light mb-0 mt-3 text-nowrap">
                  Family Details +{data?.family_details?.completeness}%
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card className="edit-profileView__card">
          <div className="edit-profileView__card__header">
            <Image
              className="edit-profileView__card__header__img"
              src={AboutMe}
              alt="About me"
              height={50}
            />
            <div className="edit-profileView__card__header__content">
              <p className="edit-profileView__card__header__content__title">
                ABOUT ME
              </p>
              <p className="edit-profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>

            <div className="d-flex ml-auto">
              <button
                className="border align-items-center bg-white border-danger d-flex px-md-4 px-2 py-1 rounded-pill text-danger"
                onClick={() => handleEdit("about")}
              >
                <Image src={EditIcon} alt="Edit" height={18} className="mr-1" />
                {edit?.about ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <div className="edit-profileView__card__content">
            <p className="edit-profileView__card__content__desc">
              <TextField
                className="col-12 my-2"
                multiline
                label=""
                value={editForm?.about?.me}
                disabled={!edit?.about}
                onChange={({ target: { value } }) =>
                  handleChange({
                    about: { ...editForm.about, me: value }
                  })
                }
              />
            </p>
            <p className="edit-profileView__card__content__subheading">
              About My Family
            </p>
            <p className="edit-profileView__card__content__about">
              <TextField
                className="col-12 my-2"
                multiline
                label=""
                value={editForm?.about?.me}
                disabled={!edit?.about}
                onChange={({ target: { value } }) =>
                  handleChange({
                    about: { ...editForm.about, me: value }
                  })
                }
              />
            </p>
          </div>
        </Card>
        <Card
          className="edit-profileView__card"
          id="edit-profileView__preferences"
        >
          <div className="edit-profileView__card__header">
            <Image
              className="edit-profileView__card__header__img"
              src={PreferenceImg}
              alt="Partner preferences"
              height={50}
            />
            <div className="edit-profileView__card__header__content">
              <p className="edit-profileView__card__header__content__title">
                PARTNER PREFERENCES
              </p>
              <p className="edit-profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>

            <div className="d-flex ml-auto">
              <button
                className="border align-items-center bg-white border-danger d-flex px-md-4 px-2 py-1 rounded-pill text-danger"
                onClick={() => handleEdit("partner")}
              >
                <Image src={EditIcon} alt="Edit" height={18} className="mr-1" />
                {edit?.partner ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <Row className="edit-profileView__card__content">
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item">
                <p className="edit-profileView__card__content__item__label">
                  Looking For
                </p>
                <p className="edit-profileView__card__content__item__text">
                  {data?.partner_preferences?.age?.expected || "-"}
                </p>
              </Row>
              <Row className="edit-profileView__card__content__item">
                <p className="edit-profileView__card__content__item__label">
                  Occupation
                </p>
                <p className="edit-profileView__card__content__item__text">
                  {data?.partner_preferences?.height?.expected || "-"}
                </p>
              </Row>
              <Row className="edit-profileView__card__content__item">
                <p className="edit-profileView__card__content__item__label">
                  Age
                </p>
                <p className="edit-profileView__card__content__item__text">
                  {data?.partner_preferences?.marital_status?.expected || "-"}
                </p>
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-around">
              <Row className="edit-profileView__card__content__item">
                <p className="edit-profileView__card__content__item__label">
                  Annual Income
                </p>
                <p className="edit-profileView__card__content__item__text">
                  {data?.partner_preferences?.religion?.expected || "-"}
                </p>
              </Row>
              <Row className="edit-profileView__card__content__item">
                <p className="edit-profileView__card__content__item__label">
                  Highest Education
                </p>
                <p className="edit-profileView__card__content__item__text">
                  {data?.partner_preferences?.caste?.expected || "-"}
                </p>
              </Row>
              <Row className="edit-profileView__card__content__item">
                <p className="edit-profileView__card__content__item__label">
                  Location
                </p>
                <p className="edit-profileView__card__content__item__text">
                  {data?.partner_preferences?.income?.expected || "-"}
                </p>
              </Row>
            </Col>
            <Col className="col-12 col-lg-2 p-0 pl-md-1 pr-0 col">
              <Card className="info__card m-0 rounded">
                <div className="completeness align-items-center completeness d-flex font-weight-bolder justify-content-center rounded-circle">
                  {data?.partner_preferences?.completeness + "%"}
                </div>
                <p className="completeness__text font-weight-light mb-0 mt-3">
                  Partner Prefereneces +
                  {data?.partner_preferences?.completeness}%
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
      </section>
    </Layout>
  );
}

export default EditProfile;
