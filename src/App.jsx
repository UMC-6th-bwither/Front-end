import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import AnimalList from './pages/AnimalList/AnimalList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';
import CommunityQuestion from './pages/Community/Question/CommunityQuestion';
import CommunityInformation from './pages/Community/Information/CommunityInformation';
import CommunityDaily from './pages/Community/Daily/Daily';
import CommunityBreederInformation from './pages/Community/BreederInformation/BreederInformation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/ButtonBadgeSample" element={<ButtonBadgeSample />} />
          <Route path="/Community/Question" element={<CommunityQuestion />} />
          <Route
            path="/Community/Information"
            element={<CommunityInformation />}
          />
          <Route path="/Community/Daily" element={<CommunityDaily />} />
          <Route
            path="/Community/BreederInformation"
            element={<CommunityBreederInformation />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
