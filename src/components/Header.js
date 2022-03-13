import React, { useContext } from "react";

import { UserContext } from "../context/user";
import { ThemeContext } from "../context/theme";

import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";

function Header() {
  const {user, setUser} = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);
  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle setTheme={setTheme} />
      </nav>
    </header>
  );
}

export default Header;
