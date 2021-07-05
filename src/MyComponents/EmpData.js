import React from "react";

export const EmpData = (props) => {
  return (
    <>
      <div className="container mt-5">
        <h3 className="mt-4 mb-3">Employee Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          {props.emp.map((emps) => {
          return (
            <>
            <tbody>
              <tr>
                <th scope="row" key={emps.id}>{emps.id}</th>
                <td>{emps.name}</td>
                <td>{emps.gender}</td>
                <td>{emps.email}</td>
                <td>{emps.phone}</td>
              </tr>
            </tbody>
            </>
          );
        })}
        </table>
      </div>
    </>
  );
};
