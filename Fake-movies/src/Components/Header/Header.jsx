import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { SideBar } from "../SideBar";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Button
                component={Link}
                to="/"
                color="inherit"
                sx={{
                  mx: 1,
                  borderBottom: isActive("/") ? "2px solid white" : "none",
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                sx={{
                  mx: 1,
                  borderBottom: isActive("/about") ? "2px solid white" : "none",
                }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/services"
                color="inherit"
                sx={{
                  mx: 1,
                  borderBottom: isActive("/services")
                    ? "2px solid white"
                    : "none",
                }}
              >
                Services
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                sx={{
                  mx: 1,
                  borderBottom: isActive("/contact")
                    ? "2px solid white"
                    : "none",
                }}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
