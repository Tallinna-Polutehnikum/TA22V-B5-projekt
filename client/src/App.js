import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MoviePage from './pages/MoviePage';
import MoviesPage from './pages/MoviesPage';
import CheckoutPage from './pages/CheckoutPage';

import Account from './pages/Account';
import AdminPage from './pages/admin/AdminPage';
import MovieAdd from './pages/admin/MovieAdd';
import MovieEdit from './pages/admin/MovieEdit';

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
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/adminPage" element={<AdminPage />} />
                    <Route path="/admin/movieAdd" element={<MovieAdd />} />
                    <Route path="/admin/MovieEdit" element={<MovieEdit />} />
                </Routes>
                {/* <a href="https://reactjs.org">Learn React</a> */}
            </main>
            <Footer />
        </Router>
    );
}

export default App;