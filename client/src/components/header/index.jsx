import React from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import Container from '@mui/material/Container';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../../redux/slices/auth";

export const Header = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const onClickLogout = () => {
        if(window.confirm('Are you sure you want to logout?')){
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    }


    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <Link to='/' className={styles.logo}>
                            GO TO HOME
                    </Link>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <Button
                                    onClick={onClickLogout}
                                    variant="contained"
                                    color="error"
                                >
                                    Exit
                                </Button>
                            </>
                        ) : (
                            <div className={styles.sign_buttons}>
                                <Link to="/login" className={styles.logo}>
                                        Sign In
                                </Link>
                                <Link to="/register" className={styles.logo}>
                                        Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};