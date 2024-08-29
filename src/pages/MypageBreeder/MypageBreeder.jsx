import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteAccountModal from '../../components/DeleteAccountModal/DeleteAccountModal';
import {
  openDeleteAccountModal,
  closeDeleteAccountModal,
  selectModal,
} from '../../redux/modalSlice';
import * as MP from './MypageBreeder.style';
import profile from '/img/profile.png';
import footprintLine from '/img/footprintLine.svg';
import AlertBox from '../../components/AlertBox/AlertBox';
import SmallButton from '../../components/smallbutton/SmallButton';
import { logout } from '../../redux/authSlice';
import useAuth from '../../hooks/useAuth';
import api from '../../api/api';

function MypageBreeder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { breederId } = useAuth();
  const { isDeleteAccountModalOpen } = useSelector(selectModal);

  const handleLogout = useCallback(async () => {
    await dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);
  const [userData, setUserData] = useState(null);
  const [profileImageSrc, setProfileImgSrc] = useState(null);
  const [missingFile, setMissingFile] = useState([]);
  const [uploadState, setUploadState] = useState([]);

  // api 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const [userResponse, missingFileResponse, uploadStateResponse] =
          await Promise.all([
            await api.get('/user', {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }),
            api.get(`/breeder/${breederId}/missing-files`, {
              headers: {
                'Content-Type': 'application/json',
              },
            }),
            api.get(`/breeder/${breederId}/upload-status`, {
              headers: {
                'Content-Type': 'application/json',
              },
            }),
          ]);

        const BreederDTOdata = userResponse.data.result.breederDTO;

        setUserData(BreederDTOdata);
        setProfileImgSrc(userResponse.data.result.userDTO.profileImage);
        setMissingFile(missingFileResponse.data.result);
        setUploadState(uploadStateResponse.data.result);
      } catch (error) {
        console.error('Error fetching Data', error);
      }
    };

    fetchData();
  }, []);

  const missingAnimalFiles =
    uploadState?.animalFileStatus?.filter((file) => !file.uploaded) || [];
  const missingBreederFiles =
    uploadState?.breederFileStatus?.filter((file) => !file.uploaded) || [];

  return (
    <MP.Border>
      <MP.TopContainer>
        <MP.ProfileContainer>
          <MP.Title>마이페이지</MP.Title>
          <MP.Profile>
            <MP.Left>
              {userData && (
                <div className="profile_img_wrapper">
                  <img
                    src={profileImageSrc || profile}
                    alt="profile"
                    className="profile_img"
                  />
                </div>
              )}
              <MP.Info>
                {userData && (
                  <>
                    <div className="top_info">
                      <div>{userData.tradeName}</div>
                      <div className="badge">브리더</div>
                    </div>
                    <div>{userData.tradeEmail}</div>
                  </>
                )}
              </MP.Info>
            </MP.Left>
            <MP.Right>
              <SmallButton onClick={() => navigate(`/ProfileSettingBreeder`)}>
                프로필 설정
              </SmallButton>
              <button
                type="button"
                className="edit_info_btn"
                onClick={() => navigate(`/breederinfo-edit`)}
              >
                브리더 정보 수정
              </button>
            </MP.Right>
          </MP.Profile>
        </MP.ProfileContainer>
      </MP.TopContainer>

      <MP.StatusContainer>
        <MP.AlertContainer>
          {/* <AlertBox message="행복이 3주차 사진 업로드가 안됐어요" />
          <AlertBox message="기쁨이 3주차 사진 업로드가 안됐어요" />
          <AlertBox message="슬픔이 정기검진 내역 업로드가 안됐어요" /> */}
          {missingBreederFiles.map((data) => (
            <AlertBox
              key={data.breederId}
              fileType={data.fileType}
              Id={data.breederId}
            />
          ))}
          {missingAnimalFiles.map((data) => (
            <AlertBox
              key={data.animalId}
              fileType={data.fileType}
              Id={data.animalId}
            />
          ))}
        </MP.AlertContainer>
      </MP.StatusContainer>

      <MP.FootpintLine src={footprintLine} alt="footprintLine" />

      <MP.BottomContainer>
        <MP.SectionContainer>
          <div className="title">커뮤니티</div>
          <MP.SectionLinks>
            <MP.NavLink to="/myreview/post">내가 쓴 글</MP.NavLink>
            <MP.NavLink to="/myreview/save">저장한 글</MP.NavLink>
            <MP.NavLink to="/breeder-review">받은 후기</MP.NavLink>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">계정</div>
          <MP.SectionLinks>
            <MP.NavLink type="button" onClick={handleLogout}>
              로그아웃
            </MP.NavLink>
            <MP.NavLink
              type="button"
              onClick={() => dispatch(openDeleteAccountModal())}
            >
              회원탈퇴
            </MP.NavLink>
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
