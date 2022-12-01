import React from 'react';
import {Link} from "react-router-dom";
import clsx from 'clsx';
import styles from './post.module.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { SimpleMenu } from '../../components/menuList/index.jsx'


export const Post = ({
                         id,
                         name,
                         species,
                         image,
                         gender,
                         type,
                         location,
                         episode,
                         firstEpisode,
                         status,
                         isFullPost,
                         isLoading,
                     }) => {
    return (
        <div className={clsx(styles.root, {[styles.rootFull]: isFullPost})}>
            {isFullPost ?
                <div className={styles.fullCharacter}>
                    {image && (
                        <img
                            className={styles.imageFull}
                            src={image}
                            alt={name}
                        />
                    )}
                    <div className={styles.textBlock}>
                        <div className={styles.status}>
                            <span>Status: {status}</span>
                            {status === 'Alive' ?
                                <FiberManualRecordIcon sx={{color: 'green'}}/>
                                : status === 'Dead'
                                    ? <FiberManualRecordIcon sx={{color: 'red'}}/>
                                    : <FiberManualRecordIcon sx={{color: 'grey'}}/>}
                                    <span> - {species}</span>
                        </div>
                        <span>Name: {name}</span>
                        {type ? <span>Type: {type}</span> : ''}
                        <div className={styles.status}>
                            <span>Gender: {gender}</span>
                            {gender === 'Male'
                                ? <MaleIcon sx={{color: 'white'}}/>
                                : <FemaleIcon sx={{color: 'white'}}/>}
                        </div>
                        <span>Last known location: {location}</span>
                        <span>First seen in: {firstEpisode}</span>
                        <SimpleMenu episode={episode}/>
                    </div>
                </div>
                : <Link className={styles.wrapper} to={`/character/${id}`}>
                    <div className={clsx(styles.character, {[styles.characterFull]: isFullPost})}>
                        {image && (
                            <img
                                className={styles.image}
                                src={image}
                                alt={name}
                            />
                        )}
                        <span>{name}</span>
                        <div className={styles.status}>
                            {status === 'Alive' ?
                                <FiberManualRecordIcon sx={{color: 'green'}}/>
                                : status === 'Dead'
                                    ? <FiberManualRecordIcon sx={{color: 'red'}}/>
                                    : <FiberManualRecordIcon sx={{color: 'grey'}}/>}
                            <span>{status}</span>
                        </div>
                    </div>
                </Link>}
        </div>
    );
};
