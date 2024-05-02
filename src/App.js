import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PriceAPI from "./pages/PriceAPI";
import PriceWeb from "./pages/PriceWeb";
import Editpage from "./pages/Editpage";
import APIDoc from "./pages/APIDoc";
import Support from "./pages/Support";
import UploadImagepage from "./pages/UploadImagepage";
import QuickStart from "./pages/APIPages/QuickStart";
import Pricing from "./pages/APIPages/Pricing";
import Authentication from "./pages/APIPages/Authentication";
import RateLimit from "./pages/APIPages/RateLimit";
import Timeouts from "./pages/APIPages/Timeouts";
import ErrorJSON from "./pages/APIPages/ErrorJSON";
import Vectorize from "./pages/APIPages/Vectorize";
import AccountStatus from "./pages/APIPages/AccountStatus";
import Changelog from "./pages/APIPages/Changelog";
import OutputOptions from "./pages/APIPages/OutputOptions";
import ErrorResponses from "./pages/APIPages/ErrorResponses";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/priceapi" element={<PriceAPI />} />
            <Route path="/priceweb" element={<PriceWeb />} />
            <Route path="/editimage" element={<Editpage />} />
            <Route path="/uploadimage" element={<UploadImagepage />} />
            <Route path="/apidoc" element={<APIDoc />}>
              <Route path="start" element={<QuickStart />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="authentication" element={<Authentication />} />
              <Route path="rate-limit" element={<RateLimit />} />
              <Route path="timeouts" element={<Timeouts />} />
              <Route path="error-json" element={<ErrorJSON />} />
              <Route path="vectorize" element={<Vectorize />} />
              <Route path="account-status" element={<AccountStatus />} />
              <Route path="changelog" element={<Changelog />} />
              <Route path="output-options" element={<OutputOptions />} />
              <Route path="error-responses" element={<ErrorResponses />} />
            </Route>
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
