import { useState } from "react";

function Signin() {
  return (
    <div
      className="my-5 mx-auto text-center shadow p-5"
      style={{ width: "500px" }}
    >
      <h3>Sign In</h3>
      <div className="my-4">
        <input type="text" placeholder="Enter Email" className="form-control" />
      </div>

      <div className="my-4">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button className="btn btn-dark px-5">Sign In</button>
      </div>

      <div className="mt-4">
        <a className="" href="/signup">
          Create a Account
        </a>
      </div>
    </div>
  );
}

export default Signin;
