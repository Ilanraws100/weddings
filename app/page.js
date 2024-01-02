import Image from "next/image";
import Header from "@/components/header";
import { Button, Stack, Typography } from "@mui/material";
import CustomButton, {
  AromaEventzButton,
  ContactAromaButton,
} from "@/components/customButton";
import {
  h2_fontSize,
  h3_fontSize,
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "@/consts";
import FooterSection from "@/components/footer";
import QueryForm from "@/components/queryForm";
export default function Home() {
  return (
    <>
      <Header />
      <main style={{ width: "100%", marginTop: "90px" }}>
        <div
          className=""
          style={{
            position: "relative",
            width: "100%",
            height: "55vw",
            display: "flex",
            color: "white",
          }}
        >
          <Image src="/decor1.jpg" alt="Mandap decoration" fill priority />
          <div className="hidden md:block p-10 bg-[rgb(0,0,0,0.2)] relative">
            <h2 className="font-bold mb-4 text-5xl leading-relaxed">
              Plan your dream Event
              <br /> That Your Heart Desires,
              <br /> with Aroma’s Events
            </h2>
            <h5 className="hidden md:block font-bold mb-4 text-xl">
              From Haldi, Sangeet to Happily Ever After. Book your <br />
              Venue That Echoes Your Marriage Story to a Love Story
            </h5>
            <CustomButton label="Know More" padding={"10px 20px"} />
          </div>
          <h3 className="absolute bottom-0 w-full text-center font-bold py-2 hidden md:block text-4xl">
            To Start, Check With Availability
          </h3>
        </div>
        <div className="p-5 md:p-10 lg:p-20 bg-primary flex flex-col md:flex-row">
          <div className="relative w-full h-dvh md:h-auto">
            <Image src="/design1.jpg" alt="Bengali wedding arrangements" fill priority />
          </div>
          <QueryForm />
        </div>
        <section>
          <Stack
            sx={{
              backgroundColor: secondaryColor,
              paddingY: 10,
              paddingX: { xs: 2, md: 10 },
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                paddingY: 2,
                fontSize: h3_fontSize,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              Why Aroma Eventz ?
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: { xs: "justify", md: "center" } }}
            >
              &quot;Choose Elegance and Sophistication with Aroma Events: The
              Perfect Venue for an Unforgettable and Majestic Marriage
              Celebration. &quot;
            </Typography>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              justifyContent={"space-between"}
              spacing={5}
              sx={{ paddingTop: { xs: 5, md: 10, lg: 20 } }}
            >
              <Stack
                spacing={5}
                alignItems={"start"}
                sx={{ textAlign: { xs: "justify", md: "left" } }}
                maxWidth={{ xs: "100%", md: "50%" }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: h3_fontSize }}>
                  Blending Tradition with Elegance Where Dreams Take Flight
                </Typography>
                <Typography variant="h5">
                  Two hearts uniting in a lifelong journey of love and
                  companionship. May your marriage be a beautiful blend of
                  laughter, support, and endless love, blossoming with each
                  passing day into a timeless tale of togetherness and joy.
                </Typography>
                <AromaEventzButton />
                <ContactAromaButton />
              </Stack>
              <Stack
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "50%" },
                  height: { xs: "96vw", md: "40vw" },
                }}
              >
                <Image src="/design2.jpg" alt="Design" fill priority />
              </Stack>
            </Stack>
          </Stack>
        </section>
        <section>
          <Stack
            spacing={5}
            paddingX={{ xs: 2, md: 5 }}
            paddingY={{ xs: 5, md: 5 }}
            alignItems={"center"}
            sx={{ backgroundColor: primaryColor, color: "white" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              Design Your Customized Packages
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: { xs: "justify", md: "center" } }}
            >
              Choose Elegance and Sophistication with Aroma Events: The Perfect
              Venue for an Unforgettable and Majestic Marriage Celebration.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              flexWrap={"wrap"}
              justifyContent={"space-around"}
              spacing={{ xs: 1, md: 5 }}
              gap={3}
              padding={{ xs: 2, md: 5 }}
            >
              {[
                "For Wedding Event",
                "For Anniversary Event",
                "For Birthday Party",
                "For Haldi Event",
                "For Reception",
                "For Engagement",
                "For Corporate Event",
                "For Poite Ceremony",
                "For Mukhe Bhat",
                "For Bou Bhat",
                "For Mehndi Function",
                "For Baby Shower",
                "For Bridal Party",
                "For Aibudhor Bhat",
                "For Housewarming",
              ].map((label) => (
                <Button
                  key={label}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: tertiaryColor,
                    borderRadius: 5,
                    padding: 1.5,
                    fontSize: 20,
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
            <AromaEventzButton
              label="Sign Up To Explore"
              backgroundColor="white"
              color="rgb(0, 0, 0, 0.66)"
            />
          </Stack>
        </section>
        <section>
          <Stack
            sx={{
              backgroundColor: secondaryColor,
              textAlign: "center",
              paddingY: { md: 5 },
              paddingX: {
                xs: 2,
                md: 5,
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                paddingY: 2,
                fontSize: h2_fontSize,
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Delicious food, the mantra of a Bengali Event!
            </Typography>
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", md: "block" }, paddingBottom: 5 }}
            >
              A Bengali event means stories of delicious food in the vessel of
              memories.
            </Typography>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              justifyContent={"space-between"}
              spacing={5}
              sx={{ paddingY: 5 }}
            >
              <Stack
                spacing={5}
                alignItems={"start"}
                sx={{ textAlign: { xs: "justify", md: "left" } }}
                maxWidth={{ xs: "100%", md: "50%" }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontSize: h3_fontSize }}
                >
                  Harmonizing Heritage with Contemporary Grace,Crafting
                  Memories.{" "}
                </Typography>
                <Typography variant="h5">
                  As you embark on this splendid journey together, may your love
                  be a beacon of warmth and joy. Wishing you a life filled with
                  shared dreams, deep understanding, and a love that grows
                  stronger and more beautiful with every passing moment.
                </Typography>
                <AromaEventzButton />
                <ContactAromaButton />
              </Stack>
              <Stack
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "50%" },
                  height: { xs: "96vw", md: "40vw" },
                }}
              >
                <Image
                  src="/food1.jpg"
                  alt="Delicious Bengali Food"
                  fill
                  priority
                />
              </Stack>
            </Stack>
          </Stack>
        </section>
        <section
          style={{ position: "relative", width: "100%", height: "66vw" }}
        >
          <Image
            src="/design3.jpg"
            alt="Beautiful Bengali Marriage"
            fill
            priority
          />
          <Stack
            alignItems={"center"}
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              paddingY: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              fontWeight={"bold"}
              sx={{ padding: 5, fontSize: h2_fontSize }}
            >
              More question about your Dream Event and its flawless
              arrangements?
            </Typography>
            <AromaEventzButton />
          </Stack>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
