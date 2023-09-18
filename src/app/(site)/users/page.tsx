'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, HeadingLink, ImageWithFallback, ListForm, Pagination } from '@/components/commons';
import { getUsers } from '@/services/users';

export default function UsersPage() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const [dataUsers, setDataUsers] = useState<UsersInterface.ApiResponseUsers>({});
    const [limitPage, setLimitPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const getData = async ({ page, per_page }: UsersInterface.APIParamsUsers) => {
        const params: UsersInterface.APIParamsUsers = {
            page: page,
            per_page: per_page,
        };
        const res = await getUsers(params);
        setDataUsers(res ?? {});
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
            <HeadingLink title='List Users' />
            <div className={clsx('flex flex-col w-full space-y-4', loading && 'justify-center items-center')}>
                {loading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin'  />}
                {dataUsers?.data?.map((value, index) => (
                    <Card
                        key={index}
                        withShadow
                        onClick={() => {
                            router.push(`/users/${value.id}`);
                        }}
                        className='flex flex-col w-full space-y-3'
                    >
                        <ListForm title='Name' value={value.name} loading={loading} />
                        <ListForm title='Gender' value={value.gender} loading={loading} />
                        <ListForm title='Email' value={value.email} loading={loading} />
                    </Card>
                ))}
            </div>
            {dataUsers.data?.length && (
                <Pagination
                    total={dataUsers?.meta?.pagination?.total ?? 0}
                    itemsPerPage={limitPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    onClickPage={handlePageChange}
                />
            )}
        </div>
    );
}
