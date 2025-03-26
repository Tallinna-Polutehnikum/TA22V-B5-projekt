import React from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const { id } = useParams();

    return (
        <div className="movie-container">
            {/* Background Section */}
            <div className="background-section">
                {/* Content Section 1 */}
                <div className="content-section-1">
                    <h1 className="movie-title">
                        Movie page {id}
                    </h1>
                </div>
            </div>

            {/* Content Section 2 with columns */}
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

            {/* Recommendations Section */}
            <div className="recommendations-section">
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
