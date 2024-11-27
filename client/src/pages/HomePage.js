import React from 'react';
import Carousel from '../components/Carousel';

const HomePage = () => {
    const c1Images = [
        'https://picsum.photos/id/1006/1200/200',
        'https://picsum.photos/id/1018/1200/200',
        'https://picsum.photos/id/1012/1200/200',
        'https://picsum.photos/id/1001/1200/200'
    ];
    
    return (
        <div>
            <h1>Welcome to My Movie App</h1>
            <p>Discover your favorite movies!</p>
            <Carousel images={c1Images} />
        </div>
    );
};

export default HomePage;