import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MoviePage from './pages/MoviePage';
import CheckoutPage from './pages/CheckoutPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/checkout">Movies</Link></li>
                    <li><Link to="/movie/:id">Movies</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;