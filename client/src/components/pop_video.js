// mb popup login https://minutemailer.github.io/react-popup/

// Scrolling an image carousel - smooth https://react.dev/learn/manipulating-the-dom-with-refs#scrolling-an-image-carousel

// https://www.perplexity.ai/search/privet-kak-eshche-mozhno-nazva-7pzJUdz8R86AYy_EQiTGXg?0=d&2=d
// https://minutemailer.github.io/react-popup/

import React, { useState } from 'react';
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
  },
  pVideo: {
    border: 'none',
    // mb some rounded edges? Check figma
    // padding: '10px', borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    minWidth: '40%',
    minHeight: '40vh',
  },
};

const PopupVideo = ({ videoId, isOpen, onClose }) => {
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
