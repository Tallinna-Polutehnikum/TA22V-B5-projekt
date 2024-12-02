import React from 'react';
import Carousel from '../components/Carousel';
import CarouselCard from '../components/CarouselCard';
import CardExample from '../components/Card';



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
            <CarouselCard/>
            {/* <br></br>
            <p> Popular films </p>
            <CardExample images={'https://th.bing.com/th/id/R.df900ae69fa7b8d3158c0e49bc7b06c1?rik=1voe9ibJ7UUv8Q'}/> */}
        </div>
    );
};

export default HomePage;