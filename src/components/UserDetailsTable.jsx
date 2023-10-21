// here i Improt react, useSelector, and styles.
import React from 'react';
import { useSelector } from 'react-redux';
import './UserDetailsTable.css';

// here i am defining the user details table component.
const UserDetailsTable = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedGender, setSelectedGender] = React.useState('');
  const users = useSelector((state) => state.users);

  // i used Filter users based on search term and selected gender.
  const filteredUsers = users.filter((user) => {
    const nameMatches = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const genderMatches = selectedGender === '' || user.gender === selectedGender;
    return nameMatches && genderMatches;
  });

  //here is the Functions to handle search and gender filter changes.

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      {/* here are the inpt for searching by name and gender filter dropdown. */}
      <input
        className="user-input-form"
        type="text"
        onChange={handleSearchChange}
        placeholder="Search by name"
      />
      <div className="gender-filter">
        <select onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* here Table is  displaying user details. */}
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
          {/*here I used Map and displayed filtered user data. */}
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

// simply exports the UserDetailsTable component for use in other parts of the application.
export default UserDetailsTable;
