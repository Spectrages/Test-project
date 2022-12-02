import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { changeTrue, changeFalse } from "../../redux/slices/checkbox";
import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

export const Header = () => {
    const check = useSelector(state => state.checkbox.check);
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const onClickLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(logout());
            window.localStorage.removeItem('token');
            window.sessionStorage.removeItem('secondToken');
        }
    };

    const handleChange = async () => {
        if (check === true) {
            dispatch(changeFalse());
            window.localStorage.removeItem('token');
        } else {
            dispatch(changeTrue());
            let token = window.sessionStorage.getItem('secondToken');
            window.localStorage.setItem('token', token);
        }
    };

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <Link to='/' className={styles.logo}>
                        GO TO HOME
                    </Link>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <div className={styles.sign_buttons}>
                                <div className={styles.checkbox}>
                                    <Checkbox
                                        checked={check}
                                        onChange={handleChange}
                                        inputProps={{'aria-label': 'controlled'}}
                                        icon={
                                            <CheckBoxOutlineBlankTwoToneIcon
                                                sx={{color: "#fff"}}
                                            />
                                        }
                                        checkedIcon={<
                                            CheckBoxTwoToneIcon
                                            sx={{color: "green  "}}
                                        />
                                        }
                                    />
                                    <span className={styles.text}>Remember me</span>
                                </div>

                                <Link to="/me" className={styles.logo}>
                                    Information about me
                                </Link>
                                <Link
                                    className={styles.logo}
                                    onClick={onClickLogout}
                                >
                                    Exit
                                </Link>
                            </div>
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