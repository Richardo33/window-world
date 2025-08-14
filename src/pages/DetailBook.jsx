import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Favorite, MenuBook } from "@mui/icons-material";
import { dummyBooks } from "../component/dummy/dummyBooks";
import Sidebar from "../component/Sidebar"; 
import logo from "../assets/IconItalic.png";
import profilePic from "../assets/Vector1.png";
import Swal from "sweetalert2";



function DetailBook() {
  const { id } = useParams();
  const theme = useTheme();
  const book = dummyBooks.find((b) => b.id === parseInt(id)) || dummyBooks[0];

  const handleAddMyList = (book) => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];

    if (!storedList.find((b) => b.id === book.id)) {
      storedList.push(book);
      localStorage.setItem("myList", JSON.stringify(storedList));

      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${book.title} has been added to My List`,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Already Added",
        text: `${book.title} is already in My List`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

      const storedUser = JSON.parse(localStorage.getItem("user"));
      const userProfilePic = storedUser?.profileImage || profilePic;

  return (
    <Box sx={{ display: "flex" }}>
      {/* ✅ Sidebar */}
      <Sidebar
        logoSrc={logo}
        profileSrc={userProfilePic}
        onProfileClick={() => console.log("Profile clicked")}
        onMyListClick={() => console.log("My List clicked")}
        onLogoutClick={() => console.log("Logout clicked")}
      />

      {/* ✅ Konten detail di kanan */}
      <Box sx={{ flex: 1, ml: "240px", padding: 4, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            marginTop: 5,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRadius: 3,
            boxShadow: 3,
            gap: 3,
            maxWidth: 1100,
            width: "100%",
            "&:hover": { boxShadow: 6, transform: "scale(1.01)" },
          }}
        >
          <CardMedia
            component="img"
            image={book.cover}
            alt={book.title}
            sx={{
              width: { xs: "100%", md: 350 },
              height: { xs: 400, md: "auto" },
              borderRadius: 2,
              objectFit: "cover",
              transition: "transform 0.3s ease",
              // "&:hover": { transform: "scale(1.05)" },
            }}
          />

          <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
              {book.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              {book.author}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 3 }}>
              {[
                { label: "Publisher", value: book.publisher },
                { label: "Publication Date", value: book.publicationDate },
                { label: "Pages", value: book.pages },
                { label: "ISBN", value: book.isbn, isRed: true },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "150px auto",
                    alignItems: "center",
                  }}
                >
                  <Box>{item.label}</Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    :{" "}
                    <span
                      style={{
                        marginLeft: 8,
                        color: item.isRed ? theme.palette.error.main : "inherit",
                      }}
                    >
                      {item.value}
                    </span>
                  </Box>
                </Box>
              ))}
            </Box>

            <Typography
              sx={{
                fontSize: 15,
                lineHeight: 1.6,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                textAlign: "justify",
                flexGrow: 1,
              }}
            >
              {book.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Favorite />}
                fullWidth
                onClick={() =>  handleAddMyList(book)}
              >
                Add My List
              </Button>

              <Button
                variant="contained"
                color="primary"
                startIcon={<MenuBook />}
                fullWidth
                onClick={() => {
                  if (book.readUrl) {
                    window.open(book.readUrl, "_blank");
                  } else {
                    alert("Link baca belum tersedia");
                  }
                }}
              >
                Read Book
              </Button>

            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default DetailBook;