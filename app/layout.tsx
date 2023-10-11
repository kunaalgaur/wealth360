'use client';

import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import Topbar from '@/components/shared/Topbar/Topbar';
import Footer from '@/components/shared/Footer/Footer';
import { Poppins } from 'next/font/google';
import styles from './layout.module.css';
import { Metadata } from 'next';
import './globals.css';
import { Parallax } from 'react-parallax';
import { usePageLoading } from '@/hooks/usePageLoading';
import PreLoader from '@/components/UI/PreLoader/PreLoader';

// Declaring fonts configurations
const poppins: NextFontWithVariable = Poppins({
    preload: true,
    style: ['normal', 'italic'],
    weight: ['300', '400', '500', '600'],
    subsets: ['latin', 'devanagari', 'latin-ext'],
    variable: '--poppins',
});

// Declaring metadata configurations for SEO purpose
const metadata: Metadata = {
    title: 'Wealth360',
    description: '', //left blank for future inhancement(SEO)
};

const AppLayout = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    const loading: boolean = usePageLoading();
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={poppins.className} suppressHydrationWarning={true}>
                {loading ? (
                    <PreLoader />
                ) : (
                    <>
                        <Topbar />
                        {children}
                        <Footer />
                    </>
                )}
            </body>
        </html>
    );
};

export default AppLayout;
