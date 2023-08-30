import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: "#f7f7f7",
      padding: "1rem",
      mt:2,
      borderRadius:"10px"
    }}>
      <Container maxWidth="100%" >
        <Typography variant="body1" align="center">
          Made with ❤️️ © <a href="https://github.com/vasujhawar2001/yt-clone">Vasu Jhawar</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;