import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Email } from "./Email.js";
import SingleEmail from "./SingleEmail.js";
import { SendEmailBox } from "./SendEmailBox.js";
import Grid2 from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Grid version 2

export default function App() {
  const [data, setData] = useState(null);
  const [emailID, setEmailId] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/emails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("invalid enpoint call", res);
        }
      })

      .then((data) => {
        setData(data);
      });
  }, [isLoading]);

  function isLoadingFun() {
    setIsLoading(!isLoading);
    console.log("isloading: " + isLoading);
  }
  function handleClick(id) {
    //  console.log(id);
    setEmailId(id);
    // console.log(emailID);
  }
  return (
    <Grid2 container spacing={3}>
      <Grid2 xs>
        <div className="inbox">
          {data ? (
            data.map((email) => {
              return (
                <Card
                  
                  variant="outlined"
                  key={email.id}
                  onClick={() => handleClick(email.id)}
                >
                  <Email
                    sender={email.sender}
                    subject={email.subject}
                    id={email.id}
                  />
                </Card>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </Grid2>
      <Grid2 xs>
        {emailID ? <SingleEmail id={emailID} /> : "nothing here"}
      </Grid2>
      <Grid2 xs>
        <SendEmailBox redo={isLoadingFun} />{" "}
      </Grid2>
    </Grid2>
  );
}
