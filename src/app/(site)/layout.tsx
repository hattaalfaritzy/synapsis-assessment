import clsx from 'clsx';
import type { Metadata } from 'next';
import { POPPINS, ROBOTO_MONO } from '@/config/fonts';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import '@/styles/index.scss';

export const metadata: Metadata = {
    title: 'Assessment Test - Synapsis',
    description: 'Assessment Test - Synapsis by hattaalfaritzy',
    authors: [
        {
            name: 'Muhammad Hatta Alfaritzy',
            url: 'https://www.linkedin.com/in/hattaalfaritzy/',
        },
    ],
    icons: {
        icon: '/images/logo.png',
        apple: '/images/logo.png',
    },
    openGraph: {
        title: 'Assessment Test - Synapsis',
        description: 'Assessment Test - Synapsis by hattaalfaritzy',
        images: '/images/logo.png',
        url: 'https://github.com/hattaalfaritzy/synapsis-assessment',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={clsx('scroll-smooth', POPPINS.variable, ROBOTO_MONO.variable)}>
            <body className='flex flex-col w-screen h-auto min-h-screen overflow-x-hidden'>
                <div id='layout-default'>
                    <Header />
                    <main className='main'>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
