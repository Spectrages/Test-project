import React from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
    const isAuth = false;
    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <Link to='/' className={styles.logo}>
                        <div>GO TO HOME</div>
                    </Link>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <Button variant="contained" color="error">
                                    Exit
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="outlined">Sign In</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="contained">Sign Up</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};