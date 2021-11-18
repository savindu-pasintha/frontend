import React, { useState } from "react";

import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdEdit } from "react-icons/md";
import axios from "axios";

import { useStateValue } from "./StateProvider";
import "./AdminRegister.css";
import swal from 'sweetalert';

function Edituser() {
  const [{ user_details, token }] = useStateValue();
  var [edit_email, setEditEmail] = useState("");
  var [edit_password, setEditPassword] = useState("");
  var [edit_name, setEditName] = useState("");
  var [edit_phone, setEditPhone] = useState("");

  if (false) {
    setEditEmail(user_details.cust_email);
    setEditPassword(user_details.cust_password);
    setEditName(user_details.cust_name);
    setEditPhone(user_details.cust_phone);
  }
  var editUrl = `http://localhost:8000//api/profile/1/${edit_name}/${edit_email}/${edit_phone}`;
  function edit() {


    axios
      .put(
        editUrl,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
          console.log(res);
          swal( "Profile" ,  "update succesfully !" ,  "success" );
    
      })
      .catch((err) => {
        swal( "Profile" ,  "Not Updated !" ,  "error" );
      });
  }
  return (
    <div className="container">
      <div className="container-fluid">
        <h2
          style={{
            textAlign: "center",
            fontSize: "46px",
            borderBottom: "2px sollid lightgrey",
            marginBottom: "10px",
          }}
        >
          Edit Profile
        </h2>
        <label className="label" style={{ paddingLeft: "0px" }}>
          <BsFillPersonFill /> Full Name
        </label>
        <input
          type="text"
          className="p_input"
          placeholder={"user name" /*user_details.cust_name*/}
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <label className="label" style={{ paddingLeft: "0px" }}>
          <AiFillPhone /> Number
        </label>
        <input
          type="number"
          className="p_input"
          placeholder={"+94 777 666 333" /*user_details.cust_phone*/}
          onChange={(e) => {
            setEditPhone(e.target.value);
          }}
        />
        <label className="label" style={{ paddingLeft: "0px" }}>
          <MdEmail /> EmailID
        </label>
        <input
          type="text"
          className="p_input"
          placeholder={"example@gmail.com" /*user_details.cust_email*/}
          onChange={(e) => {
            setEditEmail(e.target.value);
          }}
        />
      <div className="container">
      <div className="row ">
         <button className="btn btn-danger text-center" onClick={edit}>
          {" "}
          <MdEdit /> Save{" "}
        </button>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default Edituser;
