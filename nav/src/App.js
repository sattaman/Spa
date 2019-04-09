import React from 'react';
import { Router } from "react-router";
import { Link } from 'react-router-dom';

export default ({ history }) => (
    <Router history={history}>
        <nav> 
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/news/">News</Link>
                </li>
                <li>
                    <Link to={{ pathname: "/news/article", state: 'test' }}>Article</Link>
                </li>
            </ul>
        </nav>
    </Router>
)