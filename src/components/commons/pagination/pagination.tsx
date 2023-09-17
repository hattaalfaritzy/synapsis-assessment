import clsx from 'clsx';
import Icon from '../icon';

export default function Pagination({
    className,
    currentPage = 1,
    total = 100,
    itemsPerPage = 10,
    setCurrentPage = () => {},
    onClickPage = () => {},
}: Props) {
    const totalPages = Math.ceil(total / itemsPerPage);

    const getPageRange = () => {
        if (totalPages <= 4) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        let range: any = [];
        if (currentPage > 4) {
            range.push(1);
        }
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
            if (i > 0 && i <= totalPages) {
                range.push(i);
            }
        }
        if (currentPage < totalPages - 3) {
            range.push(totalPages);
        }
        return range;
    };

    const pageRange = getPageRange();

    const handlePrevClick = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            onClickPage(itemsPerPage, newPage);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            onClickPage(itemsPerPage, newPage);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        onClickPage(itemsPerPage, page);
    }

    return (
        <div className={clsx('flex flex-wrap justify-start lg:justify-center space-x-2 w-full lg:w-auto', className)}>
            <button
                aria-label='Button Prev'
                onClick={handlePrevClick}
                disabled={currentPage === 1}
                className={clsx('flex justify-center items-center h-8 w-8 rounded-full hover:bg-secondary/50 on-hover')}
            >
                <Icon name='chevron-left' className='fill-black' width={8} />
            </button>

            {pageRange.map((page: number, idx: number) => (
                <div key={idx} className={clsx(pageRange[idx + 1] - page > 1 && 'flex flex-row space-x-2')}>
                    <button
                        key={page}
                        aria-label={`Button Pagination ${page}`}
                        onClick={() => handlePageClick(page)}
                        disabled={currentPage === page}
                        className={clsx(page !== currentPage ? 'flex justify-center items-center h-8 w-8 rounded-full hover:bg-secondary/50 on-hover' : 'flex justify-center items-center h-8 w-8 bg-primary hover:bg-primary rounded-full')}
                    >
                        <span className={clsx('text-sm ', page == currentPage ? 'text-white' : 'text-black')}>{page.toString()}</span>
                    </button>
                    {pageRange[idx + 1] - page > 1 && <button className='w-10 text-black' disabled>...</button>}
                </div>
            ))}

            <button
                aria-label='Button Next'
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
                className={clsx('flex justify-center items-center h-8 w-8 rounded-full hover:bg-secondary/50 on-hover')}
            >
                <Icon name='chevron-right' className='fill-black' width={8} />
            </button>

        </div>
    );
}

type Props = {
    className?: string;
    total?: number;
    currentPage?: number;
    setCurrentPage?: (currentPage: number) => void;
    itemsPerPage?: number;
    onClickNext?: () => void;
    onClickPrev?: () => void;
    onClickPage?: (limit: number, page: number) => void;
};
