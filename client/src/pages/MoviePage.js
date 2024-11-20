import React from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { id } = useParams(); // Получаем id из URL

    return (
        <div>
            <h1>Movie page  {id}</h1>
            {/* Здесь можно добавить логику для отображения информации о фильме */}
        </div>
    );
};

export default MoviePage;