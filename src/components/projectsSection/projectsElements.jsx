import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 1100px;
  height: 600px;
  margin: 150px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767.98px) {
    margin: 310px auto 0 auto;
    height: 1000px;
  }
`;
export const ProjectsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProjectsTitle = styled.h3`
  font-size: 64px;
  font-weight: 700;
  color: #5e59f7;
  margin-bottom: 70px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767.98px) {
    margin-left: 30px;
  }
`;
export const ProjectsCards = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767.98px) {
    flex-wrap: wrap;
  }
`;