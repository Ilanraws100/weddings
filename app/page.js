import Image from "next/image";
import Header from "@/components/header";
import CustomButton, {
  AromaEventzButton,
  ContactAromaButton,
} from "@/components/customButton";
import { events } from "@/consts";
import FooterSection from "@/components/footer";
import QueryForm from "@/components/queryForm";
import Link from "next/link";
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
          <Image
            src="/decor1.jpg"
            alt="Mandap decoration"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
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
            <CustomButton
              label="Know More"
              href="/about"
              padding={"10px 20px"}
            />
          </div>
          <h3 className="absolute bottom-0 w-full text-center font-bold py-2 hidden md:block text-4xl">
            To Start, Check With Availability
          </h3>
        </div>
        <div className="p-5 md:p-10 lg:p-20 bg-primary flex flex-col md:flex-row">
          <QueryForm />
        </div>
        <section>
          <div className="p-5 md:p-10 lg:p-20 bg-secondary space-y-10">
            <h3 className="font-bold text-3xl text-center">
              Why Aroma Eventz?
            </h3>
            <h5 className="text-lg md:text-xl text-center">
              &quot;Choose Elegance and Sophistication with Aroma Events: The
              Perfect Venue for an <br />
              Unforgettable and Majestic Marriage Celebration.&quot;
            </h5>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start md:pt-20 space-y-10  md:space-y-0">
              <div className="relative w-full h-[96vw] md:h-[40vw] md:ml-10">
                <Image
                  src="/design2.jpg"
                  alt="Wedding Rituals"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className="flex flex-col space-y-5 items-start w-full">
                <h3 className="font-bold text-4xl leading-tight">
                  Blending Tradition with Elegance Where Dreams Take Flight
                </h3>
                <h5 className="text-lg">
                  Two hearts uniting in a lifelong journey of love and
                  companionship. May your marriage be a beautiful blend of
                  laughter, support, and endless love, blossoming with each
                  passing day into a timeless tale of togetherness and joy.
                </h5>
                <AromaEventzButton />
                <ContactAromaButton />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-primary text-white p-5 md:p-10 lg:p-20 flex flex-col items-center space-y-10">
            <h3 className="font-bold text-4xl text-center">
              Design Your Customized Packages
            </h3>
            <h5 className="text-2xl text-center">
              Choose Elegance and Sophistication with Aroma Events: The Perfect
              Venue for an <br />
              Unforgettable and Majestic Marriage Celebration.
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {events.map((label) => (
                <Link key={label} href={"/login"}>
                  <button
                    key={label}
                    className="bg-tertiary font-bold px-4 py-2 rounded-full text-lg"
                    sx={{
                      fontWeight: "bold",
                      borderRadius: 5,
                      padding: 1.5,
                      fontSize: 20,
                    }}
                  >
                    {label}
                  </button>
                </Link>
              ))}
            </div>
            <AromaEventzButton
              label="Sign Up To Explore"
              style={"bg-white text-gray-800"}
            />
          </div>
        </section>
        <section>
          <div className="p-5 md:p-10 lg:p-20 bg-secondary space-y-10">
            <h2 className="font-bold text-3xl text-center pt-10">
              Delicious food, the mantra of a Bengali Event!
            </h2>
            <h5 className="text-lg md:text-xl text-center hidden md:block">
              A Bengali event means stories of delicious food in the vessel of
              memories.
            </h5>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start md:pt-20 space-y-10  md:space-y-0">
              <div className="relative w-full h-[96vw] md:h-[40vw] md:ml-10">
                <Image
                  src="/food1.jpg"
                  alt="Delicious Bengali Food"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />{" "}
              </div>
              <div className="flex flex-col space-y-5 items-start w-full">
                <h3 className="font-bold text-4xl leading-tight">
                  Harmonizing Heritage with Contemporary Grace,Crafting
                  Memories.{" "}
                </h3>
                <h5 className="text-lg">
                  As you embark on this splendid journey together, may your love
                  be a beacon of warmth and joy. Wishing you a life filled with
                  shared dreams, deep understanding, and a love that grows
                  stronger and more beautiful with every passing moment.
                </h5>
                <AromaEventzButton />
                <ContactAromaButton />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: "relative", width: "100%", height: "66vw" }}
        >
          <Image
            src="/design3.jpg"
            alt="Beautiful Bengali Marriage"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute bottom-0 w-full py-5 bg-[rgb(0,0,0,0.5)] text-white hidden md:flex-col md:flex items-center">
            <h2 className="font-bold text-5xl p-5 text-center leading-relaxed">
              More question about your Dream Event <br />
              and its flawless arrangements?
            </h2>
            <AromaEventzButton />
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
