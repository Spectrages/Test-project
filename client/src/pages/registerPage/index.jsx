import React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import styles from './register.module.scss';
import TextField from '@mui/material/TextField';

export const Registration = () => {
    return (
        <Paper classes={{root: styles.root}}>
            <form>
                <Typography classes={{root: styles.title}} variant="h5">
                    Create an account
                </Typography>
                <TextField
                    className={styles.field}
                    label="Full name"
                    error="Some error"
                    helperText="Some error"
                    type="fullName"
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error="Some error"
                    helperText="Some error"
                    type="email"
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="password"
                    error="Some error"
                    helperText="Some error"
                    type="password"
                    fullWidth
                />
                <Button type="submit" size="large" variant="contained" fullWidth>
                    Register
                </Button>
            </form>
        </Paper>
    );
};