import React from "react";
import Navbar from "../components/Navbar";
import YolculukAra from "../components/YolculukAra";
import NasılKullanılır from "../components/NasılKullanılır";
import KullanmanınFaydaları from "../components/KullanmanınFaydaları";
import Sorular from "../components/Sorular";
import Footer from "../components/Footer";

const AnaSayfa = () => {
  return (
    <div>
      <Navbar />
      <YolculukAra />
      <NasılKullanılır />
      <KullanmanınFaydaları />
      <Sorular />
      <Footer />
    </div>
  );
};

export default AnaSayfa;
