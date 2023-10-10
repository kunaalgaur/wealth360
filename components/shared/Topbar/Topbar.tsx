import Image from 'next/image';
import styles from './Topbar.module.css';
import Link from 'next/link';

const Topbar = () => {
    return (
        <nav id={styles.container}>
            <Link id={styles.left} href="/">
                <Image
                    src="/logo.png"
                    alt="An unknown error occured"
                    height={50}
                    width={50}
                    id={styles.image}
                    unoptimized
                />

                <span id={styles.heading}>Wealth360 Finserve</span>
            </Link>

            <a href="#" id={styles.button}>
                Sign in
            </a>
        </nav>
    );
};

export default Topbar;
