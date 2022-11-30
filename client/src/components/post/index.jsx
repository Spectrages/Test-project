import React from 'react';
import {Link} from "react-router-dom";
import clsx from 'clsx';
import NavigationIcon from '@mui/icons-material/Navigation';
import styles from './post.module.scss';


export const Post = ({
                         name,
                         species,
                         image,
                         gender,
                         location,
                         episode,
                     }) => {
    return (
        <div className={styles.wrapper}>
                <div className={styles.character}>
                        {image && (
                            <img
                                className={clsx(styles.image)}
                                src={image}
                                alt={name}
                            />
                        )}

                        <div className={styles.content}>
                            <span>Name: {name}.</span>
                            <span>Species: {species}.</span>
                            <span>Gender: {gender}.</span>
                            <span>Location: {location}.</span>

                            <div className={styles.dropdown}>
                                <span>Episodes</span>
                                <div className={styles.dropdown_content}>
                                    {episode?.map((item) => {
                                        return(
                                            <Link to={item}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    );
};