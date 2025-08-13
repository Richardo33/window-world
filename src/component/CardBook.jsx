import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import NewBook from "../assets/dumImages/bumi.jpeg";

function CardBook() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row-reverse",
        maxWidth: 1300,
        height: 300,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "#ffd5db",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? 2 : 3,
        marginTop: 5,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.01)", // sedikit membesar
          boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Right side image */}
      <CardMedia
        component="img"
        image={NewBook}
        alt="Book Cover"
        sx={{
          width: isMobile ? "100%" : 220,
          height: isMobile ? 180 : "100%",
          borderRadius: 2,
          boxShadow: 2,
          objectFit: "cover",
          marginLeft: isMobile ? 0 : 2,
          alignSelf: "center",
          cursor: "pointer", // hanya gambar yang bisa di-klik
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)", // zoom in sedikit
          },
        }}
      />

      {/* Left side text */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: isMobile ? 0 : 4,
        }}
      >
        <Box
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? 22 : 36,
            lineHeight: 1.2,
            color: "#2c3e50",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          Discover thousands of captivating books and read them for free, anytime, anywhere.  
          Start your reading adventure today!
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardBook;
