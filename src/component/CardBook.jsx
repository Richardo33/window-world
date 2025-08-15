import React from "react";
import "../pages/style/cardBook.css"
import {
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import gambar
import NewBook from "../assets/dumImages/bumi.jpeg";
import AnotherBook from "../assets/dumImages/bulan.jpeg";
import ThirdBook from "../assets/dumImages/bintang.jpg";

// CardBook menerima props
function CardBook({ image, text }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row-reverse",
        width: "100%",
        maxWidth: 1200,
        height: 300,
        minHeight: 300,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "#ffd5db",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? 2 : 3,
        marginTop: 5,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Gambar */}
      <CardMedia
        component="img"
        image={image}
        alt="Book Cover"
        sx={{
          width: isMobile ? "100%" : 220,
          height: isMobile ? 180 : "100%",
          borderRadius: 2,
          boxShadow: 2,
          objectFit: "cover",
          marginLeft: isMobile ? 0 : 2,
          alignSelf: "center",
          cursor: "pointer",
          flexShrink: 0,
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      {/* Teks */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 0,
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
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical"

          }}
        >
          {text}
        </Box>
      </CardContent>
    </Card>
  );
}

// Swiper
export default function CardBookCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      style={{ paddingBottom: "40px", maxWidth: 1200, width:"100%" ,overflow: "hidden"}}
    >
      {[{
        image: NewBook,
        text: "Love reading? Dive into thousands of books — no cost, just stories!"
      },{
        image: AnotherBook,
        text: "Something new is coming… stay tuned for our latest book releases!"
      },{
        image: ThirdBook,
        text: "Dive into the enchanting world of Tere Liye once again — a brand new story is on the horizon!"
      }].map((item, idx) => (
      <SwiperSlide key={idx} style={{ display: "flex", justifyContent: "center" }}>
        <CardBook image={item.image} text={item.text} />
      </SwiperSlide>
      ))}
    </Swiper>
  );
}


