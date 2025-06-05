import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();

  // If no Clerk user is logged in, return null
  if (!user) {
    return null;
  }

  // Check if user already exists in your database
  const existingUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If user exists, return the existing user
  if (existingUser) {
    return existingUser;
  }

  // Otherwise, create a new user in the database
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0]?.emailAddress || "",
    },
  });

  return newUser;
};
