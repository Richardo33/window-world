import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "./dummy/dummyBooks";

export default function ListBook() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} mt={2} padding={2}>
      {dummyBooks.map((book) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          key={book.id}
          sx={{ display: "flex", justifyContent: "center",}}
        >
          <Card
            onClick={() => navigate(`/detail/${book.id}`)}
            sx={{
              width: 180,
              height: 250,
              borderRadius: 2,
              boxShadow: 3,
              marginRight: 1,
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
              sx={{
                height: 180,
                width: "100%",
                objectFit: "cover",
              }}
            />

            <CardContent
              sx={{
                flex: 1,
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  fontSize: 14,
                  lineHeight: 1.3,
                }}
              >
                {book.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: 12,
                }}
              >
                {book.author}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
