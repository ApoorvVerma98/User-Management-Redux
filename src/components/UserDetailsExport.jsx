import React from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import './UserDetailsExport.css';

const UserDetailsExport = () => {
  const users = useSelector((state) => state.users);

  const csvData = users.map((user) => [
    user.name,
    user.email,
    user.gender,
    user.mobileNumber,
  ]);

  return (
    <CSVLink data={csvData} filename="user-details.csv">
      <button className="user-details-export">Export to CSV</button>
    </CSVLink>
  );
};

export default UserDetailsExport;
