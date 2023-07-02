import TopSection from "./components/topSection/TopSection";
import MainAnimation from "./components/animation/MainAnimation";
import Projects from "./components/porjectsection/Projects";
import Experiment from "./components/ExperimentSection/Experiment";
import Footer from "./components/FooterSection/Footer";

function App() {
  return (
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
