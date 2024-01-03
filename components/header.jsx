"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { primaryColor } from "@/consts";
import { Button } from "@mui/material";
import CustomButton from "./customButton";
import Link from "next/link";

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
            width: "100%",
          }}
        >
          <Toolbar>
            <Link href="/" style={{ flexGrow: 1, textDecoration: "none" }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Lily Script One, cursive",
                  flexGrow: 1,
                  color: "white",
                }}
              >
                Aroma Eventz
              </Typography>
            </Link>
            <CustomButton
              label="Sign Up"
              display={"hidden md:block"}
            />
            <Button
              sx={{
                color: "white",
                marginLeft: "auto",
                display: { xs: "none", md: "block" },
              }}
            >
              Sign In
            </Button>{" "}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </header>
  );
}
