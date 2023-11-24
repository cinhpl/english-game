import './App.css';
import { Timer } from './Pages/Timer';
import { HomePage } from './Pages/HomePage';
import Rules from './Pages/Rules';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/timer" element={<Timer />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
    </div>
  );
}

export default App;

// add logo with sound f1 et apparaission en bounce, ensuite ça descend et ça présente les règles du jeu avec animation (ligne après ligne par exemple)