import React, {useEffect} from 'react';
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

    return (
        <React.Fragment>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="baseline"
                >
                    {(isCharactersLoading ? [...Array(20)] : data.characters.items.results).map((obj, index) => isCharactersLoading
                        ? (<Post key={index} isLoading={true}/>)
                        : (<Post
                            id={obj.id}
                            name={obj.name}
                            image={obj.image}
                            species={obj.species}
                            gender={obj.gender}
                            location={obj.location.name}
                            episode={obj?.episode}
                            status={obj.status}
                            type={obj.type}
                        />))}
                </Grid>
        </React.Fragment>
    );
};