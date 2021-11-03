import React from "react";
import Card from "../UI/Card";
import Button from "../UI//Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserhandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input id="username" text="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" text="number" />
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
