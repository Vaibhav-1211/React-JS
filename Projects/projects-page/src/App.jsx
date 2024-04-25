// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";



const App = () => {
  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
