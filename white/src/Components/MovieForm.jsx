import React from "react";
const MovieForm = ({ match, history }) => {
  return (
    <h3>
      <span>{match.params.movietitle}</span>
      <button
        className="btn btn-primary m-2"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </h3>
  );
};

export default MovieForm;
