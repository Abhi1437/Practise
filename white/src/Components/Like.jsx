import React from "react";
const Like = (props) => {
  return (
    <i
      className={props.Movie.liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      onClick={() => props.onLike(props.Movie)}
    ></i>
  );
};

export default Like;
