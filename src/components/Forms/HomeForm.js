import React from "react";
import "./HomeForm.scss";
import { Row, Image, Col, Card } from "react-bootstrap";
import USER from "../../assets/icons/svg icon/user_.svg";
import RECOMMENDATION from "../../assets/icons/svg icon/recommendation-letter.svg";
import JOINED from "../../assets/icons/svg icon/Shape.svg";
import INTERESTS from "../../assets/icons/svg icon/Received Interests.svg";
import { Line, Circle } from 'rc-progress';

function HomeForm() {
  return (
    <section className="homeForm col-lg-12 d-xl-block">
			<div className="row">
				<div className="col-lg-4 col-md-12 col-xs-12">
					<div className="row">
						<div className="col-lg-3 col-md-4 col-xs-4">
						    <span>
                                <Image src={USER} alt="user image" height="90" />
						    </span>
						</div>
						<div className="col-lg-9 col-md-7 col-xs-7">
						    <p className="homeForm__header__content__title">HIMANSHU CHOUHAN</p>
                              <p className="homeForm__header__content__subtitle">
                                Add Details To Your Profile{" "}
                                <span className="homeForm__header__content__subtitle__percentage">
                                  58%
                                  <div>
                                  <Line percent="58" strokeWidth="4" strokeColor="#fcb432" />
                                  </div>
                                </span>
                             </p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 homeForm__cards">
					<div className="row card-deck">
						    <Card className="homeForm__cards__card col-lg-4 ml-1">
                              <div className="homeForm__cards__card__circle">
                                <Image src={RECOMMENDATION} alt="daily recommendations" height="30" />
                                <span className="homeForm__cards__card__circle__count">20</span>
                              </div>
                              <p className="homeForm__cards__card__desc">Recommendations</p>
                            </Card>
						     <Card className="homeForm__cards__card col-lg-4 ml-1">
                                  <div className="homeForm__cards__card__circle">
                                    <Image src={JOINED} alt="Today Joined" height="30" />
                                    <span className="homeForm__cards__card__circle__count">32</span>
                                  </div>
                                  <p className="homeForm__cards__card__desc">Today Joined</p>
                              </Card>
						    <Card className="homeForm__cards__card col-lg-4 ml-1">
                              <div className="homeForm__cards__card__circle">
                                <Image src={INTERESTS} alt="Received Interests" height="30" />
                                <span className="homeForm__cards__card__circle__count">32</span>
                              </div>
                              <p className="homeForm__cards__card__desc">Interests</p>
                            </Card>
					</div>
				</div>
				<div className="col-lg-4 col-md-8 col-xs-8 homeForm__btns">
					<div className="row">
						<div className="col-lg-8 col-md-6 col-xs-6">
						    <button className="homeForm__actions__viewpr">
                              View My Public Profile
                            </button>

						</div>
						<div className="col-lg-4 col-md-4 col-xs-4">
						    <button className="homeForm__actions__search">
                              Search
                            </button>

						</div>

					</div>
				</div>
			</div>
		
    
    
    
    
    




    </section>
  );
}

export default HomeForm;