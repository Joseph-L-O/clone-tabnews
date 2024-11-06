// pages/index.js

import React from 'react';
import ImageGlitchWithQuote from './ImageGlitchWithQuote';

const HomePage = () => {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ImageGlitchWithQuote
                src="/elevate.jpeg"
                idleSrc="/elevate.jpeg"  
                alt="Imagem com efeito glitch"
                glitchFrames={[
                    "/elevate2.png",
                    "/elevate3.png",
                    "/elevate4.png",
                    "/elevate5.png"
                ]}
            />


        </main>
    );
};

export default HomePage;
