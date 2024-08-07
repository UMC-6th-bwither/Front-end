/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/header/Header';
import AnimalList from './pages/AnimalList/AnimalList';
import BreederList from './pages/BreederList/BreederList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';
import WaitingAnimalDetail from './pages/WaitingAnimalDetail/WaitingAnimalDetail';
import AnimalUpload from './pages/AnimalUpload/AnimalUpload';
import BreederDetail from './pages/BreederDetail/BreederDetail';
import BwitherReview from './pages/BwitherReview/BwitherReview';
import BreederReview from './pages/BreederReview/BreederReview';
import Animal from './pages/MyReview/Animal/Animal';
import Breeder from './pages/MyReview/Breeder/Breeder';
import MypageGeneral from './pages/MypageGeneral/MypageGeneral';
import MypageBreeder from './pages/MypageBreeder/MypageBreeder';
import Footer from './components/Footer/Footer';

import FootPrintLine from './components/FootPrintLine/FootPrintLine';
import ReportModal from './components/ReportModal/ReportModal';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="MyReview/Animal" element={<Animal />} />
          <Route path="MyReview/Breeder" element={<Breeder />} />
          <Route path="/BreederList" element={<BreederList />} />
          <Route path="/" element={<AnimalList />} />
          <Route path="/ButtonBadgeSample" element={<ButtonBadgeSample />} />
          <Route
            path="/waitinganimal-detail"
            element={<WaitingAnimalDetail />}
          />
          <Route path="/animal-upload" element={<AnimalUpload />} />
          <Route path="/breeder-detail" element={<BreederDetail />} />
          <Route path="/bwither-review" element={<BwitherReview />} />
          <Route path="/breeder-review" element={<BreederReview />} />
          <Route path="/MypageGeneral" element={<MypageGeneral />} />
          <Route path="/MypageBreeder" element={<MypageBreeder />} />
          <Route path="/FootPrintLine" element={<FootPrintLine />} />
          <Route path="/ReportModal" element={<ReportModal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
