import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    return (
        <Link to={`/frienddetails/${friend.id}`} className='bg-white p-15 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 cursor-pointer text-center flex flex-col items-center mt-6 space-y-3 w-11/12 sm:w-full'>
            <img className='w-[80px] h-[80px] rounded-full' src={friend.picture} alt="" />
            <h2 className='font-semibold text=[20px]'>{friend.name}</h2>
            <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-2'>
                {
                    friend.tags.map(tag => <span className='badge bg-green-300 text-green-700'>{tag}</span>)
                }
            </div>
            <p className={`badge rounded-full text-white ${friend.status === "overdue" ? 'bg-red-600': friend.status === "on-track" ? 'bg-[#244D3F]': 'bg-[#EFAD44]' }`}>{friend.status}</p>
        </Link>
    );
};

export default FriendsCard;