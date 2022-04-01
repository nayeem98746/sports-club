import React from 'react';
import Banner from '../Banner/Banner';
import Fans from '../Fans/Fans';
import News from '../News/News';
import Nextmatch from '../Nextmatch/Nextmatch';
import Statistics from '../Statistics/Statistics';
import Travel from '../Travel/Travel';

const Home = () => {
    return (
        <div>
            <Banner />
            <Nextmatch />
            <Statistics />
            <Travel />
            <Fans />
            <News />

        </div>
    );
};

export default Home;