import React, { createContext,useState } from 'react';
import { toast } from 'react-toastify';
import { addToTimelineLocalDb, getAllTimelineLocalDb } from '../../utiles/LocalDb';


export const FriendContext = createContext()

const FriendProvider = ({ children }) => {

    const [storedTimeline, setStoredTimeline] = useState(() => getAllTimelineLocalDb())
    const [callInfo, setCallInfo] = useState([])
    const [vedioCallInfo, setVideoCallInfo] = useState([])
    const [textInfo, setTextINfo] = useState([])
    const [filter,setFilter] = useState('all')
    const handleCall = (currenrfriend) => {
        const newData = {...currenrfriend, type:'call',entryTime: new Date().toISOString()}
        setStoredTimeline([...storedTimeline, newData])
        setCallInfo([...callInfo,currenrfriend])
        addToTimelineLocalDb(newData)
        toast(`called ${currenrfriend.name}`)
    }
    const handleVideo = (currenrfriend) => {
        const newData = {...currenrfriend, type:'video',entryTime: new Date().toISOString()}
        setStoredTimeline([...storedTimeline, newData])
        setVideoCallInfo([...vedioCallInfo,currenrfriend])
        addToTimelineLocalDb(newData)
        toast(`called ${currenrfriend.name}`)
    }
    const handleText = (currenrfriend) => {
        const newData = {...currenrfriend, type:'text',entryTime: new Date().toISOString()}
        setStoredTimeline([...storedTimeline, newData])
        setTextINfo([...textInfo,currenrfriend])
        addToTimelineLocalDb(newData)
        toast(`called ${currenrfriend.name}`)
    }
    const data ={
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