import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {

    useEffect(() => {
        const mainElement = document.querySelector('.main');
        if (mainElement) {
            mainElement.style.width = '100%';
            mainElement.style.padding = '0';}

        return () => { // Recovery the original styles when unmounting
            if (mainElement) {
                mainElement.style.width = 'clamp(1px, var(--mw), var(--mmw))';
                mainElement.style.padding = '20px';}
    };},[]);

    const { id } = useParams();

    // const favMovImages = [
    //     'https://picsum.photos/id/976/5000/500',  // 5000x2901
    //     'https://picsum.photos/id/696/200/300'    // 4310x2864
    // ];



  
    return (
        <div className="movie-container">

            <div className="background-section ">
                <div className="bg-grad"></div>
            </div>
            <div className="main2">
                
                <div className="content-section-1">
                    <img src='https://picsum.photos/id/696/200/300' />
                    <h1 className="movie-title">
                        Movie page {id}
                    </h1>
                </div>
                <div className="content-section-2">
                    <div className="info-column">
                        <h2>Movie Info</h2>
                        <p>Movie Details ID: {id}</p>
                    </div>
                    <div className="info-column">
                        <h2>Description</h2>
                        <p>Full movie description...</p>
                    </div>
                </div>

                <div className="recommendations-section">
                    <h2>Recommendations</h2>
                    <div className="recommendations-grid">
                        <div className="recommendation-card"></div>
                        <div className="recommendation-card"></div>
                        <div className="recommendation-card"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
