import React from 'react';
import Carousel from '../components/Carousel';
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
            <br></br>
            <p> Popular films </p>
            <CardExample images={'https://th.bing.com/th/id/R.df900ae69fa7b8d3158c0e49bc7b06c1?rik=1voe9ibJ7UUv8Q&riu=http%3a%2f%2fpernatiki.com%2fwp-content%2fuploads%2fpost_5bfe3d6567108.jpg&ehk=P6JH0I7wGqm55vA1L%2bpMohEJ1qtl256YcJNDzZbTNZU%3d&risl=&pid=ImgRaw&r=0'}/>
        </div>
    );
};

export default HomePage;