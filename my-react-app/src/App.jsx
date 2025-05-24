import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollEffect from "./components/ScrollEffect/ScrollEffect";

function App() {
  return (
    <div className="app">
      <Navbar />
        <div id = "home"><ScrollEffect><Home /></ScrollEffect></div>
       <div id = "about"><ScrollEffect><About /></ScrollEffect></div>
       <div id = "portfolio"><ScrollEffect><Portfolio /></ScrollEffect></div>
       <div id = "contact"><ScrollEffect><Contact /></ScrollEffect></div>
      <Footer />
    </div>
  );
}

export default App;
