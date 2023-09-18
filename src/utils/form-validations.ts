import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const addUserSchema = Yup.object().shape({
    name: Yup.string().min(8).required('Name is required'),
    email: Yup.string().email('Email format must be valid!').required('Email is required'),
    gender: Yup.string()
        .oneOf(['male', 'female'], 'Gender can only be male or female')
        .required('Gender is required'),
    status: Yup.string()
        .oneOf(['active', 'inactive'], 'Status can only be active or inactive')
        .required('Status is required'),
});

export const formAddUser = { resolver: yupResolver(addUserSchema) };
