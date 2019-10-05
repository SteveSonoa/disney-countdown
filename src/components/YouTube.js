import React from 'react';

import './YouTube.css';

const YouTube = ({ id }) => (
    <div className="youtube-container">
        <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={id}
        />
    </div>
);

export default YouTube;
