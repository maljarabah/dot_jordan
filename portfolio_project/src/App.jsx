import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import data from "./data.dist.json"

function App() {
    const images = import.meta.glob("/src/assets/*", { eager: true })

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home data={data} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
