import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div>
          <h1>Context👍</h1>
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
