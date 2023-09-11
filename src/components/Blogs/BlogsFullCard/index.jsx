import React from "react";
import {
  BackBtn,
  BackIcon,
  BlogContainer,
  BlogRow,
  BlogWrapper,
  BlogsPage,
  BlogsTitle,
  Description,
  Img,
  ImgWrapper,
  Row1,
  Row2,
  TextWrapper,
  Title,
} from "./blogsElements";
import { useParams } from "react-router-dom";

const MyBlogsFullDetail = () => {

  const { title } = useParams();
  return (
    <BlogsPage>
      <BackBtn to="/blog">
        <BackIcon />
      </BackBtn>
      <BlogsTitle>My Blogs</BlogsTitle>
      <BlogContainer id="blog1">
        <BlogWrapper>
          <BlogRow>
            <Row1>
              <ImgWrapper>
                <Img src={require('../../../images/BlogImg1.jpg')} alt='Blog-full-info-photo' />
              </ImgWrapper>
            </Row1>
            <Row2>
              <TextWrapper>
                <Title>{title}</Title>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum animi nobis error voluptatem fuga aut veritatis architecto perferendis incidunt minus mollitia consequuntur deserunt facilis vero dolore, enim explicabo at commodi aperiam quos? Provident fugit excepturi quam mollitia dolore aut neque hic nesciunt perferendis quisquam et perspiciatis temporibus officia alias unde accusantium cum, vitae minus omnis! Soluta, esse laudantium dolorum, dolores deserunt provident hic sequi veniam perspiciatis nostrum, quos maxime quasi consequatur reprehenderit temporibus tenetur. Error delectus laborum rerum sequi odio, debitis architecto necessitatibus voluptas, corporis molestias autem quo sint reprehenderit excepturi a sapiente aut? Ipsam nesciunt rem vitae sint dignissimos.
                </Description>
              </TextWrapper>
            </Row2>
          </BlogRow>
        </BlogWrapper>
      </BlogContainer>
    </BlogsPage>
  );
};

export default MyBlogsFullDetail;
