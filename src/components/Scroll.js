import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className='scrollContainer' style={{overflowY: 'scroll', overflowX: 'hidden', border: '2px solid black', height: '598px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;