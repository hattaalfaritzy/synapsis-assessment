'use client';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { Card, HeadingLink, ImageWithFallback, ListForm } from '@/components/commons';
import { useEffect, useState } from 'react';
import { getUserDetail } from '@/services/users';

export default function DetailBlog() {
    const [loading, setLoading] = useState<boolean>(true);
    const [dataDetail, setDataDetail] = useState<UsersInterface.Users>();

    const { id } = useParams();
    const id_detail = parseInt(id.toString(), 10);

    const getData = async (id: number) => {
        const detail = await getUserDetail(id);
        setDataDetail(detail ?? {});
        setLoading(false);
    };

    useEffect(() => {
        getData(id_detail);
    }, [id_detail]);

    return (
        <div className={clsx('flex flex-col w-full py--default', loading ? 'justify-start items-center space-y-8' : 'justify-start items-start space-y-4')}>
            <HeadingLink title='Detail User' label={dataDetail?.name ?? ''} loading={loading} withBack />
            {loading ? (
                <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin' />
            ) : (
                <Card className='flex flex-col w-full space-y-3' canHover={false} withShadow>
                    <ListForm title='User ID' value={dataDetail?.id} loading={loading} />
                    <ListForm title='Name' value={dataDetail?.name} loading={loading} />
                    <ListForm title='Gender' value={dataDetail?.gender} loading={loading} />
                    <ListForm title='Email' value={dataDetail?.email} loading={loading} />
                    <ListForm title='Status' value={dataDetail?.status} loading={loading} />
                </Card>
            )}
        </div>
    );
}
