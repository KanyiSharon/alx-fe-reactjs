import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import userContext from "../../alx-react-app-props/src/components/UserContext";

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  });

  return (
    <>
    <userContext.Provider value={userData}/>
      <UserProfile />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <Header />
      <Counter />
      <userContext />
    </>
  );
}

export default App;
