import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-width: 1050px;
  height: 72px;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #c5c5c5;
`;

export const SubContainer = styled.div`
  width: 1050px;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1190px;
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  height: 44px;
  margin-right: 36px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

export const NavText = styled(Link)`
  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
`;

export const AuthText = styled(Link)`
  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  cursor: pointer;
  text-decoration: none;
`;

export const Button = styled(Link)`
  display: flex;
  height: 36px;
  padding: 7px 12px;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 6px;
  background: #f87b45;
  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-left: 12px;
  cursor: pointer;
  text-decoration: none;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 238px;
  padding: 20px 18px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border: 2px solid #f1f1f1;
  border-radius: 12px;
  background: #fff;
`;

export const ModalName = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const ModalEmail = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const MypageBtn = styled(Link)`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #fe834d;
  background: #fff;
  color: var(--main, #fe834d);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: var(--sub_hover, #ffddc5);
  }
`;

export const ModalDivider = styled.div`
  height: 2px;
  align-self: stretch;
  background: #f1f1f1;
`;

export const LogoutText = styled(Link)`
  color: #272727;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: var(--main, #f57137);
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const FloatingComponent = styled.div`
  position: absolute;
  top: 100%; /* 아이콘 바로 아래에 위치 */
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100; /* 플로팅 컴포넌트가 다른 요소 위에 표시되도록 z-index 설정 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;
