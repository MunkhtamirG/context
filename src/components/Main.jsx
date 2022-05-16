import React from "react";

export default function Main({ success }) {
  console.log(success);
  return (
    <div className="main">
      <h1>{success === true ? "Success" : "Please login"}</h1>
    </div>
  );
}
