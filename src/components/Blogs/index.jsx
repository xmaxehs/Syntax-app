import React from "react";
import { BackBtn, BackIcon, BlogsContainer, BlogsPage, BlogsTitle } from "./blogsElements";
import { BlogInfoDetailObjFive, BlogInfoDetailObjFour, BlogInfoDetailObjOne, BlogInfoDetailObjThree, BlogInfoDetailObjTwo } from "./BlogsInfo/Data";
import BlogsInfo from "./BlogsInfo";

const MyBlogs = () => {
  return (
    <BlogsPage>
      <BackBtn to="/">
        <BackIcon />
      </BackBtn>
      <BlogsTitle>My Blogs</BlogsTitle>
      <BlogsContainer>
        <BlogsInfo {...BlogInfoDetailObjOne}/>
        <BlogsInfo {...BlogInfoDetailObjTwo}/>
        <BlogsInfo {...BlogInfoDetailObjThree}/>
        <BlogsInfo {...BlogInfoDetailObjFour}/>
        <BlogsInfo {...BlogInfoDetailObjFive}/>
      </BlogsContainer>
    </BlogsPage>
  );
};

export default MyBlogs;
