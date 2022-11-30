import React, {useEffect, useState} from 'react';
import {Post} from '../components/post'
import Grid from '@mui/material/Grid';
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters} from "../API/charactersApi";

export const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.characters);
    const isCharactersLoading = data.characters.status === 'loading';

    useEffect(() => {
        dispatch(fetchCharacters());
    }, []);

    if (data) {
        console.log(data.characters.status)
    }
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid xs={8} item>
                    {(isCharactersLoading ? [...Array(20)] : data.characters.items.results).map((obj, index) => isCharactersLoading
                        ? (<Post key={index} isLoading={true}/>)
                        : (<Post
                            name={obj?.name || ''}
                            status={obj?.status || ''}
                            species={obj?.species || ''}
                            image={obj?.image || ''}
                            gender={obj?.gender || ''}
                            location={obj?.location?.name || ''}
                            episode={obj?.episode || ''}
                        />))}
                </Grid>
                <Grid xs={4} item>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};