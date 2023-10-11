'use client';

import styles from './page.module.css';
import animation from './animation.json';
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion';

// motion is an export from  the framer motion library, please refer to https://www.framer.com/motion/introduction/ before making any changes

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
                <motion.span
                    id={styles.heading}
                    initial={{ opacity: 0, y: '100%' }}
                    whileInView={{ opacity: 1, y: '0%' }}
                    viewport={{ once: true }}>
                    Privacy Policy
                </motion.span>
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
