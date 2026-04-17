import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addToTimelineLocalDb, getAllTimelineLocalDb } from '../../utiles/LocalDb';


export const FriendContext = createContext()

const FriendProvider = ({ children }) => {

    const [storedTimeline, setStoredTimeline] = useState(() => getAllTimelineLocalDb())
    // for rechart
    const callInfo = storedTimeline.filter(item => item.type === 'call').length;
    const vedioCallInfo = storedTimeline.filter(item => item.type === 'video').length;
    const textInfo = storedTimeline.filter(item => item.type === 'text').length;
    // for filter 
    const [filter, setFilter] = useState('all')
    const handleCall = (currenrfriend) => {
        const newData = { ...currenrfriend, type: 'call', entryTime: new Date().toISOString() }
        setStoredTimeline([...storedTimeline, newData])
        addToTimelineLocalDb(newData)
        toast.success(`Called ${currenrfriend.name}`)
    }
    const handleVideo = (currenrfriend) => {
        const newData = { ...currenrfriend, type: 'video', entryTime: new Date().toISOString() }
        setStoredTimeline([...storedTimeline, newData])
        addToTimelineLocalDb(newData)
        toast.success(`Video call with ${currenrfriend.name}`)
    }
    const handleText = (currenrfriend) => {
        const newData = { ...currenrfriend, type: 'text', entryTime: new Date().toISOString() }
        setStoredTimeline([...storedTimeline, newData])
        addToTimelineLocalDb(newData)
        toast.success(`Text with ${currenrfriend.name}`)
    }
    const data = {
        handleCall,
        handleVideo,
        handleText,
        storedTimeline,
        callInfo,
        vedioCallInfo,
        textInfo,
        filter,
        setFilter

    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;