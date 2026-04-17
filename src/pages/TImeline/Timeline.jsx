import React, { useContext, useState } from 'react';
import { FriendContext } from '../../Context/FriendContext/FriendProvider';
import Timelinecard from '../../ui/Timelinecard/Timelinecard';
import { CiFilter } from 'react-icons/ci';

const Timeline = () => {
    const { storedTimeline, setFilter, filter } = useContext(FriendContext)
    const [sortedType,setSortedType] = useState('Default')

    const filteredData = filter === 'all'
        ? storedTimeline
        : storedTimeline.filter(item => item.type === filter);

    const sortedTimeline = [...filteredData].sort((a,b) => {
        const A = new Date(a.entryTime).getTime() || 0
        const B = new Date(b.entryTime).getTime() || 0
        if(sortedType === 'old-to-new'){
            return A-B
        }else{
            return B-A
        }

    })
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto py-10 '>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[48px] font-bold'>Timeline </h2>
                    <div className='flex gap-2'>
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
                        <div className="flex-none z-20">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details>
                                        <summary>Sort by: {sortedType}</summary>
                                        <ul className="bg-base-100 rounded-t-none p-2">
                                            <li onClick={() => setSortedType('old-to-new')}><a>old-to-new</a></li>
                                            <li onClick={() => setSortedType('new-to-old')}><a>new-to-old</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {sortedTimeline.length === 0 ?
                    <p className='text-center text-2xl py-14'>there is no timeline</p>
                    : (sortedTimeline.map(data => <Timelinecard data={data}></Timelinecard>))
                }
            </div>

        </div>
    );
};

export default Timeline;