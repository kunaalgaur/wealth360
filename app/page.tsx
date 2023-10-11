'use client';

import React from 'react';
import styles from './page.module.css';
import { Parallax } from 'react-parallax';

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
                    <span id={styles.heading}>
                        Invest in mutual funds easily!
                    </span>
                    <span id={styles.text}>
                        Growing your investments can be a challenging endeavor.
                        However, having timely access to accurate market
                        intelligence and the assistance of a well-positioned and
                        competent team can significantly enhance your prospects
                        for success.
                    </span>
                </div>
            </Parallax>
        </div>
    );
};

export default page;
