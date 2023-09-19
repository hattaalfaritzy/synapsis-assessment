import { fetchApi } from '@/utils/api';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const obj = Object.fromEntries(searchParams.entries())

    const res = await fetchApi({
        url: `/posts?page=${obj.page}&per_page=${obj.per_page}`,
        method: 'GET'
    });
      
    return NextResponse.json(res, { status: 200 });
}
