import React from 'react';

const Header = ({title,para}) => {
    return (
        <div className='title'>
            <h1>{title}</h1>
            <p>{para}</p> <br />
            
        </div>
    );
};

export default Header;