import logo from "./logo.svg";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is less than 1024 (iPads and smaller devices)
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Add event listener for resizing
    window.addEventListener("resize", updateMedia);

    // Call the function initially to set the correct state
    updateMedia();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
     <DndProvider backend={isMobile ? TouchBackend : HTML5Backend} options={isMobile ? { enableMouseEvents: true } : {}}>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route index element={<Home />} /> //replace home with whatever main landing page will be later on
          <Route path="bingobrawlers" element={<Home />} />
        </Route>
      </Routes>
      </DndProvider>
    </>
  );
}

export default App;
