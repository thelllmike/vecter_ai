import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PriceAPI from "./pages/PriceAPI";
import PriceWeb from "./pages/PriceWeb";
import Editpage from "./pages/Editpage";
import UploadImagepage from "./pages/UploadImagepage";

function App() {
    return (
        <div className='App'>
            <Router>                
                <main>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/priceapi' element={<PriceAPI />} />
						<Route path='/priceweb' element={<PriceWeb />} />
						<Route path='/editimage' element={<Editpage />} />
                        <Route path='/uploadimage' element={<UploadImagepage />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
