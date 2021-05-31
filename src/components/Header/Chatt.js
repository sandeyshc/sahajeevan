import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import "./Chat.scss";
import React, { useState, useEffect, useRef } from "react";
import CloseIcon from '@material-ui/icons/Close';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

export default function SahjeevanChat({ showChatBox }) {
    const [showChat, setShowChat] = useState(showChatBox);
    const [showOnlineMember, setShowOnlineMember] = useState(false);
    const handleChatIconClick = () => {
    setShowChat(!showChat);
    };
    const handleOnlineIconClick = () => {
    setShowOnlineMember(!showOnlineMember);
    };
    const handleMemberClick = () => {
        setShowChat(true);
    };
    const handleOnlineBoxCloseClick = () => {
        setShowOnlineMember(false);
    };
    const handleChatBoxCloseClick = () => {
        setShowChat(false);
    };
  return (
  <>
    <div style={{ display: 'block',
                  width: 700,
                  padding: 30 }}>
              <OverlayTrigger
                placement="left"
                trigger="click"
                show={showChat}
                overlay={(
                  <Popover>
                    <Popover.Title as="div">
                          <div className="chatBoxHeader" onClick={handleChatBoxCloseClick}>
                            <img src="http://emilcarlsson.se/assets/louislitt.png" alt=""/>
                            <div className="meta">
                                <span className="onlineName">Louis Litt</span>
                                <div className="chatBoxClose">
                                    <CloseIcon />
                                </div>
                                <p className="activeStatus">Online</p>
                            </div>
                        </div>
                    </Popover.Title>
                    <Popover.Content>
                        <div className="card chatBoxContent">
                            <ul className="messages_list">
                                <li className="message sent">
                                    <div className="chatWrap ">
                                        <div className="meta">
                                            <p className="msgText">Internet connection and registration are necessary for required software activation, validation of subscriptions, and access to online services. Voice capabilities require users to be connected to the Internet to preview their prototypes.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="message reply">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">The overflow-wrap property in CSS allows you to specify that the browser can break a line of text inside the targeted element</p>
                                        </div>
                                    </div>
                                </li>
                                 <li className="message sent">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">The overflow-wrap property in CSS allows you to specify that the browser can break a line of text inside the targeted element</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="message reply">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                 <li className="message sent">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="message reply">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                 <li className="message sent">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="message reply">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                 <li className="message sent">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="message reply">
                                    <div className="chatWrap">
                                        <div className="meta">
                                            <p className="msgText">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                      </div>
                      <div className="message-input">
                        <div className="wrap">
                        <input type="text" placeholder="Write your message..."/>
                        <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true">Send</i></button>
                        </div>
                    </div>
                      </Popover.Content>
                   </Popover>
                    )}>
                    <span variant="success" className="chatBoxIconParent" onClick={handleChatIconClick}>
                    </span>
              </OverlayTrigger>
    </div>

    <div style={{ display: 'block',
                  width: 700,
                  padding: 30 }}>
              <OverlayTrigger
                placement="top"
                trigger="click"
               show={showOnlineMember}
                overlay={(
                  <Popover >
                    <Popover.Title as="h3">
                      <span className="OnlineBoxHeader">Chats</span>
                        <div className="onlineBoxClose" onClick={handleOnlineBoxCloseClick}>
                            <CloseIcon />
                        </div>
                    </Popover.Title>
                    <Popover.Content>
                        <div className="card onlineContent">
                            <ul className="membersList">
                                <li className="onlineMember" onClick={handleMemberClick}>
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src="http://emilcarlsson.se/assets/louislitt.png" alt=""/>
                                        <div className="meta">
                                            <p className="onlineName">Louis Litt</p>
                                            <p className="preview">You just got LITT up, Mike.</p>
                                        </div>

                                    </div>
                                </li>
                                <li className="onlineMember active" onClick={handleMemberClick}>
                                    <div className="wrap">
                                        <span className="contact-status busy"></span>
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                        <div className="meta">
                                            <p className="onlineName">Harvey Specter</p>
                                            <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                        </div>
                                    </div>
                                </li>
                                 <li className="onlineMember" onClick={handleMemberClick}>
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src="http://emilcarlsson.se/assets/louislitt.png" alt=""/>
                                        <div className="meta">
                                            <p className="onlineName">Louis Litt</p>
                                            <p className="preview">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="onlineMember active" onClick={handleMemberClick}>
                                    <div className="wrap">
                                        <span className="contact-status busy"></span>
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                        <div className="meta">
                                            <p className="onlineName">Harvey Specter</p>
                                            <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                        </div>
                                    </div>
                                </li>
                                 <li className="onlineMember" onClick={handleMemberClick}>
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src="http://emilcarlsson.se/assets/louislitt.png" alt=""/>
                                        <div className="meta">
                                            <p className="onlineName">Louis Litt</p>
                                            <p className="preview">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="onlineMember active" onClick={handleMemberClick}>
                                    <div className="wrap">
                                        <span className="contact-status busy"></span>
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                        <div className="meta">
                                            <p className="onlineName">Harvey Specter</p>
                                            <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                      </div>
                      </Popover.Content>
                   </Popover>
                    )}>
                    <span variant="success" className="onlineIconParent" onClick={handleOnlineIconClick}>
                        <ForumOutlinedIcon className="onlineIcon" />
                    </span>
              </OverlayTrigger>
    </div>
   </>
  );
}