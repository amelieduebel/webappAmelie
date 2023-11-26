import "./App.css";
//import { Card } from "./Card/card";
import { Navbar } from "./navbar/navbar";
import "./Card/card.css";
import { Calculator } from "./pages/calculator";
import { Helloworld } from "./pages/helloworld";
import { ViteReact } from "./pages/vitereact";
import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="calc" element={<Calculator />}></Route>
          <Route path="hello" element={<Helloworld />}></Route>
          <Route path="vite+react" element={<ViteReact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
