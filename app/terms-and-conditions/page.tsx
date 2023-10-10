'use client';

import styles from './page.module.css';
import animation from './animation.json';
import { useLottie } from 'lottie-react';

const Page = () => {
    const options = {
        animationData: animation,
        loop: true,
    };

    const { View } = useLottie(options);
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <span id={styles.heading}>Terms and Conditions</span>
                {View}
            </div>
        </div>
    );
};

export default Page;
