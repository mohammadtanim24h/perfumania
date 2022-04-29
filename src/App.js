import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Inventory from "./Components/Inventory/Inventory";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
