import HomePage from "../pages/home-page";
import CardPage from "../pages/card-page";
import { Routes, Route } from "react-router-dom";

const App = () => {

    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="card" element={<CardPage />} />
            </Routes>
    )
}

export default App;