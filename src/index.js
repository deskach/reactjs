import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
// import App from './components/app';
import reducers from './reducers';
import {BrowserRouter, Route} from "react-router-dom";
import PostsIndex from "./components/posts_index";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path={"/"} component={PostsIndex}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);
