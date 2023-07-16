import TopSection from "./components/topSection/TopSection";
import MainAnimation from "./components/animation/MainAnimation";
import Projects from "./components/porjectsection/Projects";
import Experiment from "./components/ExperimentSection/Experiment";
import Footer from "./components/FooterSection/Footer";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <MainAnimation />
      <TopSection />
      <Projects />
      <Experiment />
      <Footer />
    </div>
  );
}

export default App;
