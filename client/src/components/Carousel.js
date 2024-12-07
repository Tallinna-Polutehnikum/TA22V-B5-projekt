import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

const Carousel = ({ images }) => {
    return (
        <div id="carouselExample" class="w-100 w-md-25" className="carousel slide" data-bs-ride="carousel"  data-bs-theme="dark">

            {/* The slideshow/carousel */}
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        key={index}
                    ></button>
                ))}
            </div>

            {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <FontAwesomeIcon icon={faAngleLeft} className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <FontAwesomeIcon icon={faAngleRight} className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;