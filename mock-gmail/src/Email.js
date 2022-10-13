import React from "react";

export function Email({ id, sender, subject }) {
  return (
    <>
      <p> {sender}</p>
      <p> {subject}</p>
    </>
  );
}
