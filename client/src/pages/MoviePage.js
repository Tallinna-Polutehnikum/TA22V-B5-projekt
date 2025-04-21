import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BtnTrailer from '../components/BtnTrailer';
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

  const videoId = 'dQw4w9WgXcQ';
  const { id } = useParams();
  const St = {
    backgroundImage: "url('https://picsum.photos/id/976/1920/500')",
  }

  // const favMovImages = [
  //   'https://picsum.photos/id/976/5000/500',  // 5000x2901
  //   'https://picsum.photos/id/696/200/300'  // 4310x2864
  // ];



  
  return (
    <div className="movie-page">

      <div className="background-section " style={St}>
        <div className="bg-grad"></div>
      </div>
      <div className="main2">

        <div id="movie-hat">
          <img src='https://picsum.photos/id/696/200/300' />

          <div id="hat-text">
            <h1 className="movie-title">
              Movie page {id}
            </h1>
            <div id="hat-info">
              <p>x min | genre, genre, genres | rating</p>
              {/* {dur} | []map(,)=x,x,x | {rating}   */}
            </div>

            <div className="hat-buttons">
              <BtnTrailer videoId={videoId} />

              <Button variant="outline-primary" size="sm" className="fs-6">
              Showtimes
              </Button>
            </div>

          </div>
        </div>


        <div id="movie-info">
          <div className="info-column">
            <ul>
              <li>
              <strong>rezzis</strong>
              <p>namename</p>
              </li>

              <li>
              <strong>produss</strong>
              <p>namename</p>
              </li>

              <li>
              <strong>aasta</strong>
              <p>1999</p>
              </li>
              
              <li>
              <strong>duratio</strong>
              <p>(dur)</p>
              </li>
              
              <li>
              <strong>genres</strong>
              <br />
              <a href="#">genre</a>, 
              <a href="#">genre</a>, 
              <a href="#">genre</a> {/* font-weight: 300;     /* display: inline-flex; */}
              </li>
              
              <li>
              <strong>rating</strong>
              <p>(rating)</p>
              </li>
              
            </ul>
          </div>
          <div className="info-column">
            <h2>Description</h2>
            <p>Full movie description...</p>
          </div>
        </div>


        <div id="actors-section">
          <h2>actors</h2>
          <div className="actors-grid">
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
