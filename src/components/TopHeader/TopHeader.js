import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className='banner positon-relative'>
            <div className='position-absolute' style={{ top: "386px", left: "200px" }}>
                <h3 style={{ fontWeight: "700", fontSize: "36px" }}>Computer Engineering</h3>
                <p style={{ fontWeight: "400", fontSize: "18px" }}>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default TopHeader;