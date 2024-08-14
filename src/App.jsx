/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import store from './redux/store';
import AnimalList from './pages/AnimalList/AnimalList';
import BreederList from './pages/BreederList/BreederList';
import NotFound from './pages/NotFound/NotFound';
import CommunityQuestion from './pages/Community/Question/CommunityQuestion';
import CommunityInformation from './pages/Community/Information/CommunityInformation';
import CommunityDaily from './pages/Community/Daily/Daily';
import CommunityBreederInformation from './pages/Community/BreederInformation/BreederInformation';
import MyReviewPost from './pages/MyReview/Post/Post';
import MyReviewComment from './pages/MyReview/Comment/Comment';
import MyReview from './pages/MyReview/Review/Review';
import ReviewForm from './pages/MyReview/Review/Form/Form';
import MyReviewSave from './pages/MyReview/Save/Save';
import WaitingAnimalBreederVer from './pages/WaitingAnimalBreederVer/WaitingAnimalBreederVer';
import WaitingAnimalDetail from './pages/WaitingAnimalDetail/WaitingAnimalDetail';
import AnimalUpload from './pages/AnimalUpload/AnimalUpload';
import BreederDetail from './pages/BreederDetail/BreederDetail';
import BwitherReview from './pages/BwitherReview/BwitherReview';
import BreederReview from './pages/BreederReview/BreederReview';
import BreederInfoEdit from './pages/BreederInfoEdit/BreederInfoEdit';
import Main from './pages/Main/Main';
import ChatListGeneral from './pages/ChatListGeneral/ChatListGeneral';
import ChatDetailGeneral from './pages/ChatDetailGeneral/ChatDetailGeneral';
import WritingFormGeneral from './pages/WritingFormGeneral/WritingFormGeneral';
import CommunityMain from './pages/CommunityMain/CommunityMain';
import ProfileSettingGeneral from './pages/ProfileSetting/ProfileSettingGeneral';
import ProfileSettingBreeder from './pages/ProfileSetting/ProfileSettingBreeder';
import Animal from './pages/MyReview/Animal/Animal';
import Breeder from './pages/MyReview/Breeder/Breeder';
import MypageGeneral from './pages/MypageGeneral/MypageGeneral';
import MypageBreeder from './pages/MypageBreeder/MypageBreeder';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="MyReview/Animal" element={<Animal />} />
          <Route path="MyReview/Breeder" element={<Breeder />} />
          <Route path="/BreederList" element={<BreederList />} />
          <Route path="/" element={<AnimalList />} />
          <Route path="/Community" element={<CommunityMain />} />
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
          <Route
            path="/Community/BreederInformation/Form"
            element={<WritingFormGeneral />}
          />
          <Route path="/MyReview/Post" element={<MyReviewPost />} />
          <Route path="/MyReview/Comment" element={<MyReviewComment />} />
          <Route path="/MyReview/Review" element={<MyReview />} />
          <Route path="/MyReview/Review/Form" element={<ReviewForm />} />
          <Route path="/MyReview/Save" element={<MyReviewSave />} />
          <Route
            path="/waitinganimal-detail"
            element={<WaitingAnimalDetail />}
          />
          <Route
            path="/waitinganimal-breeder"
            element={<WaitingAnimalBreederVer />}
          />
          <Route path="/animal-upload" element={<AnimalUpload />} />
          <Route path="/breeder-detail" element={<BreederDetail />} />
          <Route path="/bwither-review" element={<BwitherReview />} />
          <Route path="/breeder-review" element={<BreederReview />} />
          <Route path="/MypageGeneral" element={<MypageGeneral />} />
          <Route path="/MypageBreeder" element={<MypageBreeder />} />
          <Route path="/breederinfo-edit" element={<BreederInfoEdit />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/ChatListGeneral" element={<ChatListGeneral />} />
          <Route path="/ChatDetailGeneral" element={<ChatDetailGeneral />} />
          <Route
            path="/ProfileSettingGeneral"
            element={<ProfileSettingGeneral />}
          />
          <Route
            path="/ProfileSettingBreeder"
            element={<ProfileSettingBreeder />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
