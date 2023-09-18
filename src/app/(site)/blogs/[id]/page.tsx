'use client';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { Card, HeadingLink, ImageWithFallback, ListForm } from '@/components/commons';
import { useEffect, useState } from 'react';
import { getBlogDetail } from '@/services/blogs';

export default function DetailBlog() {
    const [loading, setLoading] = useState<boolean>(true);
    const [dataDetail, setDataDetail] = useState<BlogsInterface.Blogs>({});

    const { id } = useParams();
    const id_detail = parseInt(id.toString(), 10);

    const getData = async (id: number) => {
        const res = await getBlogDetail(id);
        setDataDetail(res ?? {});
        console.log(res, 'cek res');
        setLoading(false);
    }

    useEffect(() => {
        getData(id_detail);
    }, [id_detail]);

    return (
        <div className={clsx('flex flex-col w-full py--default', loading ? 'justify-start items-center space-y-8' : 'justify-start items-start space-y-4')}>
            <HeadingLink title='Detail Blog' label={dataDetail?.title ?? ''} loading={loading} withBack />
            {dataDetail && (
                <Card className='flex flex-col w-full space-y-3' canHover={false} withShadow>
                    <ListForm title='Title' value={dataDetail?.title} loading={loading} />
                    <ListForm title='Content' value={dataDetail?.body} loading={loading} />
                </Card>
            )}
            {loading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin'  />}
        </div>
    );
}
