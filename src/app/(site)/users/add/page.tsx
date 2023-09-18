'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button, Card, HeadingLink } from '@/components/commons';
import { InputText } from '@/components/forms';
import { formAddUser } from '@/utils/form-validations';

export default function AddUsers() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formAddUser);

    const router = useRouter();

    const onSubmit = async (value: any) => {
        console.log(value, 'value login');
    };

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='Add User' withBack />
            <Card className='flex flex-col w-full space-y-4' canHover={false}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 w-full'>
                    <InputText type='number' register={register('id')} errMessage={errors.id?.message} placeholder='ID User' label='Input id user' rounded />
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
                        <Button label='Save' type='submit' className='w-full' />
                        <Button label='Cancel' type='button' variant='error' className='w-full' onClick={() => router.back()} />
                    </div>
                </form>
            </Card>
        </div>
    );
}
