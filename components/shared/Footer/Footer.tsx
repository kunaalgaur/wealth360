'use client';

import Link from 'next/link';
import { BsPinMap, BsTelephone, BsEnvelopeAt } from 'react-icons/bs';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

// motion is an export from  the framer motion library, please refer to https://www.framer.com/motion/introduction/ before starting

const Footer = (): JSX.Element => {
    return (
        <footer id={styles.container}>
            <motion.div
                id={styles.top}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>
                <div id={styles.left}>
                    <motion.span
                        id={styles.heading}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transitionDelay: '0.3s' }}
                        viewport={{ once: true }}>
                        Wealth360
                    </motion.span>
                    <motion.span
                        id={styles.text}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transitionDelay: '0.3s' }}
                        viewport={{ once: true }}>
                        Welcome to Wealth360 Finserve Private Limited, your
                        dedicated partner in financial success. We are committed
                        to helping you achieve your financial goals through
                        innovative solutions and personalized service. Your
                        financial well-being is our priority, and we are here to
                        support you on your unique journey to prosperity.
                    </motion.span>
                </div>

                <div id={styles.right}>
                    <Link href="/terms-and-conditions" className={styles.link}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transitionDelay: '0.3s',
                            }}
                            viewport={{ once: true }}>
                            Terms and conditions
                        </motion.span>
                    </Link>

                    <Link href="/privacy-policy" className={styles.link}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,

                                transitionDelay: '0.3s',
                            }}
                            viewport={{ once: true }}>
                            Privacy Policy
                        </motion.span>
                    </Link>

                    <motion.div
                        className={styles.information}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,

                            transitionDelay: '0.3s',
                        }}
                        viewport={{ once: true }}>
                        <BsPinMap className={styles.icon} />
                        <span className={styles.informationText}>
                            MR-1, 5th Floor, Wing-A, Statesman House, Barakhamba
                            Road, Connaught Place, New Delhi - 110001
                        </span>
                    </motion.div>

                    <motion.div
                        className={styles.information}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,

                            transitionDelay: '0.3s',
                        }}
                        viewport={{ once: true }}>
                        <BsTelephone className={styles.icon} />
                        <span className={styles.informationText}>
                            + 91 9540035164
                        </span>
                    </motion.div>

                    <motion.div
                        className={styles.information}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,

                            transitionDelay: '0.3s',
                        }}
                        viewport={{ once: true }}>
                        <BsEnvelopeAt className={styles.icon} />
                        {/* add the company email here  */}
                        <span className={styles.informationText}>
                            service@thewealth360.com
                        </span>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                id={styles.bottom}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,

                        transitionDelay: '0.3s',
                    }}
                    viewport={{ once: true }}>
                    All rights reserved by Wealth360 . Copyright &copy; 2023-25
                </motion.span>
            </motion.div>
        </footer>
    );
};

export default Footer;
