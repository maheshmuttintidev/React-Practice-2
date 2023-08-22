import { useState } from "react";
import { Dashboard } from "./Dashboard";

export function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  function handleChangeUserName(event) {
    const value = event.target.value;
    console.log("🚀 ~ file: Form.jsx:15 ~ Form ~ value:", value);
    setUserName(value);
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    console.log("🚀 ~ file: Form.jsx:15 ~ Form ~ value:", value);
    setPassword(value);
  }

  function handleSubmit() {
    const payload = {
      username: username,
      password: password,
    };
    console.log("🚀 ~ file: Form.jsx:34 ~ handleSubmit ~ payload:", payload);
    setShowDashboard(true);
  }

  if (showDashboard === true) {
    return <Dashboard username={username} password={password} />;
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => {
          handleChangeUserName(event);
        }}
      />
      <br />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(event) => {
          handleChangePassword(event);
        }}
      />
      <br />

      <button type="submit" value="Login" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
