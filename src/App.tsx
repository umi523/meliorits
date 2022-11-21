import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Pages/Services/Services";
import About from "./components/Pages/About/About";
import Career from "./components/Pages/Career/Career";
import Industries from "./components/Pages/Industries/Industries";
import Stories from "./components/Pages/Stories/Stories";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/services">
            <Services />
          </Route>
          <Route path="/industries">
            <Industries />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
