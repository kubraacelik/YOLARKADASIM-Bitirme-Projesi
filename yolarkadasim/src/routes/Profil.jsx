import React, { useState, useEffect } from "react";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/avatar.jpg";
import { jwtDecode } from "jwt-decode";
import { TextField } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

export const Profil = () => {
  const userToken = localStorage.getItem("token");
  const data = jwtDecode(userToken);
  const name = data.ad;
  const surname = data.soyad;
  const password = data.sifre;
  const eposta = data.eposta;
  const kayitTarihi = data.kayitTarihi;

  const navigation = useNavigate();

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || Avatar
  );
  const [tempProfileImage, setTempProfileImage] = useState(
    localStorage.getItem("tempProfileImage") || null
  );

  const handlePasswordUpdate = () => {
    navigation("/yeniSifre");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempProfileImage(reader.result); // Sadece geçici profil resmini güncelle
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Component yüklendiğinde, localStorage'den geçici profil resmini al
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  return (
    <>
      <Navbar />
      <div className="enKapsayıcı">
        <div className="profil">Profilinizi Düzenleyin</div>
        <div className="kapsayıcı">
          <div className="kapsayıcıSol">
            <img
              className="kişiResmi"
              src={tempProfileImage || profileImage}
              alt=""
            />
            <div className="kapsayıcıBtnUpload">
              <InputText
                type="file"
                accept="/image/*"
                onChange={handleImageChange}
                className="btnUpload"
              />
            </div>
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
                <button
                  className="yeniSifreBtn"
                  onClick={handlePasswordUpdate}
                >
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
