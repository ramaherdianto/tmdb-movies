import React from 'react';

const Alert = ({ alertMsgPosition }) => {
    return (
        <div
            className='alertmsg z-10 w-[200px] top-[100px] p-[18px] right-[-200px] text-base fixed text-white rounded-[5px] bg-[#e04d48] transition-all duration-500 ease-in-out'
            style={{ right: `${alertMsgPosition}` }}
        >
            Movie not found.
        </div>
    );
};

export default Alert;
