import Image from "next/image";
import Header from "@/components/header";
import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CustomDatePicker from "@/components/datePicker";
import FooterSection from "@/components/footer";
export default function Home() {
  return (
    <>
      <Header />
      <main style={{ width: "100%", marginTop: "90px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "55vw",
            display: "flex",
            color: "white",
          }}
        >
          <Image src="/decor1.jpg" alt="Mandap decoration" fill priority />
          <Stack
            sx={{
              backgroundColor:'rgb(0,0,0,0.2)',
              position: "relative",
              justifyContent: "center",
              alignItems: "start",
              paddingLeft: 10,
              paddingTop:10,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Typography
              sx={{ fontSize: h2_fontSize }}
              gutterBottom
              fontWeight={"bold"}
            >
              Plan your dream Event
              <br /> That Your Heart Desires,
              <br /> with Aroma’s Events
            </Typography>
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", md: "block" } }}
              gutterBottom
              fontWeight={"bold"}
            >
              From Haldi,Sangeet to Happily Ever After. Book your <br />
              Venue That Echoes Your Marriage Story to a Love Story
            </Typography>
            <CustomButton label="Know More" padding={"10px 20px"} />
          </Stack>
          <Typography
            sx={{
              position: "absolute",
              fontSize:h3_fontSize,
              bottom: 0,
              width: "100%",
              alignSelf: "center",
              textAlign: "center",
              fontWeight: "bold",
              paddingY: 2,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            To Start, Check With Availability
          </Typography>
        </div>
        <Stack
          sx={{
            backgroundColor: primaryColor,
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Stack
            sx={{
              display: { xs: "none", md: "block" },
              width: { xs: "100%", md: "50%" },
              height: { xs: "96vw", md: "70vw" },
              position: "relative",
            }}
          >
            <Image
              src="/design1.jpg"
              alt="Design"
              // width={600}
              // height={650}
              fill
              priority
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              backgroundColor: "white",
              flexGrow: 1,
              padding: 2,
              borderRadius: 2,
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Lily Script One, cursive",
              }}
            >
              Aroma Eventz
            </Typography>
            <Typography variant="h5">Let us plan your dream event</Typography>
            <TextField label="Event Type" select>
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Birthday">Birthday</MenuItem>
              <MenuItem value="Reception">Reception</MenuItem>
            </TextField>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                How many guests are you planning for?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {["0-20", "20-50", "50-100", "100-200", "200-500", "500+"].map(
                  (label) => (
                    <FormControlLabel
                      key={label}
                      value={label}
                      control={<Radio />}
                      label={label}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Budget Per Person
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {["100-500", "500-1000", "1000-2000", "2000-5000", "5000+"].map(
                  (label) => (
                    <FormControlLabel
                      key={label}
                      value={label}
                      control={<Radio />}
                      label={label}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
            <CustomDatePicker />
            <TextField label="Name" />
            <TextField label="Phone No." />
            <CustomButton label="Submit" />
          </Stack>
        </Stack>
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
