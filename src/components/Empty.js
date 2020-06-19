import React from 'react';

import Lottie from 'react-lottie';
import NotFound from '../animations/empty.json';

function Empty() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFound,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="jumbotron">
            <Lottie
                options={defaultOptions}
                height={'40%'}
                width={'40%'}
            />
        </div>
    );
}

export default Empty;