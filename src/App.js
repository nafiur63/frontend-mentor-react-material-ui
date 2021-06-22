import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import SunnySide from './SunnySide/Screens/SunnySide';
import Homescreen from './Homescreen';

function App() {
  return (
    <Router>
    <Route path="/" component={Homescreen} exact/>
    <Route path="/sunnyside" component={SunnySide} />
    </Router>
  );
}

export default App;
