import { useState } from "react";
import { login } from "../apis/loginAuth";

export function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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

  async function handleSubmit() {
    setErrorMessage('')
    try {
      const loginPayload = {
        username: username,
        password: password,
      };

      const data = await login(loginPayload);
      console.log("🚀 ~ file: Form.jsx:30 ~ handleSubmit ~ data:", data);
      setUserData(data);
    } catch (error) {
      console.log("🚀 ~ file: Form.jsx:33 ~ handleSubmit ~ error:", error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
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

      {userData ? (
        <div>
          <h2>User Details</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              border: "3px solid red",
              background: "green",
            }}
          >
            <div>
              <img
                src={userData.image}
                height={50}
                width={50}
                style={{ borderRadius: "50%" }}
              />
            </div>

            <ul style={{ listStyle: "none" }}>
              <li>Full Name: {userData.firstName + "" + userData.lastName}</li>
              <li>Gender: {userData.gender}</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
