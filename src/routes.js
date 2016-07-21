import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

/*^ If the route is '/' - show App and PostsIndex,
    if it is /greet - show App and greeting

    :id can be accessed from PostsShow by means of this.props.params.id
 */
