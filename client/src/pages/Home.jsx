import React, {useEffect} from 'react';
import {Post} from '../components/post'
import Grid from '@mui/material/Grid';
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters} from "../API/charactersApi";
import {fetchLogin} from "../API/userApi";
import {CustomPagination} from "../components/pagination";

export const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.characters);
    const isCharactersLoading = data.characters.status === 'loading';

    const handlePageChange = (value) => {
        dispatch(fetchCharacters(value))
    };

    useEffect(() => {
        dispatch(fetchCharacters());
        dispatch(fetchLogin());
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
                        key={index}
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
            <CustomPagination data={data?.characters?.items?.info || ''} onChange={handlePageChange}/>
        </React.Fragment>
    );
};