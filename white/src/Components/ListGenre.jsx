import React from "react";
const ListGenre = (props) => {
  return (
    <ul className="list-group" style={{ paddingTop: "40px" }}>
      {props.types.map((item) => (
        <li
          key={item._id}
          className={
            props.selectedGenre === item
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onHandleGenre(item)}
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default ListGenre;
