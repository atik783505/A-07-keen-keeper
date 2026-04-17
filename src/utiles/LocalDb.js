
export const getAllTimelineLocalDb = () => {
    const isListed = localStorage.getItem("timelineData");
    if (isListed) return JSON.parse(isListed);
    return [];
};

export const addToTimelineLocalDb = (newData) => {
    const allEntries = getAllTimelineLocalDb();
    allEntries.push(newData); 
    localStorage.setItem("timelineData", JSON.stringify(allEntries));
};

