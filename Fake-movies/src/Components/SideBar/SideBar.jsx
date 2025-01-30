import React from "react";
import { Drawer, Box, Toolbar, Typography } from "@mui/material";

const drawerWidth = 170;

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 1,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 2,
        }}
      >
        <Typography
          variant="h6"
          color="secondary"
          position="absolute"
          top="1.6rem"
        >
          Fake Movies
        </Typography>
      </Box>
    </Drawer>
  );
};

export default SideBar;
