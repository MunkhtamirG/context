import React from "react";

export default function Header({ submitHandler }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">
            Features
          </a>
          <a class="nav-item nav-link" href="#">
            Pricing
          </a>
          <a class="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>
        <form className="col-6" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button type="submit" className="btn btn-primary my-4">
            Log In
          </button>
        </form>
      </div>
    </nav>
  );
}
