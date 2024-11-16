import "./App.css";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Innovation from "./components/Innovation";
import Pricing from "./components/Pricing";
import SampleProjects from "./components/SampleProjects";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Search />
      <Innovation />
      <HowItWorks />
      <SampleProjects />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
