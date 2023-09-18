'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, HeadingLink, Icon, ImageWithFallback, ListForm, Pagination } from '@/components/commons';
import { deleteUsers, getUsers } from '@/services/users';

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
    };

    const onDelete = async (id: number) => {
        try {
            await deleteUsers(id);
            getData({
                page: currentPage,
                per_page: limitPage,
            });
        } catch (e) {
            console.log('Error delete user:', e);
        }
    };

    useEffect(() => {
        getData({
            page: currentPage,
            per_page: limitPage,
        });
    }, [currentPage, limitPage]);

    const handlePageChange = (limit: number, page: number) => {
        setLimitPage(limit);
        setCurrentPage(page);
    };

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink
                title='List Users'
                renderActions={
                    <div className='flex w-32'>
                        <Button
                            label='Add User'
                            className='flex justify-center items-center w-full'
                            rounded
                            onClick={() => {
                                router.push('/users/add');
                            }}
                        />
                    </div>
                }
            />
            <div className={clsx('flex flex-col w-full space-y-4', loading && 'justify-center items-center')}>
                {loading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin' />}
                {dataUsers?.data?.map((value, index) => (
                    <Card
                        key={index}
                        withShadow
                        canHover={false}
                        className='flex flex-row justify-between items-center w-full'
                    >
                        <ListForm title={value.name} value={value.email} loading={loading} classNameValue='text-black text-xs lowercase' />
                        <div className='flex flex-row space-x-2 justify-center items-center'>
                            <Button
                                className='p-2.5 rounded-full'
                                onClick={() => {
                                    router.push(`/users/${value.id}`);
                                }}
                            >
                                <Icon name='alert' width={16} className='fill-white' />
                            </Button>
                            <Button
                                variant='secondary'
                                className='p-2.5 rounded-full'
                                onClick={() => {
                                    router.push(`/users/edit/${value.id}`);
                                }}
                            >
                                <Icon name='edit' width={16} className='fill-white' />
                            </Button>
                            <Button
                                variant='error'
                                className='p-2.5 rounded-full'
                                onClick={() => onDelete(value?.id)}
                            >
                                <Icon name='trash' width={16} className='fill-white' />
                            </Button>
                        </div>
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
