import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Footer = ({
  logo,
  address,
  phone1,
  phone2,
  mail,
  socialMedia,
  copyright,
  links,
}) => {
  useEffect(() => {
    console.log(socialMedia);
  }, [socialMedia]);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ "& img": { marginBottom: "1rem" } }}
            >
              <img src={logo} alt="logo" width="70%" />
              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                {address}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="body1">{phone1}</Typography>
                <HorizontalRuleIcon sx={{ transform: "rotate(90deg)" }} />
                <Typography variant="body1">{phone2}</Typography>
              </Box>

              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                {mail}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Important Links
              </Typography>
              <List>
                {links?.map((item, index) => (
                  <ListItemButton
                    key={index}
                    component="a"
                    href={`${item.link}`}
                    dense={true}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930362.092619181!2d53.87788131249998!3d24.373408099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e47fb280f01a1%3A0x2ef6250379469584!2sAAT%20Transport%20%26%20Limousine%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1697274990669!5m2!1sen!2sae"
            width="100%"
            height="75%"
            frameBorder={0}
            allowfullscreen=""
            loading="lazy"
            style={{ padding: "3rem 0" }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "1rem 0" }} />
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {socialMedia?.map((item, index) => (
              <IconButton color="primary" size="large" key={index}>
                {item.icon}
              </IconButton>
            ))}
          </Box>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            &copy; {copyright}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
