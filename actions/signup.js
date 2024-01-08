"use server";
import connectDB from "@/middleware/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/user";
import { isValidEmail, isValidPhone } from "@/consts";

const handler = async ({ name, phone, email, password }) => {
  try {
    if (
      !name ||
      !password ||
      password.length < 6 ||
      name.length < 3 ||
      !isValidEmail(email) ||
      !isValidPhone(phone)
    ) {
      throw new Error("Please provide valid details");
    }
    var userExists = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if(userExists?.phone==phone) {
      throw new Error(`User with phone number: ${phone} already exists`);
    }
    if(userExists?.email==email) {
      throw new Error(`User with email: ${email} already exists`);
    }
    var passwordhash = await bcrypt.hash(password, 10);
    var usercreated = await User.create({
      name,
      email,
      phone,
      password: passwordhash,
    });
    return {
      name: usercreated.name,
      email: usercreated.email,
      phone: usercreated.phone,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default connectDB(handler);