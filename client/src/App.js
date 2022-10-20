import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/system";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";


const App = () => {
    return(
        <Router>
            <Container>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" exact element={<Auth/>}/>
                </Routes>
            </Container>
        </Router>
    );
};
             

export default App