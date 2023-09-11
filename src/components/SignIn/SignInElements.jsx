import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 8% 0 0;
  margin: auto;
  background: #121212;
  position: relative;
`;

export const BackBtn = styled(LinkR)`
  width: 48px;
  height: 48px;
  padding: 4px;
  margin: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background: #1f1f1f;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
export const BackIcon = styled(BiChevronLeft)`
  font-size: 40px;
  color:  #e9e7e8;
  background: transparent;
`

export const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  text-align: center;
  padding: 30px;
  margin-bottom: 80px;
  background: #1f1f1f;
  color: #e9e7e8;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const SignInTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  background: transparent;
  @media screen and (max-width: 479.98px) {
    font-size: 16px;
  }
`;

export const LoginForm = styled.form`
background: transparent;
  max-width: 360px;
  margin: 30px auto;
`;

export const LabelForm = styled.label`
background: transparent;
  font-size: 12px;
  display: flex;
  margin: 0 0 5px 5px;
`;

export const InputForm = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;
  background: #e0e0e0;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px;
`;

export const LoginBtn = styled.button`
  outline: 0;
  border-radius: 6px;
  width: 100%;
  border: 0;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  background: #7d7e8f;
  color: #e9e7e8;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #e9e7e8;
    color: #5e59f7;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
  }
`;

export const RegLink = styled.a`
  text-decoration: none;
  color: #5E59F7;
  cursor: pointer;
  background: transparent;
`;

export const ErrorElem = styled.div`
  color: #1f1f1f;
  border: 1px solid rgb(235, 183, 191);
  border-radius: 4px;
  background-color: rgb(243, 164, 164);
  margin: 6px 0;
`