'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { queryFetch } from '@/utils/query-fetch';
import { Card, HeadingLink, ImageWithFallback, ListForm, Pagination } from '@/components/commons';

export default function Home() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limitPage, setLimitPage] = useState<number>(10);

    const extractPokemonId = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
    };

    const fetchPokemons = async ({ queryKey }: any) => {
        const [_, page] = queryKey;
        const offset = (page - 1) * limitPage;
        return queryFetch('pokemons', `/pokemon?limit=${limitPage}&offset=${offset}`, {}, 'GET');
    };

    const handlePageChange = (limit: number, page: number) => {
        setLimitPage(limit);
        setCurrentPage(page);
    };    

    const { data, isError, isLoading } = useQuery<PokemonInterface.ApiResponse>(['pokemons', currentPage], fetchPokemons);   

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='List Blogs' />
            <div className={clsx('flex flex-col w-full space-y-4', isLoading && 'justify-center items-center')}>
                {isLoading && <ImageWithFallback alt='Logo Synapsis' width={80} height={80} src='/images/logo.png' className='w-20 h-auto animate-spin'  />}
                {isError && <p className='text-white text-base capitalize'>Error fetching data</p>}
                {data?.results?.map((pokemon: any, index: number) => {
                    const pokemonId = extractPokemonId(pokemon.url);
                    return (
                        <Card
                            key={index}
                            withShadow
                            onClick={() => {
                                router.push(`/${pokemonId}`);
                            }}
                        >
                            <ListForm title={pokemon.name} value={pokemon.url} loading={isLoading} />
                        </Card>
                    );
                })}
            </div>
            {data?.results?.length && (
                <Pagination
                    total={data?.count ?? 0}
                    itemsPerPage={limitPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    onClickPage={handlePageChange}
                />
            )}
        </div>
    );
}
