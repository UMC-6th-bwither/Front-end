import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 100px auto 0 auto;
  font-family: 'Noto Sans KR';
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #c5c5c5;
  padding: 10px 0;
`;

export const TitleInput = styled.input`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  flex-grow: 1;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--Grey_icon, #c5c5c5);
  }
`;

export const TitleCounter = styled.span`
  margin-left: 10px;

  color: var(--DarkGrey_text, #444);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
  background: var(--Grey_icon, #c5c5c5);
  border-radius: 20px;
`;

export const OptionsSection = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 70px;
`;

export const Instruction = styled.p`
  color: var(--Grey_icon, #c5c5c5);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const OptionButton = styled.button`
  padding: 12px 20px;

  cursor: pointer;
  border-radius: 28px;
  border: 1px solid #e1e1e1;
  background: var(--White, #fff);

  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 116.667% */

  &:hover {
    background-color: #eaeaea;
  }
`;
