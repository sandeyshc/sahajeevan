import React from "react";
import { Image, Carousel, CarouselItem } from "react-bootstrap";
import "./CardCarousel.scss";

import { SmallCard } from "../";
import dummyImage from "../../assets/images/dummy.png";

function CardCarousel({ cards = [], activeIndex }) {
  return (
    <>
      <Carousel
        className="d-none d-lg-block"
        controls={false}
        indicators={false}
        wrap={false}
        interval={null}
        activeIndex={activeIndex}
      >
        <CarouselItem>
          <div className="cards">
            {cards?.slice(0, 4).map((card, j) => (
              <SmallCard data={card} key={"A" + Math.random()}>
                 <Image
                    className="bgImg overflow-hidden grayscale blur"
                    src={card.profile_photo_url || dummyImage}
                    alt="profile image"
                  />
               <span>
                  <Image
                    className="cardImg overflow-hidden"
                    src={card.profile_photo_url || dummyImage}
                    alt="profile image"
                  />
              </span>
              </SmallCard>
            ))}
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="cards">
            {cards?.slice(4).map((card, j) => (
              <SmallCard data={card} key={"B" + Math.random()}>
                  <Image
                        className="bgImg overflow-hidden  grayscale blur"
                        src={card.profile_photo_url || dummyImage}
                        alt="profile image"
                  />
                <span>
                  <Image
                    className="cardImg overflow-hidden"
                    src={card.profile_photo_url || dummyImage}
                    alt="profile image"
                  />
              </span>
              </SmallCard>
            ))}
          </div>
        </CarouselItem>
      </Carousel>
      <div className="d-flex d-lg-none" style={{ "overflow-x": "scroll" }}>
        {cards?.map(card => (
          <SmallCard data={card} key={card.id}>
             <Image
                className="bgImg overflow-hidden grayscale blur"
                src={card.profile_photo_url || dummyImage}
                alt="profile image"
             />
           <span>
             <Image
                className="cardImg overflow-hidden"
                src={card.profile_photo_url || dummyImage}
                alt="profile image"
             />
           </span>
          </SmallCard>
        ))}
      </div>
    </>
  );
}

export default CardCarousel;
