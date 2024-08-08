import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import AnimalList from './pages/AnimalList/AnimalList';
import NotFound from './pages/NotFound/NotFound';
import ButtonBadgeSample from './pages/ButtonBadgeSample/ButtonBadgeSample';
import CommunityQuestion from './pages/Community/Question/CommunityQuestion';
import CommunityInformation from './pages/Community/Information/CommunityInformation';
import CommunityDaily from './pages/Community/Daily/Daily';
import CommunityBreederInformation from './pages/Community/BreederInformation/BreederInformation';
import MyReviewPost from './pages/MyReview/Post/Post';
import MyReviewComment from './pages/MyReview/Comment/Comment';
import MyReview from './pages/MyReview/Review/Review';
import MyReviewSave from './pages/MyReview/Save/Save';
import WaitingAnimalDetail from './pages/WaitingAnimalDetail/WaitingAnimalDetail';
import AnimalUpload from './pages/AnimalUpload/AnimalUpload';
import BreederDetail from './pages/BreederDetail/BreederDetail';
import BwitherReview from './pages/BwitherReview/BwitherReview';
import BreederReview from './pages/BreederReview/BreederReview';
import BreederInfoEdit from './pages/BreederInfoEdit/BreederInfoEdit';
import ChatListGeneral from './pages/ChatListGeneral/ChatListGeneral';
import ChatDetailGeneral from './pages/ChatDetailGeneral/ChatDetailGeneral';
import WritingFormGeneral from './pages/WritingFormGeneral/WritingFormGeneral';

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
          <Route path="/MyReview/Post" element={<MyReviewPost />} />
          <Route path="/MyReview/Comment" element={<MyReviewComment />} />
          <Route path="/MyReview/Review" element={<MyReview />} />
          <Route path="/MyReview/Save" element={<MyReviewSave />} />
          <Route
            path="/waitinganimal-detail"
            element={<WaitingAnimalDetail />}
          />
          <Route path="/animal-upload" element={<AnimalUpload />} />
          <Route path="/breeder-detail" element={<BreederDetail />} />
          <Route path="/bwither-review" element={<BwitherReview />} />
          <Route path="/breeder-review" element={<BreederReview />} />
          <Route path="/breederinfo-edit" element={<BreederInfoEdit />} />
          <Route path="/ChatListGeneral" element={<ChatListGeneral />} />
          <Route path="/ChatDetailGeneral" element={<ChatDetailGeneral />} />
          <Route path="/WritingFormGeneral" element={<WritingFormGeneral />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
