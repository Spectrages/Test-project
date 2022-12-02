import React from 'react';
import ErrorPicture from '../../pictures/error.jpg'
import styles from './error.module.scss'

export const ErrorPage = () => {
    return (
        <div className={styles.root}>
            <span className={styles.text}>Oops, an error has occurred!!!</span>
            <img
                src={ErrorPicture}
            />
        </div>
    );
};