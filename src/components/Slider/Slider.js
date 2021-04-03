import React from 'react';
import bookLecture from './../../assets/images/slider/book-lecture.jpg';
import aboutUs from './../../assets/images/slider/about-us.jpg';
import styles from './Slider.module.scss';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel className={styles.slider}>
        <Carousel.Item className={styles.sliderItem}>
          {
            <NavLink exact to="/book-a-lecture">
              <img
                className={`d-block ${styles.imgItem}`}
                src={bookLecture}
                alt="book-a-lecture"
              />
            </NavLink>
          }
          <Carousel.Caption>
            <h3 className={"text-danger"}> </h3>
            <p className={"text-danger"}> </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.sliderItem}>
          <img
            className={`d-block ${styles.imgItem}`}
            src={aboutUs}
            alt="about-us"
          />
          <Carousel.Caption>
            <h3 className={"text-danger"}> </h3>
            <p className={"text-danger"}> </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
