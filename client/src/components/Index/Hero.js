import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstBanner from '../../assets/img/home/homeslide.png';
import secondBanner from '../../assets/img/home/homeslide1.png';
import thirdBanner from '../../assets/img/home/homeslide2.png';
import fourthBanner from '../../assets/img/home/homeslide3.png';
import fifthBanner from '../../assets/img/home/homeslide4.png';

const IndexHero = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={firstBanner} alt="First slide" />
      <Carousel.Caption>
        <h3>Welcome to AMPZ</h3>
        <p>Discover a world of sporting opportunities.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={secondBanner} alt="Third slide" />

      <Carousel.Caption>
        <h3>Talent</h3>
        <p> Showcase and apply for opportunities with ease.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={thirdBanner} alt="Third slide" />

      <Carousel.Caption>
        <h3>Academy </h3>
        <p>Amplify your reach and organize your dream team.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={fourthBanner} alt="Fourth slide" />

      <Carousel.Caption>
        <h3>Scout</h3>
        <p>
          We are making scouting in Africa easy. Now you can own your process.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={fifthBanner} alt="Fifth slide" />

      <Carousel.Caption>
        <h3>Fan </h3>
        <p>Connect and enjoy authentic sports content.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default IndexHero;
