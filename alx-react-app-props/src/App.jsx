import ProfilePage from "./ProfilePage";
import userContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}
return (
  <userContext.Provider value={userData}>
    <ProfilePage />
  </userContext.Provider>
)

export default App;
