import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;