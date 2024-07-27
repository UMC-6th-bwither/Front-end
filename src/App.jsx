/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/header/Header';
import AnimalList from './pages/AnimalList/AnimalList';
import BreederList from './pages/BreederList/BreederList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';
import Animal from './pages/MyReview/Animal/Animal';
import Breeder from './pages/MyReview/Breeder/Breeder';
import DropBox from './components/dropBox/DropBox';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="/DropBox" element={<DropBox />} />
          <Route path="/Animal" element={<Animal />} />
          <Route path="/Breeder" element={<Breeder />} />
          <Route path="/" element={<AnimalList />} />
          <Route path="/BreederList" element={<BreederList />} />
          <Route path="/ButtonBadgeSample" element={<ButtonBadgeSample />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
