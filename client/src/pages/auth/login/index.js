import React, { useState } from "react";
import "./index.css";

function Signin() {
  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);

  return (
    <div className="signin-page">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </head>
      <body>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
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
          <button
            className="btn btn-md btn-primary btn-block mb-3 mt-3"
            id="submit"
            type="submit"
          >
            SignIn
          </button>

          <a
            href="/signup"
            class="btn btn-link mt-2 mb-1 text-muted text-center"
            role="button"
            aria-pressed="true"
          >
            Register
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
      </body>
    </div>
  );
}
export default Signin;
