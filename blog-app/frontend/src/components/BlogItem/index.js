import React from "react";
import PropTypes from "prop-types";

import BlogItemText from "../BlogItemText";

import "../../App.css";
import "./index.css";

export default function BlogItem ({
  index,
  blogPost,
  setBlog,
  imageOrientation,
  genCategories
}) {
  if (imageOrientation === "top") {
    return (
      <div
        key={index}
        className="card-1"
        onClick={() => console.log("TODO: nav to blog")}
      >
        <img src={blogPost.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
            genCategories= {genCategories}
          ></BlogItemText>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="card-2"
        onClick={() => console.log("TODO: nav to blog")}
      >
        <img src={blogPost.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
            genCategories= {genCategories}
          ></BlogItemText>
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  blogPost: PropTypes.object.isRequired,
};