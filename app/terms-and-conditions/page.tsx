'use client';

import React from 'react';
import styles from './page.module.css';
import { terms } from '@/constants/terms-and-conditions';
import { motion } from 'framer-motion';

const page = () => {
    return (
        <div id={styles.container}>
            <motion.span
                id={styles.heading}
                initial={{ opacity: 0, y: '100%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                viewport={{ once: true }}>
                Terms and conditions
            </motion.span>
            <motion.span
                className={styles.text}
                initial={{ opacity: 0, y: '100%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                viewport={{ once: true }}>
                Welcome to our website. If you continue to browse and use this
                website, you are agreeing to comply with and be bound by the
                following terms and conditions of use, which together with our
                &apos;Privacy Policy&apos;, govern Wealth360 Finserve Private
                Limited&apos;s relationship with you. The term “Wealth360
                Finserve Private Limited” (or “us”/“we”/”our”) refers to the
                owner of the website. The term “you” refers to the user or
                viewer of our website.
            </motion.span>
            <motion.span
                id={styles.question}
                initial={{ opacity: 0, y: '100%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                viewport={{ once: true }}>
                The use of this website is subject to the following terms:
            </motion.span>
            {terms.map((term, index) => {
                return (
                    <motion.span
                        key={index}
                        className={styles.text}
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: '0%' }}
                        viewport={{ once: true }}>
                        {term}
                    </motion.span>
                );
            })}
        </div>
    );
};

export default page;
