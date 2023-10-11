'use client';

import styles from './page.module.css';
import animation from './animation.json';
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Page = (): JSX.Element => {
    // lottie animation configration
    const options = {
        animationData: animation,
        loop: true,
    };

    const { View } = useLottie(options);

    return (
        <>
            <div id={styles.container}>
                <div id={styles.left}>
                    <motion.span
                        id={styles.heading}
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: '0%' }}
                        viewport={{ once: true }}>
                        Invest in mutual funds easily!
                    </motion.span>

                    <motion.span
                        id={styles.text}
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: '0%' }}
                        viewport={{ once: true }}>
                        Growing your investments can be a challenging endeavor.
                        However, having timely access to accurate market
                        intelligence and the assistance of a well-positioned and
                        competent team can significantly enhance your prospects
                        for success.
                    </motion.span>
                </div>

                <motion.div
                    id={styles.right}
                    initial={{ opacity: 0, y: '100%' }}
                    whileInView={{ opacity: 1, y: '0%' }}
                    viewport={{ once: true }}>
                    {View}
                </motion.div>
            </div>
            <div>
                <Parallax
                    blur={0}
                    bgImage="/bg.png"
                    bgImageAlt="Background image"
                    strength={500}>
                    <div id={styles.imageContainer} />
                </Parallax>
            </div>
        </>
    );
};

export default Page;
