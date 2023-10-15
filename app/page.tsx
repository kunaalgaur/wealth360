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
                strength={50}>
                <div id={styles.container}>
                    <motion.span
                        id={styles.heading}
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: '0%' }}
                        viewport={{ once: true }}>
                        Welcome to Wealth360 Finserve Private Limited
                    </motion.span>
                    <motion.span
                        id={styles.text}
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: '0%' }}
                        viewport={{ once: true }}>
                        Wealth360 Finserve Private Limited is a leading
                        Financial Company where we are assisting our client in
                        the feild of Personal Finance and helping them in
                        identifying and meeting their Financial Goals.
                    </motion.span>
                </div>
            </Parallax>
        </div>
    );
};

export default page;
