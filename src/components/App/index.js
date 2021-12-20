import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Top from "./Top";
import Films from "../Films";
import Film from "../Film";
import SeatsPage from "../SeatsPage";
import SucessPage from "../SucessPage";
import "./style.css";

function App() {
    let [purchaseInfo, setPurchaseInfo] = useState({})

    return (
        
        <BrowserRouter>
            <Top></Top>
            <main>
                <Routes>
                    <Route path="/" element={<Films/>}></Route>
                    <Route path="/sessoes/:filmId" element={<Film/>}></Route>
                    <Route path="/assentos/:sectionId" element={<SeatsPage purchaseInfo={purchaseInfo}/>}></Route>
                    <Route path="/sucesso" element={<SucessPage purchaseInfo={purchaseInfo} setPurchaseInfo={setPurchaseInfo}/>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
