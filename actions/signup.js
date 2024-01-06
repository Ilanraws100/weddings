"use server";
import connectDB from "@/middleware/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/user";

const handler = async ({ name, email, password }) => {
  if (name && email && password) {
    try {
      var passwordhash = await bcrypt.hash(password, 10);
      var user = new User({
        name,
        email,
        password: passwordhash,
      });
      var usercreated = await user.save();
      return {
        name: usercreated.name,
        email: usercreated.email,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  } else {
    return { error: "data_incomplete" };
  }
};

export default connectDB(handler);
