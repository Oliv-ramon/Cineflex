import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top";
import Films from "../Films";
import Film from "../Film";
import SeatsPage from "../SeatsPage";
import SucessPage from "../SucessPage";
import "./style.css";

function App() {
    return (
        
        <BrowserRouter>
            <Top></Top>
            <main>
                <Routes>
                    <Route path="/" element={<Films/>}></Route>
                    <Route path="/sessoes/:filmId" element={<Film/>}></Route>
                    <Route path="/assentos/:sectionId" element={<SeatsPage/>}></Route>
                    <Route path="/sucesso" element={<SucessPage/>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
