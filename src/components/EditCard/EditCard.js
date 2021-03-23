import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./EditCard.scss";

import { Card, Image, Col, Row, Spinner } from "react-bootstrap";

import Camera from "../../assets/icons/svg icon/camera.svg";
import Privacy from "../../assets/icons/svg icon/privacy.svg";
import ViewContact from "../../assets/icons/svg icon/View Contact1.svg";
import ViewContactWhite from "../../assets/icons/svg icon/View Contact1_.svg";
import Preview from "../../assets/icons/svg icon/preview.svg";
import Chat from "../../assets/icons/svg icon/Chat.svg";
import Send from "../../assets/icons/svg icon/Send request.svg";
import Calendar from "../../assets/icons/svg icon/calendar.svg";
import Kundli from "../../assets/icons/svg icon/Kundli Match.svg";
import Graph from "../../assets/icons/svg icon/graph.svg";
import Premium from "../../assets/icons/svg icon/premium.svg";
import EditIcon from "../../assets/icons/svg icon/edit.svg";
import dummyImage from "../../assets/images/dummy.png";
import { sendInterest, getOptions } from "../../services/profile";
import { useMutation, useQuery } from "react-query";
import useSnackBar from "../../hooks/SnackBarHook";
import { TextField, Select, MenuItem } from "@material-ui/core";

function EditCard({
  isFullCard,
  card: {
    first_name,
    last_name,
    id,
    age,
    dob: birth_date,
    premium,
    display_id,
    profile_photo_url,
    last_seen,
    height,
    contact_number,
    occupation,
    qualification,
    marital_status,
    mother_tongue,
    location,
    religion,
    caste,
    online,
    preference_match,
    total_photos
  }
}) {
  const [edit, setEdit] = useState({
      card: false
    }),
    [editForm, setEditForm] = useState({
      card: {}
    }),
    { data: Options, isSuccess: OptionsSuccess } = useQuery(
      "options",
      getOptions,
      {
        refetchOnWindowFocus: false
      }
    ),
    parseDate = date => {
      return new Intl.DateTimeFormat("en-AU", {
        day: "numeric",
        year: "2-digit",
        month: "short"
      })
        .format(new Date(date))
        .split(" ")
        .join(".");
    },
    handleEdit = name => {
      setEdit({ ...edit, [name]: !edit[name] });
    },
    getOptionsValue = (name, value) => {
      return Options?.results[name].filter(v => v.value === value)[0];
    },
    handleChange = newValue => {
      setEditForm({ ...editForm, ...newValue });
    },
    history = useHistory();
  useEffect(() => {
    OptionsSuccess &&
      setEditForm({
        card: {
          name: first_name + " " + last_name,
          marital_status: getOptionsValue("marital_status", marital_status).key,
          location: getOptionsValue("location", location)?.key
        }
      });
  }, [OptionsSuccess]);
  return (
    <section className="profile">
      <Card className="edit-profile__card flex-column flex-col flex-md-row">
        <Col className="edit-profile__card__left" md={4} xs={12}>
          <div className="edit-profile__card__left__container">
            <div className="edit-profile__card__left__container__img overflow-hidden">
              <Image
                src={profile_photo_url || dummyImage}
                alt="profile image"
              />
            </div>

            {premium && (
              <Image
                src={Premium}
                alt="premium banner"
                className="edit-profile__card__left__container__premium"
              />
            )}
            <a
              href="javascript:void(0)"
              className="edit-profile__card__left__container__camera"
            >
              <Image src={Camera} alt="camera" height="28" />
              <span className="edit-profile__card__left__container__camera__count">
                {total_photos}
              </span>
            </a>
          </div>
        </Col>
        <Col className="edit-profile__card__right" xs={12} sm={12} md={8}>
          <div className="edit-profile__card__right__container mr-5">
            <div className="d-flex mr-n5">
              <button
                className="border align-items-center bg-white border-danger d-flex ml-auto px-4 py-1 rounded-pill text-danger"
                onClick={() => handleEdit("card")}
              >
                <Image src={EditIcon} alt="Edit" height={18} className="mr-1" />
                {edit?.card ? "Save" : "Edit"}
              </button>
            </div>
            <Row className="flex-fill justify-content-between">
              <TextField
                className="col-6 my-2"
                label="Full Name"
                value={editForm?.card?.name || ""}
                disabled={!edit?.card}
                onChange={({ target: { value } }) =>
                  handleChange({ card: { ...editForm.card, name: value } })
                }
              />
              <TextField
                className="col-5 my-2"
                label="User ID"
                value={display_id}
                disabled
              />
            </Row>
            <Row className="flex-fill justify-content-between">
              <TextField
                className="col-6 my-2"
                type="date"
                label="Birth Date"
                value={birth_date}
                disabled={!edit?.card}
              />
              <Row className="col-5 p-0 justify-content-between">
                <TextField
                  className="col-5 my-2"
                  label="Age"
                  value={age}
                  disabled={!edit?.card}
                />
                <TextField
                  className="col-5 my-2"
                  label="Height"
                  value={height}
                  disabled={!edit?.card}
                />
              </Row>
            </Row>
            <Row className="flex-fill justify-content-between">
              <Select
                labelId="location"
                className="col-6 my-2"
                id="location"
                name="location"
                disabled={!edit?.card}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  }
                }}
                label="Marital Status"
                value={editForm?.card?.location || ""}
                onChange={({ target: { name, value } }) =>
                  handleChange({ [name]: value })
                }
              >
                {Options?.results?.location.map(loc => (
                  <MenuItem key={loc.key} value={loc.key}>
                    {loc.value}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                className="col-5 my-2"
                label="Contact Number"
                value={contact_number}
                disabled={!edit?.card}
              />
            </Row>
            <Row
              className={
                "edit-profile__card__right__container__actions flex-fill p-0 my-2"
              }
            >
              <Select
                labelId="marital_status"
                className="col-6 my-2"
                id="marital_status"
                name="marital_status"
                disabled={!edit?.card}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  }
                }}
                label="Marital Status"
                value={editForm?.card?.marital_status || ""}
                onChange={({ target: { name, value } }) =>
                  handleChange({ [name]: value })
                }
              >
                {Options?.results?.marital_status.map(maritalStatus => (
                  <MenuItem key={maritalStatus.key} value={maritalStatus.key}>
                    {maritalStatus.value}
                  </MenuItem>
                ))}
              </Select>
              <button
                className={
                  "edit-profile__card__right__container__actions__preview col-sm-5"
                }
                onClick={() => history.push('/profile')}
              >
                <Image src={Preview} alt="Preview Profile" height={18} />
                PROFILE PREVIEW
              </button>
            </Row>
          </div>
        </Col>
      </Card>
    </section>
  );
}

export default EditCard;
