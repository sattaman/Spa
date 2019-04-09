import React from 'react';

export default ({ location }) => (
    <div>
        <h1>News Article</h1>
        <p>passed state: {location.state}</p>
    </div>
)