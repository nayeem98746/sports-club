import React from 'react';
import Nextmatch from '../Nextmatch/Nextmatch';
import Banner from './Banner/Banner';
import Counter from './Counter/Counter';
import OurTeam from './OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Nextmatch></Nextmatch>
            <OurTeam />
            <Counter />
        </div>
    );
};

export default Home;