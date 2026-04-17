import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-15'>
            <div className='text-center space-y-2'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>10</h2>
                <p className='text-[#64748B] text=[18px]'>Total Friends</p>
            </div>
            <div className='text-center space-y-2'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>4</h2>
                <p className='text-[#64748B] text=[18px]'>On Track</p>
            </div>
            <div className='text-center space-y-2'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>6</h2>
                <p className='text-[#64748B] text=[18px]'>Need Attention</p>
            </div>
            <div className='text-center space-y-2'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>12</h2>
                <p className='text-[#64748B] text=[18px]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Stats;