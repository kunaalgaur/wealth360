'use client';

import Image from 'next/image';
import styles from './Topbar.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Topbar = (): JSX.Element => {
    return (
        <motion.nav
            id={styles.container}
            initial={{ opacity: 0, y: '-100%' }}
            whileInView={{ opacity: 1, y: '0%' }}>
            <Link id={styles.left} href="/">
                {/* this is an temporary logo, and will be changed in production  */}
                <Image
                    src="/logo.png"
                    alt="An unknown error occured"
                    height={50}
                    width={50}
                    id={styles.image}
                    unoptimized
                />

                <motion.span
                    id={styles.heading}
                    initial={{ opacity: 0, y: '-100%' }}
                    whileInView={{ opacity: 1, y: '0%' }}>
                    Wealth360
                </motion.span>
            </Link>

            {/* add the link in href attriburte  */}
            <motion.a
                href="https://wealth360.investwell.app/app/#/login"
                id={styles.button}
                initial={{ opacity: 0, y: '-100%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                target="__blank">
                Client login
            </motion.a>
        </motion.nav>
    );
};

export default Topbar;
