import clsx from 'clsx';
import Message from '@/components/commons/message/message';

export default function InputText({
    className,
    replaceClassNameLabel,
    label,
    register,
    errMessage,
    rounded = false,
    iconLeft,
    iconRight,
    variant = 'default',
    important = false,
    disabled = false,
    ...props
}: Props) {
    return (
        <div className={clsx('flex flex-col w-full', className)}>
            {label && <div className={clsx(replaceClassNameLabel || 'form-label pb-1.5', important && 'required-form')}>{label}</div>}
            <div
                className={clsx(
                    'form-control-default border border-[#D9DDE2]',
                    rounded && 'rounded-lg',
                    errMessage && 'form-error',
                    disabled && 'form-disabled'
                )}
            >
                {iconLeft && <div>{iconLeft}</div>}
                <input className={clsx('input-form-default', disabled ? 'cursor-default' : 'cursor-pointer')} {...register} {...props} disabled={disabled} />
                {iconRight && <div>{iconRight}</div>}
            </div>
            {errMessage && <Message className='mt-2' label={errMessage} />}
        </div>
    );
}

type Props = {
    className?: string;
    replaceClassNameLabel?: string;
    label?: string;
    register?: any;
    errors?: any;
    rounded?: boolean;
    iconLeft?: any;
    iconRight?: any;
    errMessage?: any;
    variant?: 'default' | 'animation';
    important?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;
