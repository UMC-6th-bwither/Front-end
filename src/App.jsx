import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalList from './pages/AnimalList/AnimalList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimalList />} />
        <Route path="/ButtonBadgeSample" element={<ButtonBadgeSample />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
