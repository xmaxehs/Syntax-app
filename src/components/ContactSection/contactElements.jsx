import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1100px;
  height: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767.98px) {
    margin-top: 150px;
    height: 1500px;
  }
`;

export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 767.98px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1' 'col2'`};
  }
`;
export const ContactTitle = styled.h3`
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

export const ContactCol1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  max-width: 540px;
  background: #5e59f7;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  grid-area: col1;

  
  @media screen and (max-width: 767.98px) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (max-width: 497.98px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
export const ContactTitleForm = styled.h4`
  font-size: 36px;
  font-weight: 700;
  color: #e9e7e8;
  margin-bottom: 30px;
  background: transparent;
  text-align: center;
  @media screen and (max-width: 479.98px) {
    font-size: 24px;
  }
`;

export const ContactDescription = styled.p`
  font-size: 24px;
  color: #e9e7e8;
  background: transparent;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 479.98px) {
    font-size: 16px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  width: 400px;

  @media screen and (max-width: 497.98px) {
    width: 90%;
  }
`;
export const FormGroup = styled.div`
  width: 90%;
  margin: 15px auto;
  padding: 15px;
  display: flex;
  flex-flow: wrap column;

  @media screen and (max-width: 767.98px) {
    width: 70%;
  }
  @media screen and (max-width: 497.98px) {
    width: 50%;
  }
`;

export const FormInput = styled.input`
  border: none;
  display: flex;
  width: 100%;
  padding: 15px;
  margin: 15px 0;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #cfd9e9;
  resize: none;
  transition: all 0.2s ease-out;
  color: #e9e7e8 !important;
`;

export const FormTextArea = styled.textarea`
  border: none;
  display: flex;
  width: 100%;
  padding: 15px;
  margin: 15px 0;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #cfd9e9;
  resize: none;
  transition: all 0.2s ease-out;
  color: #e9e7e8 !important;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 20px;
  color: #e9e7e8;
  background: #2b3054;
  cursor: pointer;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 0 0 20px 20px;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #e9e7e8;
    color: #2b3054;
    font-size: 14px;
    transition: 0.2s ease-in-out;
  }
`;

export const ContactCol2 = styled.div`
  max-width: 540px;
  grid-area: col2;

  @media screen and (max-width: 767.98px) {
    margin: 0 auto;
  }
`;

export const ContactImg = styled.img`
  width: 100%;

  @media screen and (max-width: 767.98px) {
    margin: 0 auto;
  }
`;
