import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import App from './App.jsx'
import Imprint from "./components/Imprint.jsx";
import Index from "./components/Index.jsx";
import About from "./components/About.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/html/start" replace/>} />
                <Route path="/:topic/:chapter" element={<App/>}/>

                <Route path="/index" element={<Index/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/imprint" element={<Imprint/>}/>


            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
