import React from "react";
import {
  BlogContainer,
  BlogRow,
  BlogWrapper,
  BtnReadMore,
  BtnWrapper,
  Column1,
  Column2,
  Description,
  Img,
  ImgWrapper,
  TextWrapper,
  Title,
  TopLine,
} from "./blogInfoElements";
const BlogsInfo = ({
  id,
  topLine,
  title,
  description,
  alt,
  readMoreLink,
  blogImgSrc,
}) => {
  return (
    <BlogContainer id={id}>
      <BlogWrapper>
        <BlogRow>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <BtnWrapper>
                <BtnReadMore to={readMoreLink}>Read More</BtnReadMore>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={blogImgSrc} alt={alt} />
            </ImgWrapper>
          </Column2>
        </BlogRow>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default BlogsInfo;
