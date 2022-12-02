import React, { useState } from 'react';
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";

export const CustomPagination = ({data, onChange}) => {

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        onChange(value);
    };

    const pagination = createTheme({
        palette: {
            primary: {
                main : "#fff",
            },
        }
    });

    return (
        <Grid
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '10px',
                background: '#48494B',
                borderRadius: "20px",
                boxShadow: "0 0 2px 2px dimgray",
            }}
        >
            <ThemeProvider theme={pagination}>
                <Pagination
                    count={data.pages}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    page={page}
                    onChange={handleChange}
                />
            </ThemeProvider>
        </Grid>
    );
};
