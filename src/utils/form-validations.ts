import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const addUserSchema = Yup.object().shape({
    id: Yup.string().required('ID is required'),    
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email format must be valid!').required('Email is required'),
    gender: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    status: Yup.string().required('Status is required'),
});

export const formAddUser = { resolver: yupResolver(addUserSchema) };
