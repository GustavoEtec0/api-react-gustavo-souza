import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import User from "./components/User";
import CreateUser from "./components/CreateUser";

function App() {
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1></h1>
      <User />
      <CreateUser />
    </div>
  );
}

export default App;
