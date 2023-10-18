import React from 'react';
import { useSelector } from 'react-redux';
import './UserDetailsTable.css';

const UserDetailsTable = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedGender, setSelectedGender] = React.useState('');
  const users = useSelector((state) => state.users);

  const filteredUsers = users.filter((user) => {
    const nameMatches = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const genderMatches = selectedGender === '' || user.gender === selectedGender;
    return nameMatches && genderMatches;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
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
