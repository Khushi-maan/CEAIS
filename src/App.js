import "./App.css";
import Header from "./components/Header";
import Innovation from "./components/Innovation";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Search />
      <Innovation />
    </div>
  );
}

export default App;
