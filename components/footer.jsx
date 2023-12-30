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
        gutterBottom
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
        direction={{ xs: "column", md: "row" }}
        width={"100%"}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "stretch" }}
        spacing={{ xs: 2, md: 5}}
      >
        <TextField
          label="Enter your email here"
          placeholder="example@gmail.com"
          size="small"
          sx={{ backgroundColor: "white", width: { xs: "300px", md: "450px" } }}
        />
        <CustomButton label="Subscribe" width={{ xs: "300px", md: "150px" }} />
      </Stack>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={{ xs: "center", md: "end" }}
        justifyContent={"space-between"}
        spacing={5}
        padding={5}
      >
        <Stack alignItems={{ xs: "center", md: "start" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100090292629394&mibextid=ZbWKwL"
              }
            >
              <IconButton aria-label="facebook" size="large">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link
              href={
                "https://www.instagram.com/aroma_caterer_and_decorators/?igsh=ZHY0ZjZlMDZtenA%3D"
              }
            >
              <IconButton aria-label="instagram" size="large">
                <InstagramIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <Link href={"https://wa.me/+918013572929"}>
              <IconButton aria-label="whatsapp" size="large">
                <WhatsAppIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </Stack>
          <Typography>©Copyright 2024 | Aroma’s Eventz </Typography>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          spacing={2}
        >
          {[
            { label: "About", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "T&C", path: "/t&c" },
            { label: "FAQs", path: "/faq" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              href={item.path}
              key={item.label}
              style={{ textDecoration: "none" }}
            >
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
