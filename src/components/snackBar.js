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
        autoHideDuration={60000}
        message={message}
        key={message}
      >
      <SnackbarContent style={{
              backgroundColor:'rgb(93, 99, 106)',
              fontSize: '15px',
              borderLeftStyle: 'solid',
              borderLeftWidth: 8,
              borderLeftColor: 'rgb(71, 204, 255)',
              minWidth: 100,
              borderRadius: 1,
              opacity: 0.8,
              minWidth:200,

                 }}
                message={<span id="client-snackbar">{message}</span>}
              />
      </Snackbar>
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;
