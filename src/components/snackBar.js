import React, { useState, useEffect, createContext } from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

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
        autoHideDuration={6000}
        message={message}
        key={message}
      >
      <SnackbarContent style={{
              backgroundColor:'#99b4e8',
              fontSize: '15px',
                 }}
                message={<span id="client-snackbar">{message}</span>}
              />
      </Snackbar>
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;
