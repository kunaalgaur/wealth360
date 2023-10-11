import React from 'react';
import styles from './PreLoader.module.css';
import { useLottie } from 'lottie-react';
import animation from './animation.json';

const PreLoader = () => {
    const options = {
        animationData: animation,
        loop: true,
    };

    const { View } = useLottie(options);
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>{View}</div>
        </div>
    );
};

export default PreLoader;
