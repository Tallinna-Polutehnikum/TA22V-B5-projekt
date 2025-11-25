import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BtnTrailer from '../components/BtnTrailer';
import './MoviePage.css';

const MoviePage = () => {
  const videoId = 'dQw4w9WgXcQ';
  const { id } = useParams();
  const St = {
    backgroundImage: "url('https://picsum.photos/id/976/1920/500')",
  }
  // const favMovImages = [
  //   'https://picsum.photos/id/976/5000/500',  // 5000x2901
  //   'https://picsum.photos/id/696/200/300'  // 4310x2864
  // ];


  const [movie, setInfo] = useState(null);

  const [genres, setGenres] = useState(null)

  const genresParsed = genres ? genres.map(item => (
        <a href={`/movies/${item.genre}`}>
          {item.genre}
        </a>
      ))
    : null;
  



  useEffect(() => {
    
    fetch('http://localhost:3001/api/movie/1') // add api/movie/{id}
      .then(response => response.json())
      .then(json => setInfo(json))
      .catch(error => console.error(error));

    fetch('http://localhost:3001/api/genre')
      .then(response => response.json())
      .then(json => setGenres(json))
      .catch(error => console.error(error));


    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.style.width = '100%'; // rewrites app style
      mainElement.style.padding = '0';}

    return () => { // Recovery the original styles when unmounting
    if (mainElement) {
      mainElement.style.width = 'clamp(1px, var(--mw), var(--mmw))';
      mainElement.style.padding = '20px';}
    };

  },[]);

  
  
  return (
    <div className="movie-page">

    </div>
  );
};

export default MoviePage;
