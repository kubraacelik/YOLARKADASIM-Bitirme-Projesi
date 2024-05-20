import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { IoPerson, IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/LOGO NAVBAR.png";
import { useNavigate } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext"; 

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentUser, logout } = useAuth(); 
  const navigate = useNavigate();

  const openControl = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" sx={{ padding: 2, backgroundColor: "#fff" }}>
      <Container maxWidth="x1">
        <Toolbar>
          <img
            style={{ width: "180px", cursor: "pointer" }}
            src={logo}
            alt=""
            onClick={() => navigate("/")}
          />

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="medium"
              color="inherit"
              onClick={() => navigate("/yolculukYayinla")}
            >
              <FaCirclePlus style={{ color: "#EB7310", fontSize: 28 }} />
              <Button sx={{ color: "#EB7310", fontSize: 18, fontWeight: 600 }}>
                YOLCULUK YAYINLA
              </Button>
            </IconButton>
            <IconButton
              size="medium"
              color="inherit"
              onClick={() => navigate("/yolculukGörüntüle")}
            >
              <IoSearch style={{ color: "#EB7310", fontSize: 28 }} />
              <Button sx={{ color: "#EB7310", fontSize: 18, fontWeight: 600 }}>
                YOLCULUK ARA
              </Button>
            </IconButton>

            <IconButton size="medium" color="inherit" onClick={handleClick}>
              <IoPerson style={{ color: "#EB7310", fontSize: 28 }} />
              <MdKeyboardArrowDown
                style={{ cursor: "pointer", color: "#EB7310" }}
              />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={openControl}
            onClose={handleClose}
            sx={{ cursor: "pointer", width: 250 }}
          >
            {currentUser ? (
              <>
                <MenuItem sx={{ fontSize: 17 }} onClick={() => navigate("/profilAyarlari")}>
                  Profil Ayarları
                </MenuItem>
                <MenuItem sx={{ fontSize: 17 }} onClick={() => { logout(); navigate('/girisYap'); }}>
                  Çıkış Yap
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem sx={{ fontSize: 17 }} onClick={() => navigate("/uyeOl")}>
                  Üye Ol
                </MenuItem>
                <MenuItem sx={{ fontSize: 17 }} onClick={() => navigate("/girisYap")}>
                  Giriş Yap
                </MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
