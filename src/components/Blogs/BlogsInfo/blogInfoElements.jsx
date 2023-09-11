import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const BlogContainer = styled.div`
  color: #e9e7e8;

  @media screen and (max-width: 767.98px) {
    padding: 100px 0;
  }
`;

export const BlogWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  
  @media screen and (max-width: 767.98px) {
    height: 1000px;
  }
`;

export const BlogRow = styled.div`
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

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #5e59f7;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;

  @media screen and (max-width: 767.98px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const BtnReadMore = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 48px;
  border: 0;
  outline: 0;
  border-radius: 40px;
  font-size: 14px;
  background: #7d7e8f;
  color: #e9e7e8;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #e9e7e8;
    color: #5e59f7;
    font-weight: 700;
    font-size: 15px;
    transition: 0.2s ease-in-out;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  `;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin: 0 0 10px 0;
  border-radius: 15px;
  padding-right: 0;
`;
