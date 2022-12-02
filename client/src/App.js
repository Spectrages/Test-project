import React from "react";
import Container from "@mui/material/Container";
import {Routes, Route} from 'react-router-dom'
import {Header} from "./components/header";
import {Home, FullCharacter, Registration, Login, InformPage, ErrorPage} from "./pages";
import {Footer} from "./components/footer";


function App() {
    return (
        <>
            <Header/>
            <Container maxWidth="lg"
                       sx={{
                           display: "flex",
                           minHeight: "100vh",
                           flexDirection: "column",
                       }}
            >
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/character/:id" element={<FullCharacter/>}/>
                        <Route path="/register" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/me" element={<InformPage/>}/>
                        <Route path="/error" element={<ErrorPage/>}/>
                    </Routes>
            </Container>
            <Footer/>
        </>
    );
}

export default App;
