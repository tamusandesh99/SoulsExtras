import logo from "./logo.svg";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route index element={<Home />} /> //replace home with whatever main landing page will be later on
          <Route path="bingobrawlers" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
