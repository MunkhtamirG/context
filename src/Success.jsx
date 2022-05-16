import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Success() {
  const notify = () => toast("Амжилттай нэвтэрлээ.");
  return (
    <div>
      {notify()}
      <ToastContainer />
    </div>
  );
}
