//import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function SearchBar({ setUrl }) {
  return (
    <Box display="flex">
      <TextField
        placeholder="Search"
        type="search"
        variant="outlined"
        fullWidth
        size="small"
        onInput={(e) => {
          e.target.value == ""
            ? setUrl("/emails")
            : setUrl("/search?query=" + e.target.value);
        }}
      />
    </Box>
  );
}
