import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const { id } = useParams();

    useEffect(() => {
      const mainElement = document.querySelector('.main');
      if (mainElement) {
        mainElement.style.margin = '0';
        mainElement.style.minHeight = '100vh';
        mainElement.style.width = '100%';
      }
      return () => {
        // Recovery the original styles when unmounting
        if (mainElement) {
          mainElement.style.margin = 'auto';
          mainElement.style.minHeight = 'calc(100dvh - var(--headerH))';
          mainElement.style.width = 'clamp(1px, var(--mw), var(--mmw))';
        }
      };
    }, []);
  
    return (
        <div className="movie-container">
            <div className="background-section">
                <div className="content-section-1">
                    <h1 className="movie-title">
                        Movie page {id}
                    </h1>
                </div>
            </div>

            <div className="content-section-2 main2">
                <div className="info-column">
                    <h2>Movie Info</h2>
                    <p>Movie Details ID: {id}</p>
                </div>
                <div className="info-column">
                    <h2>Description</h2>
                    <p>Full movie description...</p>
                </div>
            </div>

            <div className="recommendations-section main2">
                <h2>Recommendations</h2>
                <div className="recommendations-grid">
                    <div className="recommendation-card"></div>
                    <div className="recommendation-card"></div>
                    <div className="recommendation-card"></div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
