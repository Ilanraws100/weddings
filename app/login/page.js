'use client'
import TextField from "@/components/textField";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email, password);
  }
  return (
    <>
      <header>
        <h1 className="text-3xl font-lily mx-10 my-5">Aroma Eventz</h1>
      </header>
      <main className="px-10">
        <section className="flex flex-col md:flex-row items-center justify-around">
          <div className="relative w-full max-w-md max-h-[28rem] h-[100vw] md:h-[50vw]">
            <Image
              src="/login.jpg"
              alt="login"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="flex flex-col w-full md:mx-10 max-w-md py-5">
            <h4>Welcome to Aroma Eventz</h4>
            <h3 className="font-bold text-3xl mb-5 leading-relaxed">Login to your account</h3>
            <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
             <TextField type="email" name="email" label="Email" placeholder="email" />
             <TextField type="password" name="password" label="Password" placeholder="password" />
              <input
                className="bg-primary text-white font-bold rounded-sm p-2"
                type="submit"
                value="Login Now"
              />
              <button
                className="bg-[#2D3748] text-white font-bold rounded-sm p-2  flex items-center justify-center"
                type="submit"
              >
                <Image
                  src="/google.svg"
                  alt="google"
                  width={15}
                  height={15}
                  className="mr-2"
                />
                Or sign-in with google
              </button>

              <p>
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-primary font-bold">
                  Join Free Today
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
