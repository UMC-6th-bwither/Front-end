import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15vw;
  padding-right: 15vw;
  border-bottom: 0.5px solid #c5c5c5;
  box-sizing: border-box;
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

export const NavText = styled.div`
  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
`;

export const AuthText = styled.div`
  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  cursor: pointer;
`;

export const Button = styled.button`
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
`;
