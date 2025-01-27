import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft:15,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" color="primary">
          Coming Soon!
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          We're working on this page. Stay tuned!
        </Typography>
      </motion.div>
    </Box>
  );
};

export default ComingSoon;
