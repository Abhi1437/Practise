import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  onContent = (item, columns) => {
    if (columns.content) return columns.content(item);

    return _.get(item, columns.path);
  };
  render() {
    const { data, columns } = this.props;
    return data.map((item) => (
      <tr key={item._id}>
        {columns.map((col) => (
          <td key={item._id + (col.path || col.key)}>
            {this.onContent(item, col)}
          </td>
        ))}
      </tr>
    ));
  }
}

export default TableBody;
