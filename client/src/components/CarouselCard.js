import React, { useState } from 'react';
import './CarouselCard.css';
import Card1 from './Card1';

const CarouselCard = () => {
    const [logos] = useState(Array.from({ length: 1 }, (_, index) => index));

    // const [cardData, setCardData] = useState([]);        // Card data waitnig placeholder
    const cardData = [
        {
            image: 'https://picsum.photos/id/1006/300/200',
            title: 'Hills',
            link: '#',
            description: 'they walk among hills or mountains. Many persons walk alone ...',
        },
        {
            image: 'https://picsum.photos/id/1018/300/200',
            title: 'Norway',
            link: '#',
            description: 'Bures boahtin. Hello (General greeting)',
        },
        {
            image: 'https://picsum.photos/id/1012/300/200',
            title: 'Man & dog',
            link: '#',
            description: 'What is the saying man and his dog?',
        },
        {
            image: 'https://th.bing.com/th/id/R.df900ae69fa7b8d3158c0e49bc7b06c1?rik=1voe9ibJ7UUv8Q',
            title: 'Capybara',
            link: '#',
            description: 'They are excellent swimmers',
        },
    ];



    return (
        <div className="CarouselCard">
            <ul className="CarouselCard-content">
                
                {logos.map((index) => (
                    <Card1 cardData={cardData} />
                ))}
                {logos.map((index) => (
                    <Card1 cardData={cardData} />
                ))}
            </ul>
        </div>
    );
};

export default CarouselCard;
