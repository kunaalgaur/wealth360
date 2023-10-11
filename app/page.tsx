'use client';

import React from 'react';
import styles from './page.module.css';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const page = () => {
    return (
        <div>
            <Parallax
                blur={0}
                bgImage="/bg.jpg"
                bgImageAlt="Background image"
                bgStyle={{ filter: 'brightness(30%)' }}
                strength={300}>
                <div id={styles.container}>
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
            </Parallax>
        </div>
    );
};

export default page;
