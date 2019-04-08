import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from './components/List';
import Article from './components/Article';

const App = () => (
    <Router>
        <Route path="/" exact component={List} />
        <Route path="/article" component={Article} />
    </Router>
)

export default App;