import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { YolculukGörüntülemeAra2 } from "../components/YolculukGörüntülemeAra2";
import { SeyahatKart } from "../components/SeyahatKart";

export default function YolculukGörüntüle() {
  const [stil, setStil] = useState({ visibility: "hidden" });

  const degistirStil = () => {
    setStil({ visibility: "inherit" });
  };
  return (
    <div>
      <Navbar />
      <YolculukGörüntülemeAra2 degistirStil={degistirStil} />
      <div style={stil}>
        <SeyahatKart />
      </div>
      <Footer />
    </div>
  );
}
