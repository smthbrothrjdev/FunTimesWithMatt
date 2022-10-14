import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function SendEmailBox({ redo }) {
  const blankEmail = {
    sender: "",
    recipient: "jane@Galvanize.com",
    subject: "",
    message: "",
  };
  const [flag, setFlag] = useState(false);
  const [fetchie, setFetchie] = useState({});
  const [visibleFlag, setVisibleFlag] = useState(false);
  const [buttonText, setButtonText] = useState("Compose");
  const [emailComposer, setEmailComposer] = useState(blankEmail);

  useEffect(() => {
    if (flag) {
      fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailComposer),
      }).finally((res) => {
        redo();
        setEmailComposer(blankEmail);
      });
    } else {
    }
  }, [fetchie, flag]);

  function handleClick() {
    setFlag(true);
    setFetchie({ run: true });
  }

  function handleChange(target) {
    setEmailComposer((prevState) => ({
      ...prevState,
      [target.id]: target.value,
    }));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        variant="contained"
        onClick={() => {
          setVisibleFlag(!visibleFlag);
          setButtonText(!visibleFlag === true ? "Hide" : "Compose");
        }}
      >
        {buttonText}
      </Button>
      <Box
        sx={{
          display: visibleFlag ? "flex" : "none",
          flexDirection: "column",

          m: 1,
        }}
      >
        <TextField
          id="sender"
          label="To"
          variant="outlined"
          value={emailComposer.sender}
          onChange={(e) => handleChange(e.target)}
        />
        <TextField
          id="subject"
          label="Subject"
          variant="outlined"
          value={emailComposer.subject}
          onChange={(e) => handleChange(e.target)}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          value={emailComposer.message}
          onChange={(e) => handleChange(e.target)}
        />

        <Button
          variant="contained"
          disabled={
            !(
              emailComposer.message &&
              emailComposer.sender &&
              emailComposer.subject
            )
          }
          onClick={() => handleClick()}
        >
          send
        </Button>
      </Box>
    </Box>
  );
}
