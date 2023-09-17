import clsx from 'clsx';

export default function ListForm({ className, classNameValue, title, value, loading, important, renderValue }: Props) {

    return (
        <div className={clsx('flex flex-col justify-start items-start', loading && 'space-y-1', className)}>
            {title && <span className={clsx('text-black text-sm font-semibold', important && 'required-form')}>{title}</span>}
            {loading ? (
                <span className={clsx('rounded-full bg-secondary/70 h-4 w-2/3 animate-pulse')} />
            ) : renderValue || <span className={clsx('text-black text-xs capitalize', classNameValue)}>{value ? value : '-'}</span>}
        </div>
    );
}

interface Props {
    className?: string;
    classNameValue?: string;
    title?: string;
    value?: string | number;
    loading?: boolean;
    important?: boolean;
    renderValue?: React.ReactNode;
}
