import React, { useEffect, useState } from "react";

export function SendEmailBox({redo}) {
  const [flag, setFlag] = useState(false);
  const [fetchie, setFetchie] = useState({});
  useEffect(() => {
    if (flag) {
      fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: "jane@Galvanize.com",
          recipient: "YourBoss@Boss.Boss",
          subject: "YOU ARE FIRED",
          message: "CHINA",
        }),
      }).finally((res) => {
        redo();
      });
    } else {
    }
  }, [fetchie,redo,flag]);

  function handleClick() {
    setFlag(true);
    setFetchie({ run: true });
  }

  return (
    <div>
      <button onClick={() => handleClick()}>HELLO THERE</button>
    </div>
  );
}
