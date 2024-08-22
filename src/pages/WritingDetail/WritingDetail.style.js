import styled from 'styled-components';

// export const Layout = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   background-color: #f4f4f4;
// `;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  background-color: #f4f4f4;
`;

export const NavbarContainer = styled.div`
  width: 120px;
  height: 222px;
  //margin: 80px 0 80px 7%;
  margin: 80px 0;
`;

export const MainContainer = styled.div`
  width: 1194px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #ffffff;
  //margin-right: 19%;
`;

export const Container = styled.div`
  width: 974px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 140px 0;
`;

export const TitleContainer = styled.div`
  width: 974px;
  height: 132px;
  padding: 0px 0px 32px 0px;
  gap: 24px;
  border-bottom: 2px solid var(--Grey_line, #f1f1f1);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 974px;
  justify: space-between;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 34.75px;
  text-align: left;
  color: var(--black, #272727);
`;

export const TitleIconContainer = styled.div`
  display: flex;
  width: 84px;
  gap: 35px;
  margin-left: auto;
`;

export const TitleIconFrame = styled.div`
  width: 15px;
  height: 32px;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 974px;
  padding: 20px 0px;
  gap: 10px;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 41px;
  height: 41px;
  background: #d9d9d9;
  border-radius: 1000px;
  border: none;
`;

export const ProfileName = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 400;
  line-height: 26.06px;
  text-align: left;
  color: #737373;
`;

export const Badge = styled.div`
  height: 26px;
  padding: 0px 8px;
  border-radius: 4px;
  background: #fff2f3;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  color: #fa5963;
`;

export const Time = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 400;
  text-align: right;
  color: #737373;
  margin-left: auto;
`;

export const ContentContainer = styled.div`
  width: 974px;
  gap: 52px;
  position: relative;
`;

export const ContentText = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  line-height: 30.6px;
  text-align: justified;
  color: #444444;
  margin: 20px 0;
`;

export const ContextImgContainer = styled.div`
  width: 492px;
  height: 328px;
  border-radius: 12px;
  background: #d9d9d9;
  margin: 30px auto;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const ContentIconContainer = styled.div`
  display: flex;
  width: 136px;
  height: 100px;
  gap: 18px;
  position: absolute;
  right: 0;
`;

export const ContentIconFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ContentIconContent = styled.div`
  color: var(--Grey_icon, #c5c5c5);

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px;
  letter-spacing: -0.2px;
`;

export const CommentSection = styled.div`
  width: 974px;
  padding: 36px 0px 0px 0px;
  justify: space-between;
`;

export const CommentInput = styled.input`
  width: 906px;
  height: 52px;
  padding: 8px 24px 8px 24px;
  gap: 8px;
  border-radius: 1000px;
  border: 2px;
  border: 2px solid var(--Grey_block, #f4f4f4);
`;

export const InputBtn = styled.img`
  width: 48px;
  height: 48px;
  padding: 8px;
  gap: 8px;
  border-radius: 1000px;
`;

// <S.CommentContainer>
// <S.ProfileImg/>
// <S.ProfileName>김*숙</S.ProfileName>

// <S.DeleteBtn></S.DeleteBtn>
// <S.ReplyBtn></S.ReplyBtn>

// <S.CommentContent></S.CommentContent>

// <S.Time></S.Time>
// <S.LikeBtn></S.LikeBtn>
// </S.CommentContainer>
