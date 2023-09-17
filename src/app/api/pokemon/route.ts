import { fetchApi } from '@/utils/api';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const obj = Object.fromEntries(searchParams.entries())

    const res = await fetchApi({
        url: `/pokemon/?limit=${obj.limit}&offset=${obj.offset}`,
        method: 'GET'
    });
    
    const baseUrl = process.env.BASE_URL;
    
    if (res.results) {
        res.results = res.results.map((pokemon: any) => {
            return {
                ...pokemon,
                url: pokemon.url.replace(baseUrl, '')
            };
        });
    }
    if (res.next) {
        res.next = res.next.replace(baseUrl, '');
    }
    if (res.previous) {
        res.previous = res.previous.replace(baseUrl, '');
    }    
    return NextResponse.json(res, { status: 200 });
}
