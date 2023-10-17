# User Management App

![User Management App](![Alt text](<Screenshot 2023-10-17 201840.png>))

This is a user management application built using React and Redux. It allows you to manage user data with features such as adding new users, searching for existing users by name, and exporting user details to a CSV file.

## Deployment

The application is deployed and accessible at [Deployment Link](https://redux-user-management.vercel.app/).

## Folder Structure

- **`src`**: This is the main source code directory.
  - **`components`**: Contains React components.
    - **`UserInputForm.js`**: Component for adding new users.
    - **`UserDetailsTable.js`**: Component for displaying user details and search functionality.
    - **`UserDetailsExport.js`**: Component for exporting user data to CSV.
  - **`store.js`**: Redux store configuration.
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point of the application.
- **`public`**: Contains static assets.
- **`README.md`**: The file you're currently reading.

## Data Flow

1. The UserInputForm component collects user information (name, email, gender, mobile number).
2. When the "Submit" button is clicked, an action of type "ADD_USER" is dispatched to the Redux store.
3. The user's reducer in the store adds the new user to the state.
4. The UserDetailsTable component displays the list of users from the store and allows searching by name.
5. The UserDetailsExport component lets you export user details to a CSV file.


## How It Works

1. Visit the deployment link to access the User Management App.
2. Use the "Add User" form to input user details and click "Submit."
3. Users are added to the list, displayed in the UserDetailsTable.
4. You can search for specific users by entering their names in the search bar.
5. Click "Export to CSV" to export the user details to a CSV file.

## Tech Stack and Libraries Used

- **React:** Front-end library for building the user interface.
- **Redux:** State management for managing user data and actions.
- **React-Redux:** Official Redux bindings for React.
- **react-csv:** Library used for exporting user data to CSV.
- **Vercel:** Deployment platform for hosting the application.

## Contributing

Contributions are welcome. Please open an issue to discuss any changes or improvements you'd like to make.

## Acknowledgments

- This project was created for educational purposes and serves as a basic example of a React and Redux application for user management.

   


