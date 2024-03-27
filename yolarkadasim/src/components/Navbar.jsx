import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";
import { IoPerson } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import logo from "../assets/LOGO NAVBAR.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  //menünün açık veya kapalı olduğunu takip eder.
  const [anchorEl, setAnchorEl] = useState(null);

  //menünün açık olup olmadığını belirler.
  const openControl = Boolean(anchorEl);

  //menünün kapatılması için kullanılır.
  const handleClose = () => {
    setAnchorEl(null);
  };

  //kullanıcı simgesine tıklanılması için kullanılır.
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

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
            <IconButton size="medium" color="inherit">
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
            <IconButton size="medium" color="inherit">
              <MdLightMode style={{ color: "#EB7310", fontSize: 28 }} />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <MdModeNight style={{ color: "#EB7310", fontSize: 28 }} />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={openControl}
            onClose={handleClose}
            sx={{ cursor: "pointer", width: 250 }}
          >
            <MenuItem sx={{ fontSize: 17 }} onClick={() => navigate("/uyeOl")}>
              Üye Ol
            </MenuItem>
            <MenuItem
              sx={{ fontSize: 17 }}
              onClick={() => navigate("/girisYap")}
            >
              Giriş Yap
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
