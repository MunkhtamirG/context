import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ submitHandler }) {
  let navigate = useNavigate();
  function clickHandler() {
    navigate("/signup");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-4">
      <a className="navbar-brand ms-4 ps-4" href="/">
        Navbar
      </a>

      <div
        class="collapse navbar-collapse d-flex justify-content-end "
        id="navbarNavAltMarkup"
      >
        <form className="" onSubmit={submitHandler}>
          <label htmlFor="username" className="text-light me-2">
            E-mail:
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="me-4"
          />
          <label htmlFor="password" className="text-light ms-4 me-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="me-4"
            placeholder="Enter Your Password"
          />
          <button type="submit" className="btn btn-primary mx-4">
            Log In
          </button>
        </form>
        <button className="btn btn-primary mx-4" onClick={clickHandler}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}
