import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendContext/FriendProvider';
import Timelinecard from '../../ui/Timelinecard/Timelinecard';

const Timeline = () => {
    const { storedTimeline } = useContext(FriendContext)
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto py-10 '>
                <h2 className='text-[48px] font-bold'>Timeline </h2>
                {
                    storedTimeline.map(data => <Timelinecard data={data}></Timelinecard>)
                }
            </div>
        </div>
    );
};

export default Timeline;