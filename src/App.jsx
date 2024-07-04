import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Outlet} from 'react-router-dom';

function App() {
    return (
        <main>
            <Navbar />
            <Outlet/>
            <Footer/>
        </main>
    );
}

export default App;
