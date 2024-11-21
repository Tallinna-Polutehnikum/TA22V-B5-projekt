import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MoviePage from './pages/MoviePage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './App.css';

function App() {
    const с1Images = [
        'https://picsum.photos/600/100?text=Image+1',
        'https://picsum.photos/600/100?text=Image+2',
        'https://picsum.photos/600/100?text=Image+3'
    ];

    return (
        <Router>
            <Header />
            <main className="main">
            <h5>Image Carousel</h5>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;