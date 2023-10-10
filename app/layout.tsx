import { Poppins } from 'next/font/google';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/shared/Topbar/Topbar';
import Footer from '@/components/shared/Footer/Footer';

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
    description: '', //left blank for future inhancement
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${poppins.variable}`}
                suppressHydrationWarning={true}>
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default AppLayout;
