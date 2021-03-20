import React, { useEffect } from "react";
import "./ProfileCard.scss";

import { Card, Image, Col, Row, Spinner } from "react-bootstrap";

import Camera from "../../assets/icons/svg icon/camera.svg";
import Privacy from "../../assets/icons/svg icon/privacy.svg";
import ViewContact from "../../assets/icons/svg icon/View Contact1.svg";
import ViewContactWhite from "../../assets/icons/svg icon/View Contact1_.svg";
import Share from "../../assets/icons/svg icon/Share profile.svg";
import Chat from "../../assets/icons/svg icon/Chat.svg";
import Send from "../../assets/icons/svg icon/Send request.svg";
import Calendar from "../../assets/icons/svg icon/calendar.svg";
import Kundli from "../../assets/icons/svg icon/Kundli Match.svg";
import Graph from "../../assets/icons/svg icon/graph.svg";
import Premium from "../../assets/icons/svg icon/premium.svg";
import dummyImage from "../../assets/images/dummy.png";
import { sendInterest } from "../../services/profile";
import { useMutation } from "react-query";
import useSnackBar from "../../hooks/SnackBarHook";

function ProfileCard({
  isFullCard,
  profileImage,
  card: {
    name,
    id,
    age,
    premium,
    display_id,
    profile_photo_url,
    last_seen,
    height,
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
  const uploadPhoto = () => {
      document.getElementsByName("upload")[0].click();
    },
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
    message = useSnackBar(),
    {
      mutate: SendInterestMutate,
      isLoading: SendInterestLoading,
      isError,
      error
    } = useMutation(id => sendInterest(id)),
    handleSendInterest = () => {
      SendInterestMutate(id);
    };
  useEffect(() => {
    isError && message(error?.data);
  }, [isError]);
  return (
    <section className={isFullCard ? "profile" : "search-profile"}>
      <Card className="profile__card flex-column flex-sm-row">
        <Col className="profile__card__left" sm={4} xs={12}>
          <div className="profile__card__left__container">
            <Image
              src={profile_photo_url || dummyImage}
              alt="profile image"
              className="profile__card__left__container__img"
            />
            {premium && (
              <Image
                src={Premium}
                alt="premium banner"
                className="profile__card__left__container__premium"
              />
            )}
            <a
              href="javascript:void(0)"
              className="profile__card__left__container__camera"
            >
              <Image src={Camera} alt="camera" height="28" />
              <span className="profile__card__left__container__camera__count">
                {total_photos}
              </span>
            </a>

            <a
              href="javascript:void(0)"
              className="profile__card__left__container__privacy"
            >
              <Image src={Privacy} alt="privacy" height="20" />
            </a>
          </div>
        </Col>
        <Col className="profile__card__right" sm={8}>
          <div className="profile__card__right__container">
            <Row className="profile__card__right__container__header">
              <p className="profile__card__right__container__header__name d-flex align-items-center">
                <div
                  className="profile__card__right__container__header__name__status d-inline-block mr-2 rounded-circle"
                  style={{ borderColor: online ? "#52ac3b" : "#f2ae30" }}
                ></div>
                {name} ({display_id})
              </p>
              <p className="profile__card__right__container__header__seen d-none d-md-block">
                <Image
                  src={Calendar}
                  alt="Calendar"
                  className="profile__card__right__container__header__seen__calendar"
                />
                Last seen on {parseDate(last_seen)}
              </p>
            </Row>
            <hr className="profile__card__right__container__splitter" />
            <Row className="profile__card__right__container__details">
              <Col className="profile__card__right__container__details__picture col-lg-3">
                <Card>
                  <p className="text-center font-weight-bolder text-danger my-3">
                    {preference_match}
                  </p>
                  <hr />
                  <p>
                    <Image src={Kundli} alt="Kundli match" height="10" />
                    Preference Match
                  </p>
                </Card>
              </Col>
              <Col className="profile__card__right__container__details__personal col-lg-3">
                <Row>
                  {age} yrs, {height}
                </Row>
                <Row>{qualification}</Row>
                <Row>
                  {religion}
                  <span className="d-inline d-lg-none"> - {caste}</span>
                </Row>
                <Row className="d-none d-lg-flex">{caste}</Row>
                <Row className="d-flex d-lg-none">
                  {mother_tongue}, {location}
                </Row>
              </Col>
              <Col className="profile__card__right__container__details__professional d-none d-lg-block col-lg-5">
                <Row>{location}</Row>
                <Row>{occupation}</Row>
                <Row>Rs. 5 - 7.5 Lakh, Buxar & Amingaon</Row>
                <Row>{marital_status}</Row>
              </Col>
            </Row>
            <Row className="profile__card__right__container__actions d-none d-sm-flex">
              <button className="profile__card__right__container__actions__view">
                <Image src={ViewContact} alt="View Contact" height={18} />
                View Contact
              </button>
              <button
                className="profile__card__right__container__actions__send"
                onClick={handleSendInterest}
              >
                {SendInterestLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Image src={Send} alt="Send Request" height={18} />
                    Send Interest
                  </>
                )}
              </button>
              <button className="profile__card__right__container__actions__chat">
                <Image src={Chat} alt="Chat" height={18} />
                Chat
              </button>
              <button className="profile__card__right__container__actions__share">
                <Image src={Share} alt="Share Profile" height={18} />
                Share Profile
              </button>
            </Row>
          </div>
        </Col>
      </Card>
    </section>
  );
}

export default ProfileCard;
