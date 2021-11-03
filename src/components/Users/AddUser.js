import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI//Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredusername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserhandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredusername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredusername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandller = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandller}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            text="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            text="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
