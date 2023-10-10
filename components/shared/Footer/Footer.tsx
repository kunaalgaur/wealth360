import Link from 'next/link';
import { BsPinMap, BsTelephone, BsEnvelopeAt } from 'react-icons/bs';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id={styles.container}>
            <div id={styles.top}>
                <div id={styles.left}>
                    <span id={styles.heading}>Wealth360</span>
                    <span id={styles.text}>
                        Welcome to Wealth360 Finserve Private Limited, your
                        dedicated partner in financial success. We are committed
                        to helping you achieve your financial goals through
                        innovative solutions and personalized service. Your
                        financial well-being is our priority, and we are here to
                        support you on your unique journey to prosperity.
                    </span>
                </div>

                <div id={styles.right}>
                    <Link href="/terms-and-conditions" className={styles.link}>
                        Terms and conditions
                    </Link>

                    <Link href="/privacy-policy" className={styles.link}>
                        Privacy Policy
                    </Link>

                    <div className={styles.information}>
                        <BsPinMap />
                        <span className={styles.informationText}>
                            MR-1, 5th Floor, Wing-A, Statesman House, Barakhamba
                            Road, Connaught Place, New Delhi - 110001
                        </span>
                    </div>

                    <div className={styles.information}>
                        <BsTelephone />
                        <span className={styles.informationText}>
                            + 91 9540035164
                        </span>
                    </div>

                    <div className={styles.information}>
                        <BsEnvelopeAt />
                        {/* add the company email here  */}
                        <span className={styles.informationText}>
                            wealth360finserve@gmail.com
                        </span>
                    </div>
                </div>
            </div>

            <div id={styles.bottom}>
                <span>
                    All rights reserved by Wealth360 . Copyright &copy; 2023-25
                </span>
            </div>
        </footer>
    );
};

export default Footer;
