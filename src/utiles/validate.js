export const validateForm = (email, password, name) => {
  const validEmail = /^[A-Za-z0-9._%+]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
    email
  );

  const validPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const validName = /^[a-zA-Z]+$/.test(name);

  if (!validEmail) return "Email Id is not Valid";

  if (!validPassword) return "Password is not Valid";

  if (!validName) return "Name is not Valid";

  return null;
};
