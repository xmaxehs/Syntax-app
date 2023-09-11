import React from "react";
import { FooterBg, FooterContainer, FooterDescription, FooterRow, FooterSocial, GitHubIcon, InstagramIcon, LinkedInIcon, SocialLinks, TelegramIcon } from "./footerElements";

const Footer = ({GitHubLink,InstagramLink,TelegramLink,LinkedinLink,CopyRight}) => {
  return (
    <FooterContainer>
      <FooterBg>
        <FooterRow>
          <FooterSocial>
            <SocialLinks to={GitHubLink}>
              <GitHubIcon />
            </SocialLinks>
            <SocialLinks to={InstagramLink}>
              <InstagramIcon />
            </SocialLinks>
            <SocialLinks to={LinkedinLink}>
              <LinkedInIcon />
            </SocialLinks>
            <SocialLinks to={TelegramLink}>
              <TelegramIcon />
            </SocialLinks>
          </FooterSocial>
          <FooterDescription>{CopyRight}</FooterDescription>
        </FooterRow>
      </FooterBg>
    </FooterContainer>
  );
};

export default Footer;
