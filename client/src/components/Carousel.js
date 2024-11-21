import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = ({ images }) => {
    return (
        <div id="carouselExample" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;