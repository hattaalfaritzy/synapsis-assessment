'use client';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { queryFetch } from '@/utils/query-fetch';
import { Card, HeadingLink, ImageWithFallback, ListForm } from '@/components/commons';

export default function DetailPokemon() {
    const { id } = useParams();
    const id_detail = parseInt(id.toString(), 10);

    const getDetail = async ({ queryKey }: any) => {
        const [_key, id] = queryKey;
        return queryFetch('pokemons', `/pokemon/${id}`, {}, 'GET');
    };

    const { data, isError, isLoading } = useQuery(['pokemons', id_detail], getDetail);

    if (isError) return <div>Error loading Pokémon data</div>;

    return (
        <div className={clsx('flex flex-col w-full py--default', isLoading ? 'justify-start items-center space-y-8' : 'justify-start items-start space-y-4')}>
            <HeadingLink title='Detail Blog' label={data?.name ?? ''} loading={isLoading} withBack />
            {data && (
                <Card className='flex flex-col w-full space-y-3' canHover={false} withShadow>
                    <ListForm title='Name' value={data?.name} loading={isLoading} />
                    <ListForm title='Height' value={data?.height?.toString()} loading={isLoading} />
                    <ListForm title='Weight' value={data?.weight?.toString()} loading={isLoading} />
                </Card>
            )}
            {isLoading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin'  />}
            {isError && <p className='text-white text-base capitalize'>Error fetching data</p>}
        </div>
    );
}
