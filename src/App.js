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

  //getUrl
  const getUrl = () => {
    const urlEl = window.location.href;
    console.log(urlEl);
    const idEl = urlEl.split('/');
    console.log(idEl[4]);
    sessionStorage.setItem("new_id", idEl[4]);
  }

  const id_up = sessionStorage.getItem("new_id");
  
  //Update functionality 
  const onUpdate = (id_up, email, phone) => {
    console.log("this id:",id_up, " with email:",email, " and phone:",phone, " is to be updated");

    // let index= x => x.id === id_up;
    // console.log("data found",emp.findIndex(index));

    // const data = emp.filter(record => record.id === id_up);
    // const full = localStorage.getItem("emp");
    const data = Object.values(emp).filter((record) => record.id === 1000);

    console.log(data);
  
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <EmpData emp={emp} onDelete={onDelete} />
            <Footer />
          </Route>
          <Route path="/add">
            <Navbar />
            <AddEmp addEmp={addEmp} />
            <Footer />
          </Route>
          <Route exact path="/update/:id">
            <Navbar />
            <UpdateDetails emp={emp} onUpdate={onUpdate} getUrl={getUrl} id_up={id_up}/>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
