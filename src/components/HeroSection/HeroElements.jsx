import styled from "styled-components";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  max-width: 1100px;
  height: 1000px;
  display: flex;
  align-items: center;
  margin: 0 70px;
  margin-top: -150px;

  @media screen and (max-width: 479.98px) {
    margin-left: 30px;
    margin-right: 0;
  }
  @media screen and (max-width: 767.98px) {
    margin-top: -50px;
  }
  @media screen and (min-width: 1299.98px) {
    margin: 0 auto;
  }
`;
export const HeroBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroRow = styled.div`
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
export const HeroCol1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -20px;
  max-width: 540px;
  grid-area: col1;
`;
export const HeroRowCol1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  color: #e9e7e8;
`;
export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #e9e7e850;
`;
export const HeroName = styled.h2`
  font-size: 64px;
  font-weight: 700;
  color: #5e59f7;
`;
export const HeroAbilityContainer = styled.div`
  color: #e9e7e850;
`;
export const HeroAbility = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #e9e7e8;
`;
export const HeroSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  color: #e9e7e8;

  @media screen and (max-width: 767.98px) {
    margin: 0 0;
  }
`;
export const SocialLinks = styled(LinkR)`
  margin: 10px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: #e9e7e8;

  &:hover {
    color: #5e59f7;
    transition: 0.2s ease-in-out;
  }
`;
export const HeroHireBtn = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
export const HireBtn = styled.button`
  width: 89px;
  height: 48px;
  border: 0;
  outline: 0;
  border-radius: 40px;
  background: #7d7e8f;
  color: #e9e7e8;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #e9e7e8;
    color: #5e59f7;
    font-weight: 700;
    font-size: 14px;
    transition: 0.2s ease-in-out;
  }
`;
export const HeroCol2 = styled.div`
  max-width: 540px;
  grid-area: col2;
`;
export const HomeImgContainer = styled.div`
  width: 100%;
`;
export const HomeImg = styled.img`
  width: 100%;

  @media screen and (max-width: 479.98px) {
    margin: 0 auto;
  }
`;
export const GitHubIcon = styled(AiFillGithub)`
  font-size: 48px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
export const TelegramIcon = styled(BsTelegram)`
  font-size: 48px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
export const InstagramIcon = styled(AiFillInstagram)`
  font-size: 48px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
export const LinkedInIcon = styled(AiFillLinkedin)`
  font-size: 48px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
