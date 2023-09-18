'use client';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { Card, HeadingLink, ImageWithFallback, ListForm } from '@/components/commons';
import { useEffect, useState } from 'react';
import { getBlogComments, getBlogDetail, getUsersPost } from '@/services/blogs';

export default function DetailBlog() {
    const [loading, setLoading] = useState<boolean>(true);
    const [dataDetail, setDataDetail] = useState<BlogsInterface.Blogs>({});
    const [dataComments, setDataComments] = useState<BlogsInterface.Comments[]>([]);
    const [dataUsers, setDataUsers] = useState<UsersInterface.Users[]>([]);

    const { id } = useParams();
    const id_detail = parseInt(id.toString(), 10);

    const getData = async (id: number) => {
        const detail = await getBlogDetail(id);
        const comments = await getBlogComments(id);
        const users = await getUsersPost(id);
        setDataDetail(detail ?? {});
        setDataComments(comments ?? []);
        setDataUsers(users ?? []);
        setLoading(false);
    };

    useEffect(() => {
        getData(id_detail);
    }, [id_detail]);

    return (
        <div className={clsx('flex flex-col w-full py--default', loading ? 'justify-start items-center space-y-8' : 'justify-start items-start space-y-4')}>
            <HeadingLink title='Detail Blog' label={dataDetail?.title ?? ''} loading={loading} withBack />
            <Card className='flex flex-col w-full space-y-3' canHover={false} withShadow>
                <ListForm title='Title' value={dataDetail?.title} loading={loading} />
                <ListForm title='Content' value={dataDetail?.body} loading={loading} />
            </Card>
            <div className='grid grid-cols-2 w-full gap-x-8'>
                {dataComments.length > 0 && (
                    <div className='flex flex-col w-full space-y-4'>
                        <HeadingLink title='Comments Blog' />
                        <Card className='flex flex-col w-full space-y-3' canHover={false} withShadow>
                            {dataComments.map((item, index) => (
                                <ListForm
                                    key={index}
                                    title={item.name}
                                    renderValue={
                                        <div className='flex flex-col w-full'>
                                            <span className='text-black text-xs capitalize'>{item.email}</span>
                                            <span className='text-black text-xs capitalize'>{item.body}</span>
                                        </div>
                                    }
                                />
                            ))}
                        </Card>
                    </div>
                )}
                {dataUsers.length > 0 && (
                        <div className='flex flex-col w-full space-y-4'>
                            <HeadingLink title='Users Blog' />
                            {dataUsers.map((item, index) => (
                                <Card key={index} className='flex flex-col w-full space-y-3' canHover={false} withShadow>
                                    <ListForm title='Name' value={item.name} />
                                    <ListForm title='Email' value={item.email} />
                                    <ListForm title='Gender' value={item.gender} />
                                    <ListForm title='Status' value={item.status} />
                                </Card>
                            ))}
                        </div>
                    )}
            </div>
            {loading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin' />}
        </div>
    );
}
