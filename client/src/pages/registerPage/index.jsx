import React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import styles from './register.module.scss';
import TextField from '@mui/material/TextField';
import { Navigate } from "react-router-dom";
import {fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const Registration = () => {

    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            biography: '',
        },
        mode: 'onChange'
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        if (!data.payload) {
            alert("Failed to register");
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
            window.sessionStorage.setItem('secondToken', data.payload.token);
        }
    };

    if (isAuth) {
        return <Navigate to={'/'}/>
    }

    return (
        <Paper classes={{root: styles.root}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography classes={{root: styles.title}} variant="h5">
                    Create an account
                </Typography>
                <TextField
                    className={styles.field}
                    label="Full name"
                    error={Boolean(errors.fullName?.message)}
                    helperText={errors.fullName?.message}
                    {...register('fullName', {required: 'Enter your full name'})}
                    type="fullName"
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register('email', {required: 'Enter your email'})}
                    type="email"
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="password"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register('password', {required: 'Enter your password'})}
                    type="password"
                    fullWidth
                />
                <TextField
                    multiline
                    rows={4}
                    className={styles.field}
                    label="Biography"
                    error={Boolean(errors.biography?.message)}
                    helperText={errors.biography?.message}
                    {...register('biography', {required: 'Enter your biography (min 10 characters)'})}
                    type="Biography"
                    fullWidth
                />
                <Button type="submit" disabled={!isValid} size="large" variant="contained" fullWidth>
                    Register
                </Button>
            </form>
        </Paper>
    );
};