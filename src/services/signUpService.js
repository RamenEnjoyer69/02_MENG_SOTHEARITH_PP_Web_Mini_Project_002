export const signUpService = async (formData) => {
  await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};
