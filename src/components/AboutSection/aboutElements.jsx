import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1100px;
  height: 600px;
  display: flex;
  margin: 0 70px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1299.98px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 479.98px) {
    margin-top: 150px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col2 col1'`};

  @media screen and (max-width: 767.98px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col2' 'col1'`};
  }
`;

export const AboutCol1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 540px;
  grid-area: col1;
`;

export const AboutTitle = styled.h3`
  font-size: 64px;
  width: 100%;
  text-align: left;
  font-weight: 700;
  color: #5e59f7;
  margin-bottom: 30px;
`;

export const AboutBio = styled.p`
  font-size: 22px;
  font-weight: 400;
  white-space: break-spaces;
  color: #e9e7e8;
  margin-bottom: 30px;
`;

export const AboutCounters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767.98px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CounterItem = styled.h4`
  width: 200px;
  text-align: center;
  border: 1px solid #5e59f7;
  margin: 0 5px;
  border-radius: 10px;
  font-size: 36px;
  color: #e9e7e8;
  transition: 0.2s ease-in-out;

  z-index: 3;
  &:hover {
    color: #5e59f7;
    transform: scale(1.06);
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 767.98px) {
    font-size: 24px;
    width: 150px;
    margin-bottom: 15px;
  }
`;

export const AboutCol2 = styled.div`
  max-width: 540px;
  grid-area: col2;
  margin: 0 auto;
`;
export const AboutImg = styled.img`
  width: 100%;
  @media screen and (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
  }
`;
