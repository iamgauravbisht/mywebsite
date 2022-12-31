import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { mainContext } from "./helpers/Contexts";

function App() {
  const [pagestate, setPagestate] = useState("connect");

  return (
    <div className="App font-mono text-center mx-auto selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <mainContext.Provider value={{ pagestate, setPagestate }}>
        {pagestate === "connect" && <Connect />}
        {pagestate === "mainpage" && (
          <div>
            <Header />
            <About />
            <Projects />
            <Testimonials />
            <Footer />
          </div>
        )}
      </mainContext.Provider>
    </div>
  );
}

export default App;
