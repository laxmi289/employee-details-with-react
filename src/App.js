import "./App.css";
import { Navbar } from "./MyComponents/Navbar";
import { AddEmp } from "./MyComponents/AddEmp";
import { EmpData } from "./MyComponents/EmpData";
import React, { useState, useEffect } from "react";

function App() {

  let initEmps;
  if (localStorage.getItem("emp") === null) {
    initEmps = [];
  } else {
    initEmps = JSON.parse(localStorage.getItem("emp"));
  }

  const addEmp = (name, gender, email, phone) => {
    console.log("I am adding this data", name, gender, email, phone);
    let id;
    if (emp.length === 0) {
      id = 0;
    } else {
      id = emp[emp.length - 1].id + 1;
    }

    const myData = {
      id: id,
      name: name,
      gender: gender,
      email: email,
      phone: phone,
    };
    setEmps([...emp, myData]);
    console.log(myData);
  };


  const [emp, setEmps] = useState(initEmps);
  useEffect(() => {
    localStorage.setItem("emp", JSON.stringify(emp));
  }, [emp]);

  // const emp = [
  //   {
  //     id: 1,
  //     name: "Laxmi Gowthami Ittappa",
  //     gender: "Female",
  //     email: "laxmi@gmail.com",
  //     phone: 9876543234,
  //     salary: "$1000000",
  //   },
  //   {
  //     id: 2,
  //     name: "Sindhu Ittappa",
  //     gender: "Female",
  //     email: "sindhu@gmail.com",
  //     phone: 9876543234,
  //     salary: "$1000000",
  //   },
  // ];

  return (
    <div className="App">
      <Navbar />
      <AddEmp addEmp={addEmp} />
      <EmpData emp={emp} />
    </div>
  );
}

export default App;
