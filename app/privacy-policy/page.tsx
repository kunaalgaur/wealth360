'use client';

import React from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

const page = () => {
    return (
        <div id={styles.container}>
            <motion.span id={styles.heading}>Privacy Policy</motion.span>
            <motion.span className={styles.text}>
                This privacy policy sets out how Wealth360 Finserve Private
                Limited uses and protects any information that you share when
                you use this website and our mobile app. Wealth360 Finserve
                Private Limited is committed to ensuring that your privacy is
                protected at all times. Should we ask you to provide certain
                information by which you can be identified when using this
                website and mobile app, you can be assured that it will only be
                used in accordance with this privacy statement.
            </motion.span>
            <motion.span className={styles.text}>
                Wealth360 Finserve Private Limited may change this policy from
                time to time by updating this page. This policy is effective
                from 11 October 2023.
            </motion.span>
            <motion.span className={styles.text}>
                Wealth360 Finserve Private Limited understands that our
                relationship is strongly built on trust and faith. In Course of
                using information on this website or availing the services,
                Wealth360 Finserve Private Limited may become privy to the
                personal information of its customer including information that
                is of confidential nature. Wealth360 Finserve Private Limited is
                strictly committed to protecting the privacy of its Customer and
                has taken reasonable measures to protect the confidentiality of
                the customer information and its transmission through World Wide
                Web. However, it shall not be liable in any manner for
                disclosure of the confidential information in accordance with
                this Privacy Commitment or in terms of the agreement if any with
                the Customer or by reasons beyond its control. We may however be
                required to disclose your personal information to Government,
                Judicial bodies, and our Regulators or to any person to whom the
                Firm is under an obligation to make disclosure under the
                requirements of any law binding on the Firm or any of its
                branches, if required. Hyperlink Policy for user Any hyperlink
                to other Internet sites is at customer&apos;s own risk. The
                contents of which and the accuracy of opinions expressed are not
                verified, monitored or endorsed by Wealth360 Finserve Private
                Limited in any way or manner. Wealth360 Finserve Private Limited
                is not responsible for the setup of any hyperlink from a third
                party website to Wealth360 Finserve Private Limited.
            </motion.span>
            <motion.span className={styles.subHeading}>
                What we collect?
            </motion.span>
            <motion.span className={styles.text}>
                We may collect the following information:
            </motion.span>
            <motion.ul className={styles.ul}>
                <motion.li className={styles.text}>
                    Name and contact details
                </motion.li>
                <motion.li className={styles.text}>
                    Personal information, including date of birth, Aadhaar
                    Number, and Permanent Account Number (PAN)
                </motion.li>
                <motion.li className={styles.text}>
                    Demographic information such as gender and income
                </motion.li>
                <motion.li className={styles.text}>
                    Other information that can help us improve our services
                </motion.li>
            </motion.ul>
            <motion.span className={styles.subHeading}>
                What we do with the information we gather?
            </motion.span>
            <motion.ul className={styles.ul}>
                <motion.li className={styles.text}>
                    To conduct Know-Your-Customer registration as required by
                    SEBI and/or other regulatory bodies
                </motion.li>
                <motion.li className={styles.text}>
                    To perform compliance checks and keep/maintain internal
                    records
                </motion.li>
                <motion.li className={styles.text}>
                    To use the information to improve our products and services
                </motion.li>
                <motion.li className={styles.text}>
                    To periodically send emails to your registered email address
                    about your investments, or other information which we think
                    you may find interesting.
                </motion.li>
                <motion.li className={styles.text}>
                    You will be free to unsubscribe from our mailing list at any
                    time if you do not wish to receive such emails from us. From
                    time-to-time, we may also use your information to contact
                    you via phone or email for market research purposes.
                </motion.li>
                <motion.li className={styles.text}>
                    We will not sell, distribute or lease your personal
                    information to third parties unless we are required to share
                    such information under the terms and conditions of the
                    products and services you avail, or we are required to do so
                    by law.
                </motion.li>
            </motion.ul>
            <motion.span className={styles.subHeading}>Security</motion.span>
            <motion.span className={styles.text}>
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorised access or disclosure, we have put
                in place suitable physical, electronic and managerial procedures
                to safeguard and secure the information we collect online.
            </motion.span>
            <motion.span className={styles.subHeading}>
                Links to other websites
            </motion.span>
            <motion.span className={styles.text}>
                Our website may contain links to other websites of interest.
                However, once you have used these links to leave our site, you
                should note that we do not have any control over such
                third-party websites. Therefore, we cannot be responsible for
                the protection and privacy of any information which you provide
                whilst visiting such sites. You should exercise caution and look
                at the privacy statement applicable to the website in question.
            </motion.span>
            <motion.span className={styles.subHeading}>
                Controlling your personal information
            </motion.span>
            <motion.span className={styles.text}>
                If you believe that any of your information with us is incorrect
                or incomplete, please email us as soon as possible and we will
                promptly correct any information found to be incorrect.
            </motion.span>
            <motion.span className={styles.subHeading}>
                Security certificates
            </motion.span>
            <motion.span className={styles.text}>
                Wealth360 Finserve Private Limited is an online financial
                services company. We fully recognise and understand the security
                implications of being a service provider with whom people trust
                their money. There are many safeguards we adopt in this regard -
                some of these are technical, and some are structural.
            </motion.span>
            <motion.span className={styles.subHeading}>
                When it comes to data security, our goal is to ensure that:
            </motion.span>
            <motion.ul className={styles.ul}>
                <motion.li className={styles.text}>
                    Your data is stored safely and securely - passwords are
                    one-way encrypted before being stored in the database for
                    high security.
                </motion.li>
                <motion.li className={styles.text}>
                    All communication with you, or with mutual fund companies
                    and other service providers - are encrypted using the
                    highest standards.
                </motion.li>
                <motion.li className={styles.text}>
                    Your data is not shared with anyone, unless you have
                    explicitly requested us to do so to fulfil a transaction
                    request.
                </motion.li>
                <motion.li className={styles.text}>
                    To ensure that we achieve these goals, we have a variety of
                    certifications/trust verifications in place for our firm,
                    both from technical and legal/operational perspectives. All
                    our communications are encrypted by 256-bit encryption, and
                    our data is hosted with top-tier hosting service providers.
                    Also, our data is continuously backed up to ensure
                    continuity of operations.
                </motion.li>
            </motion.ul>
        </div>
    );
};

export default page;
