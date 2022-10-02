import {Routes, Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Individuals from "./Individuals";
import Team from "../Context/Team";
import Enterprise from "../Context/Enterprise";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/individuals" element={<Individuals />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/teams" element={<Team />}></Route>
            <Route path="/enterprise" element={<Enterprise />}></Route>
        </Routes>
    )
}

export default AllRoutes;