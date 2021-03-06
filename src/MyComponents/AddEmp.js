import React from "react";
import {useState} from 'react';

export const AddEmp = ({addEmp}) => {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!name || !gender || !email || !phone) {
        alert("Fill all the details")
    }
    else {
        // localStorage.setItem('Name', name);
        // localStorage.setItem('Gender', gender);
        // localStorage.setItem('Email', email);
        // localStorage.setItem('Phone', phone);
      addEmp(name, gender, email, phone);
      setName("");
      setGender("");
      setEmail("");
      setPhone("");
      alert("Data Submitted");
    }
  }

  let myStyle = {
    minHeight: "76vh",
    margin: "40px auto",
  };

  return (
    <div className="container mt-4" style={myStyle}>
      <h5 className="mb-3">Add new employees</h5>

      <form onSubmit = {submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) =>{setName(e.target.value)}} aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <label for="gender" className="form-label">Gender</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Female" onChange={(e) =>{setGender(e.target.value)}}/> 
            <label className="form-check-label" for="flexRadioDefault1">Female</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Male" onChange={(e) =>{setGender(e.target.value)}} />
            <label className="form-check-label" for="flexRadioDefault2">Male</label>
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} id="exampleInputEmail1" onChange={(e) =>{setEmail(e.target.value)}} aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label for="phone" className="form-label">Phone</label>
          <input type="phone" className="form-control" id="phone" value={phone} onChange={(e) =>{setPhone(e.target.value)}} aria-describedby="emailHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Add Employee</button>
        {/* <input class="btn btn-primary" type="reset" value="Reset"/> */}
      </form>
    </div>
  );
};
