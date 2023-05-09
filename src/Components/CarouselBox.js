/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/child.jpg";
import Img2 from "../assets/premium.jpg";
import Img3 from "../assets/sneakers.jpg";
import Img4 from "../assets/sport.jpg";
import Img5 from "../assets/umbrella.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-center w-90" src={Img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img margin-right="100px" className="d-block w-90" src={Img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-90" src={Img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-90" src={Img4} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-90" src={Img5} />
        </Carousel.Item>
      </Carousel>
    );
  }
}
