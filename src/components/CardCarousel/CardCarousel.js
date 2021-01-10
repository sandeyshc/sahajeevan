import React from "react";
import { Image, Carousel, CarouselItem } from "react-bootstrap";
import "./CardCarousel.scss";

import { SmallCard } from "../";

import Demo2 from "../../assets/images/demo5.png";
import Demo4 from "../../assets/images/demo2.png";
import Demo1 from "../../assets/images/demo3.png";
import Demo3 from "../../assets/images/demo4.png";

function CardCarousel({ cards, activeIndex }) {
  return (
    <Carousel
      controls={false}
      indicators={false}
      wrap={false}
      interval={null}
      activeIndex={activeIndex}
    >
      <CarouselItem>
        <div className="cards">
          {cards?.slice(0, 4).map((card, j) => (
            <SmallCard data={card} key={'A' + Math.random()}>
              <Image
                src={
                  j === 0 ? Demo1 : j === 1 ? Demo2 : j === 2 ? Demo3 : Demo4
                }
                alt="demo"
              />
            </SmallCard>
          ))}
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="cards">
          {cards?.slice(0, 4).map((card, j) => (
            <SmallCard data={card} key={'B' + Math.random()}>
              <Image
                src={
                  j === 0 ? Demo1 : j === 1 ? Demo2 : j === 2 ? Demo3 : Demo4
                }
                alt="demo"
              />
            </SmallCard>
          ))}
        </div>
      </CarouselItem>
    </Carousel>
  );
}

export default CardCarousel;
