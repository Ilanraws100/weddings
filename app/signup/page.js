"use client";
import TextField from "@/components/textField";
import Image from "next/image";
import Link from "next/link";
import signup from "@/actions/signup";
import { isValidEmail, isValidPhone } from "@/consts";

export default function SignUp() {
  const signUp = async (e) => {
    try {
      e.preventDefault();
      const {
        firstName,
        lastName,
        whatsappNo,
        email,
        password,
        confirmPassword,
        acceptTnC,
      } = e.target;
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
      }
      if (password.value.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }
      if (firstName.value.length + lastName.value.length < 3) {
        alert("Username must be at least 3 characters");
        return;
      }
      if (isValidEmail(email.value) === false) {
        alert("Invalid Email");
        return;
      }
      if (isValidPhone(whatsappNo.value) === false) {
        alert("Invalid Phone");
        return;
      }
      if (acceptTnC.checked === false) {
        alert(
          "Please accept our Terms and Conditions and Privacy Policy to proceed"
        );
        return;
      }
      const data = await signup({
        name: firstName.value + " " + lastName.value,
        phone: whatsappNo.value,
        email: email.value,
        password: password.value,
      });
      console.log(data);
      alert("Sign Up Successful");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <main className="">
      <section className="flex flex-col md:flex-row items-stretch justify-around">
        <div className="bg-gradient-to-br from-blue-500 to-red-500 md:h-auto w-full hidden md:flex md:flex-col items-center justify-around p-5">
          <h5 className="text-white font-bold text-xl mb-4">
            Your Dream Event, Just a Click Away,
            <br /> Plan for a Perfect Celebration!
          </h5>
          <div className="relative w-full max-w-md max-h-[28rem] h-[100vw] md:h-[50vw] rounded-md">
            <Image
              src="/signup.jpg"
              alt="login"
              fill
              priority
              className="rounded-3xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>{" "}
        </div>
        <div className="flex flex-col w-full md:mx-10 p-10">
          <h1 className="text-3xl font-lily text-primary mb-4">Aroma Eventz</h1>
          <h3 className="font-bold text-2xl mb-1 leading-relaxed">
            Create account
          </h3>{" "}
          <h4 className="text-sm mb-4">
            For Event Planning, Catering or Wedding.
          </h4>
          <form className="flex flex-col space-y-5" onSubmit={signUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField
                name="firstName"
                label="First Name"
                placeholder="First Name"
              />
              <TextField
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
              />
              <TextField name="email" label="Email" placeholder="Email" />     
                <TextField
                  name="whatsappNo"
                  label="Whatsapp No"
                  type="number"
                  placeholder="Whatsapp No"
                >
                  {" "}
                </TextField>
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="password"
              />
              <TextField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="password"
              />
            </div>
            <label className="inline-flex items-start">
              <input
                type="checkbox"
                name="acceptTnC"
                className="form-checkbox text-indigo-600 mt-1"
              />
              <span className="ml-2">
                I agree to all the{" "}
                <Link className="text-primary" href="/t&c">
                  Terms
                </Link>{" "}
                and{" "}
                <Link className="text-primary" href="/t&c">
                  Privacy policy
                </Link>
              </span>
            </label>

            <input
              className="bg-primary text-white font-bold rounded-sm p-2 hover:cursor-pointer hover:bg-tertiary"
              type="submit"
              value="Create New Account Now"
            />
            {/* <button className="bg-[#2D3748] text-white font-bold rounded-sm p-2  flex items-center justify-center">
              <Image
                src="/google.svg"
                alt="google"
                width={15}
                height={15}
                className="mr-2"
              />
              Or sign-up with google
            </button> */}
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
  );
}
