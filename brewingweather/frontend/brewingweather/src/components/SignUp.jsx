import { useEffect, useState } from "react";
import { signUp } from "../utilities";
import "../css/signup.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(()=> {
  //     console.log(name, email, password)
  //   }, [name, email, password])

  return (
    <div className="sign-up">
      <form
        onSubmit={(e) => [
          e.preventDefault(),
          signUp(name, email, password),
          setEmail(""),
          setPassword(""),
          setName(""),
        ]}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>Sign Up</h2>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input type="submit" value="Sign Up" onClick={"/login"} />
      </form>
    </div>
  );
};

export default "SignUp";
