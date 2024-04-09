import React, { useState } from "react";
import "../styles/SeyahatKart.css";
import avatar from "../assets/avatar.jpg";
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
import { SeyahatKartDialog } from "./SeyahatKartDialog";

export const SeyahatKart = () => {
  const [open, setOpen] = useState(null);

  const handleClickOpen = (index) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <div className="seyahat">
      <button className="open-kart" onClick={() => handleClickOpen("avatar1")}>
        <div className="kart">
          <div className="kart-icerik">
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
                <TimelineContent color="text.secondary">Tahimini 3 Saat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>Varış 13:30</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Ankara</TimelineContent>
              </TimelineItem>
            </Timeline>
            <div className="kart-icerik-avatar">
              <Avatar src={avatar} sx={{ width: 56, height: 56, marginLeft: "50px" }} />
              <p className>Resul Gencer</p>
            </div>
          </div>
          <div className="kart-ücret">
            <p>150 TL</p>
          </div>
        </div>
      </button>
      <button className="open-kart" onClick={() => handleClickOpen("avatar2")}>
        <div className="kart">
          <div className="kart-icerik">
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
                <TimelineContent color="text.secondary">Tahimini 3 Saat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>Varış 13:30</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Zonguldak</TimelineContent>
              </TimelineItem>
            </Timeline>
            <div className="kart-icerik-avatar">
              <Avatar src={avatar} sx={{ width: 56, height: 56, marginLeft: "50px" }} />
              <p className>Yusuf Gencer</p>
            </div>
          </div>
          <div className="kart-ücret">
            <p>250 TL</p>
          </div>
        </div>
      </button>
      <SeyahatKartDialog open={open} handleClose={handleClose} />
    </div>
  );
};
