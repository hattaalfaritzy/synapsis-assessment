'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, HeadingLink, ImageWithFallback, ListForm, Pagination } from '@/components/commons';
import { getBlogs } from '@/services/blogs';

export default function BlogsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const [dataBlogs, setDataBlogs] = useState<BlogsInterface.ApiResponseBlogs>({});
    const [limitPage, setLimitPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const getData = async ({ page, per_page }: BlogsInterface.APIParamsBlogs) => {
        const params: BlogsInterface.APIParamsBlogs = {
            page: page,
            per_page: per_page,
        };
        const res = await getBlogs(params);
        setDataBlogs(res ?? {});
        setLoading(false);
    }

    useEffect(() => {
        getData({
            page: currentPage,
            per_page: limitPage
        });
    }, [currentPage, limitPage]);

    const handlePageChange = (limit: number, page: number) => {
        setLimitPage(limit);
        setCurrentPage(page);
    };    

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='List Blogs' />
            <div className={clsx('flex flex-col w-full space-y-4', loading && 'justify-center items-center')}>
                {loading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin'  />}
                {dataBlogs?.data?.map((value, index) => (
                    <Card
                        key={index}
                        withShadow
                        onClick={() => {
                            router.push(`/blogs/${value.id}`);
                        }}
                    >
                        <ListForm title={value.title} value={value.body} loading={loading} />
                    </Card>
                ))}
            </div>
            {dataBlogs.data?.length && (
                <Pagination
                    total={dataBlogs?.meta?.pagination?.total ?? 0}
                    itemsPerPage={limitPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    onClickPage={handlePageChange}
                />
            )}
        </div>
    );
}
