import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 360px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #2b3054;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.06);
  }
  @media screen and (max-width: 1099.98px) {
    height: 360px;
  }
  @media screen and (max-width: 767.98px) {
    height: 240px;
  }
`;
export const CardRow1 = styled.div`
  max-width: 330px;
  background: transparent;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardImg = styled.img`
  width: 80px;
  background: transparent;
  height: 80px;
  border-radius: 60px;
  border: 1px solid #5e59f7;
  margin-right: 15px;
  padding: 10px;
`;
export const CardTitle = styled.h4`
  font-size: 24px;
  background: transparent;
  font-weight: 700;
  color: #e9e7e8;
`;
export const CardRow2 = styled.div`
  max-width: 330px;
  height: 60%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
`;
export const CardDescirption = styled.p`
  font-size: 18px;
  background: transparent;
  font-weight: 400;
  white-space: break-spaces;
  color: #e9e7e8;

  @media screen and (max-width: 479.98px) {
    font-size: 14px;
  }
`;
