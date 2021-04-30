import React from "react";

export function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState({});
  const [errorUsername, setErrorUsername] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");

  React.useEffect(() => {
    if (username.length < 1) {
      setErrorUsername("Username can't be empty");
    } else if (!username.match(/^[-a-zA-Z0-9]+$/)) {
      setErrorUsername("Invalid characters");
    } else {
      setErrorUsername("");
    }
  }, [username]);

  React.useEffect(() => {
    if (password.length < 6) {
      setErrorPassword("Password must be minimal 6 characters long!");
    } else {
      setErrorPassword("");
    }
  }, [password]);

  const send = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    let response = await fetch(
      "https://private-leagues-api.herokuapp.com/api/login",
      requestOptions
    );
    response = await response.json();
    setResponse(response);
  };

  return (
    <div className="Login">
      <form onSubmit={send}>
        <label>
          Username:
          <input
            name="username"
            className="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <div className="error">{errorUsername}</div>
        <label>
          Password:
          <input
            name="password"
            className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="error">{errorPassword}</div>
        </label>
        <button className="submit">Submit</button>
        <div>
          {!!response.user
            ? `Login successful! Welcome ${response.user.firstName} ${response.user.lastName}`
            : ``}
          {!!response.error ? `Error: ${response.error}` : ``}
        </div>
      </form>
    </div>
  );
}
