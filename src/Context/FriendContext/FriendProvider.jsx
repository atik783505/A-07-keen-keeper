import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext = createContext()

const FriendProvider = ({ children }) => {

    const [storedTimeline, setStoredTimeline] = useState([])
    const [callInfo, setCallInfo] = useState([])
    const [vedioCallInfo, setVideoCallInfo] = useState([])
    const [textInfo, setTextINfo] = useState([])
    const handleCall = (currenrfriend) => {
        const newData = {...currenrfriend, type:'call'}
        setStoredTimeline([...storedTimeline, newData])
        setCallInfo([...callInfo,currenrfriend])
        toast(`called ${currenrfriend.name}`)
    }
    const handleVideo = (currenrfriend) => {
        const newData = {...currenrfriend, type:'video'}
        setStoredTimeline([...storedTimeline, newData])
        setVideoCallInfo([...vedioCallInfo,currenrfriend])
        toast(`called ${currenrfriend.name}`)
    }
    const handleText = (currenrfriend) => {
        const newData = {...currenrfriend, type:'text'}
        setStoredTimeline([...storedTimeline, newData])
        setTextINfo([...textInfo,currenrfriend])
        toast(`called ${currenrfriend.name}`)
    }
    const data ={
        handleCall,
        handleVideo,
        handleText,
        storedTimeline,
        callInfo,
        vedioCallInfo,
        textInfo

    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;