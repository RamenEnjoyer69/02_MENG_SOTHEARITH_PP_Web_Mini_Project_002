const { auth } = require("@/auth");

const headerToken = async () => {
  const session = await auth();

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.payload?.token}`,
  };
};

export default headerToken;
