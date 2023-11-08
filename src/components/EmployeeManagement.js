import React, { useState } from "react";
import "./EmployeeManagement.css";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    {
      id: "1",
      firstname: "John",
      lastname: "Doe",
      companyname: "ABC Inc.",
      companyreview: "Good company to work",
    },
    {
      id: "2",
      firstname: "Jane",
      lastname: "Smith",
      companyname: "XYZ Corp.",
      companyreview: "Excellent company",
    },
    {
      id: "3",
      firstname: "Jane",
      lastname: "Smith",
      companyname: "XYZ Corp.",
      companyreview: "Excellent team member",
    },
    {
      id: "4",
      firstname: "Emily",
      lastname: "Davis",
      companyname: "Innovate LLC",
      companyreview: "Highly creative peoples",
    },
    {
      id: "5",
      firstname: "Michael",
      lastname: "Brown",
      companyname: "Global Enterprises",
      companyreview: "Nice to work",
    },
    // Add more employees as needed
  ]);

  const [employeeData, setEmployeeData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    companyname: "",
    companyreview: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleAddEmployee = () => {
    if (editIndex === null) {
      setEmployees([...employees, employeeData]);
    } else {
      employees[editIndex] = employeeData;
      setEditIndex(null);
    }

    setEmployeeData({
      id: "",
      firstname: "",
      lastname: "",
      companyname: "",
      companyreview: "",
    });
  }

  const handleEditEmployee = (index) => {
    setEmployeeData(employees[index]);
    setEditIndex(index);
  }

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  }

  return (
    <div className="employee-management-container">
      <h2>Employee Review Management System</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company Name</th>
            <th>Company Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.companyname}</td>
              <td>{employee.companyreview}</td>
              <td>
                <button onClick={() => handleEditEmployee(index)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={employeeData.id}
          onChange={(e) => setEmployeeData({ ...employeeData, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={employeeData.firstname}
          onChange={(e) => setEmployeeData({ ...employeeData, firstname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={employeeData.lastname}
          onChange={(e) => setEmployeeData({ ...employeeData, lastname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={employeeData.companyname}
          onChange={(e) => setEmployeeData({ ...employeeData, companyname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company Review"
          value={employeeData.companyreview}
          onChange={(e) => setEmployeeData({ ...employeeData, companyreview: e.target.value })}
        />
        <br />
        <button onClick={handleAddEmployee}>{editIndex === null ? "Add" : "Save"}</button>
      </div>
    </div>
  );
}

export default EmployeeManagement;
