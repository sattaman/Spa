import React from 'react';
import { Router } from "react-router";
import { Nav, Ul, Li, Link } from './style';

export default ({ history }) => (
    <Router history={history}>
        <Nav> 
            <Ul>
                <Li>
                    <Link to="/home">Home</Link>
                </Li>
                <Li>
                    <Link to="/news/">News</Link>
                </Li>
                <Li>
                    <Link to={{ pathname: "/news/article", state: 'test' }}>Article</Link>
                </Li>
            </Ul>
        </Nav>
    </Router>
)