export type UserData = {
  name: string;
  introduction: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
};

const userData: UserData = {
  name: "Matthew Castle",
  introduction: "Hello there. I'm",
  description:
    "Seattle based software developer with a focus on clean code, ease of use, and accessibility. I enjoy gaming, gardening and gathering gemstones.",
  github: "https://github.com/mrcastle",
  linkedin: "https://www.linkedin.com/in/matthewraycastle/",
  email: "matt.castle@sleeplessjade.com",
};

export function getUserData(): UserData {
  return userData;
}
