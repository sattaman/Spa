import React from 'react';
import { Router, Route } from "react-router";
import List from './components/List';
import Article from './components/Article';

const App = ({ history }) => (
    <Router history={history}>
        <Route path="/news/" exact component={List} />
        <Route path="/news/article" component={Article} />
    </Router>
)

export default App;