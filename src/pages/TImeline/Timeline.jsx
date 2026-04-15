import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendContext/FriendProvider';
import Timelinecard from '../../ui/Timelinecard/Timelinecard';
import { CiFilter } from 'react-icons/ci';

const Timeline = () => {
    const { storedTimeline,setFilter,filter} = useContext(FriendContext)
    const filteredData = filter === 'all' 
        ? storedTimeline 
        : storedTimeline.filter(item => item.type === filter);
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto py-10 '>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[48px] font-bold'>Timeline </h2>
                    <div className="flex-none z-20">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary><CiFilter />Filter</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li onClick={() => setFilter('all')}><a>All</a></li>
                                        <li onClick={() => setFilter('call')}><a>Call</a></li>
                                        <li onClick={() => setFilter('video')}><a>Video</a></li>
                                        <li onClick={() => setFilter('text')}><a>Text</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>

                {storedTimeline.length === 0 ?
                    <p className='text-center text-2xl py-14'>there is no timeline</p>
                    : (filteredData.map(data => <Timelinecard data={data}></Timelinecard>))
                }
            </div>

        </div>
    );
};

export default Timeline;