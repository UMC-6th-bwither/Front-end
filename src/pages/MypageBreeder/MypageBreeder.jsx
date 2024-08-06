import { useDispatch, useSelector } from 'react-redux';
import DeleteAccountModal from '../../components/DeleteAccountModal/DeleteAccountModal';
import {
  openDeleteAccountModal,
  closeDeleteAccountModal,
  selectModal,
} from '../../redux/modalSlice';
import * as MP from './MypageBreeder.style';
import profile from '../../../public/img/profile.png';
import question from '../../../public/img/helpQuestionMark.svg';
import AlertBox from '../../components/AlertBox/AlertBox';

function MypageBreeder() {
  const dispatch = useDispatch();
  const { isDeleteAccountModalOpen } = useSelector(selectModal);

  return (
    <MP.Border>
      <MP.TopContainer>
        <MP.ProfileContainer>
          <MP.Title>마이페이지</MP.Title>
          <MP.Profile>
            <MP.Left>
              <img src={profile} alt="profile" className="profile_img" />
              <MP.Info>
                <div className="top_info">
                  <div>해피브리더</div>
                  <div className="badge">브리더</div>
                </div>
                <div>example@email.com</div>
              </MP.Info>
            </MP.Left>
            <MP.Right>
              <button type="button" className="edit_profile_btn">
                프로필 설정
              </button>
              <button type="button" className="edit_info_btn">
                브리더 정보 수정
              </button>
            </MP.Right>
          </MP.Profile>
        </MP.ProfileContainer>
      </MP.TopContainer>

      <MP.StatusContainer>
        <MP.RankContainer>
          <MP.RankTop>
            <MP.RankTitle>신뢰 등급</MP.RankTitle>
            <img src={question} alt="helpQuestion" />
          </MP.RankTop>
          <MP.RankBottom>
            <div className="number">2</div> <div className="text">등급</div>
          </MP.RankBottom>
        </MP.RankContainer>
        <MP.AlertContainer>
          <AlertBox message="행복이 3주차 사진 업로드가 안됐어요" />
          <AlertBox message="기쁨이 3주차 사진 업로드가 안됐어요" />
          <AlertBox message="슬픔이 정기검진 내역 업로드가 안됐어요" />
        </MP.AlertContainer>
      </MP.StatusContainer>

      <MP.BottomContainer>
        <MP.SectionContainer>
          <div className="title">커뮤니티</div>
          <MP.SectionLinks>
            <div>내가 쓴 글</div>
            <div>댓글 단 글</div>
            <div>나의 후기</div>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">계정</div>
          <MP.SectionLinks>
            <div>로그아웃</div>
            <div
              type="button"
              onClick={() => dispatch(openDeleteAccountModal())}
            >
              회원탈퇴
            </div>
            <DeleteAccountModal
              isOpen={isDeleteAccountModalOpen}
              onSubmit={() => dispatch(openDeleteAccountModal())}
              onCancel={() => dispatch(closeDeleteAccountModal())}
            />
          </MP.SectionLinks>
        </MP.SectionContainer>
      </MP.BottomContainer>
    </MP.Border>
  );
}

export default MypageBreeder;
