'use client'
import ImageWithFallback from '../commons/image-with-fallback/image-with-fallback';

export default function Header() {

    return (
        <header className='fixed z-50 top-0 flex w-full bg-white shadow-md'>
            <nav className='flex justify-between items-center max-w-screen-xl mx-auto w-full py--default px--default'>
                <div className='flex flex-row justify-start items-end space-x-1'>
                    <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto'  />
                    <span className='text-base text-black leading-none pb-2'>Assessment Test</span>
                </div>
            </nav>
        </header>
    )
}