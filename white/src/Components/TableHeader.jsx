import React from "react";
const TableHeader = (props) => {
  const handleIcon = (column) => {
    if (column.path !== props.sortcolumn.path) return null;
    if (props.sortcolumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    return <i className="fa fa-sort-desc" />;
  };

  const handleSort = (path) => {
    const sortcolumn = { ...props.sortcolumn };
    if (sortcolumn.path === path) {
      sortcolumn.order = sortcolumn.order === "asc" ? "desc" : "asc";
    } else {
      sortcolumn.path = path;
      sortcolumn.order = "asc";
    }
    props.onSort(sortcolumn);
  };

  const { columns } = props;
  return columns.map((col) => (
    <th key={col.path || col.key} onClick={() => handleSort(col.path)}>
      {col.title} {handleIcon(col)}
    </th>
  ));
};

export default TableHeader;
