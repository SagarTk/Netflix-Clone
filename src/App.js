import './App.scss';
import './Components/Home/Home.scss';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      
      <Routes>
        <Route path="/"  />
      </Routes>
    </Router>
  );
}

export default App;
