import React, { useEffect, useState } from 'react';
import './CarouselCard.css';
import CardExample from '../components/Card';

const CarouselCard = () => {
    const [logos, setLogos] = useState(Array.from({ length: 1 }, (_, index) => index));
    
    const cardImages = [
        'https://picsum.photos/id/1006/300/200',
        'https://picsum.photos/id/1018/300/200',
        'https://picsum.photos/id/1012/300/200',
        'https://th.bing.com/th/id/R.df900ae69fa7b8d3158c0e49bc7b06c1?rik=1voe9ibJ7UUv8Q'
    ];

    useEffect(() => {
        // Set an interval to add a new logo every second
        const interval = setInterval(() => {
            setLogos(prevLogos => {
                const nextIndex = prevLogos.length;
                return [...prevLogos, nextIndex];
            });
        }, 8000); // Add a new N every 3000 for 10s

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="CarouselCard">
            <ul className="CarouselCard-content">

                {logos.map((index) => (
                    <CardExample images={cardImages}/>
                ))}

            </ul>
        </div>
    );
};

export default CarouselCard;