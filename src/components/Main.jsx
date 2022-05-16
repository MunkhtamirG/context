import React from "react";

export default function Main({ success }) {
  console.log(success);
  return <div>{success === true ? "Success" : "Please login"}</div>;
}
