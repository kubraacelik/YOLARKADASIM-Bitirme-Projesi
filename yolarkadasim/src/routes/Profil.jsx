import React, { useState, useEffect } from "react";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/avatar.jpg";
import { jwtDecode } from "jwt-decode";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextField } from "@mui/material";
import { InputText } from "primereact/inputtext";

export const Profil = () => {
  const userToken = localStorage.getItem("token");
  const data = jwtDecode(userToken);
  const name = data.ad;
  const surname = data.soyad;
  const password = data.sifre;
  const eposta = data.eposta;

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || Avatar
  );
  const [tempProfileImage, setTempProfileImage] = useState(
    localStorage.getItem("tempProfileImage") || null
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      setTempProfileImage(reader.result); // Geçici profil resmini güncelle
      localStorage.setItem("tempProfileImage", reader.result); // Geçici profil resmini localStorage'e kaydet
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Component yüklendiğinde, localStorage'den geçici profil resmini al
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
                <button className="yeniSifreBtn">Şifreni Güncelle</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="yeniSifre">
            <div className="profilBilgi">
              <label className="profil-label">Mevcut Şifrenizi Giriniz</label>
              <Input type="password" />
            </div>
            <div className="profilBilgi">
              <label className="profil-label">Yeni Şifrenizi Giriniz</label>
              <Input type="password" />
            </div>
            <div className="profilBilgi">
              <label className="profil-label">
                Yeni Şifrenizi Tekrar Giriniz
              </label>
              <Input type="password" />
            </div>
            <button className="btnGuncelle">Güncelle</button>
          </div> */}
      </div>
      <Footer />
    </>
  );
};
