import HomePage from "../pages/home-page";
import CardPage from "../pages/card-page";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";

const App = () => {

    return (
            <main role='main' className="container">
                <Header numItems={5} total={210} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CardPage />} />
                </Routes>
            </main>
    )
}

export default App;