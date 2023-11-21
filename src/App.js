import './App.css';
import { Chrono } from './Pages/Chrono';
import Rules from './Pages/Rules';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chrono" element={<Chrono />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;