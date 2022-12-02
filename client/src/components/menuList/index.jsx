import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

export const SimpleMenu = ({episode, isFullPost, name}) => {
    const [anchorElement, setAnchorElement] = useState(null);
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };

    const uploadEpisodesNames = () => {
        if(isLoaded === false) {
            if (isFullPost && episode) {
                let copy = Object.assign([], data);
                episode.map((item) => {
                    axios.get(`${item}`)
                        .then((response) => {
                            copy.push(response.data.name);
                            setData(copy);
                            return response.data.name
                        })
                        .catch((error) => {
                            return (<Navigate to={`/error`} replace={true} />);
                        });
                });
                setIsLoaded(true);
            }
        }
    };
    uploadEpisodesNames();
    return (
        <div>
            <Button
                sx={{
                    color: '#e0e0e0',
                    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                    fontSize: '20px',
                    width: '100%',
                }}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                Click to open all episodes with {name}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                {data.length > 0 ? data.map((item, index) => {
                        return (
                            <MenuItem key={index} onClick={handleClose}>
                                {item}
                            </MenuItem>
                        )
                    })
                    : <MenuItem onClick={handleClose}>--Nothing--</MenuItem>
                }

            </Menu>
        </div>
    );
};