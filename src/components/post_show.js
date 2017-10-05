import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

// import {fetchPost} from "../actions/index";

class PostShow extends React.Component {
    render() {
        const {post} = this.props;

        if (post) {
            return (
                <div>
                    <Link to={'/'}>Back to index</Link>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }

        return <div>Loading...</div>;
    }
}

function mapState2Props(state, ownProps) {
    const {id} = ownProps.match.params;

    return {post: state.posts[id]};
}

export default connect(mapState2Props, null/*{fetchPost}*/)(PostShow);
