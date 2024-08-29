import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as A from './AlertBox.style';

function AlertBox({ fileType, Id }) {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    if (fileType === 'KENNEL' || fileType === 'REGISTRATION') {
      navigate(`/breeder-detail/${Id}`);
    } else {
      navigate(`/waitinganimal-detail/${Id}`);
    }
  };

  const fileTypeMatch = {
    KENNEL: '캔넬/캐터리 사진',
    REGISTRATION: '사업자 등록증 사진',
    PEDIGREE: '혈통서',
    VACCINATION: '예방접종 내역',
    HEALTH_CHECK: '수의사 검진 내역',
    PARASITIC: '기생충 검사',
    MOTHER_HEALTH_CHECK_IMAGE: '엄마강아지- 수의사 검진 내역',
    FATHER_HEALTH_CHECK_IMAGE: '아빠강아지- 수의사 검진 내역',
  };

  return (
    <A.Border>
      <A.Left>
        <div>❗</div>
        <div className="message">
          분양 희망자들이 {fileTypeMatch[fileType]} 을(를) 궁금해 해요.
        </div>
      </A.Left>
      <div>
        <A.Button type="button" onClick={handleUploadClick}>
          업로드 하러 가기
        </A.Button>
      </div>
    </A.Border>
  );
}

AlertBox.propTypes = {
  fileType: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
};

export default AlertBox;
