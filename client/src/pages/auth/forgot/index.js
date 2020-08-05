import React from "react";
import "./index.css";
function Forgot() {
  return (
    <div className="forgot-page">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </head>
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Forgot?</h1>
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          required=""
        ></input>
        <button
          className="btn btn-md btn-primary btn-block mb-3 mt-3"
          id="submit"
          type="submit"
        >
          Restore
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
          href="/"
          class="btn btn-link mt-2 mb-1 text-muted text-center"
          role="button"
          aria-pressed="true"
        >
          Log In
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
export default Forgot;
