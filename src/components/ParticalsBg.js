import React from 'react';
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from './config/config';


const ParticalsBg = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div id='particle-background'>
            <Particles
                id='tsparticles'
                particlesLoaded='particlesLoaded'
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
                height='100vh'
                width='100vh'
            >

            </Particles>


        </div>
    );
};

export default ParticalsBg;