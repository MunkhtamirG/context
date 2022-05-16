import React, { useState } from "react";

export default function SignUp() {
  const [text, setText] = useState("");
  let registerInfo = {};

  function registerHandler(e) {
    fetch("https://dev-api.mstars.mn/admin/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setText("Бүртгэл амжилттай");
        } else {
          setText(res.status);
        }
      });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    registerInfo["email"] = e.target.email.value;
    registerInfo["password"] = e.target.password.value;
    registerInfo["name"] = e.target.name.value;
    registerInfo["address"] = e.target.address.value;
    registerHandler(registerInfo);
    console.log(registerInfo);
  }
  return (
    <div>
      <form
        action=""
        className="d-flex flex-column col-3 m-auto mt-4 pt-4"
        onSubmit={submitHandler}
      >
        <label htmlFor="" className="my-2">
          Enter Your E-mail
        </label>
        <input type="text" name="email" />
        <label htmlFor="" className="my-2">
          Enter Your Password
        </label>
        <input type="text" name="password" />
        <label htmlFor="" className="my-2">
          Enter Your Name
        </label>
        <input type="text" name="name" />
        <label htmlFor="" className="my-2">
          Enter Your Address
        </label>
        <input type="text" name="address" />
        <button type="submit" className="btn btn-danger my-4">
          Register
        </button>
      </form>
      <h2 className="text-light">{text}</h2>
    </div>
  );
}
