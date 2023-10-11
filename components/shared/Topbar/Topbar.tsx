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
                    height={80}
                    width={80}
                    id={styles.image}
                    unoptimized
                />
            </Link>

            {/* add the link in href attriburte  */}
            <motion.a
                href="#"
                id={styles.button}
                initial={{ opacity: 0, y: '-100%' }}
                whileInView={{ opacity: 1, y: '0%' }}>
                Sign in
            </motion.a>
        </motion.nav>
    );
};

export default Topbar;
