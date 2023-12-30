import { Button, Stack, TextField, Typography } from "@mui/material";
import CustomButton from "@/components/customButton";
import { primaryColor } from "@/consts";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer style={{ backgroundColor: primaryColor, color: "white" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          paddingY: 2,
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        Subscribe to Our Newsletter & Updates!
      </Typography>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"center"}
        spacing={5}
      >
        <TextField
          label="Enter your email here"
          placeholder="example@gmail.com"
          sx={{ backgroundColor: "white", width: "400px" }}
        />
        <CustomButton label="Subscribe" />
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"end"}
        justifyContent={"space-between"}
        spacing={5}
        padding={5}
      >
        <Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="delete" size="large">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <WhatsAppIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          <Typography>©Copyright 2024 | Aroma’s Eventz </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          {[
            { label: "About", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "T&C", path: "/t&c" },
            { label: "FAQs", path: "/faq" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Link href={item.path} key={item.label}>
              <Button
                key={item.label}
                variant="text"
                sx={{
                  textAlign: "center",
                  color: "white",
                  display: "block",
                  margin: "auto",
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>
      </Stack>
    </footer>
  );
}
