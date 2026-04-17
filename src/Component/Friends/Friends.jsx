import React, { use } from 'react';
import FriendsCard from '../../ui/Friendscard/FriendsCard';

const dataPromise = fetch('/data.json').then(res => res.json())

const Friends = () => {
    const friendsData = use(dataPromise)
    return (
        <div className='container mx-auto'>
            <h2 className='font-semibold text-[20px]'>Your friend</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center py-10'>
                {
                    friendsData.map(friend => <FriendsCard friend={friend}></FriendsCard>)
                }
            </div>
        </div>
    );
};

export default Friends;