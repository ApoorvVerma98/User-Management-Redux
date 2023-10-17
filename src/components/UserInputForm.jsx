import React from "react";
import { useDispatch } from "react-redux";
import "./UserInputForm.css";

const UserInputForm = () => {
  const dispatch = useDispatch();

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInputForm;
