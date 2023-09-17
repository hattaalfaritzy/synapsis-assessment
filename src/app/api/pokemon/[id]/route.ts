import { fetchApi } from '@/utils/api';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: Props) {
    const { id } = params;
    const res = await fetchApi({
        url: `/pokemon/${id}`,
        method: 'GET'
    });
    return NextResponse.json(res, { status: 200 });
}

interface Props {
    params: {
        id: string;
    };
}
