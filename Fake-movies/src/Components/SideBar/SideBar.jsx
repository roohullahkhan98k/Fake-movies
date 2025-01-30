import React from "react";
import { Drawer, Box, Toolbar, Typography, Button } from "@mui/material";
import sidebarLinksData from "../../Json/sidebarLinksData";

const drawerWidth = 170;

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 1,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1d1d1d",
          color: "white",
        },
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
        <Typography variant="h6" color="white" position="absolute" top="1.6rem">
          Fake Movies
        </Typography>
        
        
        <Box sx={{ mt: 4 }}>
          {sidebarLinksData.map(({ name }) => (
            <Button
              sx={{
                mx: 1,
                color: "white", 
                fontSize: "16px", 
                textTransform: "none",
                transition: "color 0.3s", 
                "&:hover": { color: "#1976d2" }, 
                pposition: "relative",
                left: "30px",
                lineHeight: "2.5rem",
              }}
            >
              {name}
            </Button>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;
