import jwt from "jsonwebtoken";

export const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms {milliseconds}
    httpOnly: true, // This cookie cannot be accessed by JS preventing XSS attacks cross-site scripting attacks
    sameSite: "strict", // This cookie is not sent with cross-origin requests
    secure: process.env.NODE_ENV !== "development", // This cookie is only sent over HTTPS in production
  });
};
