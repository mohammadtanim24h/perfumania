import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import AddPerfume from "./Components/AddPerfume/AddPerfume";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/inventory/:id"
                    element={
                        <PrivateRoute>
                            <Inventory></Inventory>
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/manageInventories"
                    element={
                        <PrivateRoute>
                            <ManageInventory></ManageInventory>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/addItems"
                    element={
                        <PrivateRoute>
                            <AddPerfume></AddPerfume>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/myItems"
                    element={
                        <PrivateRoute>
                            <MyItems></MyItems>
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
