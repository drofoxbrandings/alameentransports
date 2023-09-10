import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contract, expand } from "../../features/Slices/CardSlice";

const TitleCard = ({ image, altTxt, title, cardId }) => {
  const dispatch = useDispatch();
  const _rsIsExpanded = useSelector(
    (state) => state.cards[`card${cardId}isExpand`]
  );
  return (
    <Card sx={{ margin: ".5rem 0" }}>
      <Grid
        container
        // spacing={2}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        onMouseEnter={() => dispatch(expand(`card${cardId}isExpand`))}
        onMouseLeave={() => dispatch(contract(`card${cardId}isExpand`))}
      >
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={image}
            alt={altTxt}
            sx={{
              padding: ".5rem",
              borderRadius: "1rem",
              transform: _rsIsExpanded ? "scale(1.2)" : "scale(1)",
              transition: ".25s ease",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography
            variant="button"
            sx={{ textTransform: "uppercase", fontWeight: "700" }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TitleCard;
