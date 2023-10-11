'use client';

import styles from './page.module.css';
import animation from './animation.json';
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion';

const Page = (): JSX.Element => {
    // lottie files configration
    const options = {
        animationData: animation,
        loop: true,
    };

    const { View } = useLottie(options);
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <div>
                    <motion.span
                        id={styles.heading}
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: '0%' }}
                        viewport={{ once: true }}>
                        Terms and Conditions
                    </motion.span>
                    <span>Please refer to our terms and conditions.</span>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: '100%' }}
                    whileInView={{ opacity: 1, y: '0%' }}
                    viewport={{ once: true }}>
                    {View}
                </motion.div>
            </div>
        </div>
    );
};

export default Page;
