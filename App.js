import "./App.css";
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "../src/Components/BodyComponents/AboutUs"
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "../src/Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";

function App() {
  return (
    <div>
      <HeadersComponent />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer  />
    </div>
  );
}

export default App;