import React from "react";
import { Link } from "react-router-dom";

export const EmpData = (props) => {
  let myStyle = {
    minHeight: "73vh",
    margin: "40px auto",
  };

  return (
    <>
      <div className="container mt-5" style={myStyle}>
        <h3 className="mt-4 mb-3">Employee Data</h3>
        {props.emp.length === 0 ? (
          "No Employee Records Found !"
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {props.emp.map((emps) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <th key={emps.id}>{emps.id}</th>
                      <td>{emps.name}</td>
                      <td>{emps.gender}</td>
                      <td>{emps.email}</td>
                      <td>{emps.phone}</td>
                      <td>
                        <button type="submit" className="btn btn-sm btn-danger" onClick={() => { props.onDelete(emps); }}> Delete</button>
                        <Link className="btn btn-sm btn-primary mx-2" to="/update" onClick={() => (props.onUpdate(emps.id, emps.email, emps.phone))}> Update </Link>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};
