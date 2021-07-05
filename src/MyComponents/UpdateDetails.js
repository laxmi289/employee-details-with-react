import React from "react";
import { useState } from "react";

export const UpdateDetails = ({ emp, onUpdate, getUrl, id_up }) => {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const update = (e) => {
    e.preventDefault();

    onUpdate(id_up, email, phone);
    setEmail("");
    setPhone("");
    alert("Data Submitted");
  };

  let myStyle = {
    minHeight: "76vh",
    margin: "40px auto",
  };

  return (
    <div>
      <div className="container mt-4" style={myStyle} onMouseUp={() => getUrl() }>
        <h5 className="mb-3">Update Details</h5>

        <form onSubmit={update}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="phone"
              className="form-control"
              aria-describedby="emailHelp"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
