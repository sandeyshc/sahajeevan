import React, { useState, useEffect, createContext } from "react";
import { Snackbar } from "@material-ui/core";

export const SnackBarContext = createContext();

export function SnackBarProvider({ children }) {
  const [message, setMessage] = useState("");

  return (
    <SnackBarContext.Provider value={setMessage}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!message}
        onClose={() => setMessage("")}
        autoHideDuration={2000}
        message={message}
        key={message}
      />
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;
