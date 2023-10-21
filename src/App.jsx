// here it imports React and the application components.
import React from "react";
import UserInputForm from "./components/UserInputForm";
import UserDetailsTable from "./components/UserDetailsTable";
import UserDetailsExport from "./components/UserDetailsExport";

// here it defines the main application component.
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

// Export the App component for use in other parts of the application.
export default App;
