import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar"; 
import logo from "../assets/Icon.png";
import profilePic from "../assets/Vector1.png";

function MyList() {
  const [myList, setMyList] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Ambil data dari localStorage saat pertama kali load
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(storedList);
  }, []);

  // Hapus buku dari my list
  const handleRemove = (id) => {
    const updatedList = myList.filter((book) => book.id !== id);
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userProfilePic = storedUser?.profileImage || profilePic;

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar kiri */}
      <Sidebar
        logoSrc={logo}
        profileSrc={userProfilePic}
        onProfileClick={() => console.log("Profile clicked")}
        onMyListClick={() => navigate("/my-list")}
        onLogoutClick={() => console.log("Logout clicked")}
      />

      {/* Konten kanan */}
      <div
        style={{
          flex: 1,
          padding: 20,
          marginLeft: isMobile ? 80 : 240,
          marginTop: isMobile ? 64 : 0,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          My List
        </Typography>

        {myList.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            Your list is empty. Add some books from the detail page.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {myList.map((book) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={book.id}>
                <Card
                  sx={{
                    height: "100%",
                    width: 180,
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={book.cover}
                    alt={book.title}
                    sx={{ height: 180, objectFit: "cover" }}
                    onClick={() => navigate(`/detail/${book.id}`)}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold" noWrap>
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {book.author}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{
                      m: 1,
                      borderColor: 'red',
                      color: 'red',
                      '&:hover': {
                        backgroundColor: 'red',
                        color: 'white',
                        borderColor: 'red',
                      },
                    }}
                    onClick={() => handleRemove(book.id)}
                  >
                    Remove
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}


export default MyList;