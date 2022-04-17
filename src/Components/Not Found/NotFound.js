import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Animation from './datas.json'
import './Found.css'





const NotFound = () => {

    const container = useRef(null)

    useEffect(() => {

        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });

    }, [])

    return (
        <div>
            <p> Okay</p>
            <div className='container' ref={container} ></div>
        </div>

    );
};

export default NotFound;

