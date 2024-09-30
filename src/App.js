import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./Views/Home"


export const App=()=>{
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    </>)    
} 