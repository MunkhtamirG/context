import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Success from "./Success";
import Unsuccess from "./Unsuccess";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/SignUp";

function App() {
  // const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  let userInfo = {};
  const notifySuccess = () => toast("Амжилттай нэвтэрлээ.");
  const notifyUnSuccess = () => toast("Нууц үг нэр хоорондоо таарахгүй байна.");
  function clickHandler(e) {
    fetch("https://dev-api.mstars.mn/admin/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          console.log(res.success);
          setSuccess(res.success);
          // navigate("/Success");
          notifySuccess();
        } else {
          console.log(res.status);
          setSuccess(res.success);
          notifyUnSuccess();
        }

        console.log(res.success);
      });
  }

  function submitHandler(e) {
    e.preventDefault();
    userInfo["email"] = e.target.elements.email.value;
    userInfo["password"] = e.target.elements.password.value;
    clickHandler(userInfo);
  }

  return (
    <div className="App">
      <Header submitHandler={submitHandler} />
      <Routes>
        <Route path="/" element={<Main success={success} />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Unsuccess" element={<Unsuccess />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
