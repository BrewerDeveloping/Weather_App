import { createContext, useEffect, useState } from "react";
import "./App.css";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import "./components/LandingPage";
import HelloMessage from "./components/LandingPage";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      {/* <button onClick={() => logOut(setUser)}>LOG OUT</button> */}
      <NavBar />
      {location.pathname === "/" && <HelloMessage />}

      <UserContext.Provider value={{ user, setUser }}>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
