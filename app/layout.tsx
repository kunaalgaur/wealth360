import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import Topbar from '@/components/shared/Topbar/Topbar';
import Footer from '@/components/shared/Footer/Footer';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

// Declaring fonts configurations
const poppins: NextFontWithVariable = Roboto({
    preload: true,
    style: ['normal', 'italic'],
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin', 'latin-ext'],
    variable: '--poppins',
});

// Declaring metadata configurations for SEO purpose
export const metadata: Metadata = {
    title: 'Wealth360',
    description: 'Sample text', //left blank for future inhancement(SEO)
};

const AppLayout = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={poppins.className} suppressHydrationWarning={true}>
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default AppLayout;
