import React from "react";

export const UpdateDetails = (props) => {
    let myStyle = {
        minHeight: "76vh",
        margin: "40px auto",
    };

    return (
    <div>
      <div className="container mt-4" style={myStyle}>
        <h5 className="mb-3">Update Details</h5>

        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control"  aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="phone" className="form-control"  aria-describedby="emailHelp" />
          </div>

          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};
