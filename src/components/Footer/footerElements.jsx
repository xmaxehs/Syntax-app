import styled from 'styled-components';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Link as LinkR } from "react-router-dom";


export const FooterContainer = styled.div`
    max-width: 1100px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export const FooterBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterSocial = styled.div`
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

export const FooterDescription = styled.p`
  font-size: 20px;
  text-align: center;
  color: #e9e7e8;

  @media screen and (max-width: 497.98px) {
    font-size: 14px;
  }
  @media screen and (max-width: 797.98px) {
    font-size: 18px;
  }
`;

export const GitHubIcon = styled(AiFillGithub)`
  font-size: 36px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
export const TelegramIcon = styled(BsTelegram)`
  font-size: 36px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
export const InstagramIcon = styled(AiFillInstagram)`
  font-size: 36px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;
export const LinkedInIcon = styled(AiFillLinkedin)`
  font-size: 36px;

  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
`;