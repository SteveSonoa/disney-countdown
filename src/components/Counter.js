import React from 'react';

import './Counter.css';

const Counter = ({ number, label }) => (
    <div className='counter-container'>
        <div className='number'>{number}</div>
        <div className='label'>{label}</div>
    </div>
);

export default Counter;
