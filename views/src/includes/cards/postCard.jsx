import React from "react";


const PostCard= (props)=>{
    const {post} = props;
    return(<>
    <div className="card">
        <div className="card-header">
            {post.title}
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            
        </div>
    </div>

    </>);
}
export default PostCard;
//<a href="#" className="btn btn-primary">Go somewhere</a>