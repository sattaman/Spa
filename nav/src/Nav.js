import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default () => (
    <Router>
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