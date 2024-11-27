import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MoviePage from './pages/MoviePage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

    return (
        <Router>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
                <a href="https://reactjs.org">Learn React</a>
            </main>
            <Footer />
        </Router>
    );
}

export default App;