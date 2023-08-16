import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navigation/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
