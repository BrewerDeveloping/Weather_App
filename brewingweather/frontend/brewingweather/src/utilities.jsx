import axios from "axios";

export const signUp = async (name, email, password) => {
  let response = await axios.post("/signup/", {
    name: name,
    email: email,
    password: password,
  });
  console.log(response.data.success);
  return response.data.success;
};

export const logIn = async (email, password, setUser) => {
  let response = await axios.post("/login/", {
    email: email,
    password: password,
  });

  setUser(response.data);
  window.location.reload();
};

export const currUser = async () => {
  let response = await axios.get("/curruser/");
  console.log(response.data);
  return response.data;
};

export const logOut = async (setUser) => {
  let response = await axios.post("/logout/");
  if (response.data.logout) {
    setUser(null);
    window.location.reload();
  }
};
