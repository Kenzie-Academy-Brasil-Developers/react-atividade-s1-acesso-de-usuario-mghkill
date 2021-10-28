import { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Filipe";
  const Login = () => {
    setIsLoggedIn(true);
  };
  const Logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <main className="App-main">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        />
      </main>
    </div>
  );
}

export default App;
