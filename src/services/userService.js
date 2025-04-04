import headerToken from "@/lib/headerToken";

const BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
export const getUserService = async () => {
  const headers = await headerToken();

  const response = await fetch(`${BASE_URL}/user`, {
    headers,
  });

  const user = await response.json();
  return user.payload;
};
