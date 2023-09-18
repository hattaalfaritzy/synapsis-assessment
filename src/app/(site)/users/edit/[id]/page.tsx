'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button, Card, HeadingLink } from '@/components/commons';
import { InputText } from '@/components/forms';
import { formAddUser } from '@/utils/form-validations';
import { editUsers, getUserDetail } from '@/services/users';

export default function EditUsers() {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<UsersInterface.Users>();

    const router = useRouter();
    const { id } = useParams();
    const id_detail = typeof id === 'string' ? parseInt(id, 10) : 0;

    useEffect(() => {
        const getData = async (id: number) => {
            const detail = await getUserDetail(id);
            setDataDetail(detail ?? {});
            setLoading(false);
        };

        if(id_detail) {
            getData(id_detail);
        }
    }, [id_detail]);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm(formAddUser);

    useEffect(() => {
        if(dataDetail) {
            for(const key in dataDetail) {
                if(dataDetail.hasOwnProperty(key) && ['name', 'email', 'gender', 'status'].includes(key)) {
                    setValue(key as 'name' | 'email' | 'gender' | 'status', dataDetail[key]);
                }
            }
        }
    }, [dataDetail, setValue]);

    const onSubmit = async (value: any) => {
        setLoading(true);
        try {
            await editUsers(id_detail, value);
            router.push('/users');
        } catch (error) {
            console.log(error);   
        }
        setLoading(false);
    };

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='Edit User' withBack />
            <Card className='flex flex-col w-full space-y-4' canHover={false}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 w-full'>
                    <InputText register={register('name')} errMessage={errors.name?.message} placeholder='Name' label='Input name user' rounded />
                    <InputText
                        type='email'
                        register={register('email')}
                        errMessage={errors.email?.message}
                        placeholder='Email'
                        label='Input email user'
                        rounded
                    />
                    <InputText register={register('gender')} errMessage={errors.gender?.message} placeholder='Gender' label='Input gender user' rounded />
                    <InputText register={register('status')} errMessage={errors.status?.message} placeholder='Status' label='Input status user' rounded />
                    <div className='flex flex-row justify-between items-center w-full space-x-4'>
                        <Button loading={loading} label='Save' type='submit' className='w-full' />
                        <Button disabled={loading} label='Cancel' type='button' variant='error' className='w-full' onClick={() => router.back()} />
                    </div>
                </form>
            </Card>
        </div>
    );
}
