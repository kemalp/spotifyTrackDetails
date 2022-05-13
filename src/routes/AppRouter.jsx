import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../ui/pages/login/Login";
import Home from "../ui/pages/home/Home";

const AppRouter = () => (
 <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
    </Routes>
 </BrowserRouter>
)

export default AppRouter