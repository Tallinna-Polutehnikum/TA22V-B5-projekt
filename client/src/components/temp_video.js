import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const containerStyle = {
    width: '100%',
    /* Add more if need */
  };

  return (
    <div style={containerStyle}>
      <div className="ratio ratio-16x9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
