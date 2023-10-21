// here i import React, CSVLink, useSelector, and styles.
import React from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import "./UserDetailsExport.css";

// here i have defined the user details export component.
const UserDetailsExport = () => {
  const users = useSelector((state) => state.users);

  // here it Prepare user data for CSV export.
  const csvData = users.map((user) => [
    user.name,
    user.email,
    user.gender,
    user.mobileNumber,
  ]);

  return (
    // CSV export button.
    <CSVLink data={csvData} filename="user-details.csv">
      <button className="user-details-export">Export to CSV</button>
    </CSVLink>
  );
};

// export the UserDetailsExport component for use in other parts of the application.
export default UserDetailsExport;
