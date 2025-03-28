// popup login?   https://minutemailer.github.io/react-popup/
// component page https://npmjs.com/package/react-lite-youtube-embed

import React, { useEffect } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const St = {
  pModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    cursor: 'pointer',
    zIndex: 10,
  },
  pVideo: {
    border: 'none',
    // mb some rounded edges? Check figma
    // padding: '10px', borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    minWidth: '50%',
  },
};

const PopupVideo = ({ videoId, isOpen, onClose }) => {

useEffect(() => {
  if (isOpen) {
    const button = document.querySelector('.lty-playbtn');
    if (button) {
      button.click();
      console.log('btn was');
    } else {
      // If the button is not found immediately, start the interval for repeated search.
      const intervalId = setInterval(() => {
        const button = document.querySelector('.lty-playbtn');
        if (button) {
          button.click();
          console.log('btn loading');
          clearInterval(intervalId);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }
}, [isOpen]);



  if (!isOpen) return null;


  return (
    <div style={St.pModal} onClick={onClose}>
      <div style={St.pVideo} onClick={(e) => e.stopPropagation()}>
        <LiteYouTubeEmbed id={videoId} title="trailer" />
      </div>
    </div>
    
  );
};

export default PopupVideo;
