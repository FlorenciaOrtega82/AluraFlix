import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CrearVideo from "./pages/CrearVideo";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="/nuevoVideo" element={<CrearVideo />} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
