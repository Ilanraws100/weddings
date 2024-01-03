import {
  AromaEventzButton,
  ContactAromaButton,
} from "@/components/customButton";
import FooterSection from "@/components/footer";
import GoogleMap from "@/components/googleMap";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative w-full h-[57vw]">
          <Image src="/contact1.jpg" alt="decor" fill priority/>
        </section>
        <section className="w-full text-center text-white bg-[#A70D00] p-2">
          <h3 className="font-bold text-3xl">Contact Us</h3>
        </section>
        <section>
          <div className="p-5 md:p-10 lg:p-20 bg-secondary space-y-10">
            <h2 className="font-bold text-3xl text-center pt-5">
              We&apos;d Love to Hear from You!{" "}
            </h2>
            <h5 className="text-lg md:text-xl text-center">
              Whether you have a question about our services, need assistance
              with a booking, <br />
              or you&apos;re in town and want to check out the office,
              we&apos;re here to help!
            </h5>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start md:pt-20 space-y-10  md:space-y-0">
                <GoogleMap />
              <div className="flex flex-col space-y-5 items-start w-full text-xl">
                <h3 className="font-bold text-4xl leading-tight">
                  Get in Touch with us by just sending a WhatsApp Message
                </h3>
                <Link href="https://maps.app.goo.gl/Pc4dwXkcXVMBEtNJ9">
                  <b>Office Location</b>
                  <p> 12, Laxmi Narayan Motilal Road, Kolkata - 700 061</p>
                  <p>Monday - Sunday: 9:00 AM - 8:00 PM </p>
                </Link>
                <Link href="https://wa.me/+918013572929">
                  <p>
                    {" "}
                    <b>Mobile:</b> (+91) 8013572929/9231684345
                  </p>{" "}
                </Link>
                <Link href="mailto:aromafestivehall1@gmail.com">
                  <p>
                    <b>E-Mail: </b>
                    aromafestivehall1@gmail.com
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: "relative", width: "100%", height: "66vw" }}
        >
          <Image
            src="/contact2.jpg"
            alt="Beautiful Bengali Marriage"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute bottom-0 w-full py-5 bg-[rgb(0,0,0,0.5)] text-white hidden md:flex-col md:flex items-center">
            <h2 className="font-bold text-5xl p-5 leading-relaxed text-center">
              More question or Suggestions
              <br /> Please WhatsApp Us
              <br />{" "}
              <Link href="https://wa.me/918013572929">+91 8013572929</Link>
            </h2>
            <AromaEventzButton label="Sign Up To Explore" />
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
