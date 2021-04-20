import React from 'react';
const Like = (props) => {
    return ( <React.Fragment>
        <span onClick={()=>props.handleLike(props.Movie)} style={{cursor:"pointer"}}>{props.Movie.liked==="true" ? <i className="fa fa-heart"/> : <i className="fa fa-heart-o"/>}</span>
    </React.Fragment> );
}
 
export default Like;