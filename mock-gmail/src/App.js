import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Email } from "./Email.js";
import SingleEmail from "./SingleEmail.js";
import { SendEmailBox } from "./SendEmailBox.js";

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
    <>
      <div>
        <SendEmailBox redo={isLoadingFun} />{" "}
      </div>
      <ul>
        {data ? (
          data.map((email) => {
            return (
              <li key={email.id} onClick={() => handleClick(email.id)}>
                <Email
                  sender={email.sender}
                  subject={email.subject}
                  id={email.id}
                />
              </li>
            );
          })
        ) : (
          <li></li>
        )}
      </ul>
      <div>{emailID ? <SingleEmail id={emailID} /> : "nothing here"}</div>
    </>
  );
}
