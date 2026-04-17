import React from 'react';
import { FaParagraph, FaPhone, FaRegCommentDots, FaVideo } from 'react-icons/fa';

const Timelinecard = ({ data }) => {
    return (
        <div className='flex gap-1 items-center p-3 mb-3 bg-white border border-gray-100 rounded-xl 
                        transition-all duration-300 ease-in-out 
                        hover:shadow-xl hover:-translate-y-1 hover:border-green-500 cursor-pointer'>
            <div className='p-3' >
                {data.type === 'call' ? <FaPhone className='text-[30px]'></FaPhone> : data.type === 'video' ? <FaVideo className='text-[30px]'></FaVideo>
                    : <FaRegCommentDots className='text-[30px]'></FaRegCommentDots>}
            </div>
            <div>
                <h2>{data.type} with {data.name}</h2>
                <div className='flex gap-2'>
                    <p>{new Date(data.entryTime).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}</p>
                    <p>{new Date(data.entryTime).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}</p>
                </div>
            </div>
        </div>
    );
};

export default Timelinecard;