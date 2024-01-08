"use server";
import connectDB from "@/middleware/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/user";
import { isValidEmail, isValidPhone } from "@/consts";
import { redirect } from "next/navigation";

const handler = async ({ phone, email, password }) => {
  try {
    if (
      !password ||
      password.length < 6 ||
      (!isValidEmail(email) && !isValidPhone(phone))
    ) {
      throw new Error("Please provide valid details");
    }
    let user;
    if (isValidEmail(email)) {
      user = await User.findOne({ email });
    } else if (isValidPhone(phone)) {
      user = await User.findOne({ phone });
    }
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    // return {
    //   name: user.name,
    //   email: user.email,
    //   phone: user.phone,
    // };
  } catch (error) {
    throw new Error(error.message);
  }
   return redirect("/dashboard/chooseDate");
};

export default connectDB(handler);