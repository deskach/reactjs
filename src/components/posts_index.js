import React, {Component} from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    //^ this function is called when the component about to be rendered the 1st time
    console.log('this would be a good time to call an action creator to retrieve posts');
  }

  render() {
    return (
      <div>List of BLOG posts</div>
    );
  }
}

export default PostsIndex;
