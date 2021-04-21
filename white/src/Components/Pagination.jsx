import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
    const {totalItems,pageSize,currentPage}=props;
    const totalPages=Math.ceil(totalItems/pageSize);
    const Pages=_.range(1,totalPages+1);
    if(totalPages===1) return null
    return (

    <h4>
        <nav aria-label="Page navigation">
    <ul className="pagination">
        {Pages.map(Page=>(
        <li key={Page} className={Page===currentPage ? 'page-item active':'page-item'}>
            <button className="page-link" onClick={()=>props.changePage(Page)}>{Page}</button></li>))}
      
    </ul>
  </nav></h4> );
}
 
export default Pagination;