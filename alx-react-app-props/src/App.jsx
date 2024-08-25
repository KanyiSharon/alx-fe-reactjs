import ProfilePage from "./ProfilePage";
import userContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}
return (
  <UserContext.Provider value={userData}>
    <ProfilePage />
  </UserContext.Provider>
)

export default App;
