'use client';
import clsx from 'clsx';

export default function Button({ className, classNameLabel, label, variant = 'primary', rounded = false, iconLeft, iconRight, children, onClick, ...props }: Props) {

    const styleByVariant = {
        primary: 'bg-primary hover:bg-primary-700 text-white',
        secondary: 'bg-gray-300 hover:bg-gray-400 text-black',
        transparent: 'bg-transparent text-black hover:text-white',
    }[variant];

    return children ? (
        <button className={clsx('p-4 cursor-pointer on-hover', rounded && 'rounded-full', styleByVariant, className)} onClick={onClick} {...props}>
            {children}
        </button>
    ) : (
        <button className={clsx('p-4 cursor-pointer on-hover', rounded && 'rounded-full', styleByVariant, className)} onClick={onClick} {...props}>
            {iconLeft && iconLeft}
            {label && <span className={clsx('text-sm', iconLeft && 'pl-2', iconRight && 'pr-2', classNameLabel)}>{label}</span>}
            {iconRight && iconRight}
        </button>
    );
}

type Props = {
    className?: string;
    classNameLabel?: string;
    label?: string;
    variant?: ButtonVariant;
    rounded?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

type ButtonVariant = 'primary' | 'secondary' | 'transparent';
