import React, { Suspense } from 'react';
import Banner from '../../Component/Banner/Banner';
import Stats from '../../Component/Stats/Stats';
import Friends from '../../Component/Friends/Friends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Suspense fallback={<p>friends are coming</p>}>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Homepage;