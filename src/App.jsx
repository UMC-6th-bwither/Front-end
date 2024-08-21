/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useDispatch, Provider } from 'react-redux';
import { loadUserFromStorage } from './redux/authSlice';

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
// import CommunityMain from './pages/CommunityMain/CommunityMain';
import ProfileSettingGeneral from './pages/ProfileSetting/ProfileSettingGeneral';
import ProfileSettingBreeder from './pages/ProfileSetting/ProfileSettingBreeder';
import Animal from './pages/MyReview/Animal/Animal';
import Breeder from './pages/MyReview/Breeder/Breeder';
import MypageGeneral from './pages/MypageGeneral/MypageGeneral';
import MypageBreeder from './pages/MypageBreeder/MypageBreeder';
import BreederAnimalList from './pages/BreederAnimalList/BreederAnimalList';
import BwitherSignUp1 from './pages/SignUpBwither/BwitherSignUp1';
import BwitherSignUp2 from './pages/SignUpBwither/BwitherSignUp2';
import BwitherSignUp3 from './pages/SignUpBwither/BwitherSignUp3';
import BwitherSignUp4 from './pages/SignUpBwither/BwitherSignUp4';
import SignUpBreeder from './pages/SignUpBreeder/SignUpBreeder';
import SignUpBreederChoice from './pages/SignUpBreeder/SignUpBreederChoice';
import SignUpBreederInfo from './pages/SignUpBreeder/SignUpBreederInfo';
import SignUpBreederInfo2 from './pages/SignUpBreeder/SignUpBreederInfo2';
import SignUpBreederDone from './pages/SignUpBreeder/SignUpBreederDone';
import Login from './pages/Login/Login';
import BreederSignUp1 from './pages/SignUpBreeder/BreederSignUp1';
import BreederSignUp2 from './pages/SignUpBreeder/BreederSignUp2';
import BreederSignUp3 from './pages/SignUpBreeder/BreederSignUp3';
import BreederSignUp4 from './pages/SignUpBreeder/BreederSignUp4';
import BreederSignUp5 from './pages/SignUpBreeder/BreederSignUp5';
import WritingDetail from './pages/WritingDetail/WritingDetail';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import AdoptionSystem from './pages/AdoptionSystem/AdoptionSystem';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="animal-list" element={<AnimalList />} />
        <Route path="MyReview/Animal" element={<Animal />} />
        <Route path="MyReview/Breeder" element={<Breeder />} />
        <Route path="/Breeder-List" element={<BreederList />} />
        <Route path="/" element={<Main />} />
        <Route path="/AnimalList" element={<AnimalList />} />
        <Route path="/BreederAnimalList" element={<BreederAnimalList />} />
        <Route path="/Community/Question" element={<CommunityQuestion />} />
        <Route
          path="/Community"
          element={<Navigate to="/Community/BreederInformation" />}
        />
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
        <Route path="/MyReview" element={<Navigate to="/myreview/save" />} />
        <Route path="/MyReview/Post" element={<MyReviewPost />} />
        <Route path="/MyReview/Comment" element={<MyReviewComment />} />
        <Route path="/MyReview/Review" element={<MyReview />} />
        <Route
          path="/MyReview/Review/Form/:breederId"
          element={<ReviewForm />}
        />
        <Route path="/MyReview/Save" element={<MyReviewSave />} />
        <Route path="/waitinganimal-detail" element={<WaitingAnimalDetail />} />
        <Route
          path="/waitinganimal-breeder"
          element={<WaitingAnimalBreederVer />}
        />
        <Route path="/animal-upload" element={<AnimalUpload />} />
        <Route path="/breeder-detail" element={<BreederDetail />} />
        <Route path="/community/review" element={<BwitherReview />} />
        <Route path="/breeder-review" element={<BreederReview />} />
        <Route path="/MypageGeneral" element={<MypageGeneral />} />
        <Route path="/MypageBreeder" element={<MypageBreeder />} />
        <Route path="/breederinfo-edit" element={<BreederInfoEdit />} />
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
        <Route path="/WritingDetail/:postId" element={<WritingDetail />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/signup/1" element={<BwitherSignUp1 />} />
        <Route path="/signup/2" element={<BwitherSignUp2 />} />
        <Route path="/signup/3" element={<BwitherSignUp3 />} />
        <Route path="/signup/4" element={<BwitherSignUp4 />} />

        <Route path="/breeder-signup/1" element={<BreederSignUp1 />} />
        <Route path="/breeder-signup/2" element={<BreederSignUp2 />} />
        <Route path="/breeder-signup/3" element={<BreederSignUp3 />} />
        <Route path="/breeder-signup/4" element={<BreederSignUp4 />} />
        <Route path="/breeder-signup/5" element={<BreederSignUp5 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adoptionsystem" element={<AdoptionSystem />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/SignUpBreeder" element={<SignUpBreeder />} />
        <Route path="/SignUpBreederChoice" element={<SignUpBreederChoice />} />
        <Route path="/SignUpBreederInfo" element={<SignUpBreederInfo />} />
        <Route path="/SignUpBreederInfo2" element={<SignUpBreederInfo2 />} />
        <Route path="/SignUpBreederDone" element={<SignUpBreederDone />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
