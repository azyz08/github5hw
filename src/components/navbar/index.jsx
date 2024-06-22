import { Link, Route, Routes } from "react-router-dom"
import "./style.scss"
import Azizbek from "../../pages/azizbek"
import Abduxabir from "../../pages/abduxabir"

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <Link to={"/"}>Azizbek</Link>
                <Link to={"/page2"}>Abduxabir</Link>
            </div>

            <Routes>
                <Route path="/" element={<Azizbek />} />
                <Route path="/page2" element={<Abduxabir />} />
            </Routes>
        </>
    )
}