import React, { createContext, useState } from 'react';


export const FriendContext = createContext()

const FriendProvider = ({ children }) => {

const [storedTimeline, setStoredTimeline] = useState([])
  const handleCall = (currenrfriend) => {
       
            setStoredTimeline([...storedTimeline,currenrfriend])
        
  }
    return (
        <FriendContext.Provider value={handleCall}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;