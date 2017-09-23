import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index";


class PostsIndex extends React.Component {
    static mapStateToProps({posts}) {
        return {posts};
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const posts = Object.keys(this.props.posts || {});

        return posts.map(id =>
            <li className={"list-group-item"} key={id}>
                {this.props.posts[id].id}
            </li>
        )
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

export default connect(PostsIndex.mapStateToProps, {fetchPosts})(PostsIndex);
