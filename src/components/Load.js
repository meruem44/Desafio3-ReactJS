import React from 'react';

import Lottie from 'react-lottie';
import Rocket from '../animations/rocekt.json';

function Load() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Rocket,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="lottie">
            <Lottie
                options={defaultOptions}
                height={'20%'}
                width={'20%'}
            />
        </div>
    );
}

export default Load;