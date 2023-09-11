import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartContent from "./pages/StartContent";
import React from "react";
import Products from "./pages/Products";
import Solarium from "./pages/Solarium";
import Tanbed from "./pages/Tanbeds";
import Contacts from "./Contacts";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartContent/>} />
          <Route path="solarium" element={<Solarium/>} />
          <Route path="produkter" element={<Products/>} />
          <Route path="kontakt" element={<Contacts />} />
          <Route path="solarium/baddar/*" element={<Tanbed />} />
        </Route>
        </Routes>
      </BrowserRouter>

  ); 
}
ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
