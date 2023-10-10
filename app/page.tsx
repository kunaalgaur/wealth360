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
            <div id={styles.left}>
                <span id={styles.heading}>Invest in mutual funds easily!</span>

                <span id={styles.text}>
                    Growing your investments can be a challenging endeavor.
                    However, having timely access to accurate market
                    intelligence and the assistance of a well-positioned and
                    competent team can significantly enhance your prospects for
                    success.
                </span>
            </div>

            <div id={styles.right}>{View}</div>
        </div>
    );
};

export default Page;
