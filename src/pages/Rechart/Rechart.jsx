import React from 'react';
import Chart from '../../Component/PieChart/Chart';


const Rechart = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-[48px] font-bold'>Friendship Analytics</h2>
            <p>By Interaction Type</p>
            <Chart></Chart>
        </div>
    );
};

export default Rechart;