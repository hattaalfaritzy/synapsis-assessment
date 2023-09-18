'use client';
import clsx from 'clsx';
import { ThreeDots } from 'react-loader-spinner';

export default function Button({
    className,
    classNameLabel,
    label,
    variant = 'primary',
    rounded = false,
    loading,
    iconLeft,
    iconRight,
    children,
    onClick,
    ...props
}: Props) {
    const styleByVariant = {
        primary: 'bg-primary hover:bg-primary-700 text-white',
        secondary: 'bg-secondary hover:bg-secondary-700 text-white',
        error: 'bg-error hover:bg-error-700 text-white',
        transparent: 'bg-transparent text-black hover:text-white',
    }[variant];

    const loaderColor = {
        primary: '#FFFFFF',
        secondary: '#000000',
        error: '#FFFFFF',
        transparent: '#000000',
    }[variant];

    return (
        <button
            className={clsx('p-4 cursor-pointer on-hover', rounded && 'rounded-lg', loading && 'flex justify-center items-center w-full', styleByVariant, className)}
            onClick={onClick}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <ThreeDots color={loaderColor} height={19} width={19} />
            ) : (
                <>
                    {children}
                    {!children && iconLeft && iconLeft}
                    {!children && label && <span className={clsx('text-sm', iconLeft && 'pl-2', iconRight && 'pr-2', classNameLabel)}>{label}</span>}
                    {!children && iconRight && iconRight}
                </>
            )}
        </button>
    );
}

type Props = {
    className?: string;
    classNameLabel?: string;
    label?: string;
    variant?: ButtonVariant;
    rounded?: boolean;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

type ButtonVariant = 'primary' | 'secondary' | 'error' | 'transparent';
