'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { NAV_MENU } from '@/config/layout';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const pathname = usePathname();
    return (
        <footer className='footer'>
            <div className='flex justify-center items-center w-full bg-primary py-2 hide-mobile'>
                <span className='text-sm text-white'>© Synapsis Assessment - Muh. Hatta Alfaritzy</span>
            </div>
            <div className='flex flex-row w-full shadow-lg -mb-1 hide-website'>
                {NAV_MENU.map((item: any, index: string | number) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link key={index} href={item.href} className='flex justify-center items-center w-full'>
                            <div
                                className={clsx(
                                    'flex flex-row justify-center items-center py-4 cursor-pointer w-full',
                                    isActive ? 'text-white bg-primary' : 'text-black bg-white'
                                )}
                            >
                                <span className='text-sm 2xl:text-base'>{item.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </footer>
    );
}
