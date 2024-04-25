import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const Profil = () => {
  return (
    <>
      <Navbar />
      <div className="kapsayicii">
        <div className="solMenu">
          <div className="solMenuEleman">
            <PersonIcon sx={{ margin: "5px" }} />
            <Link to="SürücüDetay">
              <div className="surucuDetay">Sürücü Detayları</div>
            </Link>
          </div>
          <div className="solMenuEleman">
            <DirectionsCarIcon sx={{ margin: "5px" }} />
            <Link to="AraçDetay">
              <div className="aracDetay">Araç Bilgisi</div>
            </Link>
          </div>
          <div className="solMenuEleman">
            <DirectionsCarIcon sx={{ margin: "5px" }} />
            <Link to="Bildirimler">
              <div className="aracDetay">Bildirimler</div>
            </Link>
          </div>
        </div>
        <div className="sagMenu">{/* <div className="profilDiv">Profil</div> */}</div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
