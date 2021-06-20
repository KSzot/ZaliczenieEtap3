import React from "react";
import { Carousel } from "react-bootstrap";
import gym1 from "../../assets/gym1.jpg";
import gym2 from "../../assets/gym2.jpg";
import gym3 from "../../assets/gym3.jpg";
const Slider = (props) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500"
          src={gym1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Systematyczność</h3>
          <p>Ćwicz regularnie pod naszym okiem</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500"
          src={gym2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Odżywianie</h3>
          <p>Z nami dotrzymasz diety</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500"
          src={gym3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pewność siebie</h3>
          <p>Z nami pokonasz wszystkie przeciwności</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
