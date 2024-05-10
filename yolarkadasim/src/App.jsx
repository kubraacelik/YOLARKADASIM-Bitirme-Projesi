import "./App.css";
import { Routes, Route } from "react-router-dom";
import AnaSayfa from "./routes/AnaSayfa";
import ÜyeOl from "./routes/ÜyeOl";
import GirişYap from "./routes/GirişYap";
import YolculukYayınla from "./routes/YolculukYayınla";
import YolculukGörüntüle from "./routes/YolculukGörüntüle";
import { Profil } from "./routes/Profil";
import Mesaj from "./routes/Mesaj";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/uyeOl" element={<ÜyeOl />} />
        <Route path="/girisYap" element={<GirişYap />} />
        <Route path="/yolculukYayinla" element={<YolculukYayınla />} />
        <Route path="/yolculukGörüntüle" element={<YolculukGörüntüle />} />
        <Route path="/mesajlar" element={<Mesaj />} />
        <Route path="/profilAyarlari" element={<Profil />} />
        <Route path="/mesaj" element={<Mesaj />} />
      </Routes>
    </div>
  );
}

export default App;
