import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import { Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

export const SimpleMenu = ({episode}) => {
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };


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
                Click to open all episodes
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                { episode ? episode.map((item) => {
                    return(
                        <MenuItem onClick={handleClose}>{item}</MenuItem>
                    )
                })
                    : <MenuItem onClick={handleClose}>--Nothing--</MenuItem>
                }

            </Menu>
        </div>
    );
};