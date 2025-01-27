import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "primary.main",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography color="black" variant="body2">
        © 2025 Fake Movies | All Rights Reserved
      </Typography>
      <Typography color = "black" variant="body2">Privacy Policy | Terms of Service</Typography>
    </Box>
  );
};

export default Footer;
