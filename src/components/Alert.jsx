import React from 'react';

const Alert = ({ alertMsgPosition }) => {
    return (
        <div
            className='alertmsg flex justify-between items-center z-10 w-[200px] top-[100px] py-[10px] px-[18px] right-[-200px] text-base fixed text-white rounded-[5px] bg-[#e04d48] transition-all duration-500 ease-in-out'
            style={{ right: `${alertMsgPosition}` }}
        >
            <div className='text-xl font-semibold border-r-2 pr-[0.9rem]'>X</div>
            <div>Movie not found.</div>
        </div>
    );
};

export default Alert;
