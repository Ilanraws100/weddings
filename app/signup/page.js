"use client";
import TextField from "@/components/textField";
import Image from "next/image";
import Link from "next/link";
import signup from "@/actions/signup";

export default function SignUp() {
  const signUp = async (e) => {
    e.preventDefault();
    console.log("hi", e.target[0].value);
   const data = await signup({
      email: e.target.username.value,
      password: e.target.password.value,
      name: "test",
    });
    console.log(data);
  };
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
            <h3 className="font-bold text-3xl mb-5 leading-relaxed">
              SignUp to your account
            </h3>
            <form className="flex flex-col space-y-5" onSubmit={signUp}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <TextField name="username" placeholder="username" />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <TextField
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <input
                className="bg-primary text-white font-bold rounded-sm p-2"
                type="submit"
                value="Create New Account Now"
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
                Or sign-up with google
              </button>

              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
