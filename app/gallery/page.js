import CustomButton, { AromaEventzButton } from "@/components/customButton";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import { h2_fontSize, h3_fontSize, secondaryColor } from "@/consts";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <div
          className="flex flex-col"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {" "}
          <Image src="/decor2.jpg" alt="Design" fill priority />
          <div
            style={{
              backgroundColor: "rgb(0,0,0,0.2)",
              color: "white",
              position: "relative",
              justifyContent: "center",
              alignItems: "start",
              padding: { xs: 2, md: 10 },
            }}
          >
            <Typography
              sx={{ fontSize: h2_fontSize }}
              gutterBottom
              fontWeight={"bold"}
            >
              Gallery of Aroma Eventz: <br /> Capturing Moments,
              <br /> Creating Memories
            </Typography>
            <CustomButton label="Know More" padding={"10px 20px"} />
          </div>
        </div>
        <div className="flex flex-col items-center bg-secondary p-10">
          <Typography
            gutterBottom
            sx={{ fontSize: h3_fontSize, fontWeight: "bold" }}
          >
            Best Moments of Weddings, Through Our Lens{" "}
          </Typography>
          <AromaEventzButton label="Sign  Up  Free Today" />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
