import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Unsuccess() {
  const notify = () => toast("Нууц үг нэр хоорондоо таарахгүй байна.");
  return (
    <div>
      {notify()}
      <ToastContainer />
    </div>
  );
}
