import React from "react";
import { Button } from "@material-ui/core";

const Dashboard = (props) => {
  return (
    <section>
      <div>
        <Button onClick={props.handleLogout}>LogOut</Button>
      </div>
    </section>
  );
};

export default Dashboard;
