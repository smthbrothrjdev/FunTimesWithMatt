import React from "react";

export function Email({ id, sender, subject }) {
  return (
    <>
      <p> Sender: {sender}</p>
      <p>
        {" "}
        Subject: <strong>{subject}</strong>
      </p>
    </>
  );
}
