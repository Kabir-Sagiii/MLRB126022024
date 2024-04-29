import { useState } from "react";

function SignUp() {
  return (
    <div
      className="my-5 mx-auto text-center shadow p-5"
      style={{ width: "500px" }}
    >
      <h2>Sign Up</h2>
      <div className="mt-4">
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control"
        />
      </div>
      <div className="mt-4">
        <input
          type="password"
          placeholder="Create Password"
          className="form-control"
        />
      </div>
      <div className="mt-4">
        <input
          type="phone"
          placeholder="Enter Phone No"
          className="form-control"
        />
      </div>

      <div className="mt-4">
        <button className="btn btn-dark px-5">Sign Up</button>
      </div>

      <div className="mt-4">
        <a href="/">Alreday Have a Account ?</a>
      </div>
    </div>
  );
}

export default SignUp;
