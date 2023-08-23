import axios from "axios";

export async function login(payload) {
  try {
    const payloadForLogin = {
      username: payload.username,
      password: payload.password,
    };
    const apiResponse = await axios.post(
      "https://dummyjson.com/auth/login",
      payloadForLogin
    );
    const userLoggedInData = apiResponse.data;

    return userLoggedInData;
  } catch (error) {
    console.log("🚀 ~ file: loginAuth.js:6 ~ login ~ error:", error);
    throw error.response.data;
  }
}
