import styled from 'styled-components';

export const Border = styled.div`
  border-bottom: 0.5px solid #c5c5c5;
`;

export const Container = styled.div`
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
`;

export const AuthText = styled.div`
  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
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
`;
