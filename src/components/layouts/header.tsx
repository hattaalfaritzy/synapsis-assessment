'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_MENU } from '@/config/layout';
import ImageWithFallback from '../commons/image-with-fallback/image-with-fallback';
import clsx from 'clsx';

export default function Header() {
    const pathname = usePathname();
    return (
        <header className='fixed z-50 top-0 flex w-full bg-white shadow-md'>
            <nav className='flex justify-between items-center max-w-screen-xl mx-auto w-full py-4 px--default'>
                <div className='flex flex-row justify-start items-end space-x-1'>
                    <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto' />
                    <span className='text-base text-black leading-none pb-2'>Assessment Test</span>
                </div>
                <div className='flex flex-row space-x-3 hide-mobile'>
                        {NAV_MENU.map((item: any, index: string | number) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link key={index} href={item.href}>
                                    <div
                                        className={clsx(
                                            'flex flex-row justify-start items-center space-x-3 py-2 px-3 cursor-pointer',
                                            isActive ? 'text-white bg-primary rounded-xl' : 'text-[#687488]'
                                        )}
                                    >
                                        <span className='text-sm 2xl:text-base'>{item.label}</span>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </nav>
        </header>
    );
}
