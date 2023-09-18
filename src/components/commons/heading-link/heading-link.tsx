import clsx from 'clsx';
import Card from '../card/card';
import { useRouter } from 'next/navigation';
import Icon from '../icon';

export default function HeadingLink({ className, classNameTitle, classNameLabel, title, label, withBack = false, renderActions, loading }: Props) {
    const router = useRouter();

    return (
        <Card className={clsx('flex flex-row justify-between items-center w-full', className)} withShadow canHover={false}>
            <div className={clsx('flex flex-row justify-start items-center w-full', withBack && 'space-x-4')}>
                {withBack && (
                    <div className='cursor-pointer' onClick={() => router.back()}>
                        <Icon name='chevron-left' className='fill-black hover:fill-secondary on-hover' />
                    </div>
                )}
                <div className={clsx('flex flex-col justify-start items-start w-full bg-transparent', label !== undefined && 'space-y-1')}>
                    <span className={clsx('text-xl lg:text-3xl text-black font-semibold', classNameTitle)}>{title}</span>
                    {label !== undefined && loading ? (
                        <span className='rounded-full bg-secondary/70 h-4 w-2/3 animate-pulse' />
                    ) : (
                        <span className={clsx('text-black text-sm', classNameLabel)}>{label}</span>
                    )}
                </div>
            </div>
            {renderActions && renderActions}
        </Card>
    );
}

interface Props {
    className?: string;
    classNameTitle?: string;
    classNameLabel?: string;
    title?: string;
    label?: React.ReactNode;
    withBack?: boolean;
    renderActions?: React.ReactNode;
    loading?: boolean;
}
