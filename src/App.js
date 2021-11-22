
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Boxes from './Components/Boxes';


function App() {
  return (
    <Router>
      <div class="max-width">
        <Header />
        <Boxes />
        <Footer />
      </div>  
    </Router>
  );
}

export default App;
