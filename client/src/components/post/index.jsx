import React from 'react';
import clsx from 'clsx';

import styles from './post.module.scss';


export const Post = ({}) => {
    return (
        <div className={clsx(styles.root, {[styles.rootFull]: isFullPost})}>

        </div>
    );
};