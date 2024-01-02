import CustomButton from "@/components/customButton";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-primary text-white">
      <h4 className="font-bold p-10 text-center mb-4 text-2xl">
        Subscribe to Our Newsletter & Updates!
      </h4>
      <div className="px-10 flex flex-col md:flex-row justify-center items-stretch space-y-5 md:space-x-5 md:space-y-0">
        <input
          type="text"
          placeholder="example@gmail.com"
          className="bg-white w-auto md:w-96 h-auto text-sm p-2 text-black rounded-sm"
          aria-label="Enter your email here"
        />
        <CustomButton label="Subscribe" />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center md:items-end justify-between p-10 space-y-5">
        <div className="flex space-x-5 flex-wrap justify-center">
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
              className="p-2 mx-3"
              style={{ textDecoration: "none" }}
            >
              <button
                key={item.label}
                className="text-white block mx-auto text-center no-underline"
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex space-x-5">
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
          </div>
          <p>©Copyright 2024 | Aroma’s Eventz </p>
        </div>
      </div>
    </footer>
  );
}
