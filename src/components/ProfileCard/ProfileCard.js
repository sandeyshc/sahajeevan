import React, {useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import "./ProfileCard.scss";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Button} from 'react-bootstrap';


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
import { sendInterest, cancelInterest, acceptInterest, declineInterest, viewContact } from "../../services/profile";
import useSnackBar from "../../hooks/SnackBarHook";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Icon from '@material-ui/core/Icon';

function ProfileCard({
  isFullCard,
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
    income,
    location,
    religion,
    caste,
    online,
    interest_status,
    preference_match,
    total_photos,
    match_percentage
  }
}) {

   const [status, setStatus] = useState(interest_status);
   const [show, setShow] = useState(false);
   const [popupMsg, setPopupMsg] = useState("Empty data");
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


  const parseDate = date => {
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
    history = useHistory(),
    {
      mutate: SendInterestMutate,
      isLoading: SendInterestLoading,
      isError: SendErrorStatus,
      error: SendError,
      data: SendData
    } = useMutation(id => sendInterest(id)),
    {
      mutate: CancelInterestMutate,
      isLoading: CancelInterestLoading,
      isError: CancelErrorStatus,
      error: CancelError,
      data: CancelData
    } = useMutation(id => cancelInterest(id)),
    {
      mutate: AcceptInterestMutate,
      isLoading: AcceptInterestLoading,
      isError: AcceptErrorStatus,
      error: AcceptError,
      data: AcceptData
    } = useMutation(id => acceptInterest(id)),
    {
      mutate: DeclineInterestMutate,
      isLoading: DeclineInterestLoading,
      isError: DeclineErrorStatus,
      error: DeclineError,
      data: DeclineData
    } = useMutation(id => declineInterest(id)),
    {
      mutate: ViewContactMutate,
      isLoading: ViewContactLoading,
      isError: ViewContactErrorStatus,
      error: ViewContactError,
      data: ViewContactData
    } = useMutation(id => viewContact(id)),
    handleSendInterest = () => {
      SendInterestMutate(id);
    },
    handleCancelInterest = () => {
      CancelInterestMutate(id);
    },
    handleAcceptInterest = () => {
      AcceptInterestMutate(id);
    },
     handleDeclineInterest = () => {
      DeclineInterestMutate(id);
    },
    handleViewContact = () => {
      ViewContactMutate(id);
      setShow(true);
    };
  useEffect(state=> {
    if(SendErrorStatus){
        let msg = SendError ? SendError?.data : "Internet disconnected"
        message(msg);
       }
    if(SendData){
        message(SendData);
        setStatus(2);
        }
  }, [SendError, SendData]);

  useEffect(state => {
    if(CancelErrorStatus){
        let msg = CancelError ? CancelError?.data : "Internet disconnected"
        message(msg);
       }
    if (CancelData){
        message(CancelData);
        setStatus(1);
    }
  }, [CancelError, CancelData]);

  useEffect(state => {
    if(AcceptErrorStatus){
        let msg = AcceptError ? AcceptError?.data : "Internet disconnected"
        message(msg);
       }
    if (AcceptData){
        message(AcceptData);
        setStatus(3);
    }
  }, [AcceptError, AcceptData]);

  useEffect(state => {
    if(DeclineErrorStatus){
        let msg = DeclineError ? DeclineError?.data : "Internet disconnected"
        message(msg);
       }
    if (DeclineData){
        message(DeclineData);
        setStatus(4);
    }
  }, [DeclineError, DeclineData]);

  useEffect(state => {
      if(ViewContactErrorStatus){
       let msg = ViewContactError ? ViewContactError?.data : "Internet disconnected"
        setPopupMsg(msg);
        }
      if (ViewContactData){
            setPopupMsg(ViewContactData?.name + " : +91 " + ViewContactData?.contact_1);
        }
      }, [ViewContactErrorStatus, ViewContactData, ViewContactError]);


  return (
    <section className={isFullCard ? "profile" : "search-profile"}>
      <Card
        className="profile__card flex-column flex-col flex-md-row"

      >
        <Col className="profile__card__left" md={4} xs={12}>
          <div className="profile__card__left__container">
            {isFullCard ? (
              <div className="profile__card__left__container__img overflow-hidden">
                <Image
                  src={profile_photo_url || dummyImage}
                  alt="profile image"
                />
              </div>
            ) : (
              <span>
                  <Image
                    className="profile__card__left__container__bgimg overflow-hidden"
                    src={profile_photo_url || dummyImage}
                    alt="profile image"
                  />
                  <Image
                    className="profile__card__left__container__img overflow-hidden"
                    src={profile_photo_url || dummyImage}
                    alt="profile image"
                  />
              </span>
            )}
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
        <Col
          className="profile__card__right"
          xs={12}
          sm={12}
          md={8}
        >
          <div className="profile__card__right__container">
            <Row className="profile__card__right__container__header">
              <p className="profile__card__right__container__header__name d-flex align-items-center"
              onClick={() => !isFullCard && !!id && history.push(`/profile/${id}`)}>
                <div
                  className="profile__card__right__container__header__name__status d-inline-block mr-2 rounded-circle"
                  style={{ borderColor: online ? "#52ac3b" : "#f2ae30" }}
                ></div>
                {name} ({display_id})
              </p>
              <a
                  href="javascript:void(0)"
                  className="vprofile__card__left__container__privacy"
                >
                  <Image src={Privacy} alt="privacy" height="20" />
                </a>
            </Row>
            <hr className="profile__card__right__container__splitter" />
            <Row
              className={
                "profile__card__right__container__details" +
                (isFullCard ? " pt-md-4 px-md-4 pt-3" : "")
              }
            >
              <Col className="profile__card__right__container__details__picture col-lg-3">
                <Card>
                  <div className="d-flex flex-column">
                    <SemiCircleProgressBar diameter={90} strokeWidth={5} percentage={match_percentage} stroke={'#ee4641'} />
                    <p className="text-center font-weight-bolder text-danger m-0">
                      {preference_match}
                    </p>
                  </div>
                  <hr className="m-0" />
                  <p
                    className={"text-center m-0 " + (isFullCard ? "py-2" : "")}
                  >
                    <Image
                      src={Kundli}
                      alt="Kundli match"
                      height={isFullCard ? "20" : "10"}
                      className="mr-1"
                    />
                    Kundli Match
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
                <Row>{income}</Row>
                <Row>{marital_status}</Row>
              </Col>
            </Row>
            <Row
              className={
                "profile__card__right__container__actions d-sm-flex" +
                (isFullCard ? " flex-md-nowrap" : " d-none")
              }
            >

              {status < 3 && (
               <span>
                 <button
                    className={
                      "profile__card__right__container__actions__view" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                    onClick={e => {
                      e.stopPropagation();
                      handleViewContact();
                    }}
                  >
                    <Image src={ViewContact} alt="View Contact" height={18} />
                    View Contact
                  </button>


                 <button
                    className={
                      "profile__card__right__container__actions__single" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                    onClick={e => {
                      e.stopPropagation();
                      status === 1 && handleSendInterest();
                      status === 2 && handleCancelInterest();
                    }}
                  >
                   {SendInterestLoading || CancelInterestLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        &nbsp; &nbsp; &nbsp; Loading...
                      </>
                    ) : (
                      <>
                        <Image src={Send} alt="Send Request" height={18} />
                        {status === 1 && "Send Interest"}
                        {status === 2 && "Cancel Interest"}
                        {status === 3 && "Accepted"}
                      </>
                    )}
                 </button>
               </span>
              )}

              {status === 3 && (
               <span>
                 <button
                    className={
                      "profile__card__right__container__actions__view" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                    onClick={e => {
                      e.stopPropagation();
                      handleViewContact();
                    }}
                  >
                    <Image src={ViewContact} alt="View Contact" height={18} />
                    View Contact
                  </button>
                  <button
                    className={
                      "profile__card__right__container__actions__chat" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                  >
                    <Image src={Chat} alt="Chat" height={18} />
                    Chat
                  </button>

                 <span className={"profile__card__right__container__actions__taken"}>Accepted</span>
               </span>
              )}


              {status === 4 && ( //Declined accept again
              <span>
                  <button
                    className={
                      "profile__card__right__container__actions__view" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                    onClick={e => {
                      e.stopPropagation();
                      handleViewContact();
                    }}
                  >
                    <Image src={ViewContact} alt="View Contact" height={18} />
                    View Contact
                  </button>
                  <span className={"profile__card__right__container__actions__taken"}>Rejected</span>
                  <span className={"profile__card__right__container__actions__changed_mind"}>
                      <span className={"profile__card__right__container__actions__changed_mind_text"}>Changed your mind?</span>
                          <span
                            className={
                              "profile__card__right__container__actions__changed_mind__button " +
                              (isFullCard
                                ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                                : "")
                            }
                            onClick={e => {
                              e.stopPropagation();
                              handleAcceptInterest();
                            }}
                          >

                           {AcceptInterestLoading ? (
                              <>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                                &nbsp; Loading...
                              </>
                            ) : (
                              <>
                               <Image src={ViewContact} alt="Send Request" height={18} />
                                Accept
                              </>
                            )}
                       </span>
                    </span>
              </span>
              )}


              {status === 5 && ( //if there is an incoming request show only approve/reject buttons
              <span>
                  <button
                    className={
                      "profile__card__right__container__actions__view" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                    onClick={e => {
                      e.stopPropagation();
                      handleViewContact();
                    }}
                  >
                    <Image src={ViewContact} alt="View Contact" height={18} />
                    View Contact
                  </button>

                  <span className={"profile__card__right__container__actions__approve_reject"}>

                    <span
                        className={
                          "profile__card__right__container__actions__accept" +
                          (isFullCard
                            ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                            : "")
                        }
                        onClick={e => {
                          e.stopPropagation();
                          handleAcceptInterest();
                        }}
                      >
                       {AcceptInterestLoading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            &nbsp; Loading...
                          </>
                        ) : (
                          <>
                            <Image src={Send} alt="Send Request" height={18} />
                            Accept
                          </>
                        )}
                      </span>

                      <span
                        className={
                          "profile__card__right__container__actions__reject" +
                          (isFullCard
                            ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                            : "")
                        }
                        onClick={e => {
                          e.stopPropagation();
                          handleDeclineInterest();
                        }}
                      >
                       {DeclineInterestLoading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            &nbsp; Loading...
                          </>
                        ) : (
                          <>
                           <Image src={ViewContact} alt="Send Request" height={18} />
                            Reject
                          </>
                        )}
                      </span>
                    </span>
              </span>
              )}

              {status === 6 && ( //if she has has declined your request
              <span>
                  She has declined your request.
               </span>
              )}
              {status === 7 && ( //if he has has declined your request
              <span>
                  He has declined your request.
               </span>
              )}

            </Row>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="profile__modal__header">
                    <Icon>lock</Icon> &nbsp; &nbsp; &nbsp; Private data
                </Modal.Header>
                <Modal.Body >

                {ViewContactLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    &nbsp; &nbsp; &nbsp; Loading...
                  </>
                ) : (
                  <>
                  <div className="profile__modal__body" dangerouslySetInnerHTML={{__html: popupMsg}} />
                  </>
                )}

                </Modal.Body>
                    <Modal.Footer>
                     <Button variant="danger" onClick={handleClose}>
                        Upgrade
                      </Button>
                      <Button variant="warning" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                </Modal>

          </div>
        </Col>
      </Card>
    </section>
  );
}

export default ProfileCard;
