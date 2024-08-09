import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  background-color: #f4f4f4;
`;

export const Pagination = styled.div`
  position: fixed;
  left: 16px;
  top: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? 'orange' : '#ccc')};
`;

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.7px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  color: #f87b45;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 4px;
  margin-bottom: 42px;
`;

export const Description = styled.p`
  margin: 42px 0;
  display: flex;
  width: 338px;
  height: 102px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #737373;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 339px;
  border-radius: 12px;
  background: #fafafa;
  padding: 20px;
  margin-top: 20px;
`;

export const StatsTopBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StatsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const StatTitle = styled.div`
  color: #888;
`;

export const StatValue = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;
