import React from "react";
import { Link } from "react-router-dom";
function Product() {
  const data = [
    {
      name: "sundar",
      position: "fullstack developer",
      office: "rednetwork",
      age: "25",
      start: "20/9/2022",
      salary: "40000",
    },
    {
      name: "sanjay",
      position: "fullstack developer",
      office: "zoho",
      age: "25",
      start: "20/9/2022",
      salary: "60000",
    },
    {
      name: "ranjith",
      position: "fullstack developer",
      office: "tcsc",
      age: "25",
      start: "20/9/2022",
      salary: "30000",
    },
  ];

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Product</h1>
        <Link
          to="/create-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>{" "}
          CreateProductUser
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.office}</td>
                      <td>{item.age}</td>
                      <td>{item.start}</td>
                      <td>{item.salary}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
