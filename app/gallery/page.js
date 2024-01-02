import CustomButton, { AromaEventzButton } from "@/components/customButton";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
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
          <div className="p-10 bg-[rgb(0,0,0,0.2)] relative text-white justify-center items-start">
            <h2 className="font-bold mb-4 text-4xl md:text-5xl md:leading-normal">
              Gallery of Aroma Eventz: <br /> Capturing Moments,
              <br /> Creating Memories
            </h2>
            <CustomButton label="Know More" padding={"10px 20px"} />
          </div>
        </div>
        <div className="flex flex-col items-center bg-secondary p-10">
          <h2 className="font-bold mb-4 text-4xl">
            Best Moments of Weddings, Through Our Lens
          </h2>
          <AromaEventzButton label="Sign  Up  Free Today" />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
