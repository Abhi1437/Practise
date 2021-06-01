import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

class MoviesTable extends Component {
  render() {
    const { Final, onDelete, onLike, onSort, sortcolumn } = this.props;
    const columns = [
      {
        path: "_id",
        title: "ID",
        content: (movie) => (
          <Link to={`/addmovie/${movie._id}`}>{movie._id}</Link>
        ),
      },
      {
        path: "title",
        title: "Movie Name",
      },
      { path: "genre.name", title: "Genre" },
      { path: "dailyRentalRate", title: "Cost" },
      { path: "numberInStock", title: "Availability" },
      {
        key: "like",
        content: (movie) => <Like Movie={movie} onLike={() => onLike(movie)} />,
      },
      {
        key: "delete",
        content: (movie) => (
          <button className="btn btn-danger" onClick={() => onDelete(movie)}>
            DELETE
          </button>
        ),
      },
    ];
    return (
      <table className="table ">
        <thead>
          <tr style={{ cursor: "pointer" }}>
            <TableHeader
              columns={columns}
              onSort={onSort}
              sortcolumn={sortcolumn}
            />
          </tr>
        </thead>
        <tbody>
          <TableBody data={Final} columns={columns} />
        </tbody>
      </table>
    );
  }
}
export default MoviesTable;
