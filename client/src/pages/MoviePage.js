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
              <span>x min | genre, genre, genres | rating</span>
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
              <strong>Rezzis</strong><br/>
              <span>namename</span>
              </li>

              <li>
              <strong>Country</strong><br/>
              <span>namename</span>
              </li>

              <li>
              <strong>Year</strong><br/>
              <span>1999</span>
              </li>
          
              <li>
              <strong>Duration</strong><br/>
              <span>137 minutes</span>
              </li>
              
              <li>
              <strong>Genres</strong><br/>
              <span><a href="#">genre</a>, <a href="#">genre</a>, <a href="#">genre</a> {/* map(, ) /* font-weight: 300;     /* display: inline-flex; */}
              </span>
              </li>
              
              <li>
              <strong>Rating</strong><br/>
              <span>(rating)</span>
              </li>
              
            </ul>
          </div>
          <div className="desc-column">
            <div className="desc-text"> 
              <span>Aute aute cillum adipisicing laboris sit cupidatat exercitation pariatur minim mollit nostrud quis duis excepteur consequat cupidatat id et excepteur deserunt duis velit labore do nisi ad dolore qui do eiusmod reprehenderit ullamco laborum non ullamco excepteur aliqua in amet deserunt in dolore sint tempor consectetur ea culpa tempor anim sit est Lorem voluptate ex sunt non ullamco ut ipsum quis mollit et veniam dolore incididunt nulla minim fugiat mollit commodo ex ullamco exercitation aliquip in ex et culpa occaecat pariatur id quis mollit qui nostrud do aliqua duis aliqua tempor do commodo incididunt aliqua dolore occaecat tempor aliqua nulla magna officia sint tempor magna anim qui irure ipsum qui</span>
            </div>
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
