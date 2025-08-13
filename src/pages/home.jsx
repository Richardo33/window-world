import React from "react";
import Sidebar from "../component/Sidebar";
import logo from "../assets/Icon.png";
import profilePic from "../assets/Vector1.png";
import { useMediaQuery, useTheme, Typography } from "@mui/material";
import CardBook from "../component/CardBook";
import ListBook from "../component/ListBook";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        logoSrc={logo}
        profileSrc={profilePic}
        onProfileClick={() => console.log("Profile clicked")}
        onMyListClick={() => console.log("My List clicked")}
        onLogoutClick={() => console.log("Logout clicked")}
      />
      <div
        style={{
          flex: 1,
          padding: 20,
          marginLeft: isMobile ? 80 : 240,
          marginTop: isMobile ? 64 : 0,
        }}
      >
        <CardBook />
        <ListBook />
      </div>
    </div>
  );
}
