// here i import React, useDispatch, and styles.
import React from "react";
import { useDispatch } from "react-redux";
import './UserInputForm.css';

//here I defined the user input form component.
const UserInputForm = () => {
  const dispatch = useDispatch();

  // here is the Function to handle form submission and dispatch user data.
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const gender = event.target.gender.value;
    const mobileNumber = event.target.mobileNumber.value;

    dispatch({
      type: "ADD_USER",
      payload: { name, email, gender, mobileNumber },
    });
  };

  return (
    <form className="user-input-form" onSubmit={handleSubmit}>
      {/* most important here is the Form input fields for name, email, gender, and mobile number. */}
      <label>Name: </label>
      <input type="text" name="name" required />
      <br />
      <label>Email: </label>
      <input type="email" name="email" required />
      <br />
      <label>Gender: </label>
      <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <label>Mobile Number: </label>
      <input type="tel" name="mobileNumber" required />
      <br />
      {/* its a Submit button. */}
      <button type="submit">Submit</button>
    </form>
  );
};

// here it simply Export the UserInputForm component so it can be  usef in other parts of the application.
export default UserInputForm;
