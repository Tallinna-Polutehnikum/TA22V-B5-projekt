import React, { useEffect, useState } from 'react';
import './CarouselCard.css';
import logo from '../logo.svg';

const CarouselCard = () => {
    const [logos, setLogos] = useState(Array.from({ length: 3 }, (_, index) => index));

    useEffect(() => {
        // Set an interval to add a new logo every second
        const interval = setInterval(() => {
            setLogos(prevLogos => {
                const nextIndex = prevLogos.length;
                return [...prevLogos, nextIndex];
            });
        }, 15000); // Add a new N every 3000 for 10s

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="CarouselCard">
            <ul className="CarouselCard-content">
                {/* {logos.map((index) => (
                    <li key={index}>
                        <img src={'https://icon.horse/icon/poki.com'} width="200" height="200" alt="logo" />
                    </li>
                ))}
                {logos.map((index) => (
                    <li key={index}>
                        <img src={'https://icon.horse/icon/hands.com'} width="200" height="200" alt="logo" />
                    </li>
                ))}
                {logos.map((index) => (
                    <li key={index}>
                        <img src={'https://icon.horse/icon/toadworld.com'} width="200" height="200" alt="logo" />
                    </li>
                ))}
                {logos.map((index) => (
                    <li key={index}>
                        <img src={'https://icon.horse/icon/www.euro-knife.com'} width="200" height="200" alt="logo" />
                    </li>
                ))} */}

                {logos.map((index) => (
                    <li key={index}>
                        <img src={logo} width="200" height="200" alt="logo" />
                    </li>
                ))}

                {/* {logos.map((index) => (
                    <li key={`clone-${index}`}>
                        <img src={logo} width="140" height="140" alt="logo" />
                    </li>
                ))} */}
            </ul>
        </div>
    );
};

export default CarouselCard;