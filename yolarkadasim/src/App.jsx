import "./App.css";
import { Routes, Route } from "react-router-dom";
import AnaSayfa from "./routes/AnaSayfa";
import ÜyeOl from "./routes/ÜyeOl";
import GirişYap from "./routes/GirişYap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/uyeOl" element={<ÜyeOl />} />
        <Route path="/girisYap" element={<GirişYap />} />
      </Routes>
    </div>
  );
}

export default App;
