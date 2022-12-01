import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom'
import { Header } from "./components/header";
import { Home, FullCharacter, Registration, Login } from "./pages";

function App() {
  return (
      <>
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/character/:id" element={<FullCharacter />}/>
            <Route path="/register" element={<Registration />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Container>
      </>
  );
}

export default App;
