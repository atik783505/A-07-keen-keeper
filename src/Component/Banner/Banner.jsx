import React from 'react';

const Banner = () => {
    return (
        <div className='text-center space-y-5  my-12 p-2'>
            <h2 className='font-bold text-[48px]'>Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className= 'btn text-white bg-[#244D3F]'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;