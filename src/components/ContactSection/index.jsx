import React from "react";
import {
  ContactBg,
  ContactCol1,
  ContactCol2,
  ContactContainer,
  ContactDescription,
  ContactForm,
  ContactImg,
  ContactRow,
  ContactTitle,
  ContactTitleForm,
  FormGroup,
  FormInput,
  FormTextArea,
  SubmitBtn,
} from "./contactElements";

const ContactSection = ({
  imgStart,
  titleForm,
  descriptionForm,
  contactImgSrc,
}) => {
  return (
    <ContactContainer id="contact">
      <ContactBg>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactRow imgStart={imgStart}>
          <ContactCol1>
            <ContactTitleForm>{titleForm}</ContactTitleForm>
            <ContactDescription>{descriptionForm}</ContactDescription>
            <ContactForm>
              <FormGroup>
                <FormInput placeHolder="Your Name" />
              </FormGroup>
              <FormGroup>
                <FormInput placeHolder="Your Email" />
              </FormGroup>
              <FormGroup>
                <FormInput placeHolder="Your issue" />
              </FormGroup>
              <FormGroup>
                <FormTextArea placeHolder="Your Message..." />
              </FormGroup>
              <SubmitBtn>Submit Message</SubmitBtn>
            </ContactForm>
          </ContactCol1>
          <ContactCol2>
            <ContactImg src={contactImgSrc} />
          </ContactCol2>
        </ContactRow>
      </ContactBg>
    </ContactContainer>
  );
};

export default ContactSection;
