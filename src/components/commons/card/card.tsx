import clsx from 'clsx';

export default function Card({
    className,
    withShadow,
    rounded = true,
    variant = 'light',
    canHover = true,
    children,
    onClick,
}: Props) {
    if (!children) return null;

    const styleByVariant = {
        dark: canHover ? 'bg-[#262626] hover:bg-secondary/70 on-hover cursor-pointer' : 'bg-[#262626]',
        light: canHover ? 'bg-white hover:bg-secondary/30 on-hover cursor-pointer' : 'bg-white',
    }[variant];
    
    return (
        <div
            aria-hidden="true"
            className={clsx('flex p-3', styleByVariant, withShadow && 'shadow-md', rounded && 'rounded-lg', className)}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

interface Props {
    className?: string;
    withShadow?: boolean;
    rounded?: boolean;
    variant?: CardVariant;
    canHover?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

type CardVariant = 'dark' | 'light';
