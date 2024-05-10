import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Typography
        fontSize={{ xs: "20px" }}
        color={"red"}
        bgcolor={"yellow"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // marginTop={"100px"}
        mt={5}
        p={3}
      >
        Hello World!
      </Typography>
    </Box>
  );
};

export default page;
