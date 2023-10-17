import React from "react";
import { useSelector } from "react-redux";
import './UserDetailsTable.css';

const UserDetailsTable = () => {
  const [searchTerm, setSearchTerm] = React.useState(""); 
  const users = useSelector((state) => state.users);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input className="user-input-form"
        type="text"
        onChange={handleSearchChange}
        placeholder="Search by name"
      />
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailsTable;
