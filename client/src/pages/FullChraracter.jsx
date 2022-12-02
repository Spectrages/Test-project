import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Post } from "../components/post/index";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export const FullCharacter = () => {
    const {id} = useParams();
    const [data, setData] = useState('');
    const [firstEpisode, setFirstEpisode] = useState('');

        useEffect(() => {
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                .then((response) => {
                    setData(response.data);

                    axios.get(`${response.data.episode[0]}`)
                        .then((response) => {
                            setFirstEpisode(response.data.name);
                            return response.data.name;
                        })
                        .catch((error) => {
                            console.log(error);
                            return (<Navigate to={`/error`} replace={true}/> );
                        });

                    return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    return (<Navigate to={`/error`} replace={true}/> );
                });
        }, []);

    return (
        <React.Fragment>
            <Post
                id={data.id}
                name={data.name}
                image={data.image}
                species={data.species}
                gender={data.gender}
                location={data?.location?.name || "Nothing"}
                episode={data?.episode}
                status={data.status}
                type={data.type}
                firstEpisode={firstEpisode}
                isFullPost
            />
        </React.Fragment>
    );
};