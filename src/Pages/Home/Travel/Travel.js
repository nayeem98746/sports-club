import React from 'react';
import './Travel.css';
import { Container } from 'react-bootstrap';
import { Button } from '@mui/material';


const Travel = () => {
    return (
        <div className='Travel'>
            <Container>
                <h1>TRAVEL WITH THE TEAM
                    TO AN AWAY GAME</h1>

                <div className="text">
                    <p>
                        Polaroid squid flannel chillwave roof party prism green juice schlitz meditation vexillologist post-ironic hella umami cray.
                    </p>
                </div>

                <Button className='button'>Read More</Button>
            </Container>
        </div>
    );
};

export default Travel;