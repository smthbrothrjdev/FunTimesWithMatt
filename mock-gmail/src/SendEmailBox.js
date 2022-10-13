import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function SendEmailBox({ redo }) {
  const [flag, setFlag] = useState(false);
  const [fetchie, setFetchie] = useState({});
  const [visibleFlag, setVisibleFlag] = useState(false);
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
  }, [fetchie, redo, flag]);

  function handleClick() {
    setFlag(true);
    setFetchie({ run: true });
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button variant="contained" onClick={() => setVisibleFlag(true)}>
        Compose
      </Button>
      <Box
        sx={{
          display: visibleFlag ? "flex" : "none",
          flexDirection: "column",

          m: 1,
        }}
      >
        <TextField id="to" label="TO" variant="outlined" />
        <TextField id="subject" label="SUBJECT" variant="outlined" />
        <TextField id="message" label="MESSAGE" variant="outlined" />

        <button onClick={() => handleClick()}>HELLO THERE</button>
      </Box>
    </Box>
  );
}
