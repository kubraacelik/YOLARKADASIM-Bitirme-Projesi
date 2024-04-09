import React from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogContentText, Divider } from "@mui/material";
import "../styles/SeyahatKartDialog.css";
import avatar from "../assets/avatar.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmokeFreeOutlinedIcon from "@mui/icons-material/SmokeFreeOutlined";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Avatar from "@mui/material/Avatar";

export const SeyahatKartDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "40px",
            maxWidth: "800px",
          },
        }}
        open={open === "avatar1"}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText>
            <div className="dialog">
              <div className="dialog-icerik">
                <Timeline sx={{ width: "340px", marginTop: "20px" }}>
                  <TimelineItem>
                    <TimelineOppositeContent>Kalkış 09:30</TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Zonguldak</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent color="text.secondary">
                      Tahimini 3 Saat
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>Varış 13:30</TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Ankara</TimelineContent>
                  </TimelineItem>
                </Timeline>

                <p className="dialog-icerik-ücret"> Tek Kişilik Toplam Ücret 150 TL</p>
              </div>
              <div className="dialog-kullanici">
                <div className="dialog-avatar">
                  <p>Resul Gencer</p>
                  <Avatar
                    src={avatar}
                    sx={{ width: 70, height: 70, margin: "0px 0px 0px 15px" }}
                  />
                </div>

                <Link to="/mesaj">
                  <div className="dialog-mesaj">
                    <EmailOutlinedIcon />
                    <p>Resul Gencer Adlı Kullanıcaya Ulaş</p>
                  </div>
                </Link>
              </div>
            </div>
            <Divider sx={{ borderBottomWidth: "2px" }} />
            <div className="dialog-özellikler">
              <div className="özellikler-sigara">
                <SmokeFreeOutlinedIcon />
                <p>Sigara İçilmez</p>
              </div>
              <div className="özellikler-kisi-sayısı">
                <PeopleIcon />
                <p>Arka Koltukta En Fazla 2 Kişi</p>
              </div>
              <div className="özellikler-araba">
                <DirectionsCarIcon />
                <p>HYUNDAI TUCSON</p>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "40px",
            maxWidth: "800px",
          },
        }}
        open={open === "avatar2"}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText>
            <div className="dialog">
              <div className="dialog-icerik">
                <Timeline sx={{ width: "340px", marginTop: "20px" }}>
                  <TimelineItem>
                    <TimelineOppositeContent>Kalkış 09:30</TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Ankara</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent color="text.secondary">
                      Tahimini 3 Saat
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>Varış 13:30</TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Zonguldak</TimelineContent>
                  </TimelineItem>
                </Timeline>

                <p className="dialog-icerik-ücret"> Tek Kişilik Toplam Ücret 250 TL</p>
              </div>
              <div className="dialog-kullanici">
                <div className="dialog-avatar">
                  <p>Yusuf Gencer</p>
                  <Avatar
                    src={avatar}
                    sx={{ width: 70, height: 70, margin: "0px 0px 0px 15px" }}
                  />
                </div>

                <Link to="/mesaj">
                  <div className="dialog-mesaj">
                    <EmailOutlinedIcon />
                    <p> Yusuf Gencer Adlı Kullanıcaya Ulaş</p>
                  </div>
                </Link>
              </div>
            </div>
            <Divider sx={{ borderBottomWidth: "2px" }} />
            <div className="dialog-özellikler">
              <div className="özellikler-sigara">
                <SmokeFreeOutlinedIcon />
                <p>Sigara İçilmez</p>
              </div>
              <div className="özellikler-kisi-sayısı">
                <PeopleIcon />
                <p>Arka Koltukta En Fazla 2 Kişi</p>
              </div>
              <div className="özellikler-araba">
                <DirectionsCarIcon />
                <p>HYUNDAI TUCSON</p>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
