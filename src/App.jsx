import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalList from './pages/AnimalList/AnimalList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';
import WaitingAnimalDetail from './pages/WaitingAnimalDetail/WaitingAnimalDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimalList />} />
        <Route path="/ButtonBadgeSample" element={<ButtonBadgeSample />} />
        <Route path="/waitinganimal-detail" element={<WaitingAnimalDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
