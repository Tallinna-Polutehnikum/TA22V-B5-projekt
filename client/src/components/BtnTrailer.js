
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import PopupVideo from '../components/pop_video';


const BtnTrailer = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPop = () => {  setIsOpen(true);  };
  const closePop = () =>{  setIsOpen(false); };
  const St = {
    // 'min-width': '150px',  //max-?
  };


  {/* try smth lk: https://react-bootstrap.netlify.app/docs/components/modal#vertically-centered */}
  return (
  <>
    <Button style={St} onClick={openPop} variant="info" size="sm" className="fs-6">
      <FontAwesomeIcon icon={faPlay} /> Trailer
    </Button>

    <PopupVideo videoId={videoId} isOpen={isOpen} onClose={closePop} />
  </>
  )
}

export default BtnTrailer;