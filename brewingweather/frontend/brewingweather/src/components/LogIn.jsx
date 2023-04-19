import { useContext, useState, useEffect } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";
import { logOut, currUser } from "../utilities";
import "../css/login.css";
import { getToken } from "./CsrfToken";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  getToken();

  // useEffect(() => {
  //   const getCurrUser = async () => {
  //     setUser(await currUser());
  //   };
  //   getCurrUser();
  // }, []);

  return (
    <div className="sign-in">
      <form
        onSubmit={(e) => [
          e.preventDefault(),
          logIn(email, password, setUser),
          setEmail(""),
          setPassword(""),
        ]}
      >
        <h2>Log In</h2>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons-container">
          <button onSubmit={() => logIn(user)}>LOG IN</button>
          <button onClick={() => logOut(setUser)}>LOG OUT</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
