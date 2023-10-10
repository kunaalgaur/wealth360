import Image from 'next/image';
import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <nav id={styles.container}>
            <div id={styles.left}>
                <Image
                    src="/logo.png"
                    alt="An unknown error occured"
                    height={50}
                    width={50}
                    id={styles.image}
                    unoptimized
                />

                <span id={styles.heading}>Wealth360 Finserve</span>
            </div>

            <a href="#" id={styles.button}>
                Sign in
            </a>
        </nav>
    );
};

export default Topbar;
