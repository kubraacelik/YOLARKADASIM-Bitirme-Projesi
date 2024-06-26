import React, { useState, useEffect } from "react";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/avatar.jpg";
import { jwtDecode } from "jwt-decode";
import { TextField } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import Driver from "../assets/driver.png";

export const Profil = () => {
  const userToken = localStorage.getItem("token");
  const data = jwtDecode(userToken);
  const name = data.ad;
  const surname = data.soyad;
  const password = data.sifre;
  const eposta = data.eposta;
  const kayitTarihi = data.kayitTarihi;

  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || Avatar
  );
  const [tempProfileImage, setTempProfileImage] = useState(null);

  const handlePasswordUpdate = () => {
    navigate("/yeniSifre");
  };

  return (
    <>
      <Navbar />
      <div className="enKapsayıcı">
        <div className="profil">Profilinizi Düzenleyin</div>
        <div className="kapsayıcı">
          <div className="kapsayıcıSol">
            <img className="kişiResmi" src={Driver} alt="" />
          </div>

          <div className="kapsayıcıSag">
            <div className="kapsayıcıSagBolum">
              <div className="profilBilgileri">
                <div className="profilBilgi">
                  <label className="profil-label">Ad :</label>
                  <TextField
                    className="profil-paragraf"
                    id="outlined-basic"
                    label={name}
                    variant="outlined"
                    disabled
                    inputProps={{
                      style: {
                        width: 450,
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "20px",
                        fontWeight: "normal",
                        color: "black",
                      },
                    }}
                  />
                </div>
                <div className="profilBilgi">
                  <label className="profil-label">Soyad :</label>
                  <TextField
                    className="profil-paragraf"
                    id="outlined-basic"
                    label={surname}
                    variant="outlined"
                    disabled
                    inputProps={{
                      style: {
                        width: 450,
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "20px",
                        fontWeight: "normal",
                        color: "black",
                      },
                    }}
                  />
                </div>
                <div className="profilBilgi">
                  <label className="profil-label">E-mail :</label>
                  <TextField
                    className="profil-paragraf"
                    id="outlined-basic"
                    label={eposta}
                    variant="outlined"
                    disabled
                    inputProps={{
                      style: {
                        width: 450,
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "20px",
                        fontWeight: "normal",
                        color: "black",
                      },
                    }}
                  />
                </div>
                <div className="profilBilgi">
                  <label className="profil-label">Kayıt Tarihi :</label>
                  <TextField
                    className="profil-paragraf"
                    id="outlined-basic"
                    label={kayitTarihi}
                    variant="outlined"
                    disabled
                    inputProps={{
                      style: {
                        width: 450,
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "20px",
                        fontWeight: "normal",
                        color: "black",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="yeniSifre">
                <button className="yeniSifreBtn" onClick={handlePasswordUpdate}>
                  Şifreni Güncelle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
