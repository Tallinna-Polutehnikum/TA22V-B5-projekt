import React from 'react';
import Carousel from '../components/Carousel';
import CarouselCard from '../components/CarouselCard';
import Card1 from '../components/Card1';



const HomePage = () => {
    const favMovImages = [
        'https://picsum.photos/id/1006/1200/400',
        'https://picsum.photos/id/1018/1200/400',
        'https://picsum.photos/id/1012/1200/400',
        'https://picsum.photos/id/1001/1200/200'
    ];
    const cardData = [
        {
            image: 'https://picsum.photos/id/1006/300/200',
            title: 'Hills',
            link: '/movie/:1',
            description: 'they walk among hills or mountains. Many persons walk alone ...',
        },
        {
            image: 'https://th.bing.com/th/id/R.df900ae69fa7b8d3158c0e49bc7b06c1?rik=1voe9ibJ7UUv8Q',
            title: 'Capybara',
            link: '/movie/:1',
            description: 'They are excellent swimmers',
        },
    ];
    
    return (
        <div>
            <h1>Welcome to My Movie App</h1>
            <p>Discover your favorite movies!</p>
            <Carousel images={favMovImages} />
            <h4 class="mt-3"> Upcoming films</h4> 
            <CarouselCard/>
            <h4 class="mt-5"> Popular films</h4>
            <Card1 cardData={cardData} />
        </div>
    );
};

export default HomePage;
