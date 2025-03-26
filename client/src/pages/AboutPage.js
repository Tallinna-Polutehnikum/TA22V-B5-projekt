import React, { useState } from 'react';
import PopupVideo from '../components/pop_video';

import YouTubeEmbed from '../components/temp_video'; 

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoId = 'dQw4w9WgXcQ';

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
    return (
        <div>
            <h1>About Us</h1>
            <p>This is a movie application that helps you find and explore movies.</p>
            <h4>About Our Project</h4>
<p>Welcome to our "About Us" page! We are excited to introduce our project, which we are creating with great passion and enthusiasm. This is a movie application that helps you find and explore movies. Our goal is to provide users with a convenient and intuitive service for viewing movie premiere dates, selecting seats, and ordering tickets.</p>

<h4>Our Mission</h4>
<p>We strive to make the ticket purchasing process as simple and comfortable as possible. With our website, you will be able to:</p>
<ul>
    <li><strong>Keep track of premiere dates and times:</strong> Never miss an important date! We provide up-to-date information about all upcoming films.</li>
    <li><strong>Select seats:</strong> Our user-friendly interface will allow you to easily choose the best seats in the theater.</li>
    <li><strong>Order tickets:</strong> The ticket ordering process will be quick and secure, with online payment options.</li>
    <li><strong>Receive email notifications:</strong> We care about you and will keep you informed about the status of your orders and other important events.</li>
</ul>

<h4>Our Team</h4>
<p>Our team consists of just two people, but we are determined to create a quality product. Each of us is responsible for different aspects of the project, allowing us to work efficiently and focus on every detail. <p>
</p>After a while, we shuffle our roles between backend and frontend to better understand each thing.</p>

<h4>The Future of the Project</h4>
<p>As a student project, we are committed to creating a reliable website that not only meets but often exceeds the standards of existing platforms in terms of usability, design, functionality, and performance. We believe that our website will become an indispensable assistant for all movie lovers. Our team is dedicated to continuous improvement, ensuring that you have the best possible experience. Stay tuned for updates!</p>


<button onClick={handleOpen}>Open trailer</button>
<PopupVideo videoId={videoId} isOpen={isOpen} onClose={handleClose} />

<p>Thank you for choosing us! We hope that our project brings you joy and convenience in the world of cinema.</p>
        
        
      <YouTubeEmbed videoId={videoId} />
      <LiteYouTubeEmbed id={videoId} title="trailer" />
        </div>
    );
};

export default AboutPage;