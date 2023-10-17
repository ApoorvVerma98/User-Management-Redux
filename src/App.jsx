import React from "react";
import UserInputForm from "./components/UserInputForm";
import UserDetailsTable from "./components/UserDetailsTable";
import UserDetailsExport from "./components/UserDetailsExport";

const App = () => {
  return (
    <div>
      <h1>User Management</h1>
      <UserInputForm />
      <UserDetailsTable />
      <UserDetailsExport />
    </div>
  );
};

export default App;
