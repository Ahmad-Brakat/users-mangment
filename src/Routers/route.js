import { BrowserRouter, Routes, Route } from "react-router-dom";
import All_Users from "../Pages/allUsers";
import Edite from "../Components/editeUser";
import Add from "../Components/addUser";
export default function Router() {
    return (
        // <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<All_Users />} />
                <Route path="/add_user" element={<Add />} />
                <Route exact path="/edite_User/:id" element={<Edite />} />
            </Route>
        </Routes>
        // </BrowserRouter>
    );
}