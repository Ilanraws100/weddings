"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { primaryColor } from "@/consts";
import { Button } from "@mui/material";
import CustomButton from "./customButton";

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
}

export default function Header(props) {
  return (
    <header>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: primaryColor,
            color: "white",
            py: 1.5,
          }}
        >
          <Toolbar>
            <Typography
              variant="h3"
              sx={{ fontFamily: "Lily Script One, cursive",flexGrow: 1 }}
            >
              Aroma Eventz
            </Typography>
            <CustomButton  label="Sign Up"/>
            <Button sx={{ color: "white", marginLeft: "auto" }}>Sign In</Button>{" "}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </header>
  );
}


