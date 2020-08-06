import React, { useState } from "react";
import "./index.css";

function Signup() {
  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
  const [passwordRepeat, setPasswordRepeat] = useState("");
  console.log(passwordRepeat);

  return (
    <div className="signup-page">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </head>
      <form className="form-signup">
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          required=""
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required=""
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        ></input>
        <input
          type="password"
          className="form-control"
          placeholder="Password repeat"
          required=""
          onChange={(event) => setPasswordRepeat(event.target.value)}
          value={passwordRepeat}
        ></input>
        <button
          className="btn btn-md btn-primary btn-block mb-3 mt-3"
          id="submit"
          type="submit"
        >
          SignUp
        </button>

        <a
          href="/"
          class="btn btn-link mt-2 mb-1 text-muted text-center"
          role="button"
          aria-pressed="true"
        >
          Log In
        </a>
        <a
          href="/forgot"
          class="btn btn-link mt-2 mb-1 text-muted text-center"
          role="button"
          aria-pressed="true"
        >
          Forgot password
        </a>
        <p class="mt-3 mb-3 text-muted">
          <a
            href="https://t.me/moooooncrescent"
            role="button"
            aria-pressed="true"
          >
            Vitaly Odinokov{" "}
          </a>{" "}
        </p>
        <p class="mt-3 mb-3 text-muted"> 2020 </p>
      </form>
    </div>
  );
}
export default Signup;
