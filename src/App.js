import "./App.css";
import { Navbar } from "./MyComponents/Navbar";
import { AddEmp } from "./MyComponents/AddEmp";
import { EmpData } from "./MyComponents/EmpData";
import { Footer } from "./MyComponents/Footer";
import { UpdateDetails } from "./MyComponents/UpdateDetails";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initEmps;

  // If there is no key-value for emp in localStorage, creates an empty initEmps array else it stores the emp array inside initEmps which is then accessed later.
  if (localStorage.getItem("emp") === null) {
    initEmps = [];
  } else {
    initEmps = JSON.parse(localStorage.getItem("emp"));
  }

  const addEmp = (name, gender, email, phone) => {
    console.log("I am adding this data", name, gender, email, phone);

    //Creates/increments id for the submitted data
    let id;
    if (emp.length === 0) {
      id = 1000;
    } else {
      id = emp[emp.length - 1].id + 1;
    }

    //Creating an array of objects to hold the submitted data i.e., id, name, gender, email. phone
    const myData = {
      id: id,
      name: name,
      gender: gender,
      email: email,
      phone: phone,
    };

    //Appending myData to existing emp or if previous emp was empty, appends it to empty emp
    setEmps([...emp, myData]);
    console.log(myData);
  };

  // Initialising empty JSON string for emp variable in the local storage
  const [emp, setEmps] = useState(initEmps);
  useEffect(() => {
    localStorage.setItem("emp", JSON.stringify(emp));
  }, [emp]);



  // Delete function
  const onDelete = (emps) => {
    console.log("I am onDelete of todo", emps);
    setEmps(emp.filter((e) => {
      return e!==emps;
    }));

    localStorage.setItem("emp", JSON.stringify(emp));
  }

  //Update functionality 
  const onUpdate = (id, email, phone) => {
    console.log("this id:",id, " with email:",email, " and phone:",phone, " is to be updated");
    
    let index=emp.findIndex( x => x.id === id);
    console.log(emp[index]);
  }

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <EmpData emp={emp} onDelete={onDelete} onUpdate={onUpdate}/>
            <Footer />
          </Route>
          <Route path="/add">
            <Navbar />
            <AddEmp addEmp={addEmp} />
            <Footer />
          </Route>
          <Route exact path="/update">
            <Navbar />
            <UpdateDetails emp={emp} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
