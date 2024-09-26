import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


  //ERVIN CONTENT
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
// import MoviePage from './pages/MoviePage/MoviePage';
// import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

// import Header from './components/Header/header';
// import Footer from './components/Footer/footer';

// function App() {
//   return (
//     <div classname="wraper">
//         <Header />
        
//       {/* на_потом
//       <Switch> 
//         <Route path="/" exact component={HomePage} />
//         <Route path="/movie/:id" component={MoviePage} />
//         <Route path="/checkout" component={CheckoutPage} />
//       </Switch> */}
//         <Footer />
//     </div>
//   )
// }

// export default App;
