import React, {useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import "./ViewProfileCard.scss";

import { Card, Image, Col, Row, Spinner, Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Button} from 'react-bootstrap';

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
import { sendInterest, cancelInterest, acceptInterest, declineInterest,
viewContact, getMyPhotos, viewOthersPhotos } from "../../services/profile";
import useSnackBar from "../../hooks/SnackBarHook";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss"
import Icon from '@material-ui/core/Icon';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';


function ViewProfileCard({
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
    match_percentage,
    shortlisted
  }
}) {

   const [status, setStatus] = useState(interest_status);

   const [showViewContact, setShowViewContact] = useState(false);
   const [popupMsg, setPopupMsg] = useState("Empty data");
   const handleMsgPopupClose = () => setShowViewContact(false);
   const handleMsgPopupShow = () => setShowViewContact(true);

   const [showImages, setShowImages] = useState(false);
   const [images, setImages] = useState([]);
   const handleImagesPopupClose = () => setShowImages(false);
   const handleImagesPopupShow = () => setShowImages(true);


//   const images = [
//                  {
//                    original: 'https://picsum.photos/id/1018/1000/600/',
//                    thumbnail: 'https://picsum.photos/id/1018/250/150/',
//                  },
//                  {
//                    original: 'https://picsum.photos/id/1015/1000/600/',
//                    thumbnail: 'https://picsum.photos/id/1015/250/150/',
//                  },
//                  {
//                    original: 'https://picsum.photos/id/1019/1000/600/',
//                    thumbnail: 'https://picsum.photos/id/1019/250/150/',
//                  },
//                  {
//                    original: 'https://picsum.photos/id/1019/1000/600/',
//                    thumbnail: 'https://picsum.photos/id/1019/250/150/',
//                  },
//                  {
//                    original: 'https://picsum.photos/id/1019/1000/600/',
//                    thumbnail: 'https://picsum.photos/id/1019/1000/600/',
//                  },
//                ];

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
    {
      mutate: GetPhotosMutate,
      isLoading: GetPhotosLoading,
      isError: GetPhotosErrorStatus,
      error: GetPhotosError,
      data: GetPhotosData
    } = useMutation(id => viewOthersPhotos(id)),
    handleGetPhotos = () => {
    if(!!images){
        GetPhotosMutate(id);
    }
    handleImagesPopupShow(true);
    },
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
      handleMsgPopupShow(true);
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

  useEffect(state => {
      if(GetPhotosErrorStatus){
       let msg = GetPhotosError ? GetPhotosError?.data : "Internet disconnected"
        message(msg);
        }
      if (GetPhotosData){
            setImages(GetPhotosData?.results);
        }
      }, [GetPhotosErrorStatus, GetPhotosData, GetPhotosError]);



  return (
    <section className={isFullCard ? "vprofile" : "view-profile"}>
      <Card
        className="vprofile__card flex-column flex-col flex-md-row"
        onClick={() => !isFullCard && !!id && history.push(`/profile/${id}`)}
      >
        <Col className="vprofile__card__left" md={4} xs={12}>
          <div className="vprofile__card__left__container">
           <div className="vprofile__card__left__container__img overflow-hidden"
            onClick={e => {
                  e.stopPropagation();
                  handleGetPhotos();
                }}
           >
            {isFullCard ? (
                <Image
                  src={profile_photo_url || dummyImage}
                  alt="profile image"
                />
            ) : (
              <Image
                src={profile_photo_url || dummyImage}
                alt="profile image"
              />
            )}
            </div>
            {premium && (
              <Image
                src={Premium}
                alt="premium banner"
                className="vprofile__card__left__container__premium"
              />
            )}
            <a
              href="javascript:void(0)"
              className="vprofile__card__left__container__camera"
            >
              <Image src={Camera} alt="camera" height="28" />
              <span className="vprofile__card__left__container__camera__count">
                {total_photos}
              </span>
            </a>


          </div>
        </Col>
        <Col
          className="vprofile__card__right"
          xs={12}
          sm={isFullCard ? 12 : 8}
          md={8}
        >
          <div className="vprofile__card__right__container">
            <Row className="vprofile__card__right__container__header">
              <p className="vprofile__card__right__container__header__name d-flex align-items-center">
                <div
                  className="vprofile__card__right__container__header__name__status d-inline-block mr-2 rounded-circle"
                  style={{ borderColor: online ? "#52ac3b" : "#f2ae30" }}
                ></div>
                {name} ({display_id})
              </p>
                {shortlisted ?
                  <a href="javascript:void(0)" className="vprofile__card__left__container__privacy">
                <StarOutlinedIcon color="secondary"/>
                </a>
                :
                <a href="javascript:void(0)" className="vprofile__card__left__container__privacy">
                    <StarOutlineOutlinedIcon color="primary" />
                </a>
                 }

            </Row>
            <hr className="vprofile__card__right__container__splitter" />
            <Row
              className={
                "vprofile__card__right__container__details" +
                (isFullCard ? " pt-md-4 px-md-4 pt-3" : "")
              }
            >
              <Col className="vprofile__card__right__container__details__picture col-lg-3">
                <Card>
                  <div className="d-flex flex-column">
                   <SemiCircleProgressBar diameter={120} strokeWidth={5} percentage={match_percentage} stroke={'#fcb723'} />
                    <p className="text-center font-weight-bolder text-danger m-0">

                        <Image
                          src={Kundli}
                          alt="Kundli match"
                          height={isFullCard ? "20" : "10"}
                          className="mr-1"
                        />
                      {preference_match}
                    </p>
                  </div>
                  <hr className="m-0" />
                  <p className={"text-center m-0 " + (isFullCard ? "py-2" : "")}>
                    Preference Match
                  </p>
                </Card>
              </Col>
              <Col className="vprofile__card__right__container__details__personal col-lg-3">
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
              <Col className="vprofile__card__right__container__details__professional d-none d-lg-block col-lg-3">
                <Row>{location}</Row>
                <Row>{occupation}</Row>
                <Row>{income}</Row>
                <Row>{marital_status}</Row>
              </Col>
              <Col className="vprofile__card__right__container__details__professional d-none d-lg-block col-lg-3">
                <Row className="vprofile__card__right__container__details__professional__extra_row">
                   <span>
                     <button type="button" class="btn extra" data-toggle="tooltip" title="Share profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path>
                        </svg>
                     </button>
                  </span>
                </Row>
                <Row className="vprofile__card__right__container__details__professional__extra_row">
                   <span>
                      <button type="button" class="btn extra" data-toggle="tooltip" title="Download this profile">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"></path>
                        </svg>
                        </button>
                   </span>
                </Row>
                <Row className="vprofile__card__right__container__details__professional__extra_row">
                   <span>
                        <button type="button" class="btn extra" data-toggle="tooltip" title="Report and block this profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"></path>
                            </svg>
                        </button>
                   </span>
                </Row>

              </Col>
            </Row>
            <Row
              className={
                "vprofile__card__right__container__actions d-sm-flex" +
                (isFullCard ? " flex-md-nowrap" : " d-none")
              }
            >
               {status < 3 && (
               <span className="vprofile__card__right__container__actions__children">
                 <button
                    className={
                      "vprofile__card__right__container__actions__view" +
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
                      "vprofile__card__right__container__actions__single" +
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
                        &nbsp; &nbsp; &nbsp;oading.....
                      </>
                    ) : (
                      <>
                        <Image src={Send} alt="Send Interest" height={18} />
                        {status === 1 && "Send Interest"}
                        {status === 2 && "Cancel Interest"}
                      </>
                    )}
                 </button>
               </span>
              )}

              {status === 3 && (
               <span>
                 <button
                    className={
                      "vprofile__card__right__container__actions__view" +
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
                      "vprofile__card__right__container__actions__chat" +
                      (isFullCard
                        ? " flex-fill mr-2 col-sm-5 col-md-auto mb-2 mb-md-0"
                        : "")
                    }
                  >
                    <Image src={Chat} alt="Chat" height={18} />
                    Chat
                  </button>

                 <span className={"vprofile__card__right__container__actions__taken"}>Accepted</span>
               </span>
              )}


              {status === 4 && ( //Declined accept again
              <span>
                  <button
                    className={
                      "vprofile__card__right__container__actions__view" +
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
                  <span className={"vprofile__card__right__container__actions__taken"}>Rejected</span>
                  <span className={"vprofile__card__right__container__actions__changed_mind"}>
                      <span className={"vprofile__card__right__container__actions__changed_mind_text"}>Changed your mind?</span>
                          <span
                            className={
                              "vprofile__card__right__container__actions__changed_mind__button " +
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
                               <Image src={ViewContact} alt="Send Interest" height={18} />
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
                      "vprofile__card__right__container__actions__view" +
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
                    <span className="vprofile__card__right__container__actions__faint_msg">
                       You have received interest!
                      </span>
                  <span className={"vprofile__card__right__container__actions__approve_reject"}>
                    <span
                        className={
                          "vprofile__card__right__container__actions__accept" +
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
                            <Image src={Send} alt="Accept" height={18} />
                            Accept
                          </>
                        )}
                      </span>

                      <span
                        className={
                          "vprofile__card__right__container__actions__reject" +
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
                           <Image src={ViewContact} alt="Decline" height={18} />
                            Reject
                          </>
                        )}
                      </span>
                    </span>
              </span>
              )}

              {status === 6 && ( //if she has has declined your request
              <span>
                  She has declined your interest.
               </span>
              )}
              {status === 7 && ( //if he has has declined your request
              <span>
                  He has declined your interest.
               </span>
              )}

            </Row>

            <Row className={ "vprofile__card__right__container__lastseen d-sm-flex" +
                (isFullCard ? " flex-md-nowrap" : " d-none") }>


               <p className="vprofile__card__right__container__header__seen d-none d-md-block">
                <Image
                  src={Calendar}
                  alt="Calendar"
                  className="vprofile__card__right__container__header__seen__calendar"
                />
                Last seen on {last_seen && parseDate(last_seen)}
              </p>
            </Row>


             <Modal show={showViewContact} onHide={handleMsgPopupClose} size='md'>
                <Modal.Header closeButton>
                 <Icon>lock</Icon> &nbsp; &nbsp; &nbsp; Private data
                </Modal.Header>
                <Modal.Body>

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
                 <Button variant="danger" onClick={handleMsgPopupClose}>
                    Upgrade
                  </Button>
                  <Button variant="warning" onClick={handleMsgPopupClose}>
                    Close
                  </Button>
                </Modal.Footer>
               </Modal>

              <Modal show={showImages} onHide={handleImagesPopupClose} size='lg'>
                <Modal.Header closeButton>
                <span>{display_id}'s Album</span>
                </Modal.Header>
                <Modal.Body>

                    {GetPhotosLoading ? (
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
                      {images.length > 0 && <ImageGallery items={images} />}
                      {images.length === 0 && "No images to show"}
                      </>
                    )}

                </Modal.Body>
                <Modal.Footer></Modal.Footer>
               </Modal>
          </div>
        </Col>
      </Card>
    </section>
  );
}

export default ViewProfileCard;
