import FooterSection from "@/components/footer";
import Header from "@/components/header";
import { h2_fontSize } from "@/consts";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main style={{ width: "100%", marginTop: "90px" }}>
        <h1 className="underline">Terms and Conditions</h1>
        <div>
          <h1> hi {h2_fontSize.lg}</h1>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
