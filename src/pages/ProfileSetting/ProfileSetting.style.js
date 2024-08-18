import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  width: 970px;
  height: 330px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  top: 136px;
  left: 475px;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: var(--black, #272727);
  margin: 70px 0 30px 0;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 970px;
  height: 192px;
  top: 250px;
  left: 456px;
  padding: 36px 28px 36px 28px;
  border-radius: 20px;
  justify: space-between;
  box-shadow: 0px 2px 20px 0px #949ca326;
  margin: 10px 0;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 1000px;
  background-image: url('../../../public/img/profilebackground.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CameraIcon = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  bottom: 0px;
  right: 0px;
  background: #ffffff;
  border-radius: 1000px;
  box-shadow: 0px 4px 4px 0px #0000000d;
  padding-top: 10px;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1000px;
`;

export const ProfileInfoContainer = styled.div`
  padding: 40px;
  height: 48px;
`;

export const Name = styled.div`
  height: 21px;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 350;
  line-height: 21px;
  letter-spacing: 0.04em;
  text-align: left;
  color: var(--black, #272727);
`;

export const Email = styled.div`
  height: 21px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  letter-spacing: 0.04em;
  text-align: left;
  color: var(--Grey_text, #737373);

  padding-top: 5px;
`;

export const AccountContainer = styled.div`
  width: 970px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: left;
  margin: 70px 0 100px 0;

  div {
    margin: 0 0 20px 0;
  }

  p {
    height: 26px;
    top: 626px;
    left: 488px;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
    line-height: 26.06px;
    text-align: left;
    color: var(--DarkGrey_text, #444444);
    margin: 5px 0;
  }

  .passwordcontainer {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 450px;
`;

export const PWInput = styled.input`
  width: 450px;
  height: 52px;
  padding: 8px 40px 8px 18px;
  gap: 8px;
  border-radius: 10px;
  background: var(--White, #ffffff);
  border: 2px solid var(--Grey_line, #f1f1f1);

  color: var(--Grey_icon, black);
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  line-height: 26.06px;
  font-weight: 500;
  text-align: left;

  &::placeholder {
    color: var(--Grey_icon, #dadada);
    opacity: 1;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus {
    border: 2px solid var(--Grey_line, #f1f1f1);
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: default;
`;

export const SubmitContainer = styled.div`
  width: 970px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdopterContainer = styled.div`
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: left;

  p {
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    color: var(--Grey_text, #737373);
    margin-top: 5px;
  }
`;

export const AdopterInfoContainer = styled.div`
  width: 970px;
  font-family: 'Noto Sans KR';

  div {
    margin: 0 0 50px 0;
  }

  p {
    top: 626px;
    left: 488px;
    font-size: 18px;
    font-weight: 500;
    line-height: 26.06px;
    text-align: left;
    color: var(--DarkGrey_text, #444444);
    margin: 5px 0;
  }

  input {
    height: 52px;
    padding: 8px 18px;
    gap: 8px;
    border-radius: 10px;
    background: var(--White, #ffffff);
    border: 2px solid var(--Grey_line, #f1f1f1);

    color: var(--Grey_icon, black);
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-style: normal;
    line-height: 26.06px;
    font-weight: 400;
    text-align: left;

    &::placeholder {
      color: #737373;
      opacity: 1;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    &:focus {
      border: 2px solid var(--Grey_line, #f1f1f1);
      outline: none;
    }
  }
`;

export const PhoneNumInput = styled.input`
  width: 420px;
  margin: 10px 0;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  p:last-child {
    width: 249px;
    height: 0px;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 350;
    line-height: 21px;
    text-align: left;
    color: var(--Grey_text, #737373);
    margin-left: 3px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

export const RadioBtn = styled.input.attrs({ type: 'radio' })`
  display: none;

  &:checked + label > img {
    content: url(${'../../../public/img/checked.png'});
  }
`;

export const RadioIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  content: url(${'../../../public/img/unchecked.png'});
`;

export const Label = styled.label`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: 55px;
  display: flex;
  align-items: center;
`;

export const PostCodeContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 52px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 25px 0;
`;

export const PostCodeInput = styled.input`
  width: 815px;
`;

export const PostCodeBtn = styled.button`
  display: flex;
  width: 136px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #fe834d;
  background: #fffdf2;

  color: #fe834d;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
  &:hover {
    background: #ffddc5;
  }
`;

export const ResidentInput = styled.input`
  width: 970px;
  margin-top: 10px;
`;

export const RoommateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 970px;
`;

export const RoommateInput = styled.input`
  width: 787px;
  margin-top: 10px;
`;

export const RoommateNumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  width: 162px;
  height: 0px;

  span {
    width: 17px;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
    line-height: 50.06px;
    text-align: left;
    color: var(--black, #272727);
  }
`;

export const CommuteTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 970px;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;

  span {
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 350;
    line-height: 26.06px;
    text-align: left;
    color: var(--black, #272727);
    margin-left: 50px;
  }

  span:first-child,
  span:last-child {
    margin-left: 0px;
  }
`;

export const CommuteTimeInput = styled.input`
  width: 200px;
  margin-top: 10px;

  &::placeholder {
    text-align: center;
  }
`;

export const TurnAroundTimeContainer = styled.section`
  align-items: center;
  justify-content: space-between;
  height: 45px;
`;

export const BreedInput = styled.input`
  width: 970px;
  margin-top: 10px;
`;

export const ErrorMessage = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: var(--Red, #e76467);
  padding-left: 5px;
`;
