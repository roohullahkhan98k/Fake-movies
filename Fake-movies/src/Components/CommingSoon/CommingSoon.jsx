import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import CenteredContainer from "../Layout/CenteredContainer/CenteredContainer";

const ComingSoon = () => {
  return (
    <CenteredContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: "center", marginTop: "35vh" }}>
          <Typography variant="h3" color="primary">
            Coming Soon!
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mt: 2, color: "white" }}
          >
            We're working on this page. Stay tuned!
          </Typography>
        </Box>
      </motion.div>
    </CenteredContainer>
  );
};

export default ComingSoon;
