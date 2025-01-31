import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import navLinksData from "../../../Json/navLinks";

const Header = () => {
  const location = useLocation();
  const isActive = (route) => location.pathname === route;

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#1d1d1d" }} 
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box>
          {navLinksData.map(({ route, name }) => (
            <Button
              key={route}
              component={Link}
              to={route}
              sx={{
                mx: 1,
                color: isActive(route) ? "white" : "#919191", 
                borderBottom: isActive(route),
                transition: "color 0.3s", 
              }}
            >
              {name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
