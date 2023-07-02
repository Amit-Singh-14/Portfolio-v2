import TopSection from "./components/topSection/TopSection";
import MainAnimation from "./components/animation/MainAnimation";
import Projects from "./components/porjectsection/Projects";
import Experiment from "./components/Experiment/Experiment";

function App() {
  return (
    <div className="App">
      <MainAnimation />
      <TopSection />
      <Projects />
      <Experiment />
    </div>
  );
}

export default App;
