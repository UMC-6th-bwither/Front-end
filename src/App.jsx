import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalList from './pages/AnimalList/AnimalList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';
import WaitingAnimalDetail from './pages/WaitingAnimalDetail/WaitingAnimalDetail';
import AnimalUpload from './pages/AnimalUpload/AnimalUpload';
import BreederDetail from './pages/BreederDetail/BreederDetail';
import BwitherReview from './pages/BwitherReview/BwitherReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimalList />} />
        <Route path="/ButtonBadgeSample" element={<ButtonBadgeSample />} />
        <Route path="/waitinganimal-detail" element={<WaitingAnimalDetail />} />
        <Route path="/animal-upload" element={<AnimalUpload />} />
        <Route path="/breeder-detail" element={<BreederDetail />} />
        <Route path="/bwither-review" element={<BwitherReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
