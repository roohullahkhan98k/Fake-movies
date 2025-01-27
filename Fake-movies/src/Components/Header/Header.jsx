import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { SideBar } from "../SideBar";
import navLinksData from "../../Json/navLinks";



const Header = () => {
  const location = useLocation();
  const isActive = (route) => location.pathname === route;

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
              {navLinksData.map(({ route, name }) => (
                <Button
                  key={route}
                  component={Link}
                  to={route}
                  color="inherit"
                  sx={{
                    mx: 1,
                    borderBottom: isActive(route) ? "2px solid white" : "none",
                  }}
                >
                  {name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
