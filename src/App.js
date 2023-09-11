import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import NotFound from "./components/common/NotFound/NotFound";
import SignInPage from "./pages/signin";
import Blogs from "./pages/blogs";
import MyBlogsFullDetail from "./components/Blogs/BlogsFullCard/index";

const App = () => {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="signin" element={<SignInPage />} exact />
        <Route path="blog" element={<Blogs />} exact/>
        <Route path="blog/:title" element={<MyBlogsFullDetail/>}  />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </Router>
  );
};


export default App;

